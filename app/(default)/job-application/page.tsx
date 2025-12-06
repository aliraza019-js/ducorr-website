'use client';

import { useState, FormEvent, useEffect } from 'react';
import HeroJobApplication from '@/components/job-application/hero-job-application';
import ConsentModal from '@/components/job-application/consent-modal';
import ProgressIndicator from '@/components/job-application/progress-indicator';
import Step1 from '@/components/job-application/step1';
import Step2 from '@/components/job-application/step2';
import Step3 from '@/components/job-application/step3';
import Step4 from '@/components/job-application/step4';
import Step5 from '@/components/job-application/step5';
import Step6 from '@/components/job-application/step6';
import Step7 from '@/components/job-application/step7';
import Step8 from '@/components/job-application/step8';
import Step9 from '@/components/job-application/step9';

const TOTAL_STEPS = 9;

export default function JobApplicationPage() {
  const [showConsentModal, setShowConsentModal] = useState(true);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    // Step 1
    email: '',
    // Step 2
    firstName: '',
    lastName: '',
    positionSought: '',
    positionSoughtOther: '',
    contactCellNo: '',
    contactEmail: '',
    presentAddress: '',
    legalStatus: [] as string[],
    availability: [] as string[],
    availabilityOther: '',
    drivingLicense: '',
    referralSource: [] as string[],
    referralSourceOther: '',
    highSchoolGraduationDate: '',
    universityName: '',
    universityDegree: '',
    universityGraduationDate: '',
    universityFinalGrade: '',
    // Step 4 - Job 1
    job1BusinessName: '',
    job1BusinessType: [] as string[],
    job1BusinessTypeOther: '',
    job1PositionTitle: '',
    job1ReportingTo: '',
    job1SupervisorRating: '',
    job1StartDate: '',
    job1EndDate: '',
    job1StartingSalary: '',
    job1FinalSalary: '',
    job1ReasonForLeaving: [] as string[],
    job1ReasonForLeavingOther: '',
    // Step 5 - Job 2
    job2BusinessName: '',
    job2BusinessType: [] as string[],
    job2BusinessTypeOther: '',
    job2PositionTitle: '',
    job2ReportingTo: '',
    job2SupervisorRating: '',
    job2StartDate: '',
    job2EndDate: '',
    job2StartingSalary: '',
    job2FinalSalary: '',
    job2ReasonForLeaving: [] as string[],
    job2ReasonForLeavingOther: '',
    // Step 6 - Job 3 (Optional)
    job3BusinessName: '',
    job3BusinessType: [] as string[],
    job3BusinessTypeOther: '',
    job3PositionTitle: '',
    job3ReportingTo: '',
    job3SupervisorRating: '',
    job3StartDate: '',
    job3EndDate: '',
    job3StartingSalary: '',
    job3FinalSalary: '',
    job3ReasonForLeaving: [] as string[],
    job3ReasonForLeavingOther: '',
    // Step 7 - Reference 1
    reference1FullName: '',
    reference1Position: '',
    reference1CompanyName: '',
    reference1ContactEmail: '',
    reference1ContactNumber: '',
    // Step 8 - Reference 2
    reference2FullName: '',
    reference2Position: '',
    reference2CompanyName: '',
    reference2ContactEmail: '',
    reference2ContactNumber: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showConsentModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showConsentModal]);

  const handleConsentAccept = () => {
    setConsentAccepted(true);
    setShowConsentModal(false);
  };

  const handleStep1Change = (email: string) => {
    setFormData((prev) => ({ ...prev, email }));
    if (errors.email) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.email;
        return newErrors;
      });
    }
  };

  const handleStep2Change = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (name: 'legalStatus' | 'availability' | 'referralSource' | 'job1BusinessType' | 'job1ReasonForLeaving' | 'job2BusinessType' | 'job2ReasonForLeaving' | 'job3BusinessType' | 'job3ReasonForLeaving', value: string) => {
    setFormData((prev) => {
      const currentArray = prev[name] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      return { ...prev, [name]: newArray };
    });
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleStep4Change = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      scrollToFirstError(errorKeys);
    }
    return errorKeys.length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.positionSought) {
      newErrors.positionSought = 'Position sought is required';
    } else if (formData.positionSought === 'Other' && !formData.positionSoughtOther.trim()) {
      newErrors.positionSoughtOther = 'Please specify the position';
    }
    
    if (!formData.contactCellNo.trim()) {
      newErrors.contactCellNo = 'Contact cell number is required';
    }
    
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = 'Contact email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid email address';
    }
    
    if (!formData.presentAddress.trim()) {
      newErrors.presentAddress = 'Present address is required';
    }
    
    if (formData.legalStatus.length === 0) {
      newErrors.legalStatus = 'Legal status is required';
    }
    
    if (formData.availability.length === 0) {
      newErrors.availability = 'Availability is required';
    } else if (formData.availability.includes('Other') && !formData.availabilityOther.trim()) {
      newErrors.availabilityOther = 'Please specify availability';
    }
    
    if (!formData.drivingLicense) {
      newErrors.drivingLicense = 'Driving license status is required';
    }
    
    if (formData.referralSource.length === 0) {
      newErrors.referralSource = 'Referral source is required';
    } else if (formData.referralSource.includes('Other') && !formData.referralSourceOther.trim()) {
      newErrors.referralSourceOther = 'Please specify referral source';
    }
    
    if (!formData.highSchoolGraduationDate) {
      newErrors.highSchoolGraduationDate = 'High school graduation date is required';
    }
    
    if (!formData.universityName.trim()) {
      newErrors.universityName = 'University name is required';
    }
    
    if (!formData.universityDegree.trim()) {
      newErrors.universityDegree = 'University degree is required';
    }
    
    if (!formData.universityGraduationDate) {
      newErrors.universityGraduationDate = 'University graduation date is required';
    }
    
    if (!formData.universityFinalGrade.trim()) {
      newErrors.universityFinalGrade = 'University final grade is required';
    }

    setErrors(newErrors);
    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      scrollToFirstError(errorKeys);
    }
    return errorKeys.length === 0;
  };

  const validateStep4 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.job1BusinessName.trim()) {
      newErrors.job1BusinessName = 'Business name is required';
    }
    
    if (formData.job1BusinessType.length === 0) {
      newErrors.job1BusinessType = 'Business type is required';
    } else if (formData.job1BusinessType.includes('Other') && !formData.job1BusinessTypeOther.trim()) {
      newErrors.job1BusinessTypeOther = 'Please specify business type';
    }
    
    if (!formData.job1PositionTitle.trim()) {
      newErrors.job1PositionTitle = 'Position title is required';
    }
    
    if (!formData.job1ReportingTo.trim()) {
      newErrors.job1ReportingTo = 'Reporting to is required';
    }
    
    if (!formData.job1SupervisorRating) {
      newErrors.job1SupervisorRating = 'Supervisor rating is required';
    }
    
    if (!formData.job1StartDate) {
      newErrors.job1StartDate = 'Start date is required';
    }
    
    if (!formData.job1EndDate) {
      newErrors.job1EndDate = 'End date is required';
    } else if (formData.job1StartDate && formData.job1EndDate && new Date(formData.job1EndDate) < new Date(formData.job1StartDate)) {
      newErrors.job1EndDate = 'End date must be after start date';
    }
    
    if (!formData.job1StartingSalary.trim()) {
      newErrors.job1StartingSalary = 'Starting salary is required';
    }
    
    if (!formData.job1FinalSalary.trim()) {
      newErrors.job1FinalSalary = 'Final salary is required';
    }
    
    if (formData.job1ReasonForLeaving.length === 0) {
      newErrors.job1ReasonForLeaving = 'Reason for leaving is required';
    } else if (formData.job1ReasonForLeaving.includes('Other') && !formData.job1ReasonForLeavingOther.trim()) {
      newErrors.job1ReasonForLeavingOther = 'Please specify reason for leaving';
    }

    setErrors(newErrors);
    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      scrollToFirstError(errorKeys);
    }
    return errorKeys.length === 0;
  };

  const validateStep5 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.job2BusinessName.trim()) {
      newErrors.job2BusinessName = 'Business name is required';
    }
    
    if (formData.job2BusinessType.length === 0) {
      newErrors.job2BusinessType = 'Business type is required';
    } else if (formData.job2BusinessType.includes('Other') && !formData.job2BusinessTypeOther.trim()) {
      newErrors.job2BusinessTypeOther = 'Please specify business type';
    }
    
    if (!formData.job2PositionTitle.trim()) {
      newErrors.job2PositionTitle = 'Position title is required';
    }
    
    if (!formData.job2ReportingTo.trim()) {
      newErrors.job2ReportingTo = 'Reporting to is required';
    }
    
    if (!formData.job2SupervisorRating) {
      newErrors.job2SupervisorRating = 'Supervisor rating is required';
    }
    
    if (!formData.job2StartDate) {
      newErrors.job2StartDate = 'Start date is required';
    }
    
    if (!formData.job2EndDate) {
      newErrors.job2EndDate = 'End date is required';
    } else if (formData.job2StartDate && formData.job2EndDate && new Date(formData.job2EndDate) < new Date(formData.job2StartDate)) {
      newErrors.job2EndDate = 'End date must be after start date';
    }
    
    if (!formData.job2StartingSalary.trim()) {
      newErrors.job2StartingSalary = 'Starting salary is required';
    }
    
    if (!formData.job2FinalSalary.trim()) {
      newErrors.job2FinalSalary = 'Final salary is required';
    }
    
    if (formData.job2ReasonForLeaving.length === 0) {
      newErrors.job2ReasonForLeaving = 'Reason for leaving is required';
    } else if (formData.job2ReasonForLeaving.includes('Other') && !formData.job2ReasonForLeavingOther.trim()) {
      newErrors.job2ReasonForLeavingOther = 'Please specify reason for leaving';
    }

    setErrors(newErrors);
    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      scrollToFirstError(errorKeys);
    }
    return errorKeys.length === 0;
  };

  const validateStep6 = () => {
    // Step 6 is optional - only validate if user has started filling fields
    // Check if at least one field has a value
    const hasAnyValue = 
      formData.job3BusinessName.trim() ||
      formData.job3BusinessType.length > 0 ||
      formData.job3PositionTitle.trim() ||
      formData.job3ReportingTo.trim() ||
      formData.job3SupervisorRating ||
      formData.job3StartDate ||
      formData.job3EndDate ||
      formData.job3StartingSalary.trim() ||
      formData.job3FinalSalary.trim() ||
      formData.job3ReasonForLeaving.length > 0;

    // If user hasn't filled anything, allow skipping
    if (!hasAnyValue) {
      setErrors({});
      return true;
    }

    // If user has started filling, validate the fields they've filled
    const newErrors: Record<string, string> = {};
    
    // Only validate if business name is filled
    if (formData.job3BusinessName.trim()) {
      if (formData.job3BusinessType.length === 0) {
        newErrors.job3BusinessType = 'Business type is required if filling job details';
      } else if (formData.job3BusinessType.includes('Other') && !formData.job3BusinessTypeOther.trim()) {
        newErrors.job3BusinessTypeOther = 'Please specify business type';
      }
      
      if (!formData.job3PositionTitle.trim()) {
        newErrors.job3PositionTitle = 'Position title is required if filling job details';
      }
      
      if (!formData.job3ReportingTo.trim()) {
        newErrors.job3ReportingTo = 'Reporting to is required if filling job details';
      }
      
      if (!formData.job3SupervisorRating) {
        newErrors.job3SupervisorRating = 'Supervisor rating is required if filling job details';
      }
      
      if (!formData.job3StartDate) {
        newErrors.job3StartDate = 'Start date is required if filling job details';
      }
      
      if (!formData.job3EndDate) {
        newErrors.job3EndDate = 'End date is required if filling job details';
      } else if (formData.job3StartDate && formData.job3EndDate && new Date(formData.job3EndDate) < new Date(formData.job3StartDate)) {
        newErrors.job3EndDate = 'End date must be after start date';
      }
      
      if (!formData.job3StartingSalary.trim()) {
        newErrors.job3StartingSalary = 'Starting salary is required if filling job details';
      }
      
      if (!formData.job3FinalSalary.trim()) {
        newErrors.job3FinalSalary = 'Final salary is required if filling job details';
      }
      
      if (formData.job3ReasonForLeaving.length === 0) {
        newErrors.job3ReasonForLeaving = 'Reason for leaving is required if filling job details';
      } else if (formData.job3ReasonForLeaving.includes('Other') && !formData.job3ReasonForLeavingOther.trim()) {
        newErrors.job3ReasonForLeavingOther = 'Please specify reason for leaving';
      }
    }

    setErrors(newErrors);
    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      scrollToFirstError(errorKeys);
    }
    return errorKeys.length === 0;
  };

  const validateStep7 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.reference1FullName.trim()) {
      newErrors.reference1FullName = 'Full name is required';
    }
    
    if (!formData.reference1Position.trim()) {
      newErrors.reference1Position = 'Position is required';
    }
    
    if (!formData.reference1CompanyName.trim()) {
      newErrors.reference1CompanyName = 'Company name is required';
    }
    
    if (!formData.reference1ContactEmail.trim()) {
      newErrors.reference1ContactEmail = 'Contact email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.reference1ContactEmail)) {
      newErrors.reference1ContactEmail = 'Please enter a valid email address';
    }
    
    if (!formData.reference1ContactNumber.trim()) {
      newErrors.reference1ContactNumber = 'Contact number is required';
    }

    setErrors(newErrors);
    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      scrollToFirstError(errorKeys);
    }
    return errorKeys.length === 0;
  };

  const validateStep8 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.reference2FullName.trim()) {
      newErrors.reference2FullName = 'Full name is required';
    }
    
    if (!formData.reference2Position.trim()) {
      newErrors.reference2Position = 'Position is required';
    }
    
    if (!formData.reference2CompanyName.trim()) {
      newErrors.reference2CompanyName = 'Company name is required';
    }
    
    if (!formData.reference2ContactEmail.trim()) {
      newErrors.reference2ContactEmail = 'Contact email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.reference2ContactEmail)) {
      newErrors.reference2ContactEmail = 'Please enter a valid email address';
    }
    
    if (!formData.reference2ContactNumber.trim()) {
      newErrors.reference2ContactNumber = 'Contact number is required';
    }

    setErrors(newErrors);
    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      scrollToFirstError(errorKeys);
    }
    return errorKeys.length === 0;
  };

  const validateStep9 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!agreementAccepted) {
      newErrors.agreement = 'You must agree to the Authorizations and At-Will Employment Agreement to submit';
    }

    setErrors(newErrors);
    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      scrollToFirstError(errorKeys);
    }
    return errorKeys.length === 0;
  };

  const handleSubmit = async (e?: FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (!validateStep9()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get Make.com webhook URL from environment or use default
      const webhookUrl = process.env.NEXT_PUBLIC_MAKE_JOB_APPLICATION_WEBHOOK_URL || 'https://hook.eu1.make.com/t964pk1ni9xq7278oxxdo8tp5s1squep';

      // Prepare data for Make.com webhook
      const webhookData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        agreementAccepted: agreementAccepted,
      };

      // Send to Make.com webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      if (response.ok) {
        setSubmitStatus('success');
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

  // Scroll to first error field
  const scrollToFirstError = (errorKeys: string[]) => {
    if (errorKeys.length === 0) return;
    
    // Wait for DOM to update with error messages and card animations
    setTimeout(() => {
      const firstErrorKey = errorKeys[0];
      
      // Try multiple selectors to find the field
      const selectors = [
        `[name="${firstErrorKey}"]`,
        `#${firstErrorKey}`,
        `input[name="${firstErrorKey}"]`,
        `select[name="${firstErrorKey}"]`,
        `textarea[name="${firstErrorKey}"]`,
        `input[type="checkbox"]`, // For agreement checkbox
        `input[type="radio"][name="${firstErrorKey}"]`, // For radio groups
      ];
      
      let errorField: HTMLElement | null = null;
      
      // For checkbox/radio group errors, find the first option or the label
      if (firstErrorKey.includes('legalStatus') || firstErrorKey.includes('availability') || 
          firstErrorKey.includes('referralSource') || firstErrorKey.includes('BusinessType') ||
          firstErrorKey.includes('ReasonForLeaving') || firstErrorKey === 'positionSought' ||
          firstErrorKey === 'drivingLicense' || firstErrorKey === 'supervisorRating') {
        // Find the first checkbox/radio in the group or nearby
        const groupField = document.querySelector(`input[type="checkbox"], input[type="radio"]`) as HTMLElement;
        if (groupField) {
          // Find the parent container that likely contains the label
          const container = groupField.closest('div.space-y-2, div.space-y-4') as HTMLElement;
          errorField = container || groupField;
        }
      }
      
      // If not found yet, try standard selectors
      if (!errorField) {
        for (const selector of selectors) {
          errorField = document.querySelector(selector) as HTMLElement;
          if (errorField) break;
        }
      }
      
      // If still not found, try to find by error message text
      if (!errorField) {
        const errorMessage = document.querySelector(`[class*="text-red-600"]`)?.parentElement;
        if (errorMessage) {
          errorField = errorMessage.querySelector('input, select, textarea') as HTMLElement || errorMessage as HTMLElement;
        }
      }
      
      if (errorField) {
        // Find the parent card container if it exists
        const cardContainer = errorField.closest('.bg-white.rounded-2xl') as HTMLElement;
        const targetElement = cardContainer || errorField;
        
        // Calculate offset to account for header/navigation
        const headerOffset = 120;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        // Scroll to the element
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Focus the field after scroll completes (only if it's a focusable element)
        setTimeout(() => {
          if (errorField && (errorField.tagName === 'INPUT' || errorField.tagName === 'SELECT' || errorField.tagName === 'TEXTAREA')) {
            errorField.focus();
            // Add a highlight effect
            errorField.classList.add('ring-2', 'ring-red-500', 'ring-offset-2');
            setTimeout(() => {
              errorField?.classList.remove('ring-2', 'ring-red-500', 'ring-offset-2');
            }, 2000);
          } else if (errorField) {
            // For non-focusable elements, add a visual highlight
            errorField.style.transition = 'all 0.3s ease';
            errorField.style.outline = '2px solid #ef4444';
            errorField.style.outlineOffset = '2px';
            setTimeout(() => {
              errorField!.style.outline = '';
              errorField!.style.outlineOffset = '';
            }, 2000);
          }
        }, 500);
      }
    }, 300);
  };

  const handleNext = (e?: FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    let isValid = false;
    
    if (currentStep === 1) {
      isValid = validateStep1();
      if (isValid) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      isValid = validateStep2();
      if (isValid) {
        setCurrentStep(3);
      }
    } else if (currentStep === 3) {
      // Step 3 is just instructions, no validation needed
      setCurrentStep(4);
    } else if (currentStep === 4) {
      isValid = validateStep4();
      if (isValid) {
        setCurrentStep(5);
      }
    } else if (currentStep === 5) {
      isValid = validateStep5();
      if (isValid) {
        setCurrentStep(6);
      }
    } else if (currentStep === 6) {
      // Step 6 is optional - always allow proceeding
      isValid = validateStep6();
      if (isValid) {
        setCurrentStep(7);
      }
    } else if (currentStep === 7) {
      isValid = validateStep7();
      if (isValid) {
        setCurrentStep(8);
      }
    } else if (currentStep === 8) {
      isValid = validateStep8();
      if (isValid) {
        setCurrentStep(9);
      }
    }
    // Step 9 uses handleSubmit instead of handleNext
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClearForm = () => {
    if (confirm('Are you sure you want to clear all form data? This action cannot be undone.')) {
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        positionSought: '',
        positionSoughtOther: '',
        contactCellNo: '',
        contactEmail: '',
        presentAddress: '',
        legalStatus: [],
        availability: [],
        availabilityOther: '',
        drivingLicense: '',
        referralSource: [],
        referralSourceOther: '',
        highSchoolGraduationDate: '',
        universityName: '',
        universityDegree: '',
        universityGraduationDate: '',
        universityFinalGrade: '',
        job1BusinessName: '',
        job1BusinessType: [],
        job1BusinessTypeOther: '',
        job1PositionTitle: '',
        job1ReportingTo: '',
        job1SupervisorRating: '',
        job1StartDate: '',
        job1EndDate: '',
        job1StartingSalary: '',
        job1FinalSalary: '',
        job1ReasonForLeaving: [],
        job1ReasonForLeavingOther: '',
        job2BusinessName: '',
        job2BusinessType: [],
        job2BusinessTypeOther: '',
        job2PositionTitle: '',
        job2ReportingTo: '',
        job2SupervisorRating: '',
        job2StartDate: '',
        job2EndDate: '',
        job2StartingSalary: '',
        job2FinalSalary: '',
        job2ReasonForLeaving: [],
        job2ReasonForLeavingOther: '',
        job3BusinessName: '',
        job3BusinessType: [],
        job3BusinessTypeOther: '',
        job3PositionTitle: '',
        job3ReportingTo: '',
        job3SupervisorRating: '',
        job3StartDate: '',
        job3EndDate: '',
        job3StartingSalary: '',
        job3FinalSalary: '',
        job3ReasonForLeaving: [],
        job3ReasonForLeavingOther: '',
        reference1FullName: '',
        reference1Position: '',
        reference1CompanyName: '',
        reference1ContactEmail: '',
        reference1ContactNumber: '',
        reference2FullName: '',
        reference2Position: '',
        reference2CompanyName: '',
        reference2ContactEmail: '',
        reference2ContactNumber: '',
      });
      setErrors({});
      setCurrentStep(1);
      setAgreementAccepted(false);
      setSubmitStatus('idle');
      setIsSubmitting(false);
    }
  };

  const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

  // Don't show form until consent is accepted
  if (!consentAccepted) {
    return (
      <>
        <HeroJobApplication />
        <ConsentModal isOpen={showConsentModal} onAccept={handleConsentAccept} />
      </>
    );
  }

  // Show full screen success message
  if (submitStatus === 'success') {
    return (
      <div className="fixed inset-0 z-50 bg-white flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 p-8 md:p-12 text-center">
            <div className="flex flex-col items-center gap-6">
              {/* Animated Checkmark Circle */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl animate-scale-in">
                  <svg 
                    className="w-14 h-14 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{
                      strokeDasharray: '24',
                      strokeDashoffset: '24',
                      animation: 'drawCheckmark 0.8s ease-out 0.4s forwards'
                    }}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3.5} 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></div>
              </div>
              
              {/* Success Text */}
              <div className="space-y-3 max-w-lg mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-green-800">Application Submitted Successfully!</h3>
                <p className="text-green-700 text-lg md:text-xl leading-relaxed">
                  Thank you for your interest in joining Ducorr. We have received your application and will review it carefully.
                </p>
                <p className="text-green-600 text-base md:text-lg font-semibold mt-4 px-4 py-2 bg-green-100 rounded-lg inline-block">
                  We'll get back to you after reviewing your job application.
                </p>
              </div>

              {/* Thumbs Up Icon */}
              <div className="mt-2 animate-bounce" style={{ animationDuration: '2s' }}>
                <svg className="w-16 h-16 md:w-20 md:h-20 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroJobApplication />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 md:py-12">
          {/* Progress Indicator */}
          <div className="mb-8 animate-fade-in">
            <ProgressIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          </div>

          {/* Step 1 Content */}
          {currentStep === 1 && (
            <div className="animate-slide-in">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 lg:p-10">
                <form onSubmit={handleNext}>
                  <Step1
                    email={formData.email}
                    onChange={handleStep1Change}
                    error={errors.email}
                  />
                </form>
              </div>
            </div>
          )}

          {/* Step 2 Content */}
          {currentStep === 2 && (
            <div className="animate-slide-in">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 lg:p-10">
                <form onSubmit={handleNext}>
                  <Step2
                    formData={{
                      firstName: formData.firstName,
                      lastName: formData.lastName,
                      positionSought: formData.positionSought,
                      positionSoughtOther: formData.positionSoughtOther,
                      contactCellNo: formData.contactCellNo,
                      contactEmail: formData.contactEmail,
                      presentAddress: formData.presentAddress,
                      legalStatus: formData.legalStatus,
                      availability: formData.availability,
                      availabilityOther: formData.availabilityOther,
                      drivingLicense: formData.drivingLicense,
                      referralSource: formData.referralSource,
                      referralSourceOther: formData.referralSourceOther,
                      highSchoolGraduationDate: formData.highSchoolGraduationDate,
                      universityName: formData.universityName,
                      universityDegree: formData.universityDegree,
                      universityGraduationDate: formData.universityGraduationDate,
                      universityFinalGrade: formData.universityFinalGrade,
                    }}
                    onChange={handleStep2Change}
                    onRadioChange={handleRadioChange}
                    onCheckboxChange={handleCheckboxChange}
                    errors={errors}
                  />
                </form>
              </div>
            </div>
          )}

          {/* Step 3 Content */}
          {currentStep === 3 && (
            <div className="animate-slide-in">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 lg:p-10">
                <Step3 />
              </div>
            </div>
          )}

          {/* Step 4 Content */}
          {currentStep === 4 && (
            <div className="animate-slide-in">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 lg:p-10">
                <form onSubmit={handleNext}>
                  <Step4
                    formData={{
                      job1BusinessName: formData.job1BusinessName,
                      job1BusinessType: formData.job1BusinessType,
                      job1BusinessTypeOther: formData.job1BusinessTypeOther,
                      job1PositionTitle: formData.job1PositionTitle,
                      job1ReportingTo: formData.job1ReportingTo,
                      job1SupervisorRating: formData.job1SupervisorRating,
                      job1StartDate: formData.job1StartDate,
                      job1EndDate: formData.job1EndDate,
                      job1StartingSalary: formData.job1StartingSalary,
                      job1FinalSalary: formData.job1FinalSalary,
                      job1ReasonForLeaving: formData.job1ReasonForLeaving,
                      job1ReasonForLeavingOther: formData.job1ReasonForLeavingOther,
                    }}
                    onChange={handleStep4Change}
                    onCheckboxChange={handleCheckboxChange}
                    onRadioChange={handleRadioChange}
                    errors={errors}
                  />
                </form>
              </div>
            </div>
          )}

          {/* Step 5 Content */}
          {currentStep === 5 && (
            <div className="animate-slide-in">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 lg:p-10">
                <form onSubmit={handleNext}>
                  <Step5
                    formData={{
                      job2BusinessName: formData.job2BusinessName,
                      job2BusinessType: formData.job2BusinessType,
                      job2BusinessTypeOther: formData.job2BusinessTypeOther,
                      job2PositionTitle: formData.job2PositionTitle,
                      job2ReportingTo: formData.job2ReportingTo,
                      job2SupervisorRating: formData.job2SupervisorRating,
                      job2StartDate: formData.job2StartDate,
                      job2EndDate: formData.job2EndDate,
                      job2StartingSalary: formData.job2StartingSalary,
                      job2FinalSalary: formData.job2FinalSalary,
                      job2ReasonForLeaving: formData.job2ReasonForLeaving,
                      job2ReasonForLeavingOther: formData.job2ReasonForLeavingOther,
                    }}
                    onChange={handleStep4Change}
                    onCheckboxChange={handleCheckboxChange}
                    onRadioChange={handleRadioChange}
                    errors={errors}
                  />
                </form>
              </div>
            </div>
          )}

          {/* Step 6 Content */}
          {currentStep === 6 && (
            <div className="animate-slide-in">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 lg:p-10">
                <form onSubmit={handleNext}>
                  <Step6
                    formData={{
                      job3BusinessName: formData.job3BusinessName,
                      job3BusinessType: formData.job3BusinessType,
                      job3BusinessTypeOther: formData.job3BusinessTypeOther,
                      job3PositionTitle: formData.job3PositionTitle,
                      job3ReportingTo: formData.job3ReportingTo,
                      job3SupervisorRating: formData.job3SupervisorRating,
                      job3StartDate: formData.job3StartDate,
                      job3EndDate: formData.job3EndDate,
                      job3StartingSalary: formData.job3StartingSalary,
                      job3FinalSalary: formData.job3FinalSalary,
                      job3ReasonForLeaving: formData.job3ReasonForLeaving,
                      job3ReasonForLeavingOther: formData.job3ReasonForLeavingOther,
                    }}
                    onChange={handleStep4Change}
                    onCheckboxChange={handleCheckboxChange}
                    onRadioChange={handleRadioChange}
                    errors={errors}
                  />
                </form>
              </div>
            </div>
          )}

          {/* Step 7 Content */}
          {currentStep === 7 && (
            <div className="animate-slide-in">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 lg:p-10">
                <form onSubmit={handleNext}>
                  <Step7
                    formData={{
                      reference1FullName: formData.reference1FullName,
                      reference1Position: formData.reference1Position,
                      reference1CompanyName: formData.reference1CompanyName,
                      reference1ContactEmail: formData.reference1ContactEmail,
                      reference1ContactNumber: formData.reference1ContactNumber,
                    }}
                    onChange={handleStep4Change}
                    errors={errors}
                  />
                </form>
              </div>
            </div>
          )}

          {/* Step 8 Content */}
          {currentStep === 8 && (
            <div className="animate-slide-in">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 lg:p-10">
                <form onSubmit={handleNext}>
                  <Step8
                    formData={{
                      reference2FullName: formData.reference2FullName,
                      reference2Position: formData.reference2Position,
                      reference2CompanyName: formData.reference2CompanyName,
                      reference2ContactEmail: formData.reference2ContactEmail,
                      reference2ContactNumber: formData.reference2ContactNumber,
                    }}
                    onChange={handleStep4Change}
                    errors={errors}
                  />
                </form>
              </div>
            </div>
          )}

          {/* Step 9 Content */}
          {currentStep === 9 && (
            <div className="animate-slide-in">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 lg:p-10">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  Authorizations and At-Will Employment Agreement
                </h1>
              
                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 rounded-lg bg-red-50 border-2 border-red-200 p-4 animate-shake">
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

                <form onSubmit={handleSubmit}>
                  <Step9
                    isAgreed={agreementAccepted}
                    onAgreementChange={setAgreementAccepted}
                    error={errors.agreement}
                  />
                </form>
              </div>
            </div>
          )}

          {/* Navigation Bar */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              {/* Back/Next Buttons - Left */}
              <div className="flex items-center gap-3">
                {currentStep > 1 && (
                  <button
                    onClick={handleBack}
                    className="px-6 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </span>
                  </button>
                )}
                {currentStep === 6 && (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-white border-2 border-gray-300 text-gray-600 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Skip Job 3
                  </button>
                )}
                {currentStep === 9 ? (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-[#d9823f] to-[#b86a2f] text-white rounded-lg font-semibold shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 animate-pulse-on-hover"
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
                      'Submit'
                    )}
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 bg-gradient-to-r from-[#d9823f] to-[#b86a2f] text-white rounded-lg font-semibold shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 animate-pulse-on-hover"
                    disabled={currentStep === TOTAL_STEPS}
                  >
                    <span className="inline-flex items-center gap-2">
                      Next
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>

              {/* Progress Bar - Center */}
              <div className="flex items-center gap-4 flex-1 justify-center max-w-md mx-4">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#d9823f] to-[#b86a2f] transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  Page {currentStep} of {TOTAL_STEPS}
                </span>
              </div>

              {/* Clear Form Link - Right */}
              <button
                type="button"
                onClick={handleClearForm}
                className="text-sm text-gray-600 hover:text-gray-900 underline whitespace-nowrap"
              >
                Clear form
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
