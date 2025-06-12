interface AssetDescriptionProps {
  primaryDescription: string;
  secondaryDescription: string;
}

function AssetDescription({ primaryDescription, secondaryDescription }: AssetDescriptionProps) {
  return (
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-4">
      <div className="self-stretch pt-2 flex flex-col justify-start items-start">
        <div className="self-stretch justify-start text-white text-lg font-bold leading-7">Detailed Description</div>
      </div>
      <div className="self-stretch p-4 bg-gray-800 rounded-lg flex flex-col justify-start items-start gap-3">
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-white text-sm font-normal leading-normal">{primaryDescription}</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-white text-sm font-normal leading-normal">{secondaryDescription}</div>
        </div>
      </div>
    </div>
  );
}

export default AssetDescription; 