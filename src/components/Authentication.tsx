import { CircleCheckIcon, DownloadIcon, ManifestIcon } from '../Icons/DetailsIcon';
import DeliveryOptions from './DeliveryOptions';

function Authentication() {
  return (
    <>
      <div className="p-4 sm:p-6 bg-gray-900 rounded-lg flex flex-col gap-4">
        <h2 className="text-white text-lg font-bold">Authentication</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <CircleCheckIcon className="shrink-0" />
            <div>
              <div className="text-white text-sm sm:text-base">Documentation</div>
              <div className="text-[#C1C5E0] text-xs sm:text-sm">Assay report and cargo manifest available</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CircleCheckIcon className="shrink-0" />
            <div>
              <div className="text-white text-sm sm:text-base">SGS Inspection Completed</div>
              <div className="text-[#C1C5E0] text-xs sm:text-sm">Quality verified by independent laboratory</div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="flex-1 min-w-[200px] px-4 py-2 bg-zinc-900 rounded-lg outline outline-offset-[-1px] outline-[#E0E0E0] flex items-center justify-center gap-2">
            <DownloadIcon className="w-4 h-4" />
            <span className="text-[#E0E0E0] text-xs sm:text-sm font-normal">Download Assay Report</span>
          </button>
          <button className="flex-1 min-w-[200px] px-4 py-2 bg-zinc-900 rounded-lg outline outline-offset-[-1px] outline-[#E0E0E0] flex items-center justify-center gap-2">
            <ManifestIcon className="w-4 h-4" />
            <span className="text-[#E0E0E0] text-xs sm:text-sm font-normal">Download Cargo Manifest</span>
          </button>
        </div>
      </div>
      <DeliveryOptions />
    </>
  );
}

export default Authentication; 