import StatsContainer from '../components/MarketPlace/StatsContainer'
import OverviewContainer from '../components/MarketPlace/OverviewContainer'
import TrendingAds from '../components/Overview/TrendingAds'

function Overview() {
  return (
    <div className="flex flex-col w-full h-full gap-4 pt-16">
      <OverviewContainer/>
      <StatsContainer/>
      <TrendingAds/>
    </div>
  )
}

export default Overview