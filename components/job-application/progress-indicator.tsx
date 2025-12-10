'use client';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;
  const stepLabels = [
    'Email',
    'Personal Info',
    'Instructions',
    'Jobs',
    'Uploads',
    'Reference 1',
    'Reference 2',
    'Agreement'
  ];

  return (
    <div className="mb-8">
      {/* Progress Bar */}
      <div className="relative mb-6">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#d9823f] to-[#b86a2f] rounded-full transition-all duration-500 ease-out shadow-sm"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="h-full w-full bg-gradient-to-r from-[#d9823f] via-[#c77a37] to-[#b86a2f] animate-pulse-on-hover"></div>
          </div>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex items-center justify-between relative">
        {/* Connecting Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10">
          <div
            className="h-full bg-gradient-to-r from-[#d9823f] to-[#b86a2f] transition-all duration-500 ease-out"
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          ></div>
        </div>

        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <div key={stepNumber} className="flex flex-col items-center flex-1 relative z-10">
              {/* Step Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  isCompleted
                    ? 'bg-gradient-to-br from-[#d9823f] to-[#b86a2f] text-white shadow-lg scale-110'
                    : isCurrent
                    ? 'bg-gradient-to-br from-[#d9823f] to-[#b86a2f] text-white shadow-lg ring-4 ring-[#d9823f]/20 scale-110'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNumber
                )}
              </div>

              {/* Step Label */}
              <div className="mt-2 text-center">
                <p
                  className={`text-xs font-medium transition-colors ${
                    isCurrent || isCompleted
                      ? 'text-[#d9823f]'
                      : 'text-gray-400'
                  }`}
                >
                  {stepLabels[index]}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">Step {stepNumber}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

