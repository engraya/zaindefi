import SelectionSection from "../MarketPlace/SelectionSection";
import CoinsToggle from "./CoinsToggle";
import AddsSection from "./AddsSection";
function TrendingAds() {
  return (
    <div className="self-stretch p-6 bg-gray-800 rounded-xl inline-flex flex-col justify-start items-start gap-5">
        <CoinsToggle />
        <SelectionSection/>
        <AddsSection/>
    </div>
  )
}

export default TrendingAds