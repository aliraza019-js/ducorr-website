'use client';

import { useState, useEffect, FormEvent } from 'react';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobDepartment: string;
  jobLocation: string;
  jobType: string;
}

export default function JobApplicationModal({
  isOpen,
  onClose,
  jobTitle,
  jobDepartment,
  jobLocation,
  jobType,
}: JobApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null,
  });

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        coverLetter: '',
        resume: null,
      });
      setErrors({});
      setSubmitStatus('idle');
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Cover letter is required';
    } else if (formData.coverLetter.trim().length < 50) {
      newErrors.coverLetter = 'Cover letter must be at least 50 characters';
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    } else if (formData.resume.size > 5 * 1024 * 1024) {
      newErrors.resume = 'Resume file size must be less than 5MB';
    } else if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(formData.resume.type)) {
      newErrors.resume = 'Resume must be a PDF or Word document';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
    if (errors.resume) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.resume;
        return newErrors;
      });
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1]; // Remove data:type;base64, prefix
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get Make.com webhook URL from environment or use default
      const webhookUrl = process.env.NEXT_PUBLIC_MAKE_JOB_APPLICATION_WEBHOOK_URL || 'https://hook.eu1.make.com/t964pk1ni9xq7278oxxdo8tp5s1squep';

      // Convert resume file to base64 if present
      let resumeBase64 = '';
      let resumeFileName = '';
      let resumeContentType = '';
      
      if (formData.resume) {
        resumeBase64 = await fileToBase64(formData.resume);
        resumeFileName = formData.resume.name;
        resumeContentType = formData.resume.type;
      }

      // Prepare data for Make.com webhook
      const webhookData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        linkedin: formData.linkedin || null,
        portfolio: formData.portfolio || null,
        coverLetter: formData.coverLetter,
        jobTitle: jobTitle,
        jobDepartment: jobDepartment,
        jobLocation: jobLocation,
        jobType: jobType,
        resume: resumeBase64 ? {
          filename: resumeFileName,
          content: resumeBase64,
          contentType: resumeContentType,
        } : null,
        submittedAt: new Date().toISOString(),
      };

      // Send directly to Make.com webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Auto-close after 3 seconds
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        const errorText = await response.text();
        console.error('Make.com webhook error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText,
        });
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl transform transition-all">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#d9823f] to-[#b86a2f] px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Apply for Position</h2>
              <p className="text-white/90 text-sm mt-1">{jobTitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/20 rounded-lg"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Job Details Card */}
          <div className="mb-6 rounded-xl bg-gradient-to-br from-[#d9823f]/10 to-[#d9823f]/5 p-4 border border-[#d9823f]/20">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#d9823f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-gray-700 font-medium">Department:</span>
                <span className="text-gray-900">{jobDepartment}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#d9823f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700 font-medium">Location:</span>
                <span className="text-gray-900">{jobLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#d9823f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
                <span className="text-gray-700 font-medium">Type:</span>
                <span className="text-gray-900">{jobType}</span>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-green-800 font-semibold">Application Submitted Successfully!</h3>
                  <p className="text-green-700 text-sm mt-1">Thank you for your interest. We'll review your application and get back to you soon.</p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-red-800 font-semibold">Submission Failed</h3>
                  <p className="text-red-700 text-sm mt-1">There was an error submitting your application. Please try again.</p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                    errors.firstName
                      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                      : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                  }`}
                  placeholder="John"
                  disabled={isSubmitting}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                    errors.lastName
                      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                      : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                  }`}
                  placeholder="Doe"
                  disabled={isSubmitting}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                  errors.email
                    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                }`}
                placeholder="john.doe@email.com"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                  errors.phone
                    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                }`}
                placeholder="+1 (555) 123-4567"
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* LinkedIn & Portfolio */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors"
                  placeholder="https://linkedin.com/in/yourprofile"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio Website
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 transition-colors"
                  placeholder="https://yourportfolio.com"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                Resume/CV <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="resume"
                  className={`flex items-center justify-center gap-2 w-full rounded-lg border-2 border-dashed px-4 py-6 cursor-pointer transition-all ${
                    errors.resume
                      ? 'border-red-300 bg-red-50 hover:bg-red-100'
                      : formData.resume
                      ? 'border-[#d9823f] bg-[#d9823f]/5 hover:bg-[#d9823f]/10'
                      : 'border-gray-300 hover:border-[#d9823f] hover:bg-gray-50'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <svg className="w-6 h-6 text-[#d9823f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-sm text-gray-700">
                    {formData.resume ? (
                      <span className="font-medium text-[#d9823f]">{formData.resume.name}</span>
                    ) : (
                      <>Click to upload or drag and drop (PDF, DOC, DOCX - Max 5MB)</>
                    )}
                  </span>
                </label>
              </div>
              {errors.resume && (
                <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
              )}
            </div>

            {/* Cover Letter */}
            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter <span className="text-red-500">*</span>
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={6}
                className={`w-full rounded-lg border px-4 py-3 transition-colors resize-none ${
                  errors.coverLetter
                    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                }`}
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                disabled={isSubmitting}
              />
              <div className="mt-1 flex justify-between">
                {errors.coverLetter && (
                  <p className="text-sm text-red-600">{errors.coverLetter}</p>
                )}
                <p className="text-sm text-gray-500 ml-auto">
                  {formData.coverLetter.length} / 50 minimum characters
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 rounded-lg bg-gradient-to-r from-[#d9823f] to-[#b86a2f] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

