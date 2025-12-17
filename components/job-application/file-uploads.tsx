'use client';

interface FileUploadsProps {
  formData: {
    certificates: File | null;
    cv: File | null;
    lastPaySlips: File | null;
    selfVideo: File | null;
  };
  onChange: (field: 'certificates' | 'cv' | 'lastPaySlips' | 'selfVideo', file: File | null) => void;
  errors: Record<string, string>;
}

export default function FileUploads({ formData, onChange, errors }: FileUploadsProps) {
  const handleFileChange = (field: 'certificates' | 'cv' | 'lastPaySlips' | 'selfVideo', e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(field, file);
    
    // Clear error when file is selected
    if (file && errors[field]) {
      // Error clearing is handled in parent
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="space-y-8">
      {/* Required Field Indicator */}
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <span>* Indicates required upload</span>
      </div>

      {/* CV Upload */}
      <div className="form-field-wrapper">
        <label htmlFor="cv" className="block text-sm font-semibold text-gray-900 mb-2.5">
          CV / Resume <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="file"
            id="cv"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileChange('cv', e)}
            className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#d9823f] file:text-white hover:file:bg-[#b86a2f] cursor-pointer ${
              errors.cv
                ? 'border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-gray-300 bg-white focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400'
            }`}
          />
        </div>
        {formData.cv && (
          <p className="mt-2 text-sm text-gray-600 flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {formData.cv.name} ({formatFileSize(formData.cv.size)})
          </p>
        )}
        {errors.cv && (
          <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errors.cv}</span>
          </div>
        )}
      </div>

      {/* Certificates Upload */}
      <div className="form-field-wrapper">
        <label htmlFor="certificates" className="block text-sm font-semibold text-gray-900 mb-2.5">
          Certificates
        </label>
        <div className="relative">
          <input
            type="file"
            id="certificates"
            name="certificates"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) => handleFileChange('certificates', e)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400 cursor-pointer"
          />
        </div>
        {formData.certificates && (
          <p className="mt-2 text-sm text-gray-600 flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {formData.certificates.name} ({formatFileSize(formData.certificates.size)})
          </p>
        )}
      </div>

      {/* Last Pay Slips Upload */}
      <div className="form-field-wrapper">
        <label htmlFor="lastPaySlips" className="block text-sm font-semibold text-gray-900 mb-2.5">
          Last Pay Slips
        </label>
        <div className="relative">
          <input
            type="file"
            id="lastPaySlips"
            name="lastPaySlips"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => handleFileChange('lastPaySlips', e)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400 cursor-pointer"
          />
        </div>
        {formData.lastPaySlips && (
          <p className="mt-2 text-sm text-gray-600 flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {formData.lastPaySlips.name} ({formatFileSize(formData.lastPaySlips.size)})
          </p>
        )}
      </div>

      {/* Self Video Upload */}
      <div className="form-field-wrapper">
        <label htmlFor="selfVideo" className="block text-sm font-semibold text-gray-900 mb-2.5">
          Self Video (Describing your last project and what you did)
        </label>
        <div className="relative">
          <input
            type="file"
            id="selfVideo"
            name="selfVideo"
            accept="video/*,.mp4,.mov,.avi"
            onChange={(e) => handleFileChange('selfVideo', e)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 focus:border-[#d9823f] focus:ring-2 focus:ring-[#d9823f]/20 hover:border-gray-400 cursor-pointer"
          />
        </div>
        {formData.selfVideo && (
          <p className="mt-2 text-sm text-gray-600 flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {formData.selfVideo.name} ({formatFileSize(formData.selfVideo.size)})
          </p>
        )}
        <p className="mt-1 text-xs text-gray-500">Upload a video describing your last project and what you did</p>
      </div>
    </div>
  );
}



