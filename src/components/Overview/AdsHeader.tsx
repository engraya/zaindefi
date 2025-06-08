import { VuesaxIcon1, VuesaxIcon2 } from '../../Icons/AddsIcons'

type AdsHeaderProps = {
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
};

function AdsHeader({ view, setView }: AdsHeaderProps) {
  return (
    <div className="self-stretch h-12 inline-flex justify-between items-center">
    <h6 className="justify-start text-white text-xl sm:text-2xl md:text-3xl font-normal tracking-tight">
      Trending Ads
    </h6>
      <div className="w-36 flex justify-end gap-4 items-center">
        <button
          onClick={() => setView("grid")}
          className={view === "grid" ? "opacity-100 cursor-pointer" : "opacity-50 cursor-pointer"}
          aria-label="Grid View"
        >
          <VuesaxIcon1 />
        </button>
        <button
          onClick={() => setView("list")}
          className={view === "list" ? "opacity-100 cursor-pointer" : "opacity-50 cursor-pointer"}
          aria-label="List View"
        >
          <VuesaxIcon2 />
        </button>
      </div>
    </div>
  )
}

export default AdsHeader