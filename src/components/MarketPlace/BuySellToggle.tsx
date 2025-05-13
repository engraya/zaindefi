import { useState } from 'react';

export default function BuySellToggle({ onChange }: { onChange: (selected: 'buy' | 'sell') => void }) {
  const [selected, setSelected] = useState<'buy' | 'sell'>('buy');
  const [selectedCoin, setSelectedCoin] = useState<'USDT' | 'BTC' | 'ETH' | 'DOGE'>('USDT');

  const coins: Array<'USDT' | 'BTC' | 'ETH' | 'DOGE'> = ['USDT', 'BTC', 'ETH', 'DOGE'];

  const handleSelect = (newSelected: 'buy' | 'sell') => {
    setSelected(newSelected);
    onChange(newSelected); // Pass selected value to parent
  };

  return (
    <div className="self-stretch inline-flex justify-between items-center">
      <div className="p-2 rounded-lg outline outline-offset-[-1px] outline-slate-600 flex justify-start items-start gap-1">
        {/* Buy Button */}
        <button
          onClick={() => handleSelect('buy')}
          className={`p-2 rounded flex cursor-pointer justify-center items-center overflow-hidden ${selected === 'buy' ? 'bg-emerald-600 outline outline-offset-[-1px] outline-emerald-400' : ''}`}
        >
          <div className="h-4 flex justify-center items-center gap-2">
            <div className={`text-xs font-normal leading-tight ${selected === 'buy' ? 'text-indigo-50' : 'text-indigo-300'}`}>Buy</div>
          </div>
        </button>

        {/* Sell Button */}
        <button
          onClick={() => handleSelect('sell')}
          className={`p-2 rounded flex justify-center cursor-pointer items-center overflow-hidden ${selected === 'sell' ? 'bg-rose-700 outline outline-offset-[-1px] outline-rose-400' : ''}`}
        >
          <div className="h-4 flex justify-center items-center gap-2">
            <div className={`text-xs font-normal leading-tight ${selected === 'sell' ? 'text-indigo-50' : 'text-indigo-300'}`}>Sell</div>
          </div>
        </button>
      </div>

      <div className="flex justify-start items-start gap-4">
        {coins.map((coin) => (
          <button
            key={coin}
            onClick={() => setSelectedCoin(coin)}
            className={`p-2 bg-neutral-800 rounded cursor-pointer outline outline-offset-[-0.5px] outline-slate-600 flex justify-center items-center overflow-hidden ${selectedCoin === coin ? 'outline-2 outline-blue-100' : ''}`}
          >
            <div className="h-4 flex justify-center items-center gap-2">
              <div className={`text-xs leading-tight ${selectedCoin === coin ? 'text-white font-semibold' : 'text-slate-600 font-normal'}`}>{coin}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
