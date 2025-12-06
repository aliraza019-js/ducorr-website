'use client';

interface Step6FormData {
  job3BusinessName: string;
  job3BusinessType: string[];
  job3BusinessTypeOther: string;
  job3PositionTitle: string;
  job3ReportingTo: string;
  job3SupervisorRating: string;
  job3StartDate: string;
  job3EndDate: string;
  job3StartingSalary: string;
  job3FinalSalary: string;
  job3ReasonForLeaving: string[];
  job3ReasonForLeavingOther: string;
}

interface Step6Props {
  formData: Step6FormData;
  onChange: (field: keyof Step6FormData, value: any) => void;
  onCheckboxChange: (field: 'job3BusinessType' | 'job3ReasonForLeaving', value: string) => void;
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

export default function Step6({
  formData,
  onChange,
  onCheckboxChange,
  onRadioChange,
  errors,
}: Step6Props) {
  return (
    <div className="space-y-8">
      {/* Optional Field Indicator */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This step is optional. You can skip Job 3 if you don't have a third job to report.
        </p>
      </div>

      {/* Job 3 Header */}
      <div className="bg-gray-200 px-4 py-2 rounded-lg">
        <h2 className="text-sm font-medium text-gray-700">Job 3 - Describe Your Job (Optional)</h2>
      </div>

      {/* Name of Business */}
      <div>
        <label htmlFor="job3BusinessName" className="block text-sm font-medium text-gray-900 mb-2">
          Name of Business
        </label>
        <input
          type="text"
          id="job3BusinessName"
          name="job3BusinessName"
          value={formData.job3BusinessName}
          onChange={(e) => onChange('job3BusinessName', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-colors ${
            errors.job3BusinessName
              ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
          }`}
          placeholder="Your answer"
        />
        {errors.job3BusinessName && (
          <p className="mt-1 text-sm text-red-600">{errors.job3BusinessName}</p>
        )}
      </div>

      {/* Type of Business */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-900">
          Type of Business
        </label>
        <div className="space-y-2">
          {BUSINESS_TYPE_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3">
              <input
                type="checkbox"
                id={`job3-businessType-${option}`}
                checked={formData.job3BusinessType.includes(option)}
                onChange={() => onCheckboxChange('job3BusinessType', option)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 rounded"
              />
              <label htmlFor={`job3-businessType-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
          {formData.job3BusinessType.includes('Other') && (
            <div className="ml-7 mt-2">
              <input
                type="text"
                value={formData.job3BusinessTypeOther}
                onChange={(e) => onChange('job3BusinessTypeOther', e.target.value)}
                className={`w-full rounded-lg border px-4 py-2 transition-colors ${
                  errors.job3BusinessTypeOther
                    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                }`}
                placeholder="Your answer"
              />
              {errors.job3BusinessTypeOther && (
                <p className="mt-1 text-sm text-red-600">{errors.job3BusinessTypeOther}</p>
              )}
            </div>
          )}
        </div>
        {errors.job3BusinessType && (
          <p className="text-sm text-red-600">{errors.job3BusinessType}</p>
        )}
      </div>

      {/* Position Title Held */}
      <div>
        <label htmlFor="job3PositionTitle" className="block text-sm font-medium text-gray-900 mb-2">
          Position Title Held
        </label>
        <input
          type="text"
          id="job3PositionTitle"
          name="job3PositionTitle"
          value={formData.job3PositionTitle}
          onChange={(e) => onChange('job3PositionTitle', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-colors ${
            errors.job3PositionTitle
              ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
          }`}
          placeholder="Your answer"
        />
        {errors.job3PositionTitle && (
          <p className="mt-1 text-sm text-red-600">{errors.job3PositionTitle}</p>
        )}
      </div>

      {/* Reporting to */}
      <div>
        <label htmlFor="job3ReportingTo" className="block text-sm font-medium text-gray-900 mb-2">
          Reporting to [Title & Name]
        </label>
        <input
          type="text"
          id="job3ReportingTo"
          name="job3ReportingTo"
          value={formData.job3ReportingTo}
          onChange={(e) => onChange('job3ReportingTo', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-colors ${
            errors.job3ReportingTo
              ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
          }`}
          placeholder="Your answer"
        />
        {errors.job3ReportingTo && (
          <p className="mt-1 text-sm text-red-600">{errors.job3ReportingTo}</p>
        )}
      </div>

      {/* Rate your Supervisor */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-900">
          Rate your Supervisor
        </label>
        <div className="space-y-2">
          {SUPERVISOR_RATING_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3">
              <input
                type="radio"
                id={`job3-supervisor-${option}`}
                name="job3SupervisorRating"
                value={option}
                checked={formData.job3SupervisorRating === option}
                onChange={(e) => onRadioChange('job3SupervisorRating', e.target.value)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300"
              />
              <label htmlFor={`job3-supervisor-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
        {errors.job3SupervisorRating && (
          <p className="text-sm text-red-600">{errors.job3SupervisorRating}</p>
        )}
      </div>

      {/* Start Date and End Date */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="job3StartDate" className="block text-sm font-medium text-gray-900 mb-2">
            Start Date
          </label>
          <input
            type="date"
            id="job3StartDate"
            name="job3StartDate"
            value={formData.job3StartDate}
            onChange={(e) => onChange('job3StartDate', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-colors ${
              errors.job3StartDate
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
            }`}
          />
          {errors.job3StartDate && (
            <p className="mt-1 text-sm text-red-600">{errors.job3StartDate}</p>
          )}
        </div>
        <div>
          <label htmlFor="job3EndDate" className="block text-sm font-medium text-gray-900 mb-2">
            End Date
          </label>
          <input
            type="date"
            id="job3EndDate"
            name="job3EndDate"
            value={formData.job3EndDate}
            onChange={(e) => onChange('job3EndDate', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-colors ${
              errors.job3EndDate
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
            }`}
          />
          {errors.job3EndDate && (
            <p className="mt-1 text-sm text-red-600">{errors.job3EndDate}</p>
          )}
        </div>
      </div>

      {/* Starting Salary and Final Salary */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="job3StartingSalary" className="block text-sm font-medium text-gray-900 mb-2">
            Starting Salary [AED]
          </label>
          <input
            type="text"
            id="job3StartingSalary"
            name="job3StartingSalary"
            value={formData.job3StartingSalary}
            onChange={(e) => onChange('job3StartingSalary', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-colors ${
              errors.job3StartingSalary
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
            }`}
            placeholder="Your answer"
          />
          {errors.job3StartingSalary && (
            <p className="mt-1 text-sm text-red-600">{errors.job3StartingSalary}</p>
          )}
        </div>
        <div>
          <label htmlFor="job3FinalSalary" className="block text-sm font-medium text-gray-900 mb-2">
            Final Salary [AED]
          </label>
          <input
            type="text"
            id="job3FinalSalary"
            name="job3FinalSalary"
            value={formData.job3FinalSalary}
            onChange={(e) => onChange('job3FinalSalary', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-colors ${
              errors.job3FinalSalary
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
            }`}
            placeholder="Your answer"
          />
          {errors.job3FinalSalary && (
            <p className="mt-1 text-sm text-red-600">{errors.job3FinalSalary}</p>
          )}
        </div>
      </div>

      {/* Reason for Leaving */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-900">
          Reason for Leaving
        </label>
        <div className="space-y-2">
          {REASON_FOR_LEAVING_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3">
              <input
                type="checkbox"
                id={`job3-reason-${option}`}
                checked={formData.job3ReasonForLeaving.includes(option)}
                onChange={() => onCheckboxChange('job3ReasonForLeaving', option)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 rounded"
              />
              <label htmlFor={`job3-reason-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
          {formData.job3ReasonForLeaving.includes('Other') && (
            <div className="ml-7 mt-2">
              <input
                type="text"
                value={formData.job3ReasonForLeavingOther}
                onChange={(e) => onChange('job3ReasonForLeavingOther', e.target.value)}
                className={`w-full rounded-lg border px-4 py-2 transition-colors ${
                  errors.job3ReasonForLeavingOther
                    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                }`}
                placeholder="Your answer"
              />
              {errors.job3ReasonForLeavingOther && (
                <p className="mt-1 text-sm text-red-600">{errors.job3ReasonForLeavingOther}</p>
              )}
            </div>
          )}
        </div>
        {errors.job3ReasonForLeaving && (
          <p className="text-sm text-red-600">{errors.job3ReasonForLeaving}</p>
        )}
      </div>
    </div>
  );
}

