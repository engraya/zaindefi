import { useState } from 'react';

export default function CoinsToggle() {
  const [selectedCoin, setSelectedCoin] = useState<'USDT' | 'BTC' | 'ETH' | 'DOGE'>('USDT');

  const coins: Array<'USDT' | 'BTC' | 'ETH' | 'DOGE'> = ['USDT', 'BTC', 'ETH', 'DOGE'];


  return (
    <div className="self-stretch inline-flex justify-between items-center">
        <div className="flex justify-end items-end gap-4 ml-auto">
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
