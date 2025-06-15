import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostSuccess: React.FC = () => {
  const navigate = useNavigate();

  const handleViewListing = () => {
    navigate('/listings');
  };

  const handleCreateNew = () => {
    navigate('/post');
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: '#171825BF' }}>
      <div data-device="Desktop" className="w-[588px] px-8 py-10 relative bg-[#11141C] rounded-xl shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-start items-center gap-8 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-center gap-6">
          <div data-mode="Dark" data-type="Success" className="w-24 h-24 relative flex items-center justify-center">
            <div className="w-20 h-20 absolute bg-gradient-to-b from-slate-600/60 to-slate-600/0 rounded-full" />
            <div className="w-16 h-16 absolute rounded-[68.30px] outline outline-offset-[-2px] outline-slate-400 overflow-hidden flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.3574 11.0946C39.8668 10.6584 40.522 10.4304 41.1922 10.4563C41.8624 10.4822 42.4981 10.76 42.9723 11.2342C43.4465 11.7085 43.7243 12.3442 43.7502 13.0143C43.7761 13.6845 43.5481 14.3397 43.1119 14.8491L43.0744 14.893L19.9041 38.0754L6.6743 24.8583L6.63637 24.814C6.20014 24.3046 5.97219 23.6494 5.99808 22.9792C6.02396 22.3091 6.30178 21.6733 6.776 21.1991C7.25023 20.7249 7.88593 20.4471 8.55609 20.4212C9.22624 20.3953 9.88148 20.6233 10.3909 21.0595L10.4349 21.0972L19.8807 30.543L39.3137 11.132L39.3574 11.0946Z" fill="#2AD494"/>
              </svg>
            </div>
          </div>
          <div className="self-stretch px-6 flex flex-col justify-start items-center gap-6">
            <div className="self-stretch flex flex-col justify-start items-center gap-2">
              <div className="w-96 text-center justify-start text-[#FFFFFF] text-xl font-medium">
                Listing posted Successfully!
              </div>
              <div className="self-stretch text-center justify-start text-[#8689AA] text-base font-normal leading-relaxed">
                Your RWA listing has been published and is now visible to potential buyers
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-4">
              <button 
                onClick={handleViewListing}
                data-show-label="true" 
                data-show-left-icon="false" 
                data-show-right-icon="false" 
                data-size="Large" 
                data-state="Enabled" 
                data-type="FIlled" 
                className="flex-1 px-11 py-4 bg-[#444A69] cursor-pointer rounded flex justify-center items-center overflow-hidden hover:bg-[#D8DAEB]/90 transition-colors duration-200"
              >
                <div className="h-5 flex justify-center items-center gap-2">
                  <div className="justify-start text-[#D8DAEB] whitespace-nowrap text-sm sm:text-base font-medium">
                    View listing
                  </div>
                </div>
              </button>
              <button 
                onClick={handleCreateNew}
                data-show-label="true" 
                data-show-left-icon="false" 
                data-show-right-icon="false" 
                data-size="Large" 
                data-state="Enabled" 
                data-type="FIlled" 
                className="flex-1 px-11 py-4 bg-[#3396FF] cursor-pointer rounded flex justify-center items-center overflow-hidden hover:bg-Primary-primary-500/90 transition-colors duration-200"
              >
                <div className="h-5 flex justify-center items-center gap-2">
                  <div className="justify-start text-white whitespace-nowrap text-sm sm:text-base  font-medium">
                    Create New
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <button 
          onClick={handleClose}
          className="p-3.5 left-[539px] top-0 absolute inline-flex justify-start items-start gap-2"
        >
          <div className="w-6 h-6 relative">
            <div className="w-3.5 h-3.5 left-[4.50px] top-[4.53px] absolute bg-Primary-primary-400" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default PostSuccess; 