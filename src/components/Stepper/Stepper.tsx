import React from 'react';

interface Step {
  id: number;
  title: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="self-stretch h-14 px-3 sm:px-6 py-2 sm:py-4 flex flex-col justify-center items-center overflow-x-auto">
      <div className="w-full max-w-[745px] min-w-[320px] relative flex justify-between items-center">
        {/* Progress Line */}
        <div className="absolute top-[9.5px] left-[18px] sm:left-[23px] right-[18px] sm:right-[23px] h-[1.5px]">
          <div className="h-full flex">
            {steps.slice(0, -1).map((_, index) => (
              <div
                key={index}
                className={`h-full flex-1 transition-colors duration-300 ${
                  currentStep > index + 1 ? 'bg-[#3396FF]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step Circles */}
        {steps.map((step) => (
          <div key={step.id} className="w-8 sm:w-12 flex flex-col items-center gap-0.5 relative z-10">
            <div
              className={`w-4 sm:w-5 h-4 sm:h-5 rounded-full flex items-center justify-center border transition-colors duration-300
                ${
                  step.id === currentStep
                    ? 'border-[#3396FF] bg-gray-900'
                    : step.id < currentStep
                    ? 'border-[#3396FF] bg-[#3396FF]'
                    : 'border-gray-600 bg-gray-900'
                }`}
            >
              {step.id < currentStep ? (
                <svg className="w-2 sm:w-3 h-2 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : step.id === currentStep ? (
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#3396FF]" />
              ) : null}
            </div>
            <div className="text-center text-white text-[8px] sm:text-[10px] font-medium leading-none tracking-wide whitespace-nowrap">
              {step.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper; 