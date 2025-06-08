import { ArrowIcon } from "../../Icons/AddsIcons"

type SideCardProps = {
  image: string;
  title: string;
  adsCount: number;
};

function SideCard({ image, title, adsCount }: SideCardProps) {
  return (
    <div className="self-stretch rounded-tl-xl rounded-tr-xl flex flex-col justify-start items-start">
      <div className="self-stretch px-4 py-3 rounded-tl-xl rounded-tr-xl border-b border-gray-800 inline-flex justify-start items-center gap-3">
        <div className="flex-1 flex justify-start items-center gap-6">
          <div className="flex-1 flex justify-start items-center gap-3">
            <img className="w-10 h-10 rounded-md" src={image} />
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-start text-indigo-50 text-sm font-semibold leading-tight">{title}</div>
              <div className="self-stretch justify-start text-zinc-400 text-xs font-normal leading-none">{adsCount} Ads</div>
            </div>
          </div>
          <div className="w-4 h-4 relative overflow-hidden">
            <ArrowIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideCard