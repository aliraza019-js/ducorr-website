'use client';

interface Step5FormData {
  job2BusinessName: string;
  job2BusinessType: string[];
  job2BusinessTypeOther: string;
  job2PositionTitle: string;
  job2ReportingTo: string;
  job2SupervisorRating: string;
  job2StartDate: string;
  job2EndDate: string;
  job2StartingSalary: string;
  job2FinalSalary: string;
  job2ReasonForLeaving: string[];
  job2ReasonForLeavingOther: string;
}

interface Step5Props {
  formData: Step5FormData;
  onChange: (field: keyof Step5FormData, value: any) => void;
  onCheckboxChange: (field: 'job2BusinessType' | 'job2ReasonForLeaving', value: string) => void;
  onRadioChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const BUSINESS_TYPE_OPTIONS = [
  'Engineering or Services',
  'Trading',
  'Non Technical Services',
  'Other',
];

const SUPERVISOR_RATING_OPTIONS = [
  'Outstanding',
  'Fair',
  'Not good',
];

const REASON_FOR_LEAVING_OPTIONS = [
  'Resigned',
  'Terminated',
  'End of Employment',
  'Other',
];

export default function Step5({
  formData,
  onChange,
  onCheckboxChange,
  onRadioChange,
  errors,
}: Step5Props) {
  return (
    <div className="space-y-8">
      {/* Required Field Indicator */}
      <p className="text-sm text-red-600">* Indicates required question</p>

      {/* Job 2 Header */}
      <div className="bg-gray-200 px-4 py-2 rounded-lg">
        <h2 className="text-sm font-medium text-gray-700">Job 2 - Describe Your Job</h2>
      </div>

      {/* Name of Business */}
      <div>
        <label htmlFor="job2BusinessName" className="block text-sm font-medium text-gray-900 mb-2">
          Name of Business <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="job2BusinessName"
          name="job2BusinessName"
          value={formData.job2BusinessName}
          onChange={(e) => onChange('job2BusinessName', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-colors ${
            errors.job2BusinessName
              ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
          }`}
          placeholder="Your answer"
        />
        {errors.job2BusinessName && (
          <p className="mt-1 text-sm text-red-600">{errors.job2BusinessName}</p>
        )}
      </div>

      {/* Type of Business */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-900">
          Type of Business <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {BUSINESS_TYPE_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3">
              <input
                type="checkbox"
                id={`job2-businessType-${option}`}
                checked={formData.job2BusinessType.includes(option)}
                onChange={() => onCheckboxChange('job2BusinessType', option)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 rounded"
              />
              <label htmlFor={`job2-businessType-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
          {formData.job2BusinessType.includes('Other') && (
            <div className="ml-7 mt-2">
              <input
                type="text"
                value={formData.job2BusinessTypeOther}
                onChange={(e) => onChange('job2BusinessTypeOther', e.target.value)}
                className={`w-full rounded-lg border px-4 py-2 transition-colors ${
                  errors.job2BusinessTypeOther
                    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                }`}
                placeholder="Your answer"
              />
              {errors.job2BusinessTypeOther && (
                <p className="mt-1 text-sm text-red-600">{errors.job2BusinessTypeOther}</p>
              )}
            </div>
          )}
        </div>
        {errors.job2BusinessType && (
          <p className="text-sm text-red-600">{errors.job2BusinessType}</p>
        )}
      </div>

      {/* Position Title Held */}
      <div>
        <label htmlFor="job2PositionTitle" className="block text-sm font-medium text-gray-900 mb-2">
          Position Title Held <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="job2PositionTitle"
          name="job2PositionTitle"
          value={formData.job2PositionTitle}
          onChange={(e) => onChange('job2PositionTitle', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-colors ${
            errors.job2PositionTitle
              ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
          }`}
          placeholder="Your answer"
        />
        {errors.job2PositionTitle && (
          <p className="mt-1 text-sm text-red-600">{errors.job2PositionTitle}</p>
        )}
      </div>

      {/* Reporting to */}
      <div>
        <label htmlFor="job2ReportingTo" className="block text-sm font-medium text-gray-900 mb-2">
          Reporting to [Title & Name] <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="job2ReportingTo"
          name="job2ReportingTo"
          value={formData.job2ReportingTo}
          onChange={(e) => onChange('job2ReportingTo', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-colors ${
            errors.job2ReportingTo
              ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
          }`}
          placeholder="Your answer"
        />
        {errors.job2ReportingTo && (
          <p className="mt-1 text-sm text-red-600">{errors.job2ReportingTo}</p>
        )}
      </div>

      {/* Rate your Supervisor */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-900">
          Rate your Supervisor <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {SUPERVISOR_RATING_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3">
              <input
                type="radio"
                id={`job2-supervisor-${option}`}
                name="job2SupervisorRating"
                value={option}
                checked={formData.job2SupervisorRating === option}
                onChange={(e) => onRadioChange('job2SupervisorRating', e.target.value)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300"
              />
              <label htmlFor={`job2-supervisor-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
        {errors.job2SupervisorRating && (
          <p className="text-sm text-red-600">{errors.job2SupervisorRating}</p>
        )}
      </div>

      {/* Start Date and End Date */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="job2StartDate" className="block text-sm font-medium text-gray-900 mb-2">
            Start Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="job2StartDate"
            name="job2StartDate"
            value={formData.job2StartDate}
            onChange={(e) => onChange('job2StartDate', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-colors ${
              errors.job2StartDate
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
            }`}
          />
          {errors.job2StartDate && (
            <p className="mt-1 text-sm text-red-600">{errors.job2StartDate}</p>
          )}
        </div>
        <div>
          <label htmlFor="job2EndDate" className="block text-sm font-medium text-gray-900 mb-2">
            End Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="job2EndDate"
            name="job2EndDate"
            value={formData.job2EndDate}
            onChange={(e) => onChange('job2EndDate', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-colors ${
              errors.job2EndDate
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
            }`}
          />
          {errors.job2EndDate && (
            <p className="mt-1 text-sm text-red-600">{errors.job2EndDate}</p>
          )}
        </div>
      </div>

      {/* Starting Salary and Final Salary */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="job2StartingSalary" className="block text-sm font-medium text-gray-900 mb-2">
            Starting Salary [AED] <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="job2StartingSalary"
            name="job2StartingSalary"
            value={formData.job2StartingSalary}
            onChange={(e) => onChange('job2StartingSalary', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-colors ${
              errors.job2StartingSalary
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
            }`}
            placeholder="Your answer"
          />
          {errors.job2StartingSalary && (
            <p className="mt-1 text-sm text-red-600">{errors.job2StartingSalary}</p>
          )}
        </div>
        <div>
          <label htmlFor="job2FinalSalary" className="block text-sm font-medium text-gray-900 mb-2">
            Final Salary [AED] <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="job2FinalSalary"
            name="job2FinalSalary"
            value={formData.job2FinalSalary}
            onChange={(e) => onChange('job2FinalSalary', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-colors ${
              errors.job2FinalSalary
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
            }`}
            placeholder="Your answer"
          />
          {errors.job2FinalSalary && (
            <p className="mt-1 text-sm text-red-600">{errors.job2FinalSalary}</p>
          )}
        </div>
      </div>

      {/* Reason for Leaving */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-900">
          Reason for Leaving <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {REASON_FOR_LEAVING_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3">
              <input
                type="checkbox"
                id={`job2-reason-${option}`}
                checked={formData.job2ReasonForLeaving.includes(option)}
                onChange={() => onCheckboxChange('job2ReasonForLeaving', option)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 rounded"
              />
              <label htmlFor={`job2-reason-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
          {formData.job2ReasonForLeaving.includes('Other') && (
            <div className="ml-7 mt-2">
              <input
                type="text"
                value={formData.job2ReasonForLeavingOther}
                onChange={(e) => onChange('job2ReasonForLeavingOther', e.target.value)}
                className={`w-full rounded-lg border px-4 py-2 transition-colors ${
                  errors.job2ReasonForLeavingOther
                    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                }`}
                placeholder="Your answer"
              />
              {errors.job2ReasonForLeavingOther && (
                <p className="mt-1 text-sm text-red-600">{errors.job2ReasonForLeavingOther}</p>
              )}
            </div>
          )}
        </div>
        {errors.job2ReasonForLeaving && (
          <p className="text-sm text-red-600">{errors.job2ReasonForLeaving}</p>
        )}
      </div>
    </div>
  );
}

