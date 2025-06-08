import AssetsSection from "../../components/WalletCompoents/AssetsSection"
import PortfolioOverview from "../../components/WalletCompoents/PortfolioOverview"
import RecentActivity from "../../components/WalletCompoents/RecentActivity"
import SuggestedSection from "../../components/WalletCompoents/SuggestedSection"
import PagesWrapper from "../../layouts/PagesWrapper"

function Wallet() {
  return (
    <PagesWrapper>
      <div className="w-full max-w-[1280px] p-2 sm:p-4 md:p-8 bg-gray-800 rounded-none sm:rounded-3xl flex flex-col justify-start items-start gap-4 sm:gap-8 mx-auto">
        <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-5">
          <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-2 sm:gap-4">
            <div className="flex-1 flex flex-col justify-start items-start gap-1">
              <div className="w-full text-gray-200 text-xl sm:text-2xl font-semibold leading-7 sm:leading-9">
                Portfolio
              </div>
              <div className="w-full text-violet-100 text-xs sm:text-sm font-normal leading-normal">
                Track and manage your portfolio
              </div>
            </div>
          </div>
        </div>
        <PortfolioOverview />
        <AssetsSection />
        <RecentActivity />
        <SuggestedSection />
      </div>
    </PagesWrapper>
  )
}

export default Wallet