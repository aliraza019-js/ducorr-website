'use client';

interface Step1Props {
  email: string;
  onChange: (email: string) => void;
  error?: string;
}

export default function Step1({ email, onChange, error }: Step1Props) {
  return (
    <div className="space-y-6">
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
            value={email}
            onChange={(e) => onChange(e.target.value)}
            className={`w-full rounded-lg border pl-10 pr-4 py-3 transition-all duration-200 ${
              error
                ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
            }`}
            placeholder="your.email@example.com"
          />
        </div>
        {error && (
          <div className="mt-2 flex items-center gap-2 text-sm text-red-600 animate-shake">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}

