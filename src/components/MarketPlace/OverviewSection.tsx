import BuySellToggle from "./BuySellToggle"
import StatsInfoSection from "./StatsInfoSection"
import { useState } from "react"
import AdvertisersTable from "./AdverisersTable";
import SelectionSection from "./SelectionSection";

function OverviewSection() {
    const [selectedAction, setSelectedAction] = useState<'buy' | 'sell'>('buy');
  return (
    <div className="self-stretch p-6 bg-gray-800 rounded-xl inline-flex flex-col justify-start items-start gap-5">
    <BuySellToggle onChange={setSelectedAction} />
    <SelectionSection/>
    <StatsInfoSection/>
    <AdvertisersTable selectedAction={selectedAction}/>
</div>
  )
}

export default OverviewSection