function StatsContainer() {
    return (
      <div className="self-stretch px-5 bg-gray-800 rounded-xl outline outline-offset-[-1px] outline-slate-600 inline-flex flex-col md:flex-row justify-between items-start gap-4">
        {/* Wallet Balance Box */}
        <div className="px-5 pt-4 pb-5 rounded-xl inline-flex flex-col justify-center items-start gap-2 w-full md:w-auto">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-2">
              <div className="justify-start text-gray-400 text-sm font-medium">Wallet Balance</div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="inline-flex justify-start items-center gap-2">
                  <div className="flex justify-start items-baseline">
                    <div className="justify-start text-gray-200 text-base font-semibold">$</div>
                    <div className="justify-start text-gray-200 text-2xl font-semibold">10,000.00</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center">
                <div className="justify-start text-gray-400 text-sm font-medium">≈</div>
                <div className="justify-start text-gray-400 text-sm font-medium">0.000004 BTC</div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Pool USDT Balance Box */}
        <div className="px-5 pt-4 pb-5 rounded-xl inline-flex flex-col justify-center items-start gap-2 w-full md:w-auto">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-2">
              <div className="justify-start text-gray-400 text-sm font-medium">Pool USDT Balance</div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="inline-flex justify-start items-center gap-2">
                  <div className="flex justify-start items-baseline">
                    <div className="justify-start text-gray-200 text-base font-semibold">$</div>
                    <div className="justify-start text-gray-200 text-2xl font-semibold">10,000.00</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center">
                <div className="justify-start text-gray-400 text-sm font-medium">≈</div>
                <div className="justify-start text-gray-400 text-sm font-medium">0.000004 BTC</div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Available Pool USDT Balance Box */}
        <div className="px-5 pt-4 pb-5 rounded-xl inline-flex flex-col justify-center items-start gap-2 w-full md:w-auto">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-2">
              <div className="justify-start text-gray-400 text-sm font-medium">Available Pool USDT Balance</div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="inline-flex justify-start items-center gap-2">
                  <div className="flex justify-start items-baseline">
                    <div className="justify-start text-gray-200 text-base font-semibold">$</div>
                    <div className="justify-start text-gray-200 text-2xl font-semibold">10,000.00</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center">
                <div className="justify-start text-gray-400 text-sm font-medium">≈</div>
                <div className="justify-start text-gray-400 text-sm font-medium">0.000004 BTC</div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Freeze USDT Balance Box */}
        <div className="px-5 pt-4 pb-5 rounded-xl inline-flex flex-col justify-center items-start gap-2 w-full md:w-auto">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-2">
              <div className="justify-start text-gray-400 text-sm font-medium">Freeze USDT Balance</div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="inline-flex justify-start items-center gap-2">
                  <div className="flex justify-start items-baseline">
                    <div className="justify-start text-gray-200 text-base font-semibold">$</div>
                    <div className="justify-start text-gray-200 text-2xl font-semibold">10,000.00</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center">
                <div className="justify-start text-gray-400 text-sm font-medium">≈</div>
                <div className="justify-start text-gray-400 text-sm font-medium">0.000004 BTC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default StatsContainer;
  