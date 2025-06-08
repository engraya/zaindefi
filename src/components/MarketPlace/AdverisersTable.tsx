import { ThumbSvg } from "../../Icons/Icons";
function AdvertisersTable( { selectedAction } : { selectedAction: 'buy' | 'sell' }) {
    return (
      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-slate-600">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-900">
              <th className="p-2 border-b border-slate-600 text-sm font-normal text-gray-400">Advertisers</th>
              <th className="p-2 border-b border-slate-600 text-sm font-normal text-gray-400">Price</th>
              <th className="p-2 border-b border-slate-600 text-sm font-normal text-gray-400">Size/Limit</th>
              <th className="p-2 border-b border-slate-600 text-sm font-normal text-gray-400">Payment method</th>
              <th className="p-2 border-b border-slate-600 text-sm font-normal text-white">Action</th>
            </tr>
          </thead>
  
          {/* Table Body */}
          <tbody>
            <tr className="bg-gray-800">
              {/* Advertiser Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 absolute bg-indigo-200 rounded-full" />
                    <div className="absolute left-[8px] top-[9px] text-center text-zinc-950 text-[10px] font-semibold">O</div>
                    <div className="absolute left-[17px] top-[18px] w-1.5 h-1.5 bg-green-700 rounded-full" />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-indigo-50 text-sm font-semibold">BennyMulla</p>
                    <p className="text-gray-400 text-xs">152 Order(s) | 90%</p>
                    <div className="flex justify-start items-center gap-1">
                    <ThumbSvg/>
                    <p className="text-gray-400 text-xs">152 Orders</p>
                    </div>
                  </div>
                </div>
              </td>
  
              {/* Price Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex justify-start items-end gap-1">
                  <p className="text-indigo-50 text-xl font-semibold">1,596.29</p>
                  <p className="text-indigo-50 text-[10px]">NGN</p>
                </div>
              </td>
  
              {/* Size/Limit Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex flex-col">
                  <div className="text-gray-400 text-sm">Available: <span className="text-indigo-50 text-sm font-semibold">433.0219 USDT</span></div>
                  <div className="text-gray-400 text-sm">Limits: <span className="text-indigo-50 text-sm font-semibold">450.00 ~ 690,236.90</span></div>
                </div>
              </td>
  
              {/* Payment Method Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex gap-1">
                  <p className="text-yellow-700 text-sm">|</p>
                  <p className="text-indigo-50 text-sm">Bank card</p>
                  <p className="text-indigo-700 text-sm">|</p>
                  <p className="text-indigo-50 text-sm">Dash - App</p>
                </div>
              </td>
  
              {/* Action Column */}
              <td className="p-2 border-b border-slate-600">
              {selectedAction === 'buy' ? (
                <button className="self-stretch px-4 py-2 bg-emerald-500 rounded inline-flex justify-center items-center overflow-hidden">
                <div className="h-4 flex justify-center items-center gap-2">
                    <div className="justify-start text-indigo-50 text-xs font-normal leading-tight">Buy USDT</div>
                </div>
                </button>
            ) : (
                <button className="self-stretch px-4 py-2 bg-rose-700 rounded inline-flex justify-center items-center overflow-hidden">
                <div className="h-4 flex justify-center items-center gap-2">
                    <div className="justify-start text-indigo-50 text-xs font-normal leading-tight">Sell USDT</div>
                </div>
                </button>
            )}
              </td>
            </tr>
            <tr className="bg-gray-800">
              {/* Advertiser Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 absolute bg-indigo-200 rounded-full" />
                    <div className="absolute left-[8px] top-[9px] text-center text-zinc-950 text-[10px] font-semibold">O</div>
                    <div className="absolute left-[17px] top-[18px] w-1.5 h-1.5 bg-green-700 rounded-full" />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-indigo-50 text-sm font-semibold">BennyMulla</p>
                    <p className="text-gray-400 text-xs">152 Order(s) | 90%</p>
                    <div className="flex justify-start items-center gap-1">
                    <ThumbSvg/>
                    <p className="text-gray-400 text-xs">152 Orders</p>
                    </div>
                  </div>
                </div>
              </td>
  
              {/* Price Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex justify-start items-end gap-1">
                  <p className="text-indigo-50 text-xl font-semibold">1,596.29</p>
                  <p className="text-indigo-50 text-[10px]">NGN</p>
                </div>
              </td>
  
              {/* Size/Limit Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex flex-col">
                  <div className="text-gray-400 text-sm">Available: <span className="text-indigo-50 text-sm font-semibold">433.0219 USDT</span></div>
                  <div className="text-gray-400 text-sm">Limits: <span className="text-indigo-50 text-sm font-semibold">450.00 ~ 690,236.90</span></div>
                </div>
              </td>
  
              {/* Payment Method Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex gap-1">
                  <p className="text-yellow-700 text-sm">|</p>
                  <p className="text-indigo-50 text-sm">Bank card</p>
                  <p className="text-indigo-700 text-sm">|</p>
                  <p className="text-indigo-50 text-sm">Dash - App</p>
                </div>
              </td>
  
              {/* Action Column */}
              <td className="p-2 border-b border-slate-600">
              {selectedAction === 'buy' ? (
                <button className="self-stretch px-4 py-2 bg-emerald-500 rounded inline-flex justify-center items-center overflow-hidden">
                <div className="h-4 flex justify-center items-center gap-2">
                    <div className="justify-start text-indigo-50 text-xs font-normal leading-tight">Buy USDT</div>
                </div>
                </button>
            ) : (
                <button className="self-stretch px-4 py-2 bg-rose-700 rounded inline-flex justify-center items-center overflow-hidden">
                <div className="h-4 flex justify-center items-center gap-2">
                    <div className="justify-start text-indigo-50 text-xs font-normal leading-tight">Sell USDT</div>
                </div>
                </button>
            )}
              </td>
            </tr>
            <tr className="bg-gray-800">
              {/* Advertiser Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 absolute bg-indigo-200 rounded-full" />
                    <div className="absolute left-[8px] top-[9px] text-center text-zinc-950 text-[10px] font-semibold">O</div>
                    <div className="absolute left-[17px] top-[18px] w-1.5 h-1.5 bg-green-700 rounded-full" />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-indigo-50 text-sm font-semibold">BennyMulla</p>
                    <p className="text-gray-400 text-xs">152 Order(s) | 90%</p>
                    <div className="flex justify-start items-center gap-1">
                    <ThumbSvg/>
                    <p className="text-gray-400 text-xs">152 Orders</p>
                    </div>
                  </div>
                </div>
              </td>
  
              {/* Price Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex justify-start items-end gap-1">
                  <p className="text-indigo-50 text-xl font-semibold">1,596.29</p>
                  <p className="text-indigo-50 text-[10px]">NGN</p>
                </div>
              </td>
  
              {/* Size/Limit Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex flex-col">
                  <div className="text-gray-400 text-sm">Available: <span className="text-indigo-50 text-sm font-semibold">433.0219 USDT</span></div>
                  <div className="text-gray-400 text-sm">Limits: <span className="text-indigo-50 text-sm font-semibold">450.00 ~ 690,236.90</span></div>
                </div>
              </td>
  
              {/* Payment Method Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex gap-1">
                  <p className="text-yellow-700 text-sm">|</p>
                  <p className="text-indigo-50 text-sm">Bank card</p>
                  <p className="text-indigo-700 text-sm">|</p>
                  <p className="text-indigo-50 text-sm">Dash - App</p>
                </div>
              </td>
  
              {/* Action Column */}
              <td className="p-2 border-b border-slate-600">
              {selectedAction === 'buy' ? (
                <button className="self-stretch px-4 py-2 bg-emerald-500 rounded inline-flex justify-center items-center overflow-hidden">
                <div className="h-4 flex justify-center items-center gap-2">
                    <div className="justify-start text-indigo-50 text-xs font-normal leading-tight">Buy USDT</div>
                </div>
                </button>
            ) : (
                <button className="self-stretch px-4 py-2 bg-rose-700 rounded inline-flex justify-center items-center overflow-hidden">
                <div className="h-4 flex justify-center items-center gap-2">
                    <div className="justify-start text-indigo-50 text-xs font-normal leading-tight">Sell USDT</div>
                </div>
                </button>
            )}
              </td>
            </tr>
            <tr className="bg-gray-800">
              {/* Advertiser Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 absolute bg-indigo-200 rounded-full" />
                    <div className="absolute left-[8px] top-[9px] text-center text-zinc-950 text-[10px] font-semibold">O</div>
                    <div className="absolute left-[17px] top-[18px] w-1.5 h-1.5 bg-green-700 rounded-full" />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-indigo-50 text-sm font-semibold">BennyMulla</p>
                    <p className="text-gray-400 text-xs">152 Order(s) | 90%</p>
                    <div className="flex justify-start items-center gap-1">
                    <ThumbSvg/>
                    <p className="text-gray-400 text-xs">152 Orders</p>
                    </div>
                  </div>
                </div>
              </td>
  
              {/* Price Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex justify-start items-end gap-1">
                  <p className="text-indigo-50 text-xl font-semibold">1,596.29</p>
                  <p className="text-indigo-50 text-[10px]">NGN</p>
                </div>
              </td>
  
              {/* Size/Limit Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex flex-col">
                  <div className="text-gray-400 text-sm">Available: <span className="text-indigo-50 text-sm font-semibold">433.0219 USDT</span></div>
                  <div className="text-gray-400 text-sm">Limits: <span className="text-indigo-50 text-sm font-semibold">450.00 ~ 690,236.90</span></div>
                </div>
              </td>
  
              {/* Payment Method Column */}
              <td className="p-2 border-b border-slate-600">
                <div className="flex gap-1">
                  <p className="text-yellow-700 text-sm">|</p>
                  <p className="text-indigo-50 text-sm">Bank card</p>
                  <p className="text-indigo-700 text-sm">|</p>
                  <p className="text-indigo-50 text-sm">Dash - App</p>
                </div>
              </td>
  
              {/* Action Column */}
              <td className="p-2 border-b border-slate-600">
              {selectedAction === 'buy' ? (
                <button className="self-stretch px-4 py-2 bg-emerald-500 rounded inline-flex justify-center items-center overflow-hidden">
                <div className="h-4 flex justify-center items-center gap-2">
                    <div className="justify-start text-indigo-50 text-xs whitespace-normal font-normal leading-tight">Buy USDT</div>
                </div>
                </button>
            ) : (
                <button className="self-stretch px-4 py-2 bg-rose-700 rounded inline-flex justify-center items-center overflow-hidden">
                <div className="h-4 flex justify-center items-center gap-2">
                    <div className="justify-start text-indigo-50 text-xs whitespace-nowrap font-normal leading-tight">Sell USDT</div>
                </div>
                </button>
            )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default AdvertisersTable;
  