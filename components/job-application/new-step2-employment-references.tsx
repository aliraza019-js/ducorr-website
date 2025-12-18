'use client';

import DynamicJobEntry from './dynamic-job-entry';

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

interface ReferencesFormData {
  reference1FullName: string;
  reference1Position: string;
  reference1CompanyName: string;
  reference1ContactEmail: string;
  reference1ContactNumber: string;
  reference2FullName: string;
  reference2Position: string;
  reference2CompanyName: string;
  reference2ContactEmail: string;
  reference2ContactNumber: string;
  reference3FullName: string;
  reference3Position: string;
  reference3CompanyName: string;
  reference3ContactEmail: string;
  reference3ContactNumber: string;
}

interface NewStep2Props {
  jobs: JobData[];
  references: ReferencesFormData;
  onJobChange: (jobIndex: number, field: keyof JobData, value: any) => void;
  onJobRadioChange: (jobIndex: number, field: string, value: string) => void;
  onReferenceChange: (field: keyof ReferencesFormData, value: any) => void;
  onAddJob: () => void;
  onRemoveJob: (index: number) => void;
  errors: Record<string, string>;
}

export default function NewStep2EmploymentReferences({
  jobs,
  references,
  onJobChange,
  onJobRadioChange,
  onReferenceChange,
  onAddJob,
  onRemoveJob,
  errors,
}: NewStep2Props) {
  return (
    <div className="space-y-8">
      {/* Required Field Indicator */}
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <span>* Indicates required question</span>
      </div>

      {/* Employment History Section */}
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gray-700 px-6 py-4 rounded-lg">
          <h2 className="text-xl font-bold text-white">Employment History</h2>
        </div>

        {/* Instructions */}
        <div className="space-y-4">
          <p className="font-bold italic text-gray-900">Instructions:</p>
          <p className="text-base leading-relaxed text-gray-700">
            Fill In your last three (3) Jobs. Start with the <strong>most recent</strong> and go back in time. 
            If you have held more than 1 position in one company each position counts as 1 job.
          </p>
        </div>

        {/* Job Entries */}
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <DynamicJobEntry
              key={index}
              jobIndex={index + 1}
              jobData={job}
              onChange={(field, value) => onJobChange(index, field, value)}
              onRadioChange={(field, value) => onJobRadioChange(index, field, value)}
              errors={errors}
              isFirst={index === 0}
              onRemove={jobs.length > 1 ? () => onRemoveJob(index) : undefined}
            />
          ))}
        </div>

        {/* Add Another Job Button */}
        <div className="pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={onAddJob}
            className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-gray-400"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Another Job
          </button>
        </div>
      </div>

      {/* References Section */}
      <div className="space-y-6 pt-8 border-t-2 border-gray-300">
        {/* References Header */}
        <div className="bg-gray-200 px-4 py-2 rounded-lg">
          <h2 className="text-lg font-medium text-gray-700">References</h2>
        </div>

        {/* Instructions */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            Kindly list <strong>TWO (2) Professional References</strong> AND <strong>1 Personal Reference</strong> that we can communicate with.
          </p>
        </div>

        {/* Reference 1 */}
        <div className="space-y-6">
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <h3 className="text-base font-medium text-gray-700">Professional Reference 1</h3>
          </div>

          <div>
            <label htmlFor="reference1FullName" className="block text-sm font-medium text-gray-900 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="reference1FullName"
              name="reference1FullName"
              value={references.reference1FullName}
              onChange={(e) => onReferenceChange('reference1FullName', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference1FullName
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference1FullName && (
              <p className="mt-1 text-sm text-red-600">{errors.reference1FullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference1Position" className="block text-sm font-medium text-gray-900 mb-2">
              Position <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="reference1Position"
              name="reference1Position"
              value={references.reference1Position}
              onChange={(e) => onReferenceChange('reference1Position', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference1Position
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference1Position && (
              <p className="mt-1 text-sm text-red-600">{errors.reference1Position}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference1CompanyName" className="block text-sm font-medium text-gray-900 mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="reference1CompanyName"
              name="reference1CompanyName"
              value={references.reference1CompanyName}
              onChange={(e) => onReferenceChange('reference1CompanyName', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference1CompanyName
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference1CompanyName && (
              <p className="mt-1 text-sm text-red-600">{errors.reference1CompanyName}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference1ContactEmail" className="block text-sm font-medium text-gray-900 mb-2">
              Contact Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="reference1ContactEmail"
              name="reference1ContactEmail"
              value={references.reference1ContactEmail}
              onChange={(e) => onReferenceChange('reference1ContactEmail', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference1ContactEmail
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference1ContactEmail && (
              <p className="mt-1 text-sm text-red-600">{errors.reference1ContactEmail}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference1ContactNumber" className="block text-sm font-medium text-gray-900 mb-2">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="reference1ContactNumber"
              name="reference1ContactNumber"
              value={references.reference1ContactNumber}
              onChange={(e) => onReferenceChange('reference1ContactNumber', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference1ContactNumber
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference1ContactNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.reference1ContactNumber}</p>
            )}
          </div>
        </div>

        {/* Reference 2 */}
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <h3 className="text-base font-medium text-gray-700">Professional Reference 2</h3>
          </div>

          <div>
            <label htmlFor="reference2FullName" className="block text-sm font-medium text-gray-900 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="reference2FullName"
              name="reference2FullName"
              value={references.reference2FullName}
              onChange={(e) => onReferenceChange('reference2FullName', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference2FullName
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference2FullName && (
              <p className="mt-1 text-sm text-red-600">{errors.reference2FullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference2Position" className="block text-sm font-medium text-gray-900 mb-2">
              Position <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="reference2Position"
              name="reference2Position"
              value={references.reference2Position}
              onChange={(e) => onReferenceChange('reference2Position', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference2Position
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference2Position && (
              <p className="mt-1 text-sm text-red-600">{errors.reference2Position}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference2CompanyName" className="block text-sm font-medium text-gray-900 mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="reference2CompanyName"
              name="reference2CompanyName"
              value={references.reference2CompanyName}
              onChange={(e) => onReferenceChange('reference2CompanyName', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference2CompanyName
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference2CompanyName && (
              <p className="mt-1 text-sm text-red-600">{errors.reference2CompanyName}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference2ContactEmail" className="block text-sm font-medium text-gray-900 mb-2">
              Contact Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="reference2ContactEmail"
              name="reference2ContactEmail"
              value={references.reference2ContactEmail}
              onChange={(e) => onReferenceChange('reference2ContactEmail', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference2ContactEmail
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference2ContactEmail && (
              <p className="mt-1 text-sm text-red-600">{errors.reference2ContactEmail}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference2ContactNumber" className="block text-sm font-medium text-gray-900 mb-2">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="reference2ContactNumber"
              name="reference2ContactNumber"
              value={references.reference2ContactNumber}
              onChange={(e) => onReferenceChange('reference2ContactNumber', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference2ContactNumber
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference2ContactNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.reference2ContactNumber}</p>
            )}
          </div>
        </div>

        {/* Reference 3 - Personal Reference */}
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <h3 className="text-base font-medium text-gray-700">Personal Reference 3</h3>
          </div>

          <div>
            <label htmlFor="reference3FullName" className="block text-sm font-medium text-gray-900 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="reference3FullName"
              name="reference3FullName"
              value={references.reference3FullName}
              onChange={(e) => onReferenceChange('reference3FullName', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference3FullName
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference3FullName && (
              <p className="mt-1 text-sm text-red-600">{errors.reference3FullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference3Position" className="block text-sm font-medium text-gray-900 mb-2">
              Position <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="reference3Position"
              name="reference3Position"
              value={references.reference3Position}
              onChange={(e) => onReferenceChange('reference3Position', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference3Position
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference3Position && (
              <p className="mt-1 text-sm text-red-600">{errors.reference3Position}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference3CompanyName" className="block text-sm font-medium text-gray-900 mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="reference3CompanyName"
              name="reference3CompanyName"
              value={references.reference3CompanyName}
              onChange={(e) => onReferenceChange('reference3CompanyName', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference3CompanyName
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference3CompanyName && (
              <p className="mt-1 text-sm text-red-600">{errors.reference3CompanyName}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference3ContactEmail" className="block text-sm font-medium text-gray-900 mb-2">
              Contact Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="reference3ContactEmail"
              name="reference3ContactEmail"
              value={references.reference3ContactEmail}
              onChange={(e) => onReferenceChange('reference3ContactEmail', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference3ContactEmail
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference3ContactEmail && (
              <p className="mt-1 text-sm text-red-600">{errors.reference3ContactEmail}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference3ContactNumber" className="block text-sm font-medium text-gray-900 mb-2">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="reference3ContactNumber"
              name="reference3ContactNumber"
              value={references.reference3ContactNumber}
              onChange={(e) => onReferenceChange('reference3ContactNumber', e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 transition-colors ${
                errors.reference3ContactNumber
                  ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20'
              }`}
              placeholder="Your answer"
            />
            {errors.reference3ContactNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.reference3ContactNumber}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

