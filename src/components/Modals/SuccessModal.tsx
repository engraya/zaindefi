import React from 'react';

interface SuccessModalProps {
  onClose: () => void;
  onViewListing: () => void;
  onCreateNew: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ onClose, onViewListing, onCreateNew }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-4">
      <div className="w-full max-w-[588px] px-4 sm:px-8 py-6 sm:py-10 relative bg-Grey-Bg-darken rounded-xl shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)] flex flex-col justify-start items-center gap-6 sm:gap-8 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-center gap-4 sm:gap-6">
          <div data-mode="Dark" data-type="Success" className="w-20 sm:w-24 h-20 sm:h-24 relative">
            <div className="w-16 sm:w-20 h-16 sm:h-20 left-[5.24px] top-[5.42px] absolute bg-gradient-to-b from-slate-600/60 to-slate-600/0 rounded-full" />
            <div className="w-14 sm:w-16 h-14 sm:h-16 left-[12px] sm:left-[14.54px] top-[12px] sm:top-[14.55px] absolute rounded-[68.30px] outline outline-2 outline-offset-[-2px] outline-slate-400 overflow-hidden">
              <div className="w-10 sm:w-12 h-10 sm:h-12 left-[8px] sm:left-[9.45px] top-[8px] sm:top-[9.45px] absolute">
                <div className="w-8 sm:w-9 h-6 sm:h-7 left-[4px] sm:left-[6px] top-[8px] sm:top-[10.45px] absolute bg-Success-success-500" />
              </div>
            </div>
          </div>
          <div className="self-stretch px-2 sm:px-6 flex flex-col justify-start items-center gap-4 sm:gap-6">
            <div className="self-stretch flex flex-col justify-start items-center gap-2">
              <div className="w-full sm:w-96 text-center justify-start text-Grey-Text-light text-lg sm:text-xl font-medium font-['Manrope']">
                Listing posted Successfully!
              </div>
              <div className="self-stretch text-center justify-start text-Grey-Disabled-text text-sm sm:text-base font-normal font-['Manrope'] leading-relaxed">
                Your RWA listing has been published and is now visible to potential buyers
              </div>
            </div>
            <div className="self-stretch flex flex-col sm:flex-row justify-start items-stretch sm:items-start gap-3 sm:gap-4">
              <button 
                onClick={onViewListing}
                className="flex-1 px-4 sm:px-11 py-3 sm:py-4 bg-Grey-Icons rounded flex justify-center items-center overflow-hidden hover:bg-Grey-Icons/90 transition-colors duration-200"
              >
                <div className="h-5 flex justify-center items-center gap-2">
                  <div className="justify-start text-Grey-Text-primary text-sm sm:text-base font-medium font-['Manrope']">
                    View listing
                  </div>
                </div>
              </button>
              <button 
                onClick={onCreateNew}
                className="flex-1 px-4 sm:px-11 py-3 sm:py-4 bg-Primary-primary-500 rounded flex justify-center items-center overflow-hidden hover:bg-Primary-primary-500/90 transition-colors duration-200"
              >
                <div className="h-5 flex justify-center items-center gap-2">
                  <div className="justify-start text-Grey-White text-sm sm:text-base font-medium font-['Manrope']">
                    Create New
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 sm:p-3.5 right-0 top-0 absolute inline-flex justify-start items-start gap-2"
        >
          <div className="w-5 sm:w-6 h-5 sm:h-6 relative">
            <div className="w-3 sm:w-3.5 h-3 sm:h-3.5 left-[4px] sm:left-[4.50px] top-[4px] sm:top-[4.53px] absolute bg-Primary-primary-400" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SuccessModal; 