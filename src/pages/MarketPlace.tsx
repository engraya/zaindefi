import StatsContainer from '../components/MarketPlace/StatsContainer'
import OverviewContainer from '../components/MarketPlace/OverviewContainer'

function MarketPlace() {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <OverviewContainer/>
      <StatsContainer/>
    </div>
  )
}

export default MarketPlace