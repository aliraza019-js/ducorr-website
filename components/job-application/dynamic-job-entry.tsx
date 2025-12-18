'use client';

interface JobData {
  businessName: string;
  businessType: string;
  businessTypeOther: string;
  positionTitle: string;
  reportingTo: string;
  supervisorRating: string;
  startDate: string;
  endDate: string;
  startingSalary: string;
  finalSalary: string;
  reasonForLeaving: string;
  reasonForLeavingOther: string;
}

interface DynamicJobEntryProps {
  jobIndex: number;
  jobData: JobData;
  onChange: (field: keyof JobData, value: any) => void;
  onRadioChange: (field: string, value: string) => void;
  errors: Record<string, string>;
  isFirst: boolean;
  onRemove?: () => void;
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

export default function DynamicJobEntry({
  jobIndex,
  jobData,
  onChange,
  onRadioChange,
  errors,
  isFirst,
  onRemove,
}: DynamicJobEntryProps) {
  const prefix = `job${jobIndex}`;

  return (
    <div className="space-y-6 border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
      {/* Job Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#d9823f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Job {jobIndex}
        </h3>
        {!isFirst && onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Remove
          </button>
        )}
      </div>

      {/* Business Name */}
      <div className="form-field-wrapper">
        <label htmlFor={`${prefix}BusinessName`} className="block text-sm font-semibold text-gray-900 mb-2.5">
          Business Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id={`${prefix}BusinessName`}
          name={`${prefix}BusinessName`}
          value={jobData.businessName}
          onChange={(e) => onChange('businessName', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 ${
            errors[`${prefix}BusinessName`]
              ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
          }`}
          placeholder="Company name"
        />
        {errors[`${prefix}BusinessName`] && (
          <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errors[`${prefix}BusinessName`]}</span>
          </div>
        )}
      </div>

      {/* Business Type */}
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-gray-900">
          Business Type <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {BUSINESS_TYPE_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#d9823f]/50 hover:bg-gray-50/50 transition-all duration-200">
              <input
                type="radio"
                id={`${prefix}BusinessType-${option}`}
                name={`${prefix}BusinessType`}
                value={option}
                checked={jobData.businessType === option}
                onChange={(e) => onRadioChange('businessType', e.target.value)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 cursor-pointer"
              />
              <label
                htmlFor={`${prefix}BusinessType-${option}`}
                className="flex-1 text-sm text-gray-700 cursor-pointer font-medium"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        {jobData.businessType === 'Other' && (
          <div className="mt-2">
            <input
              type="text"
              value={jobData.businessTypeOther}
              onChange={(e) => onChange('businessTypeOther', e.target.value)}
              className={`w-full rounded-lg border px-4 py-2 transition-all duration-200 ${
                errors[`${prefix}BusinessTypeOther`]
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Please specify"
            />
            {errors[`${prefix}BusinessTypeOther`] && (
              <p className="mt-1 text-sm text-red-600">{errors[`${prefix}BusinessTypeOther`]}</p>
            )}
          </div>
        )}
        {errors[`${prefix}BusinessType`] && (
          <p className="text-sm text-red-600">{errors[`${prefix}BusinessType`]}</p>
        )}
      </div>

      {/* Position Title */}
      <div className="form-field-wrapper">
        <label htmlFor={`${prefix}PositionTitle`} className="block text-sm font-semibold text-gray-900 mb-2.5">
          Position Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id={`${prefix}PositionTitle`}
          name={`${prefix}PositionTitle`}
          value={jobData.positionTitle}
          onChange={(e) => onChange('positionTitle', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 ${
            errors[`${prefix}PositionTitle`]
              ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
          }`}
          placeholder="Your position title"
        />
        {errors[`${prefix}PositionTitle`] && (
          <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errors[`${prefix}PositionTitle`]}</span>
          </div>
        )}
      </div>

      {/* Reporting To */}
      <div className="form-field-wrapper">
        <label htmlFor={`${prefix}ReportingTo`} className="block text-sm font-semibold text-gray-900 mb-2.5">
          Reporting To <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id={`${prefix}ReportingTo`}
          name={`${prefix}ReportingTo`}
          value={jobData.reportingTo}
          onChange={(e) => onChange('reportingTo', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 ${
            errors[`${prefix}ReportingTo`]
              ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
          }`}
          placeholder="Name of supervisor/manager"
        />
        {errors[`${prefix}ReportingTo`] && (
          <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errors[`${prefix}ReportingTo`]}</span>
          </div>
        )}
      </div>

      {/* Supervisor Rating */}
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-gray-900">
          Supervisor Rating <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {SUPERVISOR_RATING_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#d9823f]/50 hover:bg-gray-50/50 transition-all duration-200">
              <input
                type="radio"
                id={`${prefix}SupervisorRating-${option}`}
                name={`${prefix}SupervisorRating`}
                value={option}
                checked={jobData.supervisorRating === option}
                onChange={(e) => onRadioChange('supervisorRating', e.target.value)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 cursor-pointer"
              />
              <label
                htmlFor={`${prefix}SupervisorRating-${option}`}
                className="flex-1 text-sm text-gray-700 cursor-pointer font-medium"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        {errors[`${prefix}SupervisorRating`] && (
          <p className="text-sm text-red-600">{errors[`${prefix}SupervisorRating`]}</p>
        )}
      </div>

      {/* Start Date and End Date */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="form-field-wrapper">
          <label htmlFor={`${prefix}StartDate`} className="block text-sm font-semibold text-gray-900 mb-2.5">
            Start Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id={`${prefix}StartDate`}
            name={`${prefix}StartDate`}
            value={jobData.startDate}
            onChange={(e) => onChange('startDate', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 ${
              errors[`${prefix}StartDate`]
                ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
            }`}
          />
          {errors[`${prefix}StartDate`] && (
            <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>{errors[`${prefix}StartDate`]}</span>
            </div>
          )}
        </div>
        <div className="form-field-wrapper">
          <label htmlFor={`${prefix}EndDate`} className="block text-sm font-semibold text-gray-900 mb-2.5">
            End Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id={`${prefix}EndDate`}
            name={`${prefix}EndDate`}
            value={jobData.endDate}
            onChange={(e) => onChange('endDate', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 ${
              errors[`${prefix}EndDate`]
                ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
            }`}
          />
          {errors[`${prefix}EndDate`] && (
            <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>{errors[`${prefix}EndDate`]}</span>
            </div>
          )}
        </div>
      </div>

      {/* Starting Salary and Final Salary */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="form-field-wrapper">
          <label htmlFor={`${prefix}StartingSalary`} className="block text-sm font-semibold text-gray-900 mb-2.5">
            Starting Salary <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id={`${prefix}StartingSalary`}
            name={`${prefix}StartingSalary`}
            value={jobData.startingSalary}
            onChange={(e) => onChange('startingSalary', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 ${
              errors[`${prefix}StartingSalary`]
                ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
            }`}
            placeholder="Amount"
          />
          {errors[`${prefix}StartingSalary`] && (
            <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>{errors[`${prefix}StartingSalary`]}</span>
            </div>
          )}
        </div>
        <div className="form-field-wrapper">
          <label htmlFor={`${prefix}FinalSalary`} className="block text-sm font-semibold text-gray-900 mb-2.5">
            Final Salary <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id={`${prefix}FinalSalary`}
            name={`${prefix}FinalSalary`}
            value={jobData.finalSalary}
            onChange={(e) => onChange('finalSalary', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 ${
              errors[`${prefix}FinalSalary`]
                ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
            }`}
            placeholder="Amount"
          />
          {errors[`${prefix}FinalSalary`] && (
            <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>{errors[`${prefix}FinalSalary`]}</span>
            </div>
          )}
        </div>
      </div>

      {/* Reason for Leaving */}
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-gray-900">
          Reason for Leaving <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {REASON_FOR_LEAVING_OPTIONS.map((option) => (
            <div key={option} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#d9823f]/50 hover:bg-gray-50/50 transition-all duration-200">
              <input
                type="radio"
                id={`${prefix}ReasonForLeaving-${option}`}
                name={`${prefix}ReasonForLeaving`}
                value={option}
                checked={jobData.reasonForLeaving === option}
                onChange={(e) => onRadioChange('reasonForLeaving', e.target.value)}
                className="mt-1 h-4 w-4 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 cursor-pointer"
              />
              <label
                htmlFor={`${prefix}ReasonForLeaving-${option}`}
                className="flex-1 text-sm text-gray-700 cursor-pointer font-medium"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        {jobData.reasonForLeaving === 'Other' && (
          <div className="mt-2">
            <input
              type="text"
              value={jobData.reasonForLeavingOther}
              onChange={(e) => onChange('reasonForLeavingOther', e.target.value)}
              className={`w-full rounded-lg border px-4 py-2 transition-all duration-200 ${
                errors[`${prefix}ReasonForLeavingOther`]
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Please specify"
            />
            {errors[`${prefix}ReasonForLeavingOther`] && (
              <p className="mt-1 text-sm text-red-600">{errors[`${prefix}ReasonForLeavingOther`]}</p>
            )}
          </div>
        )}
        {errors[`${prefix}ReasonForLeaving`] && (
          <p className="text-sm text-red-600">{errors[`${prefix}ReasonForLeaving`]}</p>
        )}
      </div>
    </div>
  );
}

