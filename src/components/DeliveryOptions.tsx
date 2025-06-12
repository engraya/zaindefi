import { useState } from 'react';
import { ManifestIcon } from '../Icons/DetailsIcon';

type DeliveryOption = 'FOB' | 'CIF';

function DeliveryOptions() {
  const [selectedDelivery, setSelectedDelivery] = useState<DeliveryOption>('FOB');

  return (
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-4 w-full">
      <div className="w-full max-w-[595px] pt-2 flex flex-col justify-start items-start">
        <div className="self-stretch text-white text-lg font-bold leading-7">Delivery Options</div>
      </div>
      <div className="self-stretch p-4 bg-gray-800 rounded-lg flex flex-col justify-start items-start gap-4">
        {/* FOB Option */}
        <div 
          className={`self-stretch p-4 ${selectedDelivery === 'FOB' ? 'bg-blue-800/10' : ''} rounded-lg outline outline-offset-[-1px] ${selectedDelivery === 'FOB' ? 'outline-[#3396FF]' : 'outline-gray-600'} flex flex-col justify-start items-start cursor-pointer`}
          onClick={() => setSelectedDelivery('FOB')}
        >
          <div className="self-stretch inline-flex justify-between items-start w-full">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-3 w-full">
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <div className="inline-flex items-center gap-2">
                  <div className="w-6 h-6 flex justify-center items-center">
                    <ManifestIcon/>
                  </div>
                  <div className="text-white text-base font-medium leading-normal">FOB Bonny Terminal (Nigeria)</div>
                </div>
                <div className="w-6 h-6 relative overflow-hidden ml-auto">
                  <div className={`w-5 h-5 left-[2px] top-[2px] absolute ${selectedDelivery === 'FOB' ? 'bg-[#3396FF]' : 'bg-Grey-Text-secondary'} rounded-full`} />
                  <div className="w-6 h-6 left-0 top-0 absolute" />
                </div>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-gray-500 text-xs font-normal leading-none">Delivery Fee</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-white text-base font-medium leading-normal">No fee</div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-gray-500 text-xs font-normal leading-none">Availability</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-white text-base font-medium leading-normal">Immediate</div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-gray-500 text-xs font-normal leading-none">Terms</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-white text-base font-medium leading-normal">FOB Incoterms 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CIF Option */}
        <div 
          className={`self-stretch p-4 ${selectedDelivery === 'CIF' ? 'bg-blue-800/10' : ''} rounded-lg outline outline-offset-[-1px] ${selectedDelivery === 'CIF' ? 'outline-[#3396FF]' : 'outline-gray-600'} flex flex-col justify-start items-start cursor-pointer`}
          onClick={() => setSelectedDelivery('CIF')}
        >
          <div className="self-stretch inline-flex justify-between items-start w-full">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-3 w-full">
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <div className="inline-flex items-center gap-2">
                  <div className="w-6 h-6 flex justify-center items-center">
                    <ManifestIcon/>
                  </div>
                  <div className="text-white text-base font-medium leading-normal">CIF Rotterdam (Netherlands)</div>
                </div>
                <div className="w-6 h-6 relative overflow-hidden ml-auto">
                  <div className={`w-5 h-5 left-[2px] top-[2px] absolute ${selectedDelivery === 'CIF' ? 'bg-[#3396FF]' : 'bg-Grey-Text-secondary'} rounded-full`} />
                  <div className="w-6 h-6 left-0 top-0 absolute" />
                </div>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-gray-500 text-xs font-normal leading-none">Delivery Fee</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-white text-base font-medium leading-normal">$2.10/bbl ($1,050,000 total)</div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-gray-500 text-xs font-normal leading-none">Delivery Time</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-white text-base font-medium leading-normal">14-18 business days</div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-gray-500 text-xs font-normal leading-none">Terms</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-white text-base font-medium leading-normal">CIF Incoterms 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions; 