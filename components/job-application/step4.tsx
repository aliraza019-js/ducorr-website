'use client';

interface Step4FormData {
  job1BusinessName: string;
  job1BusinessType: string[];
  job1BusinessTypeOther: string;
  job1PositionTitle: string;
  job1ReportingTo: string;
  job1SupervisorRating: string;
  job1StartDate: string;
  job1EndDate: string;
  job1StartingSalary: string;
  job1FinalSalary: string;
  job1ReasonForLeaving: string[];
  job1ReasonForLeavingOther: string;
}

interface Step4Props {
  formData: Step4FormData;
  onChange: (field: keyof Step4FormData, value: any) => void;
  onCheckboxChange: (field: 'job1BusinessType' | 'job1ReasonForLeaving', value: string) => void;
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

export default function Step4({
  formData,
  onChange,
  onCheckboxChange,
  onRadioChange,
  errors,
}: Step4Props) {
  return (
    <div className="space-y-8">
      {/* Required Field Indicator */}
      <p className="text-sm text-red-600">* Indicates required question</p>

      {/* Job 1 Header */}
      <div className="bg-gray-200 px-4 py-2 rounded-lg">
        <h2 className="text-sm font-medium text-gray-700">Job 1 - Describe Your Job</h2>
      </div>

      {/* Name of Business */}
      <div>
        <label htmlFor="job1BusinessName" className="block text-sm font-medium text-gray-900 mb-2">
          Name of Business <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="job1BusinessName"
          name="job1BusinessName"
          value={formData.job1BusinessName}
          onChange={(e) => onChange('job1BusinessName', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-colors ${
            errors.job1BusinessName
              ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
          }`}
          placeholder="Your answer"
        />
        {errors.job1BusinessName && (
          <p className="mt-1 text-sm text-red-600">{errors.job1BusinessName}</p>
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
                id={`businessType-${option}`}
                checked={formData.job1BusinessType.includes(option)}
                onChange={() => onCheckboxChange('job1BusinessType', option)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 rounded"
              />
              <label htmlFor={`businessType-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
          {formData.job1BusinessType.includes('Other') && (
            <div className="ml-7 mt-2">
              <input
                type="text"
                value={formData.job1BusinessTypeOther}
                onChange={(e) => onChange('job1BusinessTypeOther', e.target.value)}
                className={`w-full rounded-lg border px-4 py-2 transition-colors ${
                  errors.job1BusinessTypeOther
                    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                }`}
                placeholder="Your answer"
              />
              {errors.job1BusinessTypeOther && (
                <p className="mt-1 text-sm text-red-600">{errors.job1BusinessTypeOther}</p>
              )}
            </div>
          )}
        </div>
        {errors.job1BusinessType && (
          <p className="text-sm text-red-600">{errors.job1BusinessType}</p>
        )}
      </div>

      {/* Position Title Held */}
      <div>
        <label htmlFor="job1PositionTitle" className="block text-sm font-medium text-gray-900 mb-2">
          Position Title Held <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="job1PositionTitle"
          name="job1PositionTitle"
          value={formData.job1PositionTitle}
          onChange={(e) => onChange('job1PositionTitle', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-colors ${
            errors.job1PositionTitle
              ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
          }`}
          placeholder="Your answer"
        />
        {errors.job1PositionTitle && (
          <p className="mt-1 text-sm text-red-600">{errors.job1PositionTitle}</p>
        )}
      </div>

      {/* Reporting to */}
      <div>
        <label htmlFor="job1ReportingTo" className="block text-sm font-medium text-gray-900 mb-2">
          Reporting to [Title & Name] <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="job1ReportingTo"
          name="job1ReportingTo"
          value={formData.job1ReportingTo}
          onChange={(e) => onChange('job1ReportingTo', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-colors ${
            errors.job1ReportingTo
              ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
          }`}
          placeholder="Your answer"
        />
        {errors.job1ReportingTo && (
          <p className="mt-1 text-sm text-red-600">{errors.job1ReportingTo}</p>
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
                id={`supervisor-${option}`}
                name="job1SupervisorRating"
                value={option}
                checked={formData.job1SupervisorRating === option}
                onChange={(e) => onRadioChange('job1SupervisorRating', e.target.value)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300"
              />
              <label htmlFor={`supervisor-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
        {errors.job1SupervisorRating && (
          <p className="text-sm text-red-600">{errors.job1SupervisorRating}</p>
        )}
      </div>

      {/* Start Date and End Date */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="job1StartDate" className="block text-sm font-medium text-gray-900 mb-2">
            Start Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="job1StartDate"
            name="job1StartDate"
            value={formData.job1StartDate}
            onChange={(e) => onChange('job1StartDate', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-colors ${
              errors.job1StartDate
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
            }`}
          />
          {errors.job1StartDate && (
            <p className="mt-1 text-sm text-red-600">{errors.job1StartDate}</p>
          )}
        </div>
        <div>
          <label htmlFor="job1EndDate" className="block text-sm font-medium text-gray-900 mb-2">
            End Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="job1EndDate"
            name="job1EndDate"
            value={formData.job1EndDate}
            onChange={(e) => onChange('job1EndDate', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-colors ${
              errors.job1EndDate
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
            }`}
          />
          {errors.job1EndDate && (
            <p className="mt-1 text-sm text-red-600">{errors.job1EndDate}</p>
          )}
        </div>
      </div>

      {/* Starting Salary and Final Salary */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="job1StartingSalary" className="block text-sm font-medium text-gray-900 mb-2">
            Starting Salary [AED] <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="job1StartingSalary"
            name="job1StartingSalary"
            value={formData.job1StartingSalary}
            onChange={(e) => onChange('job1StartingSalary', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-colors ${
              errors.job1StartingSalary
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
            }`}
            placeholder="Your answer"
          />
          {errors.job1StartingSalary && (
            <p className="mt-1 text-sm text-red-600">{errors.job1StartingSalary}</p>
          )}
        </div>
        <div>
          <label htmlFor="job1FinalSalary" className="block text-sm font-medium text-gray-900 mb-2">
            Final Salary [AED] <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="job1FinalSalary"
            name="job1FinalSalary"
            value={formData.job1FinalSalary}
            onChange={(e) => onChange('job1FinalSalary', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-colors ${
              errors.job1FinalSalary
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
            }`}
            placeholder="Your answer"
          />
          {errors.job1FinalSalary && (
            <p className="mt-1 text-sm text-red-600">{errors.job1FinalSalary}</p>
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
                id={`reason-${option}`}
                checked={formData.job1ReasonForLeaving.includes(option)}
                onChange={() => onCheckboxChange('job1ReasonForLeaving', option)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 rounded"
              />
              <label htmlFor={`reason-${option}`} className="text-sm text-gray-700 cursor-pointer">
                {option}
              </label>
            </div>
          ))}
          {formData.job1ReasonForLeaving.includes('Other') && (
            <div className="ml-7 mt-2">
              <input
                type="text"
                value={formData.job1ReasonForLeavingOther}
                onChange={(e) => onChange('job1ReasonForLeavingOther', e.target.value)}
                className={`w-full rounded-lg border px-4 py-2 transition-colors ${
                  errors.job1ReasonForLeavingOther
                    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
                }`}
                placeholder="Your answer"
              />
              {errors.job1ReasonForLeavingOther && (
                <p className="mt-1 text-sm text-red-600">{errors.job1ReasonForLeavingOther}</p>
              )}
            </div>
          )}
        </div>
        {errors.job1ReasonForLeaving && (
          <p className="text-sm text-red-600">{errors.job1ReasonForLeaving}</p>
        )}
      </div>
    </div>
  );
}



