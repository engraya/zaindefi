type MobileSideCardProps = {
  image: string;
  title: string;
  adsCount: number;
};

function MobileSideCard({ image, title, adsCount }: MobileSideCardProps) {
  return (
    <div className="w-16 rounded-md inline-flex flex-col justify-start items-start">
      <div className="self-stretch p-2 bg-zinc-950 rounded-md inline-flex justify-start items-center gap-3">
        <div className="flex-1 rounded-md inline-flex flex-col justify-center items-center gap-6">
          <div className="self-stretch flex flex-col justify-center items-center gap-1.5">
            <img className="w-6 h-6 rounded" src={image} alt={title} />
            <div className="flex flex-col justify-start items-center">
              <div className="self-stretch text-center justify-start text-indigo-50 text-[10px] font-semibold leading-none">{title}</div>
              <div className="self-stretch text-center justify-start text-zinc-400 text-[10px] font-normal leading-none">{adsCount} Ads</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSideCard;