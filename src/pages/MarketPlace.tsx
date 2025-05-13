import StatsContainer from '../components/MarketPlace/StatsContainer'
import OverviewContainer from '../components/MarketPlace/OverviewContainer'
import OverviewSection from '../components/MarketPlace/OverviewSection'
function MarketPlace() {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <OverviewContainer/>
      <StatsContainer/>
      <OverviewSection/>
    </div>
  )
}

export default MarketPlace