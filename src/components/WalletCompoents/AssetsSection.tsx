import { useState } from "react";
import { FilterIcon } from "../../Icons/AssetsIcon";
import AssetCard from "./AssetCard";
import type { AssetCardProps } from "./AssetCard";

const assets: AssetCardProps[] = [
  {
    variant: 1,
    title: "Gold – 100g Bar",
    certification: "LBMA Certified",
    tokenizedLabel: "Tokenized",
    tokenizedColorClass: "bg-emerald-500/20 text-emerald-500",
    gradeLabel: "Grade",
    gradeValue: "99.99% Pure",
    locationLabel: "Location",
    locationValue: "Zurich Vault",
    dateLabel: "Tokenized Date",
    dateValue: "Apr 10, 2025",
    valueLabel: "Current Value",
    value: "$6,842.00",
    buttonLabel: "List for Sale",
  },
  {
    variant: 2,
    title: "Silver – 1kg Bar",
    certification: "COMEX Certified",
    tokenizedLabel: "Tokenized",
    tokenizedColorClass: "bg-emerald-500/20 text-emerald-500",
    gradeLabel: "Grade",
    gradeValue: "99.9% Pure",
    locationLabel: "Location",
    locationValue: "Singapore Vault",
    dateLabel: "Listed Date",
    dateValue: "Apr 12, 2025",
    valueLabel: "Listed Price",
    value: "$1,250.00",
    buttonLabel: "Edit Listing",
  },
  {
    variant: 3,
    title: "Platinum – 50g Bar",
    certification: "PGM Certified",
    tokenizedLabel: "Tokenized",
    tokenizedColorClass: "bg-emerald-500/20 text-emerald-500",
    gradeLabel: "Grade",
    gradeValue: "99.95% Pure",
    locationLabel: "Location",
    locationValue: "London Vault",
    dateLabel: "Tokenized Date",
    dateValue: "Apr 5, 2025",
    valueLabel: "Current Value",
    value: "$3,475.00",
    buttonLabel: "List for Sale",
  },
];

function AssetsSection() {
  const [search, setSearch] = useState("");

  const filteredAssets = assets.filter((asset) =>
    asset.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="self-stretch relative flex flex-col justify-start items-start gap-5">
      <header className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <h2 className="text-white text-xl font-bold leading-7">My Assets</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="w-full sm:w-48 pl-4 pr-4 py-2 bg-gray-900 rounded-full flex items-center overflow-hidden">
            <svg
              className="w-4 h-4 text-color-azure-65 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="bg-transparent outline-none text-[#94A3B8] text-sm flex-1"
              placeholder="Search assets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search assets"
            />
          </div>
          <button className="w-full sm:w-auto px-3 py-2 bg-gray-900 rounded-lg flex items-center gap-2" type="button">
            <FilterIcon />
            <span className="text-white text-sm font-normal leading-normal">Filter</span>
          </button>
        </div>
      </header>
      <div className="self-stretch flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-4 sm:gap-6">
        {filteredAssets.map((asset, idx) => (
          <AssetCard key={idx} {...asset} />
        ))}
      </div>
      <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
        <button className="px-6 py-3 rounded-3xl outline outline-offset-[-1px] outline-indigo-400 flex justify-center items-center overflow-hidden">
          <span className="text-indigo-400 text-sm font-normal leading-snug">View all assets</span>
        </button>
      </div>
    </section>
  );
}
export default AssetsSection;