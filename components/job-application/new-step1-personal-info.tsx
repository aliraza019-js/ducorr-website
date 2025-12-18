'use client';

interface PersonalInfoFormData {
  email: string;
  firstName: string;
  lastName: string;
  positionSought: string;
  positionSoughtOther: string;
  contactCellNo: string;
  presentAddress: string;
  legalStatus: string;
  availability: string;
  availabilityOther: string;
  drivingLicense: string;
  referralSource: string;
  referralSourceOther: string;
  highSchoolGraduationDate: string;
  universityName: string;
  universityDegree: string;
  universityGraduationDate: string;
  universityFinalGrade: string;
}

interface NewStep1Props {
  formData: PersonalInfoFormData;
  onChange: (field: keyof PersonalInfoFormData, value: any) => void;
  onRadioChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const POSITION_OPTIONS = [
  'CP Supervisor',
  'Design Engineer',
  'AP/AR Accountant',
  'Draftsman',
  'Human Resource Officer',
  'Supply Chain Officer',
  'Sales Engineer',
  'Sales Manager',
  'CP Project Engineer',
  'Other',
];

const LEGAL_STATUS_OPTIONS = [
  'Visit visa',
  'Employment visa & working at this time',
  'Employment visa & not working at this time',
];

const AVAILABILITY_OPTIONS = [
  'Immediate',
  'In 30 days from an offer',
  'Other',
];

const REFERRAL_OPTIONS = [
  'Friend',
  'Website',
  'Job Ad',
  'Other',
];

const DRIVING_LICENSE_OPTIONS = [
  'Yes',
  'No',
];

export default function NewStep1PersonalInfo({
  formData,
  onChange,
  onRadioChange,
  errors,
}: NewStep1Props) {
  return (
    <div className="space-y-8">
      {/* Required Field Indicator */}
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <span>* Indicates required question</span>
      </div>

      {/* Email Input */}
      <div className="form-field-wrapper">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2.5">
          Email <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            className={`w-full rounded-lg border pl-10 pr-4 py-3 transition-all duration-200 ${
              errors.email
                ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
            }`}
            placeholder="your.email@example.com"
          />
        </div>
        {errors.email && (
          <div className="mt-2 flex items-center gap-2 text-sm text-red-600 animate-shake">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errors.email}</span>
          </div>
        )}
      </div>

      {/* Job Application Header */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-5 py-3 rounded-lg border border-gray-200">
        <h2 className="text-base font-semibold text-gray-800 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#d9823f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Job Application
        </h2>
      </div>

      {/* Personal Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 pb-2 border-b border-gray-200">
          <svg className="w-5 h-5 text-[#d9823f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Personal Information
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="form-field-wrapper">
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2.5">
              First Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => onChange('firstName', e.target.value)}
                className={`w-full rounded-lg border pl-10 pr-4 py-3 transition-all duration-200 ${
                  errors.firstName
                    ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
                }`}
                placeholder="John"
              />
            </div>
            {errors.firstName && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{errors.firstName}</span>
              </div>
            )}
          </div>
          <div className="form-field-wrapper">
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2.5">
              Last Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => onChange('lastName', e.target.value)}
                className={`w-full rounded-lg border pl-10 pr-4 py-3 transition-all duration-200 ${
                  errors.lastName
                    ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
                }`}
                placeholder="Doe"
              />
            </div>
            {errors.lastName && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{errors.lastName}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Position Sought */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-900">
          Position Sought <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {POSITION_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#d9823f]/50 hover:bg-gray-50/50 transition-all duration-200">
              <input
                type="radio"
                id={`position-${option}`}
                name="positionSought"
                value={option}
                checked={formData.positionSought === option}
                onChange={(e) => onRadioChange('positionSought', e.target.value)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 cursor-pointer"
              />
              <label htmlFor={`position-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
          {formData.positionSought === 'Other' && (
            <div className="ml-7 mt-2">
              <input
                type="text"
                value={formData.positionSoughtOther}
                onChange={(e) => onChange('positionSoughtOther', e.target.value)}
                className={`w-full rounded-lg border px-4 py-2 transition-colors ${
                  errors.positionSoughtOther
                    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                }`}
                placeholder="Your answer"
              />
              {errors.positionSoughtOther && (
                <p className="mt-1 text-sm text-red-600">{errors.positionSoughtOther}</p>
              )}
            </div>
          )}
        </div>
        {errors.positionSought && (
          <p className="text-sm text-red-600">{errors.positionSought}</p>
        )}
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 pb-2 border-b border-gray-200">
          <svg className="w-5 h-5 text-[#d9823f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Contact Information
        </h3>
        <div className="space-y-4">
          <div className="form-field-wrapper">
            <label htmlFor="contactCellNo" className="block text-sm font-semibold text-gray-900 mb-2.5">
              Contact Cell No. <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <input
                type="tel"
                id="contactCellNo"
                name="contactCellNo"
                value={formData.contactCellNo}
                onChange={(e) => onChange('contactCellNo', e.target.value)}
                className={`w-full rounded-lg border pl-10 pr-4 py-3 transition-all duration-200 ${
                  errors.contactCellNo
                    ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
                }`}
                placeholder="+971 XX XXX XXXX"
              />
            </div>
            {errors.contactCellNo && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{errors.contactCellNo}</span>
              </div>
            )}
          </div>
          <div className="form-field-wrapper">
            <label htmlFor="presentAddress" className="block text-sm font-semibold text-gray-900 mb-2.5">
              Present Address - City & Country <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input
                type="text"
                id="presentAddress"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={(e) => onChange('presentAddress', e.target.value)}
                className={`w-full rounded-lg border pl-10 pr-4 py-3 transition-all duration-200 ${
                  errors.presentAddress
                    ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
                }`}
                placeholder="Dubai, UAE"
              />
            </div>
            {errors.presentAddress && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{errors.presentAddress}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Current Legal Status in UAE */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-900">
          Current legal status in UAE <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {LEGAL_STATUS_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#d9823f]/50 hover:bg-gray-50/50 transition-all duration-200">
              <input
                type="radio"
                id={`legal-${option}`}
                name="legalStatus"
                value={option}
                checked={formData.legalStatus === option}
                onChange={(e) => onRadioChange('legalStatus', e.target.value)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 cursor-pointer"
              />
              <label htmlFor={`legal-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
        {errors.legalStatus && (
          <p className="text-sm text-red-600">{errors.legalStatus}</p>
        )}
      </div>

      {/* Availability */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-900">
          Availability <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {AVAILABILITY_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#d9823f]/50 hover:bg-gray-50/50 transition-all duration-200">
              <input
                type="radio"
                id={`availability-${option}`}
                name="availability"
                value={option}
                checked={formData.availability === option}
                onChange={(e) => onRadioChange('availability', e.target.value)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 cursor-pointer"
              />
              <label htmlFor={`availability-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
          {formData.availability === 'Other' && (
            <div className="ml-7 mt-2">
              <input
                type="text"
                value={formData.availabilityOther}
                onChange={(e) => onChange('availabilityOther', e.target.value)}
                className={`w-full rounded-lg border px-4 py-2 transition-colors ${
                  errors.availabilityOther
                    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                }`}
                placeholder="Your answer"
              />
              {errors.availabilityOther && (
                <p className="mt-1 text-sm text-red-600">{errors.availabilityOther}</p>
              )}
            </div>
          )}
        </div>
        {errors.availability && (
          <p className="text-sm text-red-600">{errors.availability}</p>
        )}
      </div>

      {/* UAE Driving License */}
      <div className="space-y-4">
        <label htmlFor="drivingLicense" className="block text-sm font-medium text-gray-900">
          Do you have valid UAE driving license <span className="text-red-500">*</span>
        </label>
        <select
          id="drivingLicense"
          name="drivingLicense"
          value={formData.drivingLicense}
          onChange={(e) => onChange('drivingLicense', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-colors ${
            errors.drivingLicense
              ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
          }`}
        >
          <option value="">Choose</option>
          {DRIVING_LICENSE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.drivingLicense && (
          <p className="mt-1 text-sm text-red-600">{errors.drivingLicense}</p>
        )}
      </div>

      {/* Referral Source */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-900">
          How were you referred to Ducorr <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {REFERRAL_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#d9823f]/50 hover:bg-gray-50/50 transition-all duration-200">
              <input
                type="radio"
                id={`referral-${option}`}
                name="referralSource"
                value={option}
                checked={formData.referralSource === option}
                onChange={(e) => onRadioChange('referralSource', e.target.value)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 cursor-pointer"
              />
              <label htmlFor={`referral-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
          {formData.referralSource === 'Other' && (
            <div className="ml-7 mt-2">
              <input
                type="text"
                value={formData.referralSourceOther}
                onChange={(e) => onChange('referralSourceOther', e.target.value)}
                className={`w-full rounded-lg border px-4 py-2 transition-colors ${
                  errors.referralSourceOther
                    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                }`}
                placeholder="Your answer"
              />
              {errors.referralSourceOther && (
                <p className="mt-1 text-sm text-red-600">{errors.referralSourceOther}</p>
              )}
            </div>
          )}
        </div>
        {errors.referralSource && (
          <p className="text-sm text-red-600">{errors.referralSource}</p>
        )}
      </div>

      {/* Educational Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Educational Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="highSchoolGraduationDate" className="block text-sm font-medium text-gray-900 mb-2">
              High School Graduation Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="highSchoolGraduationDate"
              name="highSchoolGraduationDate"
              value={formData.highSchoolGraduationDate}
              onChange={(e) => onChange('highSchoolGraduationDate', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.highSchoolGraduationDate
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
            />
            {errors.highSchoolGraduationDate && (
              <p className="mt-1 text-sm text-red-600">{errors.highSchoolGraduationDate}</p>
            )}
          </div>
          <div>
            <label htmlFor="universityName" className="block text-sm font-medium text-gray-900 mb-2">
              University Name & Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="universityName"
              name="universityName"
              value={formData.universityName}
              onChange={(e) => onChange('universityName', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.universityName
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.universityName && (
              <p className="mt-1 text-sm text-red-600">{errors.universityName}</p>
            )}
          </div>
          <div>
            <label htmlFor="universityDegree" className="block text-sm font-medium text-gray-900 mb-2">
              University Degree [Major] <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="universityDegree"
              name="universityDegree"
              value={formData.universityDegree}
              onChange={(e) => onChange('universityDegree', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.universityDegree
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.universityDegree && (
              <p className="mt-1 text-sm text-red-600">{errors.universityDegree}</p>
            )}
          </div>
          <div>
            <label htmlFor="universityGraduationDate" className="block text-sm font-medium text-gray-900 mb-2">
              University Graduation Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="universityGraduationDate"
              name="universityGraduationDate"
              value={formData.universityGraduationDate}
              onChange={(e) => onChange('universityGraduationDate', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.universityGraduationDate
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
            />
            {errors.universityGraduationDate && (
              <p className="mt-1 text-sm text-red-600">{errors.universityGraduationDate}</p>
            )}
          </div>
          <div>
            <label htmlFor="universityFinalGrade" className="block text-sm font-medium text-gray-900 mb-2">
              University Final Grade [% or GPA] <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="universityFinalGrade"
              name="universityFinalGrade"
              value={formData.universityFinalGrade}
              onChange={(e) => onChange('universityFinalGrade', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.universityFinalGrade
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.universityFinalGrade && (
              <p className="mt-1 text-sm text-red-600">{errors.universityFinalGrade}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

