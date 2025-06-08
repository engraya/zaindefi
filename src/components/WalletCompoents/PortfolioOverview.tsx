import { GreenCheckIcon, HistoryIcon, PlusIcon, WalletIcon } from "../../Icons/WalletIcons"

function PortfolioOverview() {
  return (
    <div className="self-stretch p-3 sm:p-6 relative bg-[#171825] rounded-xl sm:rounded-2xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] flex flex-col justify-start items-start gap-5 sm:gap-7 overflow-hidden">
      {/* Header */}
      <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="w-full sm:w-52 flex flex-col justify-start items-start gap-1">
          <h5 className="text-white text-lg sm:text-2xl font-bold leading-snug sm:leading-loose">
            Portfolio Overview
          </h5>
          <div className="flex items-center gap-2.5">
            <p className="text-gray-600 text-xs sm:text-sm font-normal leading-tight">
              Wallet connected
            </p>
            <div className="w-4 h-4 sm:w-5 sm:h-5 pt-[2.5px] pb-1 bg-[#22C55E] rounded-full flex justify-center items-center">
              <GreenCheckIcon />
            </div>
          </div>
        </div>
        <div className="px-2 py-1 sm:px-3 sm:py-2 bg-[#2f3337] rounded-full flex items-center gap-2 mt-2 sm:mt-0">
          <WalletIcon />
          <div className="text-[#CBD5E1] text-xs sm:text-sm font-normal leading-tight">
            0x7F5a...8E3b
          </div>
        </div>
      </div>
      {/* Portfolio Value & Stats */}
      <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="w-full sm:w-52 flex flex-col justify-start items-start gap-1.5">
          <p className="text-[#94A3B8] text-xs sm:text-sm font-normal leading-tight">
            Total Portfolio Value
          </p>
          <h4 className="text-white text-2xl sm:text-3xl font-bold leading-8 sm:leading-10">
            $148,200.00
          </h4>
          <span className="text-green-600 text-xs sm:text-sm font-normal leading-tight">
            +2.4% this week
          </span>
        </div>
        <div className="flex flex-col xs:flex-row sm:flex-row justify-start items-stretch gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="flex-1 min-w-[100px] px-2 sm:w-44 h-16 sm:h-20 bg-gray-800 rounded-lg flex flex-col justify-center items-center gap-1.5">
            <p className="text-center text-[#94A3B8] text-xs font-normal leading-none">
              Assets Owned
            </p>
            <span className="text-center text-white text-lg sm:text-xl font-bold leading-6 sm:leading-7">
              12
            </span>
          </div>
          <div className="flex-1 min-w-[100px] px-2 sm:w-44 h-16 sm:h-20 bg-gray-800 rounded-lg flex flex-col justify-center items-center gap-1.5">
            <p className="text-center text-[#94A3B8] text-xs font-normal leading-none">
              Assets Listed
            </p>
            <span className="text-center text-white text-lg sm:text-xl font-bold leading-6 sm:leading-7">
              3
            </span>
          </div>
          <div className="flex-1 min-w-[100px] px-2 sm:w-44 h-16 sm:h-20 bg-gray-800 rounded-lg flex flex-col justify-center items-center gap-1.5">
            <p className="text-center text-[#94A3B8] text-xs font-normal leading-none">
              Assets Sold
            </p>
            <span className="text-center text-white text-lg sm:text-xl font-bold leading-6 sm:leading-7">
              7
            </span>
          </div>
        </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col xs:flex-row justify-start items-stretch xs:items-center gap-2 sm:gap-4 w-full">
        <button className="h-10 px-4 sm:px-5 py-2 sm:py-3 bg-indigo-700 rounded flex justify-center items-center overflow-hidden w-full xs:w-auto">
          <div className="flex justify-center items-center gap-2">
            <PlusIcon />
            <p className="text-indigo-50 text-xs sm:text-sm font-normal leading-snug">
              Tokenize Asset
            </p>
          </div>
        </button>
        <button className="h-10 px-3 sm:px-4 py-2 bg-gray-800 rounded-lg flex justify-center items-center gap-2 w-full xs:w-auto">
          <HistoryIcon />
          <p className="text-white text-xs sm:text-sm font-normal leading-normal">
            Transaction History
          </p>
        </button>
      </div>
      {/* Decorative Dot */}
      <div data-variant="4" className="hidden sm:block w-3.5 h-3.5 left-[24px] top-[183px] absolute">
        <div className="w-2.5 h-2.5 left-[2.76px] top-[2.33px] absolute bg-color-spring-green-45" />
      </div>
    </div>
  )
}

export default PortfolioOverview