import { RefreshSvg } from "../../Icons/Icons"
import { useState } from "react";
function SelectionSection() {
    const [selectedCurrency, setSelectedCurrency] = useState<string>('NGN')
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedPayment, setSelectedPayment] = useState<string>('All payments');
  
    // Handle selection change
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
      setSelectedPayment(event.target.value);
    };
  
  
    const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedCurrency(event.target.value);
      };

  return (
<div className="self-stretch flex flex-col gap-4 sm:flex-row sm:gap-6 justify-start items-stretch">
    <div className="flex-1 h-10 inline-flex flex-col justify-start items-start gap-1">
      <div className="self-stretch flex-1 px-3 py-2 bg-gray-900 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
        <input
          type="text"
          placeholder="0.00"
          className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm font-normal leading-tight outline-none"
        />
        <div className="flex justify-start items-center gap-2">
          <div className="flex justify-start items-center gap-1">
            <div className="justify-center text-indigo-500 text-sm font-semibold leading-tight">All</div>
            <div className="justify-center text-gray-400 text-sm font-semibold leading-tight">|</div>
            <div className="justify-center text-white text-sm font-semibold leading-tight">USDT</div>
          </div>
          <div className="flex justify-center items-center w-6 h-6 relative overflow-hidden">
            <RefreshSvg />
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1 h-10 inline-flex flex-col justify-start items-start gap-1">
      <div className="self-stretch flex-1 px-3 py-2 bg-gray-900 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-2 overflow-hidden">
        <select
          value={selectedCurrency}
          onChange={handlePaymentChange}
          className="flex-1 bg-transparent text-white text-sm font-semibold leading-tight outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)} 
        >
          <option value="NGN" className="text-indigo-900">NGN</option>
          <option value="VND" className="text-indigo-900">VND</option>
          <option value="USD" className="text-indigo-900">USD</option>
          <option value="INR" className="text-indigo-900">INR</option>
        </select>
      </div>
    </div>
    <div className="flex-1 h-10 bg-gray-900 inline-flex flex-col justify-start items-start gap-1">
      <div className="self-stretch flex-1 px-3 py-2 bg-gray-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-2 overflow-hidden">
        <select
          value={selectedPayment}
          onChange={handleChange}
          className="flex-1 bg-transparent text-white text-sm font-semibold leading-tight outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <option value="All payments" className="text-indigo-950">All payments</option>
          <option value="Bank card" className="text-indigo-950">Bank card</option>
          <option value="DashApp" className="text-indigo-950">Dash App</option>
          <option value="Cash" className="text-indigo-950">Cash</option>
        </select>
      </div>

    </div>
</div>
  )
}

export default SelectionSection