import { useState, useMemo } from 'react';
import { CancelSvg, DropDownSvg, PayToolTipSvg, SearchSvg } from '../Icons/Icons';
import { useNavigate } from 'react-router-dom';

function SellOrder() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sellAmount, setSellAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPayment, setSelectedPayment] = useState<{ id: number; name: string; color: string } | null>(null);
  const navigate = useNavigate();

  const isFormComplete = useMemo(() => {
    return sellAmount.trim() !== '' && 
           receiveAmount.trim() !== '' && 
           selectedPayment !== null;
  }, [sellAmount, receiveAmount, selectedPayment]);

  const buttonClasses = useMemo(() => {
    const baseClasses = "w-full px-11 py-4 rounded outline outline-offset-[-0.75px] outline-white/5 flex justify-center items-center overflow-hidden transition-colors duration-200";
    return isFormComplete 
      ? `${baseClasses} bg-[#2F39D0] hover:bg-[#2F39D0]/90`
      : `${baseClasses} bg-white/10 hover:bg-white/20`;
  }, [isFormComplete]);

  const handleCancel = () => {
    navigate(-1);
  };

  const paymentMethods = [
    { id: 1, name: 'Bank card', color: 'text-orange-400' },
    { id: 2, name: 'Dash - App', color: 'text-sky-700' }
  ];

  const filteredPaymentMethods = paymentMethods.filter(method =>
    method.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePaymentSelect = (method: typeof paymentMethods[0]) => {
    setSelectedPayment(method);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: '#171825BF' }}>
      <div data-property-1="sell-card" className="bg-gray-900 rounded-3xl flex flex-col md:flex-row justify-start items-start w-full max-w-[768px] md:max-w-[800px]">
        {/* Left Card */}
        <div className="w-full md:w-96 p-4 md:p-6 flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                    <div data-size="xs" data-status-icon="online" data-type="Initials" className="w-9 h-9 relative">
                        <div className="w-9 h-9 left-0 top-0 absolute bg-rose-100 rounded-[300px]" />
                        <div className="left-[12px] top-[13.50px] absolute text-center justify-center text-gray-900 text-base font-semibold leading-7">O</div>
                        <div data-size="xs" data-state="online" data-toggle="on" className="w-2 h-2 left-[25.50px] top-[27px] absolute bg-green-700 rounded outline outline-white" />
                    </div>
                    <div className="inline-flex flex-col justify-start items-start gap-1.5">
                        <div className="text-center justify-center text-white text-lg font-semibold leading-none">Chrisbenard</div>
                        <div className="inline-flex justify-center items-start gap-1.5">
                            <div className="text-center justify-center text-gray-400 text-sm font-normal leading-3">1065 Orders</div>
                            <div className="text-center justify-center text-gray-400 text-sm font-normal leading-3">|</div>
                            <div className="text-center justify-center text-gray-400 text-sm font-normal leading-3">96%</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch inline-flex justify-between items-start">
                        <div className="text-center justify-center text-gray-400 text-sm font-normal leading-3">Price</div>
                        <div className="flex justify-start items-start gap-1">
                            <div className="text-center justify-center text-white text-sm font-normal leading-3">1,597.00</div>
                            <div className="text-center justify-center text-white text-sm font-normal leading-3">NGN</div>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-between items-start">
                        <div className="text-center justify-center text-gray-400 text-sm font-normal leading-3">Limit</div>
                        <div className="flex justify-start items-start gap-1">
                            <div className="text-center justify-center text-white text-sm font-normal leading-3">1</div>
                            <div className="text-center justify-center text-white text-sm font-normal leading-3">~</div>
                            <div className="text-center justify-center text-white text-sm font-normal leading-3">3.59</div>
                            <div className="text-center justify-center text-white text-sm font-normal leading-3">USDT</div>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-between items-start">
                        <div className="text-center justify-center text-gray-400 text-sm font-normal leading-3">Payment Time</div>
                        <div className="flex justify-start items-start gap-1">
                            <div className="text-center justify-center text-white text-sm font-normal leading-3">20</div>
                            <div className="text-center justify-center text-white text-sm font-normal leading-3">Minutes</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch px-2.5 py-2 bg-slate-800 rounded-lg flex flex-col justify-start items-start gap-2.5">
                    <div className="inline-flex justify-start items-center gap-1">
                        <PayToolTipSvg/>
                        <div className="text-center justify-center text-gray-200 text-[10px] font-normal leading-[8.50px]">Receive Payment to Your Own Account</div>
                    </div>
                </div>
            </div>
            <div className="self-stretch flex-1 inline-flex justify-start items-start overflow-hidden">
                <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-4">
                    <div className="text-center justify-center text-gray-200 text-sm font-bold leading-3">Terms of trade:</div>
                    <div className="self-stretch justify-center text-zinc-400 text-sm font-normal leading-none">ATTENTION! ATTENTION!! Payment will be sent to your account</div>
                    <div className="self-stretch justify-center text-zinc-400 text-sm font-normal leading-none">MUST READ: DON'T use these words on your payment receipt: BTC, ETH, GATE.IO, USDT, COIN, CRYPTO, P2P, etc.</div>
                    <div className="self-stretch justify-center text-zinc-400 text-sm font-normal leading-none">Your payment bank name must correspond with your GATE.IO-verified account.</div>
                    <div className="self-stretch justify-center text-zinc-400 text-sm font-normal leading-none">FOR THOSE THAT HAVE KUDA ACCOUNTS, TRANSFER TO:</div>
                    <div className="self-stretch justify-center text-zinc-400 text-sm font-normal leading-none">Acct no: 2003032923<br/>Name: Christian Benard<br/>This account is for KUDA to KUDA payment only.</div>
                    <div className="self-stretch justify-center text-zinc-400 text-sm font-normal leading-none">Reach out on this line: +2348055659310 for any other issues. Thank you!</div>
                </div>
            </div>
        </div>
        {/* Right Card */}
        <div className="w-full flex-1 md:flex-1 h-[563px] p-4 md:p-6 bg-slate-800 md:rounded-tr-3xl md:rounded-br-3xl rounded-b-3xl md:rounded-bl-none flex flex-col justify-between items-center">
            <div className="w-full self-stretch flex-1 flex flex-col justify-start items-start gap-5">
                <div className="self-stretch inline-flex justify-end items-start gap-2.5">
                    <div onClick={handleCancel} className="cursor-pointer">
                        <CancelSvg/>
                    </div>
                </div>
                <div className="self-stretch flex flex-col gap-5">
                    <div data-property-1="Default" data-show-all="false" data-show-icon="false" className="w-full flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch justify-center text-slate-500 text-sm font-medium leading-tight">I will sell</div>
                        <div className="self-stretch h-9 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                            <input
                                type="text"
                                value={sellAmount}
                                onChange={(e) => setSellAmount(e.target.value)}
                                className="flex-1 bg-transparent text-gray-200 text-sm font-normal leading-tight focus:outline-none"
                                placeholder="Enter amount"
                            />
                            <div className="flex justify-start items-center gap-2">
                                <div className="flex justify-start items-center gap-1">
                                    <div className="justify-center text-white text-sm font-semibold leading-tight">USDT</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-property-1="Default" data-show-all="true" data-show-icon="false" className="w-full flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch justify-center text-slate-500 text-sm font-medium leading-tight">I will receive</div>
                        <div className="self-stretch h-9 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                            <input
                                type="text"
                                value={receiveAmount}
                                onChange={(e) => setReceiveAmount(e.target.value)}
                                className="flex-1 bg-transparent text-gray-200 text-sm font-normal leading-tight focus:outline-none"
                                placeholder="Enter amount"
                            />
                            <div className="flex justify-start items-center gap-2">
                                <div className="flex justify-start items-center gap-1">
                                    <div className="justify-center text-white text-sm font-semibold leading-tight">NGN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-1 relative">
                        <div className="self-stretch justify-center text-slate-500 text-sm font-medium leading-tight">Payment method</div>
                        <div 
                            className="self-stretch h-10 px-3 py-2 bg-neutral-800 rounded-md flex flex-col justify-center items-start gap-1 cursor-pointer hover:bg-neutral-700 transition-colors duration-200"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <div className="self-stretch inline-flex justify-between items-start">
                                <div className="flex justify-start items-start gap-1">
                                    <div className="flex justify-start items-center gap-1">
                                        {selectedPayment ? (
                                            <div className="flex items-center gap-1">
                                                <div className={`${selectedPayment.color} font-semibold`}>|</div>
                                                <div className="text-indigo-50 text-sm font-normal">{selectedPayment.name}</div>
                                            </div>
                                        ) : (
                                            <div className="justify-center text-gray-400 text-sm font-normal leading-tight">Choose Payment Method</div>
                                        )}
                                    </div>
                                </div>
                                <DropDownSvg/>
                            </div>
                        </div>
                        {isDropdownOpen && (
                            <div className="w-full p-2 bg-gray-900 rounded-xl inline-flex flex-col justify-start items-start gap-2.5 absolute top-full left-0 z-10 mt-1 shadow-lg">
                                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                                    <div data-property-1="Default" data-show-all="false" data-show-icon="false" className="self-stretch flex flex-col justify-start items-start gap-1">
                                        <div className="self-stretch h-9 px-3 py-2 bg-gray-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                                            <div className="flex-1 flex justify-start items-center gap-3">
                                                <SearchSvg/>
                                                <input
                                                    type="text"
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    placeholder="search"
                                                    className="flex-1 bg-transparent text-slate-600 text-sm font-normal leading-tight focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                                        {filteredPaymentMethods.map((method) => (
                                            <div 
                                                key={method.id} 
                                                onClick={() => handlePaymentSelect(method)}
                                                className="self-stretch px-3 py-2 rounded-md flex flex-col justify-start items-start gap-1 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                                            >
                                                <div className="self-stretch inline-flex justify-start items-start gap-3">
                                                    <div className="flex justify-start items-start gap-1">
                                                        <div className="flex justify-start items-center gap-1">
                                                            <div className={`justify-center ${method.color} text-sm font-semibold leading-tight`}>|</div>
                                                            <div className="justify-center text-indigo-50 text-sm font-normal leading-tight">{method.name}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="self-stretch mt-10 w-full">
                <button className={buttonClasses}>
                    <div className="h-5 flex justify-center items-center gap-2">
                        <div className={`justify-start text-base font-normal ${isFormComplete ? 'text-white' : 'text-gray-400'}`}>
                            Sell USDT
                        </div>
                    </div>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SellOrder; 