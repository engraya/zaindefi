import React, { useState, useRef } from 'react';
import type { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlueDrpdownSvg, CancelSvg, CloudSvg, DropDownSvg, SearchSvg } from '../Icons/Icons';
import Stepper from '../components/Stepper/Stepper';
import PricingSection from '../components/Pricing/PricingSection';
import DeliverySection from '../components/Delivery/DeliverySection';
import SummarySection from '../components/Summary/SummarySection';
import SuccessModal from '../components/Modals/SuccessModal';

const STEPS = [
  { id: 1, title: 'Asset info' },
  { id: 2, title: 'Pricing' },
  { id: 3, title: 'Delivery' },
  { id: 4, title: 'Summary' }
];

function PostConfirmation() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isOriginal, setIsOriginal] = useState(true);
  const [assetTypeDropdownOpen, setAssetTypeDropdownOpen] = useState(false);
  const [unitDropdownOpen, setUnitDropdownOpen] = useState(false);
  const [selectedAssetType, setSelectedAssetType] = useState<{ id: number; name: string } | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<{ id: number; name: string } | null>(null);
  const [assetSearchTerm, setAssetSearchTerm] = useState('');
  const [unitSearchTerm, setUnitSearchTerm] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [showAdvancedFields, setShowAdvancedFields] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const assetTypes = [
    { id: 1, name: 'Gold' },
    { id: 2, name: 'Silver' },
    { id: 3, name: 'Crude Oil' },
    { id: 4, name: 'Natural Gas' }
  ];

  const units = [
    { id: 1, name: 'Grams' },
    { id: 2, name: 'Kilograms' },
    { id: 3, name: 'Ounces' },
    { id: 4, name: 'Barrels' }
  ];

  const filteredAssetTypes = assetTypes.filter(type =>
    type.name.toLowerCase().includes(assetSearchTerm.toLowerCase())
  );

  const filteredUnits = units.filter(unit =>
    unit.name.toLowerCase().includes(unitSearchTerm.toLowerCase())
  );

  const handleCancel = () => {
    navigate(-1);
  };

  const handleAssetTypeSelect = (type: typeof assetTypes[0]) => {
    setSelectedAssetType(type);
    setAssetTypeDropdownOpen(false);
  };

  const handleUnitSelect = (unit: typeof units[0]) => {
    setSelectedUnit(unit);
    setUnitDropdownOpen(false);
  };

  const handleToggle = () => {
    setIsOriginal(!isOriginal);
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
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

  const handleRemoveFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleNextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      navigate(-1);
    }
  };

  const handlePublish = () => {
    // Here you would typically handle the form submission
    // After successful submission, navigate to the success page
    navigate('/post-success');
  };

  const handleViewListing = () => {
    setShowSuccessModal(false);
    // Navigate to the listing view page
    navigate('/listings');
  };

  const handleCreateNew = () => {
    setShowSuccessModal(false);
    setCurrentStep(1);
    // Reset form data here
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="justify-center text-white text-lg font-bold leading-normal">Asset Information</div>
            <div className="self-stretch h-16 flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-white text-sm font-semibold leading-tight">Asset type</div>
              <div className="self-stretch h-10 flex flex-col justify-start items-start gap-1 relative">
                <div 
                  className="self-stretch h-10 px-3 py-2 bg-neutral-800 rounded-md flex flex-col justify-center items-start gap-1 cursor-pointer hover:bg-neutral-700 transition-colors duration-200"
                  onClick={() => setAssetTypeDropdownOpen(!assetTypeDropdownOpen)}
                >
                  <div className="self-stretch inline-flex justify-between items-start">
                    <div className="flex justify-start items-start gap-1">
                      <div className="flex justify-start items-center gap-1">
                        {selectedAssetType ? (
                          <div className="text-indigo-50 text-sm font-normal">{selectedAssetType.name}</div>
                        ) : (
                          <div className="text-gray-400 text-sm font-normal leading-tight">Select asset type</div>
                        )}
                      </div>
                    </div>
                    <DropDownSvg/>
                  </div>
                </div>
                {assetTypeDropdownOpen && (
                  <div className="w-full p-2 bg-gray-900 rounded-xl inline-flex flex-col justify-start items-start gap-2.5 absolute top-full left-0 z-10 mt-1 shadow-lg">
                    <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch h-9 px-3 py-2 bg-gray-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                          <div className="flex-1 flex justify-start items-center gap-3">
                            <SearchSvg/>
                            <input
                              type="text"
                              value={assetSearchTerm}
                              onChange={(e) => setAssetSearchTerm(e.target.value)}
                              placeholder="search"
                              className="flex-1 bg-transparent text-slate-600 text-sm font-normal leading-tight focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        {filteredAssetTypes.map((type) => (
                          <div 
                            key={type.id} 
                            onClick={() => handleAssetTypeSelect(type)}
                            className="self-stretch px-3 py-2 rounded-md flex flex-col justify-start items-start gap-1 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                          >
                            <div className="self-stretch inline-flex justify-start items-start gap-3">
                              <div className="flex justify-start items-start gap-1">
                                <div className="justify-center text-indigo-50 text-sm font-normal leading-tight">{type.name}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="self-stretch h-16 flex flex-col justify-start items-start gap-2">
              <div className="justify-center text-white text-sm font-semibold leading-tight">Grade/Quality</div>
              <div className="self-stretch h-10 flex flex-col justify-start items-start gap-1">
                <div className="self-stretch flex-1 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-2 overflow-hidden">
                  <input
                    type="text"
                    placeholder="e.g. 24k, 999 Fine, WTI, pure, bars, Brent crude"
                    className="flex-1 bg-transparent text-gray-200 text-sm font-normal leading-tight focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-5">
              <div className="flex-1 h-16 inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-center text-white text-sm font-semibold leading-tight">Quantity</div>
                <div className="self-stretch h-10 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch flex-1 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-2 overflow-hidden">
                    <input
                      type="text"
                      placeholder="Amount"
                      className="flex-1 bg-transparent text-gray-200 text-sm font-normal leading-tight focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 h-16 inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-center text-white text-sm font-semibold leading-tight">Unit</div>
                <div className="self-stretch h-10 flex flex-col justify-start items-start gap-1 relative">
                  <div 
                    className="self-stretch h-10 px-3 py-2 bg-neutral-800 rounded-md flex flex-col justify-center items-start gap-1 cursor-pointer hover:bg-neutral-700 transition-colors duration-200"
                    onClick={() => setUnitDropdownOpen(!unitDropdownOpen)}
                  >
                    <div className="self-stretch inline-flex justify-between items-start">
                      <div className="flex justify-start items-start gap-1">
                        <div className="flex justify-start items-center gap-1">
                          {selectedUnit ? (
                            <div className="text-indigo-50 text-sm font-normal">{selectedUnit.name}</div>
                          ) : (
                            <div className="text-gray-400 text-sm font-normal leading-tight">Select unit</div>
                          )}
                        </div>
                      </div>
                      <DropDownSvg/>
                    </div>
                  </div>
                  {unitDropdownOpen && (
                    <div className="w-full p-2 bg-gray-900 rounded-xl inline-flex flex-col justify-start items-start gap-2.5 absolute top-full left-0 z-10 mt-1 shadow-lg">
                      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                        <div className="self-stretch flex flex-col justify-start items-start gap-1">
                          <div className="self-stretch h-9 px-3 py-2 bg-gray-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                            <div className="flex-1 flex justify-start items-center gap-3">
                              <SearchSvg/>
                              <input
                                type="text"
                                value={unitSearchTerm}
                                onChange={(e) => setUnitSearchTerm(e.target.value)}
                                placeholder="search"
                                className="flex-1 bg-transparent text-slate-600 text-sm font-normal leading-tight focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-1">
                          {filteredUnits.map((unit) => (
                            <div 
                              key={unit.id} 
                              onClick={() => handleUnitSelect(unit)}
                              className="self-stretch px-3 py-2 rounded-md flex flex-col justify-start items-start gap-1 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                            >
                              <div className="self-stretch inline-flex justify-start items-start gap-3">
                                <div className="flex justify-start items-start gap-1">
                                  <div className="justify-center text-indigo-50 text-sm font-normal leading-tight">{unit.name}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch inline-flex justify-start items-start gap-2">
                  <div className="justify-start text-white text-sm font-semibold leading-snug">Description</div>
                </div>
                <div className="self-stretch p-6 bg-neutral-800 rounded-xl outline outline-offset-[-1px] outline-slate-600 flex flex-col justify-start items-start gap-24">
                  <textarea
                    placeholder="Description of the asset"
                    className="w-full bg-transparent text-gray-200 text-sm font-normal leading-snug focus:outline-none resize-none"
                    rows={4}
                  />
                  <div className="self-stretch inline-flex justify-end items-end gap-2.5">
                    <div className="text-gray-400 text-sm font-normal leading-snug">0/1000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch inline-flex justify-between items-start">
                <div className="flex justify-center items-center gap-2.5">
                  <div className="text-white text-sm font-semibold leading-tight">Upload photos</div>
                </div>
                <div className="flex justify-center items-center gap-2.5">
                  <div className="flex justify-start items-center gap-4">
                    <div className="text-gray-200 text-base font-semibold">Original</div>
                    <div 
                      onClick={handleToggle}
                      className={`relative w-14 h-8 rounded-2xl cursor-pointer transition-colors duration-200 ${isOriginal ? 'bg-[#3396FF]' : 'bg-gray-600'}`}
                    >
                      <div 
                        className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-all duration-200 ${isOriginal ? 'right-1' : 'left-1'}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="self-stretch h-64 px-6 py-7 bg-neutral-800 rounded-2xl outline outline-offset-[-1px] outline-slate-600 inline-flex justify-center items-center gap-3 overflow-hidden"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="flex-1 inline-flex flex-col justify-start items-center gap-4">
                  <div className="w-14 h-14 relative bg-gray-900 rounded-full flex justify-center items-center">
                    <CloudSvg />
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-center gap-0.5">
                    <div className="self-stretch inline-flex justify-center items-center gap-1">
                      <div className="rounded-lg inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden">
                        <div className="inline-flex justify-center items-center gap-2">
                          <div 
                            onClick={triggerFileInput}
                            className="text-center text-[#3396FF] text-sm font-semibold leading-tight cursor-pointer hover:text-[#3396FF]/90 transition-colors duration-200"
                          >
                            Click to upload
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm font-normal leading-tight">or drag and drop</div>
                    </div>
                    <div className="self-stretch text-center text-gray-500 text-xs font-normal leading-none">SVG, PNG, JPG or GIF (max. 800x400px)</div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="w-full h-px left-0 top-[12px] absolute bg-gray-600" />
                    <div className="px-2 absolute left-1/2 top-[6.50px] -translate-x-1/2 bg-[#C1C5E0] rounded-3xl">
                      <div className="text-center text-gray-800 text-xs font-semibold leading-none">OR</div>
                    </div>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                    accept="image/*"
                    multiple
                  />
                  <button 
                    onClick={triggerFileInput}
                    className="px-6 py-3 bg-[#3396FF] rounded-xl inline-flex justify-center items-center overflow-hidden hover:bg-[#3396FF]/90 transition-colors duration-200"
                  >
                    <div className="h-5 flex justify-center items-center gap-2">
                      <div className="text-white text-sm font-medium leading-snug">Browse Files</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Image Preview Section */}
            {uploadedFiles.length > 0 && (
              <div className="self-stretch flex flex-col justify-start items-start gap-2 mb-2">
                <div className="grid grid-cols-4 gap-4 w-full">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="absolute top-2 right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Advanced Fields Toggle */}
            <div className="self-stretch flex justify-start items-center">
              <div 
                onClick={() => setShowAdvancedFields(!showAdvancedFields)} 
                className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              >
                <div className="text-[#3396FF] text-sm font-semibold leading-tight">Advanced fields</div>
                <div className={`flex items-center justify-center transform transition-transform duration-200 ${showAdvancedFields ? 'rotate-180' : ''}`}>
                  <BlueDrpdownSvg/>
                </div>
              </div>
            </div>

            {/* Advanced Fields Section */}
            {showAdvancedFields && (
              <div className="self-stretch flex flex-col justify-start items-start gap-5">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch inline-flex justify-start items-start gap-2">
                      <div className="justify-start text-white text-sm font-normal leading-snug">Specifications</div>
                    </div>
                    <div className="self-stretch p-6 bg-neutral-800 rounded-xl outline outline-offset-[-1px] outline-slate-600 flex flex-col justify-start items-start gap-24">
                      <textarea
                        placeholder="Detailed specifications of your asset"
                        className="w-full bg-transparent text-gray-200 text-sm font-normal leading-snug focus:outline-none resize-none"
                        rows={4}
                      />
                      <div className="self-stretch inline-flex justify-end items-end gap-2.5">
                        <div className="text-gray-400 text-sm font-normal leading-snug">0/1000</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch h-36 flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch inline-flex justify-start items-start gap-2">
                      <div className="justify-start text-white text-sm font-normal leading-snug">Price History</div>
                    </div>
                    <div className="self-stretch flex-1 p-6 bg-neutral-800 rounded-xl outline outline-offset-[-1px] outline-slate-600 flex flex-col justify-between items-start">
                      <textarea
                        placeholder="Brief history of asset's price movements"
                        className="w-full bg-transparent text-gray-200 text-sm font-normal leading-snug focus:outline-none resize-none"
                        rows={3}
                      />
                      <div className="self-stretch inline-flex justify-end items-end gap-2.5">
                        <div className="text-gray-400 text-sm font-normal leading-snug">0/1000</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch h-36 flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch inline-flex justify-start items-start gap-2">
                      <div className="justify-start text-white text-sm font-normal leading-snug">Authentication</div>
                    </div>
                    <div className="self-stretch flex-1 p-6 bg-neutral-800 rounded-xl outline outline-offset-[-1px] outline-slate-600 flex flex-col justify-between items-start">
                      <textarea
                        placeholder="Details about asset authentication"
                        className="w-full bg-transparent text-gray-200 text-sm font-normal leading-snug focus:outline-none resize-none"
                        rows={3}
                      />
                      <div className="self-stretch inline-flex justify-end items-end gap-2.5">
                        <div className="text-gray-400 text-sm font-normal leading-snug">0/1000</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch h-36 flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch inline-flex justify-start items-start gap-2">
                      <div className="justify-start text-white text-sm font-normal leading-snug">Ownership History</div>
                    </div>
                    <div className="self-stretch flex-1 p-6 bg-neutral-800 rounded-xl outline outline-offset-[-1px] outline-slate-600 flex flex-col justify-between items-start">
                      <textarea
                        placeholder="Previous ownership information"
                        className="w-full bg-transparent text-gray-200 text-sm font-normal leading-snug focus:outline-none resize-none"
                        rows={3}
                      />
                      <div className="self-stretch inline-flex justify-end items-end gap-2.5">
                        <div className="text-gray-400 text-sm font-normal leading-snug">0/1000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="w-32 h-20 p-1 rounded-md inline-flex justify-end items-start gap-2">
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
        );
      case 2:
        return <PricingSection />;
      case 3:
        return <DeliverySection />;
      case 4:
        return <SummarySection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: '#171825BF' }}>
      <div className="w-full max-w-[887px] bg-gray-900 rounded-3xl">
        <div className="rounded-xl flex flex-col justify-start items-start w-full">
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="self-stretch h-14 px-4 sm:px-6 py-4 rounded-tl-xl rounded-tr-xl flex justify-between items-center">
                <div className="w-8"></div>
                <div className="text-white text-base font-bold leading-tight">Post RWA Ads</div>
                <div onClick={handleCancel} className="cursor-pointer w-8 flex justify-end">
                  <CancelSvg/>
                </div>
              </div>
              <Stepper steps={STEPS} currentStep={currentStep} />
            </div>
          </div>
          <div className="self-stretch p-4 sm:p-6 bg-slate-800 rounded-bl-3xl rounded-br-3xl flex flex-col justify-start items-start gap-2.5">
            {renderStepContent()}
            <div className="self-stretch flex flex-col sm:flex-row sm:justify-end items-stretch sm:items-start gap-2 mt-6">
              <button 
                onClick={handlePrevStep}
                className="px-6 sm:px-11 py-4 rounded outline outline-offset-[-0.75px] outline-white/5 flex justify-center items-center overflow-hidden hover:bg-white/10 transition-colors duration-200"
              >
                <div className="h-5 flex justify-center items-center gap-2">
                  <div className="text-gray-400 text-base font-normal">
                    {currentStep === 1 ? 'Back' : 'Previous'}
                  </div>
                </div>
              </button>
              <button 
                onClick={currentStep === STEPS.length ? handlePublish : handleNextStep}
                className="px-6 sm:px-11 py-4 bg-[#3396FF] rounded flex justify-center items-center overflow-hidden hover:bg-[#3396FF]/90 transition-colors duration-200"
              >
                <div className="h-5 flex justify-center items-center gap-2">
                  <div className="text-white text-base font-normal">
                    {currentStep === STEPS.length ? 'Publish' : 'Continue'}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal
          onClose={() => setShowSuccessModal(false)}
          onViewListing={handleViewListing}
          onCreateNew={handleCreateNew}
        />
      )}
    </div>
  );
}

export default PostConfirmation; 