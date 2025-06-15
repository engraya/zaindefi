import React, { useState } from 'react';
import { DropDownSvg, SearchSvg } from '../../Icons/Icons';

interface DeliveryMethod {
  id: number;
  name: string;
  color: string;
}

interface Region {
  id: number;
  name: string;
}

const DELIVERY_METHODS: DeliveryMethod[] = [
  { id: 1, name: 'Shipping', color: 'text-blue-500' },
  { id: 2, name: 'In-Person', color: 'text-green-500' },
  { id: 3, name: 'Digital Transfer', color: 'text-purple-500' },
];

const REGIONS: Region[] = [
  { id: 1, name: 'North America' },
  { id: 2, name: 'Europe' },
  { id: 3, name: 'Asia' },
  { id: 4, name: 'South America' },
  { id: 5, name: 'Africa' },
  { id: 6, name: 'Others' },
];

const DeliverySection: React.FC = () => {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState<DeliveryMethod | null>(null);
  const [deliveryMethodDropdownOpen, setDeliveryMethodDropdownOpen] = useState(false);
  const [deliveryMethodSearchTerm, setDeliveryMethodSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedRegions, setSelectedRegions] = useState<number[]>([]);
  const [estimatedDeliveryTime, setEstimatedDeliveryTime] = useState('');
  const [deliveryFee, setDeliveryFee] = useState('');
  const [extendListing, setExtendListing] = useState(true);

  const filteredDeliveryMethods = DELIVERY_METHODS.filter(method =>
    method.name.toLowerCase().includes(deliveryMethodSearchTerm.toLowerCase())
  );

  const handleRegionToggle = (regionId: number) => {
    setSelectedRegions(prev =>
      prev.includes(regionId)
        ? prev.filter(id => id !== regionId)
        : [...prev, regionId]
    );
  };

  return (
    <div className="self-stretch p-4 sm:p-6 rounded-xl flex flex-col justify-start items-start gap-2.5">
      <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div className="inline-flex justify-center items-center gap-2.5">
          <div className="justify-center text-white text-base font-bold leading-normal">Delivery Options</div>
        </div>

        <div className="self-stretch p-4 sm:p-6 bg-neutral-800 rounded-xl outline outline-offset-[-1px] outline-slate-600 flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            {/* Delivery Method and Location */}
            <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-6">
              {/* Delivery Method Dropdown */}
              <div className="w-full sm:flex-1 h-16 flex flex-col justify-start items-start gap-2">
                <div className="text-white text-sm font-semibold leading-tight">Delivery Method</div>
                <div className="w-full flex flex-col justify-start items-start gap-1 relative">
                  <div 
                    className="self-stretch h-10 px-3 py-2 bg-neutral-800 rounded-md flex flex-col justify-center items-start gap-1 cursor-pointer hover:bg-neutral-700 transition-colors duration-200"
                    onClick={() => setDeliveryMethodDropdownOpen(!deliveryMethodDropdownOpen)}
                  >
                    <div className="self-stretch inline-flex justify-between items-start">
                      <div className="flex justify-start items-start gap-1">
                        <div className="flex justify-start items-center gap-1">
                          {selectedDeliveryMethod ? (
                            <div className="flex items-center gap-1">
                              <div className={`${selectedDeliveryMethod.color} font-semibold`}>|</div>
                              <div className="text-indigo-50 text-sm font-normal">{selectedDeliveryMethod.name}</div>
                            </div>
                          ) : (
                            <div className="text-gray-400 text-sm font-normal leading-tight">Select delivery method</div>
                          )}
                        </div>
                      </div>
                      <DropDownSvg/>
                    </div>
                  </div>
                  {deliveryMethodDropdownOpen && (
                    <div className="w-full p-2 bg-gray-900 rounded-xl inline-flex flex-col justify-start items-start gap-2.5 absolute top-full left-0 z-10 mt-1 shadow-lg">
                      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                        <div className="self-stretch flex flex-col justify-start items-start gap-1">
                          <div className="self-stretch h-9 px-3 py-2 bg-gray-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                            <div className="flex-1 flex justify-start items-center gap-3">
                              <SearchSvg/>
                              <input
                                type="text"
                                value={deliveryMethodSearchTerm}
                                onChange={(e) => setDeliveryMethodSearchTerm(e.target.value)}
                                placeholder="search"
                                className="flex-1 bg-transparent text-slate-600 text-sm font-normal leading-tight focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-1">
                          {filteredDeliveryMethods.map((method) => (
                            <div 
                              key={method.id} 
                              onClick={() => {
                                setSelectedDeliveryMethod(method);
                                setDeliveryMethodDropdownOpen(false);
                              }}
                              className="self-stretch px-3 py-2 rounded-md flex flex-col justify-start items-start gap-1 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                            >
                              <div className="self-stretch inline-flex justify-start items-start gap-3">
                                <div className="flex justify-start items-start gap-1">
                                  <div className="flex justify-start items-center gap-1">
                                    <div className={`${method.color} font-semibold`}>|</div>
                                    <div className="text-indigo-50 text-sm font-normal">{method.name}</div>
                                  </div>
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

              {/* Location Input */}
              <div className="w-full sm:flex-1 h-16 flex flex-col justify-start items-start gap-2">
                <div className="text-white text-sm font-semibold leading-tight">Location</div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, Country or facility name"
                  className="w-full h-10 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 text-white text-sm font-normal focus:outline-none"
                />
              </div>
            </div>

            {/* Accepted Regions */}
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch text-gray-300 text-sm font-bold leading-snug">Accepted Regions</div>
              <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {REGIONS.map((region) => (
                  <div
                    key={region.id}
                    onClick={() => handleRegionToggle(region.id)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div className="p-1">
                      <div 
                        className={`w-6 h-6 rounded flex items-center justify-center transition-colors duration-200 ${
                          selectedRegions.includes(region.id)
                            ? 'bg-[#3396FF] outline-none'
                            : 'outline outline-offset-[-0.5px] outline-[#3396FF]'
                        }`}
                      >
                        {selectedRegions.includes(region.id) && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="text-gray-300 text-sm font-normal">{region.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Time and Fee */}
            <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-6">
              <div className="w-full sm:flex-1 flex flex-col justify-start items-start gap-2">
                <div className="text-white text-sm font-semibold leading-tight">Estimated Delivery Time (Days)</div>
                <input
                  type="text"
                  value={estimatedDeliveryTime}
                  onChange={(e) => setEstimatedDeliveryTime(e.target.value)}
                  placeholder="e.g., 3-5 days"
                  className="w-full h-10 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 text-white text-sm font-normal focus:outline-none"
                />
              </div>
              <div className="w-full sm:flex-1 flex flex-col justify-start items-start gap-2">
                <div className="text-white text-sm font-semibold leading-tight">Delivery fee (optional)</div>
                <input
                  type="number"
                  value={deliveryFee}
                  onChange={(e) => setDeliveryFee(e.target.value)}
                  placeholder="$ 0.00"
                  className="w-full h-10 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 text-white text-sm font-normal focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Extend Listing Toggle */}
        <div className="self-stretch flex justify-between items-center">
          <div className="text-gray-200 text-base font-semibold">Extend Listing</div>
          <div 
            onClick={() => setExtendListing(!extendListing)}
            className={`relative w-14 h-8 rounded-2xl cursor-pointer transition-colors duration-200 ${extendListing ? 'bg-[#3396FF]' : 'bg-gray-600'}`}
          >
            <div 
              className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-all duration-200 ${extendListing ? 'right-1' : 'left-1'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySection; 