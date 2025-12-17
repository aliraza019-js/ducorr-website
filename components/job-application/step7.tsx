'use client';

interface Step7FormData {
  reference1FullName: string;
  reference1Position: string;
  reference1CompanyName: string;
  reference1ContactEmail: string;
  reference1ContactNumber: string;
}

interface Step7Props {
  formData: Step7FormData;
  onChange: (field: keyof Step7FormData, value: any) => void;
  errors: Record<string, string>;
}

export default function Step7({
  formData,
  onChange,
  errors,
}: Step7Props) {
  return (
    <div className="space-y-8">
      {/* Required Field Indicator */}
      <p className="text-sm text-red-600">* Indicates required question</p>

      {/* References Header */}
      <div className="bg-gray-200 px-4 py-2 rounded-lg">
        <h2 className="text-sm font-medium text-gray-700">References : 1</h2>
      </div>

      {/* Instructions */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700">
          Kindly list <strong>TWO (2) Professional References</strong> AND <strong>1 Personal Reference</strong> that we can communicate with.
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="reference1FullName" className="block text-sm font-medium text-gray-900 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="reference1FullName"
          name="reference1FullName"
          value={formData.reference1FullName}
          onChange={(e) => onChange('reference1FullName', e.target.value)}
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

      {/* Position */}
      <div>
        <label htmlFor="reference1Position" className="block text-sm font-medium text-gray-900 mb-2">
          Position <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="reference1Position"
          name="reference1Position"
          value={formData.reference1Position}
          onChange={(e) => onChange('reference1Position', e.target.value)}
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

      {/* Company Name */}
      <div>
        <label htmlFor="reference1CompanyName" className="block text-sm font-medium text-gray-900 mb-2">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="reference1CompanyName"
          name="reference1CompanyName"
          value={formData.reference1CompanyName}
          onChange={(e) => onChange('reference1CompanyName', e.target.value)}
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

      {/* Contact Email */}
      <div>
        <label htmlFor="reference1ContactEmail" className="block text-sm font-medium text-gray-900 mb-2">
          Contact Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="reference1ContactEmail"
          name="reference1ContactEmail"
          value={formData.reference1ContactEmail}
          onChange={(e) => onChange('reference1ContactEmail', e.target.value)}
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

      {/* Contact Number */}
      <div>
        <label htmlFor="reference1ContactNumber" className="block text-sm font-medium text-gray-900 mb-2">
          Contact Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="reference1ContactNumber"
          name="reference1ContactNumber"
          value={formData.reference1ContactNumber}
          onChange={(e) => onChange('reference1ContactNumber', e.target.value)}
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
  );
}



