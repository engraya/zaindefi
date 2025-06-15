import React, { useState, useRef } from 'react';
import { CloudSvg } from '../../Icons/Icons';

interface SummaryData {
  assetType: string;
  quantity: string;
  price: string;
  delivery: string;
  expiration: string;
}

const SummarySection: React.FC = () => {
  const [notes, setNotes] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
   
  const [, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // This would come from your global state/context in a real app
  const summaryData: SummaryData = {
    assetType: 'Crude oil',
    quantity: '5 Barrels',
    price: '$234',
    delivery: 'Shipping',
    expiration: 'May 9, 2025'
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
      <div className="inline-flex justify-center items-center gap-2.5">
        <div className="justify-center text-white text-base font-bold leading-normal">Finalize Listing</div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-5">
        {/* Notes Section */}
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-start gap-2">
              <div className="text-white text-sm font-normal leading-snug">Seller Notes & Terms</div>
            </div>
            <div className="self-stretch p-4 sm:p-6 bg-neutral-800 rounded-xl outline outline-offset-[-1px] outline-slate-600 flex flex-col justify-start items-start gap-24">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Additional Information, terms, or notes for potential buyers"
                className="w-full bg-transparent text-gray-400 text-sm font-normal leading-snug focus:outline-none resize-none"
                rows={4}
              />
              <div className="self-stretch inline-flex justify-end items-end gap-2.5">
                <div className="text-gray-400 text-sm font-normal leading-snug">
                  {notes.length}/1000
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            <div className="text-white text-sm font-semibold leading-tight">Upload supporting Documents</div>
          </div>
          <div 
            className="self-stretch min-h-[14rem] sm:h-48 px-3 sm:px-6 py-4 sm:py-7 bg-neutral-800 rounded-2xl outline outline-offset-[-1px] outline-slate-600 flex justify-center items-center gap-3 overflow-hidden"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex-1 flex flex-col justify-start items-center gap-3 sm:gap-4 py-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative bg-gray-900 rounded-full flex justify-center items-center">
                <CloudSvg />
              </div>
              <div className="self-stretch flex flex-col justify-start items-center gap-1 sm:gap-2">
                <div className="self-stretch text-center flex flex-col justify-center items-center gap-1">
                  <div className="text-gray-400 text-xs sm:text-sm font-normal px-2">Upload certificates, contracts, or other documents</div>
                </div>
                <div className="self-stretch text-center text-gray-500 text-[10px] sm:text-xs font-normal px-2">
                  Supported formats: PDF, DOC, DOCX (Max 25MB each)
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  multiple
                />
                <button 
                  onClick={triggerFileInput}
                  className="mt-2 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#3396FF] rounded-xl flex justify-center items-center overflow-hidden hover:bg-[#3396FF]/90 transition-colors duration-200"
                >
                  <div className="h-5 flex justify-center items-center gap-2">
                    <div className="text-white text-xs sm:text-sm font-medium">Browse Files</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="self-stretch p-4 sm:p-6 bg-gray-800 rounded-xl flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          <div className="self-stretch flex justify-start items-start gap-5">
            <div className="flex-1 flex justify-start items-start gap-2">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="flex justify-center items-center gap-2.5">
                  <div className="w-6 h-6 relative">
                    <div className="w-5 h-5 left-[2px] top-[2px] absolute rounded-full outline outline-offset-[-0.75px] outline-gray-400" />
                    <div className="w-[0.01px] h-px left-[11.99px] top-[15px] absolute outline outline-offset-[-1px] outline-gray-400" />
                    <div className="w-0 h-1 left-[12px] top-[12px] absolute origin-top-left -rotate-180 outline outline-offset-[-0.75px] outline-gray-400" />
                  </div>
                  <div className="text-gray-400 text-sm font-semibold leading-tight">Listing Summary</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-5">
            <div className="w-full sm:flex-1 flex flex-col sm:flex-row justify-between items-start">
              <div className="w-full sm:w-auto flex flex-col justify-start items-start gap-2">
                {Object.keys(summaryData).map((key) => (
                  <div key={key} className="w-full sm:w-auto flex justify-between sm:justify-start items-center gap-2.5">
                    <div className="text-gray-400 text-sm font-medium leading-tight">
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </div>
                    <div className="sm:hidden text-gray-300 text-sm font-semibold leading-tight">
                      {summaryData[key as keyof SummaryData]}
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:flex flex-col justify-start items-end gap-2">
                {Object.values(summaryData).map((value, index) => (
                  <div key={index} className="flex justify-center items-center gap-2.5">
                    <div className="text-gray-300 text-sm font-semibold leading-tight">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="flex flex-col justify-center items-start gap-2">
        <div className="flex items-center gap-2 w-full">
          <div className="p-0.5 sm:p-1 flex-shrink-0">
            <div 
              onClick={() => setTermsAccepted(!termsAccepted)}
              className={`w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center cursor-pointer transition-colors duration-200 ${
                termsAccepted ? 'bg-[#3396FF]' : 'outline outline-offset-[-0.5px] outline-[#3396FF]'
              }`}
            >
              {termsAccepted && (
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-1 text-xs sm:text-sm">
            <span className="text-gray-300 font-normal">I agree to the</span>
            <span className="text-[#3396FF] font-normal underline cursor-pointer">Terms and Conditions</span>
            <span className="text-gray-300 font-normal">and</span>
            <span className="text-[#3396FF] font-normal underline cursor-pointer">Seller Guidelines</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySection; 