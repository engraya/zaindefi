import { CopyIcon } from "../Icons/DetailsIcon";
import AssetDescription from "./AssetDescription";

interface Detail {
  assetType: string;
  gradeQuality: string;
  contractAddress: string;
  quantity: string;
}

interface AssetSpecificationsProps {
  details: Detail;
  primaryDescription: string;
  secondaryDescription: string;
}

function AssetSpecifications({ details, primaryDescription, secondaryDescription }: AssetSpecificationsProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="p-4 sm:p-6 bg-gray-900 rounded-lg flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-lg font-bold">Asset Specifications</h2>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800 rounded-lg flex flex-col gap-1">
                <div className="text-[#8689AA] text-sm">Asset Type</div>
                <div className="text-white text-base font-medium">{details.assetType}</div>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg flex flex-col gap-1">
                <div className="text-[#8689AA] text-sm">Grade/Quality</div>
                <div className="text-white text-base font-medium">{details.gradeQuality}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800 rounded-lg flex flex-col gap-1">
                <div className="text-[#8689AA] text-sm">Contract Address</div>
                <div className="flex items-center gap-2">
                  <div className="text-white text-base font-medium truncate">{details.contractAddress}</div>
                  <button className="p-1 hover:bg-gray-700 rounded">
                    <CopyIcon className="text-[#C1C5E0] w-4 h-4" />
                  </button>
                  <a href="#" className="text-[#45D8A1] text-sm hover:underline">View on Etherscan</a>
                </div>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg flex flex-col gap-1">
                <div className="text-[#8689AA] text-sm">Quantity</div>
                <div className="text-white text-base font-medium">{details.quantity}</div>
              </div>
            </div>
          </div>
          <AssetDescription
            primaryDescription={primaryDescription}
            secondaryDescription={secondaryDescription}
          />
        </div>
      </div>
    </div>
  );
}

export default AssetSpecifications; 