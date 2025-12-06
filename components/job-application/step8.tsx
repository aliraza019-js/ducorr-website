'use client';

interface Step8FormData {
  reference2FullName: string;
  reference2Position: string;
  reference2CompanyName: string;
  reference2ContactEmail: string;
  reference2ContactNumber: string;
}

interface Step8Props {
  formData: Step8FormData;
  onChange: (field: keyof Step8FormData, value: any) => void;
  errors: Record<string, string>;
}

export default function Step8({
  formData,
  onChange,
  errors,
}: Step8Props) {
  return (
    <div className="space-y-8">
      {/* Required Field Indicator */}
      <p className="text-sm text-red-600">* Indicates required question</p>

      {/* References Header */}
      <div className="bg-gray-200 px-4 py-2 rounded-lg">
        <h2 className="text-sm font-medium text-gray-700">References : 2</h2>
      </div>

      {/* Instructions */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700">
          Kindly list <strong>TWO (2) Professional References</strong> AND <strong>1 Personal Reference</strong> that we can communicate with.
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="reference2FullName" className="block text-sm font-medium text-gray-900 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="reference2FullName"
          name="reference2FullName"
          value={formData.reference2FullName}
          onChange={(e) => onChange('reference2FullName', e.target.value)}
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

      {/* Position */}
      <div>
        <label htmlFor="reference2Position" className="block text-sm font-medium text-gray-900 mb-2">
          Position <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="reference2Position"
          name="reference2Position"
          value={formData.reference2Position}
          onChange={(e) => onChange('reference2Position', e.target.value)}
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

      {/* Company Name */}
      <div>
        <label htmlFor="reference2CompanyName" className="block text-sm font-medium text-gray-900 mb-2">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="reference2CompanyName"
          name="reference2CompanyName"
          value={formData.reference2CompanyName}
          onChange={(e) => onChange('reference2CompanyName', e.target.value)}
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

      {/* Contact Email */}
      <div>
        <label htmlFor="reference2ContactEmail" className="block text-sm font-medium text-gray-900 mb-2">
          Contact Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="reference2ContactEmail"
          name="reference2ContactEmail"
          value={formData.reference2ContactEmail}
          onChange={(e) => onChange('reference2ContactEmail', e.target.value)}
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

      {/* Contact Number */}
      <div>
        <label htmlFor="reference2ContactNumber" className="block text-sm font-medium text-gray-900 mb-2">
          Contact Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="reference2ContactNumber"
          name="reference2ContactNumber"
          value={formData.reference2ContactNumber}
          onChange={(e) => onChange('reference2ContactNumber', e.target.value)}
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
  );
}

