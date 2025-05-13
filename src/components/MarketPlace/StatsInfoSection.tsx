function StatsInfoSection() {
    return (
      <div className="self-stretch px-3 py-2 bg-gray-900 rounded inline-flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
        {/* Left Side (USDT/NGN) */}
        <div className="flex justify-start items-center gap-1.5 w-full md:w-auto">
          <p className="justify-center text-white text-sm font-semibold leading-tight">USDT/NGN</p>
        </div>
        
        {/* Right Side (Real Time Price, 24H Change, High, Low) */}
        <div className="flex flex-col md:flex-row justify-end items-center gap-4 md:gap-6 w-full md:w-auto">
          {/* Real Time Price */}
          <div className="flex justify-start items-center gap-1.5">
            <p className="justify-center text-gray-400 text-xs font-medium leading-none">Real Time Price</p>
            <div className="w-16 flex justify-start items-center">
              <p className="justify-center text-white text-sm font-semibold leading-tight">₦</p>
              <p className="justify-center text-white text-sm font-semibold leading-tight">1,578.84</p>
            </div>
          </div>
          
          {/* 24H Change */}
          <div className="flex justify-start items-center gap-1.5">
            <p className="justify-center text-gray-400 text-xs font-medium leading-none">24H Change</p>
            <div className="flex justify-start items-center">
              <p className="justify-center text-rose-700 text-sm font-semibold leading-tight">-1.83</p>
              <p className="justify-center text-rose-700 text-sm font-semibold leading-tight">%</p>
            </div>
          </div>
          
          {/* High */}
          <div className="flex justify-start items-center gap-1.5">
            <p className="justify-center text-gray-400 text-xs font-medium leading-none">High</p>
            <div className="w-16 flex justify-start items-center">
              <p className="justify-center text-white text-sm font-semibold leading-tight">₦</p>
              <p className="justify-center text-white text-sm font-semibold leading-tight">1,700.00</p>
            </div>
          </div>
          
          {/* Low */}
          <div className="flex justify-start items-center gap-1.5">
            <p className="justify-center text-gray-400 text-xs font-medium leading-none">Low</p>
            <div className="w-16 flex justify-start items-center">
              <p className="justify-center text-white text-sm font-semibold leading-tight">₦</p>
              <p className="justify-center text-white text-sm font-semibold leading-tight">1,003.00</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default StatsInfoSection;
  