import { trendingCardsData } from "../../lib/TrendingData";
import Pagination from "../Pagination/Pagination";
import TrendingCard from "./TrendingCard"
import HorizontalCard from "./Cards/HorizontalCard"

type AdsGridCardProps = {
  view: "grid" | "list";
};

function AdsGridCard({ view }: AdsGridCardProps) {
  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-5">
      {view === "grid" ? (
      <div className="self-stretch grid grid-cols-2 md:grid-cols-3 gap-6">
        {trendingCardsData.map((card, idx) => (
          <TrendingCard key={idx} {...card} />
        ))}
      </div>
      ) : (
        <div className="self-stretch flex flex-col gap-6">
          {trendingCardsData.map((card, idx) => (
            <HorizontalCard key={idx} {...card} />
          ))}
        </div>
      )}
      <Pagination/>
    </div>
  );
}

export default AdsGridCard