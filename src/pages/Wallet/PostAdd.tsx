import PagesWrapper from '../../layouts/PagesWrapper';
import { useState, useEffect, useRef } from 'react';
import { SearchSvg, DropDownSvg, RefreshSvg } from '../../Icons/Icons';
import { useNavigate } from 'react-router-dom';

interface Option {
  id: number;
  name: string;
  color: string;
}

function PostAdd() {
  const [isBuyMode, setIsBuyMode] = useState(true);
  const [isFiatDropdownOpen, setIsFiatDropdownOpen] = useState(false);
  const [isCryptoDropdownOpen, setIsCryptoDropdownOpen] = useState(false);
  const [selectedFiat, setSelectedFiat] = useState<Option | null>(null);
  const [selectedCrypto, setSelectedCrypto] = useState<Option | null>(null);
  const [fiatSearchTerm, setFiatSearchTerm] = useState('');
  const [cryptoSearchTerm, setCryptoSearchTerm] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState('');
  const [minLimit, setMinLimit] = useState('');
  const [maxLimit, setMaxLimit] = useState('');
  const [termsOfTrade, setTermsOfTrade] = useState('');
  const [automaticReply, setAutomaticReply] = useState('');

  const fiatDropdownRef = useRef<HTMLDivElement>(null);
  const cryptoDropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (fiatDropdownRef.current && !fiatDropdownRef.current.contains(event.target as Node)) {
        setIsFiatDropdownOpen(false);
      }
      if (cryptoDropdownRef.current && !cryptoDropdownRef.current.contains(event.target as Node)) {
        setIsCryptoDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const fiatOptions = [
    { id: 1, name: 'VND', color: 'text-orange-400' },
    { id: 2, name: 'USD', color: 'text-sky-700' },
    { id: 3, name: 'INR', color: 'text-rose-500' },
    { id: 4, name: 'NGN', color: 'text-blue-500' }
  ];

  const cryptoOptions = [
    { id: 1, name: 'BTC', color: 'text-orange-400' },
    { id: 2, name: 'ETH', color: 'text-blue-500' },
    { id: 3, name: 'USDT', color: 'text-green-500' }
  ];

  const filteredFiatOptions = fiatOptions.filter(option =>
    option.name.toLowerCase().includes(fiatSearchTerm.toLowerCase())
  );

  const filteredCryptoOptions = cryptoOptions.filter(option =>
    option.name.toLowerCase().includes(cryptoSearchTerm.toLowerCase())
  );

  const handleConfirmPublishing = () => {
    navigate('/post-confirmation');
  };

  return (
    <PagesWrapper>
        <h3 className="self-stretch justify-start text-gray-200 text-2xl md:text-3xl font-semibold leading-9 px-4 md:px-0">Post New Ads</h3>
        <div className="self-stretch py-4 md:py-6 px-4 md:px-6 bg-gray-800 rounded-xl outline outline-offset-[-1px] outline-slate-600 inline-flex flex-col justify-start items-center gap-5">
        <div className="w-full md:w-[1096px] inline-flex justify-start items-center gap-6 md:gap-12">
            <div data-property-1="Button group-buy" className="p-2.5 rounded-[9.57px] outline outline-offset-[-1.20px] outline-slate-600 flex justify-start items-start gap-[4.78px]">
            <button
              onClick={() => setIsBuyMode(true)}
              className={`p-2.5 rounded outline outline-offset-[-1.20px] flex justify-center items-center overflow-hidden transition-all duration-200 ${
                isBuyMode 
                ? 'bg-emerald-600 outline-emerald-400 outline-[2.39px]' 
                : 'bg-transparent'
              }`}
            >
              <div className="h-5 flex justify-center items-center gap-2.5">
                <div className={`justify-start text-base font-normal leading-normal ${isBuyMode ? 'text-indigo-50' : 'text-emerald-500'}`}>Buy</div>
              </div>
            </button>
            <button
              onClick={() => setIsBuyMode(false)}
              className={`p-2.5 rounded flex justify-center items-center overflow-hidden transition-all duration-200 ${
                !isBuyMode 
                ? 'bg-red-600 outline-red-400' 
                : 'bg-transparent'
              }`}
            >
              <div className="h-5 flex justify-center items-center gap-2.5">
                <div className={`justify-start text-base font-normal leading-normal ${!isBuyMode ? 'text-indigo-50' : 'text-white'}`}>Sell</div>
              </div>
            </button>
            </div>
        </div>
        <div className="w-full inline-flex flex-col lg:flex-row justify-start items-start gap-5">
            <div className="w-full lg:w-auto inline-flex flex-col justify-start items-start gap-5">
            <div className="w-full lg:w-[638px] flex flex-col justify-start items-start gap-6">
                <div className="inline-flex justify-start items-center gap-4">
                <div data-active="Yes" data-type="Radio" className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-gray-800 rounded-full border-[1.50px] border-White" />
                    <div className="w-3 h-3 left-[6px] top-[6px] absolute bg-White rounded-full" />
                </div>
                <div className="justify-center text-white text-xl font-bold leading-7">Market</div>
                </div>
                <div className="self-stretch p-4 md:p-6 rounded-xl outline outline-offset-[-1px] outline-slate-600 flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch flex flex-col justify-start items-center gap-4">
                    <div className="self-stretch flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6">
                    <div className="w-full md:flex-1 inline-flex flex-col justify-start items-start gap-3.5">
                        <div className="justify-center text-white text-sm font-semibold leading-tight">Fiats</div>
                        <div className="relative w-full" ref={fiatDropdownRef}>
                        <div 
                          onClick={() => setIsFiatDropdownOpen(!isFiatDropdownOpen)}
                          className="w-full px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 flex justify-between items-center cursor-pointer"
                        >
                          {selectedFiat ? (
                            <div className="flex items-center gap-2">
                              <div className={`${selectedFiat.color} font-semibold`}>|</div>
                              <span className="text-white text-sm font-semibold">{selectedFiat.name}</span>
                            </div>
                          ) : (
                            <span className="text-gray-400 text-sm">Select Fiat</span>
                          )}
                          <DropDownSvg />
                        </div>
                        
                        {isFiatDropdownOpen && (
                          <div className="w-64 p-2 bg-gray-900 rounded-xl absolute top-full left-0 z-10 mt-1">
                            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                              <div className="self-stretch h-9 px-3 py-2 bg-gray-800 rounded-md outline outline-offset-[-1px] outline-slate-600 flex items-center gap-3">
                                <div className="flex-1 flex justify-start items-center gap-3">
                                  <SearchSvg />
                                  <input
                                    type="text"
                                    value={fiatSearchTerm}
                                    onChange={(e) => setFiatSearchTerm(e.target.value)}
                                    placeholder="search"
                                    className="flex-1 bg-transparent text-slate-600 text-sm font-normal focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col gap-1">
                                {filteredFiatOptions.map((option) => (
                                  <div
                                    key={option.id}
                                    onClick={() => {
                                      setSelectedFiat(option);
                                      setIsFiatDropdownOpen(false);
                                    }}
                                    className="px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:bg-gray-800"
                                  >
                                    <div className={`${option.color} font-semibold`}>|</div>
                                    <span className="text-indigo-50 text-sm">{option.name}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-full md:flex-1 inline-flex flex-col justify-start items-start gap-3.5">
                        <div className="justify-center text-white text-sm font-semibold leading-tight">Crypto</div>
                        <div className="relative w-full" ref={cryptoDropdownRef}>
                        <div 
                          onClick={() => setIsCryptoDropdownOpen(!isCryptoDropdownOpen)}
                          className="w-full px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 flex justify-between items-center cursor-pointer"
                        >
                          {selectedCrypto ? (
                            <div className="flex items-center gap-2">
                              <div className={`${selectedCrypto.color} font-semibold`}>|</div>
                              <span className="text-white text-sm font-semibold">{selectedCrypto.name}</span>
                            </div>
                          ) : (
                            <span className="text-gray-400 text-sm">Select Crypto</span>
                          )}
                          <DropDownSvg />
                        </div>
                        
                        {isCryptoDropdownOpen && (
                          <div className="w-64 p-2 bg-gray-900 rounded-xl absolute top-full left-0 z-10 mt-1">
                            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                              <div className="self-stretch h-9 px-3 py-2 bg-gray-800 rounded-md outline outline-offset-[-1px] outline-slate-600 flex items-center gap-3">
                                <div className="flex-1 flex justify-start items-center gap-3">
                                  <SearchSvg />
                                  <input
                                    type="text"
                                    value={cryptoSearchTerm}
                                    onChange={(e) => setCryptoSearchTerm(e.target.value)}
                                    placeholder="search"
                                    className="flex-1 bg-transparent text-slate-600 text-sm font-normal focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col gap-1">
                                {filteredCryptoOptions.map((option) => (
                                  <div
                                    key={option.id}
                                    onClick={() => {
                                      setSelectedCrypto(option);
                                      setIsCryptoDropdownOpen(false);
                                    }}
                                    className="px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:bg-gray-800"
                                  >
                                    <div className={`${option.color} font-semibold`}>|</div>
                                    <span className="text-indigo-50 text-sm">{option.name}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    </div>
                    <div className="self-stretch p-3 bg-neutral-800 rounded-xl flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-14">
                    <div className="flex justify-start items-center gap-2">
                        <div className="justify-center text-gray-400 text-xs font-light leading-none">Current Reference Price</div>
                        <div className="flex justify-start items-center gap-0.5">
                        <div className="justify-center text-white text-sm font-semibold leading-tight">₦</div>
                        <div className="justify-center text-white text-sm font-semibold leading-tight">1,448.09</div>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                        <div className="justify-center text-gray-400 text-xs font-light leading-none">Available Balance</div>
                        <div className="flex justify-start items-center gap-0.5">
                        <div className="justify-center text-white text-sm font-semibold leading-tight">100</div>
                        <div className="justify-center text-white text-sm font-semibold leading-tight">USDT</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div data-property-1="price-fixed" className="w-full self-stretch flex flex-col justify-start items-start gap-6">
                <div className="inline-flex justify-start items-center gap-4">
                <div data-active="Yes" data-type="Radio" className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-gray-800 rounded-full border-[1.50px] border-White" />
                    <div className="w-3 h-3 left-[6px] top-[6px] absolute bg-White rounded-full" />
                </div>
                <div className="justify-center text-white text-xl font-bold leading-7">Price</div>
                </div>
                <div className="self-stretch p-4 md:p-6 rounded-xl outline outline-offset-[-1px] outline-slate-600 flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="p-1 rounded-lg outline outline-offset-[-1px] outline-slate-700 flex flex-col justify-start items-start gap-2.5">
                    <div className="inline-flex justify-start items-start">
                        <div className="p-2 bg-slate-600 rounded flex justify-center items-center gap-2.5">
                        <div className="text-center justify-center text-white text-base font-normal leading-normal">Fixed Price</div>
                        </div>
                        <div className="p-2 rounded flex justify-center items-center gap-2.5">
                        <div className="text-center justify-center text-gray-400 text-base font-normal leading-normal">Float Price</div>
                        </div>
                    </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6">
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch justify-center text-slate-500 text-sm font-medium leading-tight">Price</div>
                        <div className="self-stretch h-9 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                            <div className="flex-1 flex justify-between items-center">
                            <input
                              type="text"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              placeholder="0.00"
                              className="flex-1 bg-transparent text-white text-sm font-normal focus:outline-none"
                            />
                            <div className="flex justify-start items-center gap-2">
                              <div className="flex justify-start items-center gap-1">
                                <div className="justify-center text-white text-sm font-semibold leading-tight">USDT</div>
                              </div>
                              <RefreshSvg />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch justify-center text-slate-500 text-sm font-medium leading-tight">Quantity</div>
                        <div className="self-stretch h-9 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                            <div className="flex-1 flex justify-between items-center">
                            <input
                              type="text"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                              placeholder="0.00"
                              className="flex-1 bg-transparent text-white text-sm font-normal focus:outline-none"
                            />
                            <div className="flex justify-start items-center gap-2">
                              <div className="flex justify-start items-center gap-1">
                                <div className="justify-center text-white text-sm font-semibold leading-tight">USDT</div>
                              </div>
                              <RefreshSvg />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch justify-center text-slate-500 text-sm font-medium leading-tight">Total</div>
                        <div className="self-stretch h-9 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                        <input
                          type="text"
                          value={total}
                          onChange={(e) => setTotal(e.target.value)}
                          placeholder="0.00"
                          className="flex-1 bg-transparent text-white text-sm font-normal focus:outline-none"
                        />
                        <div className="flex justify-start items-center gap-2">
                          <div className="flex justify-start items-center gap-1">
                            <div className="justify-center text-white text-sm font-semibold leading-tight">USDT</div>
                          </div>
                          <RefreshSvg />
                        </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col md:flex-row justify-start items-end gap-4 md:gap-6">
                        <div className="w-full md:flex-1 inline-flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch justify-center text-slate-500 text-sm font-medium leading-tight">Limit Quantity Per Transaction</div>
                        <div className="self-stretch h-9 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                            <div className="flex-1 flex justify-between items-center">
                            <input
                              type="text"
                              value={minLimit}
                              onChange={(e) => setMinLimit(e.target.value)}
                              placeholder="0.00"
                              className="flex-1 bg-transparent text-white text-sm font-normal focus:outline-none"
                            />
                            <div className="flex justify-start items-center gap-2">
                              <div className="flex justify-start items-center gap-1">
                                <div className="justify-center text-white text-sm font-semibold leading-tight">USDT</div>
                              </div>
                              <RefreshSvg />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="w-full md:flex-1 inline-flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch h-9 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                            <div className="flex-1 flex justify-between items-center">
                            <input
                              type="text"
                              value={maxLimit}
                              onChange={(e) => setMaxLimit(e.target.value)}
                              placeholder="0.00"
                              className="flex-1 bg-transparent text-white text-sm font-normal focus:outline-none"
                            />
                            <div className="flex justify-start items-center gap-2">
                              <div className="flex justify-start items-center gap-1">
                                <div className="justify-center text-white text-sm font-semibold leading-tight">USDT</div>
                              </div>
                              <RefreshSvg />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-6">
                <div className="inline-flex justify-start items-center gap-4">
                <div data-active="Yes" data-type="Radio" className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-gray-800 rounded-full border-[1.50px] border-White" />
                    <div className="w-3 h-3 left-[6px] top-[6px] absolute bg-White rounded-full" />
                </div>
                <div className="justify-center text-white text-xl font-bold leading-7">Payment</div>
                </div>
                <div className="w-full p-4 md:p-6 rounded-xl outline outline-offset-[-1px] outline-slate-600 flex flex-col justify-start items-start gap-2.5">
                <div className="flex flex-col justify-start items-start gap-8">
                    <div className="inline-flex justify-start items-end gap-3">
                    <div className="justify-start text-orange-300 text-sm font-normal leading-snug">*Please enable support payment methods.</div>
                    <div data-show-label="true" data-show-left-icon="false" data-show-right-icon="false" data-size="Small" data-state="Enabled" data-type="Text" className="rounded flex justify-center items-center overflow-hidden">
                        <div className="h-4 flex justify-center items-center gap-2">
                        <div className="justify-start text-indigo-700 text-xs font-normal leading-tight">Enable</div>
                        </div>
                    </div>
                    </div>
                    <div data-property-1="Default" data-show-text-layers="true" className="w-full flex flex-col justify-start items-start gap-2">
                    <div className="w-full">
                        <div className="w-full">
                          <div className="w-full flex justify-start items-center gap-2.5 mb-2">
                            <div className="w-full md:w-[538px] justify-start text-white text-sm font-semibold leading-snug">Terms of trade (Optional)</div>
                          </div>
                          <textarea
                            value={termsOfTrade}
                            onChange={(e) => setTermsOfTrade(e.target.value)}
                            placeholder="The counterparty can see the transaction terms you entered before the transaction"
                            className="w-full min-h-[120px] md:min-h-[100px] p-3 bg-neutral-900 rounded-md outline outline-offset-[-1px] outline-slate-600 text-white text-sm font-normal resize-none focus:outline-none placeholder:text-gray-500"
                          />
                          <div className="self-stretch flex justify-end items-end gap-2.5 mt-2">
                            <div className="text-gray-400 text-xs md:text-sm font-normal leading-snug">{termsOfTrade.length}/500</div>
                          </div>
                        </div>
                    </div>
                    </div>
                    <div data-property-1="Default" data-show-text-layers="true" className="w-full flex flex-col justify-start items-start gap-2">
                    <div className="w-full">
                        <div className="w-full">
                          <div className="w-full flex justify-start items-center gap-2.5 mb-2">
                            <div className="w-full md:w-[538px] justify-start text-white text-sm font-semibold leading-snug">Automatic reply (optional)</div>
                          </div>
                          <textarea
                            value={automaticReply}
                            onChange={(e) => setAutomaticReply(e.target.value)}
                            placeholder="Automatic reply for the first incoming message"
                            className="w-full min-h-[120px] md:min-h-[100px] p-3 bg-neutral-900 rounded-md outline outline-offset-[-1px] outline-slate-600 text-white text-sm font-normal resize-none focus:outline-none placeholder:text-gray-500"
                          />
                          <div className="self-stretch flex justify-end items-end gap-2.5 mt-2">
                            <div className="text-gray-400 text-xs md:text-sm font-normal leading-snug">{automaticReply.length}/500</div>
                          </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div data-property-1="Buy-card-fixed price" className="w-full lg:w-96 p-4 md:p-6 bg-neutral-800 rounded-lg inline-flex flex-col justify-start items-start gap-2.5 sticky top-0">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch inline-flex justify-between items-center">
                <div className="flex-1 flex justify-start items-center gap-1">
                    <div className={`text-center justify-center text-xl font-bold leading-7 ${isBuyMode ? 'text-green-700' : 'text-red-700'}`}>
                    {isBuyMode ? 'Buy' : 'Sell'}
                    </div>
                    <div className="text-center justify-center text-gray-50 text-xl font-extrabold leading-7">USDT</div>
                </div>
                </div>
                <div className="self-stretch h-0 outline outline-offset-[-0.50px] outline-slate-500"></div>
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex justify-start items-center gap-1">
                    <div className="text-center justify-center text-slate-500 text-base font-normal leading-normal">Unit Price</div>
                    </div>
                    <div className="flex justify-start items-start gap-1">
                    <div className="text-center justify-center text-white text-base font-bold leading-normal">1,448.43</div>
                    <div className="text-center justify-center text-white text-base font-bold leading-normal">NGN</div>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex justify-start items-center gap-1">
                    <div className="text-center justify-center text-slate-500 text-base font-normal leading-normal">Quantity</div>
                    </div>
                    <div className="flex justify-start items-start gap-1">
                    <div className="text-center justify-center text-white text-base font-bold leading-normal">100</div>
                    <div className="text-center justify-center text-white text-base font-bold leading-normal">USDT</div>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex justify-start items-center gap-1">
                    <div className="text-center justify-center text-slate-500 text-base font-normal leading-normal">Total Amount</div>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                    <div className="text-center justify-center text-white text-base font-bold leading-normal">144,843.00</div>
                    <div className="text-center justify-center text-white text-base font-bold leading-normal">NGN</div>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex justify-start items-center gap-1">
                    <div className="text-center justify-center text-slate-500 text-base font-normal leading-normal">Limit</div>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                    <div className="text-center justify-center text-white text-base font-normal leading-normal">1</div>
                    <div className="text-center justify-center text-white text-base font-normal leading-normal">-</div>
                    <div className="text-center justify-center text-white text-base font-bold leading-normal">30,000</div>
                    <div className="text-center justify-center text-white text-base font-bold leading-normal">USDT</div>
                    </div>
                </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-0 outline outline-offset-[-0.50px] outline-slate-500"></div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="inline-flex justify-start items-center gap-1">
                    <div className="text-center justify-center text-slate-500 text-base font-normal leading-normal">Payment method</div>
                    </div>
                    <div className="inline-flex justify-start items-start gap-2">
                    <div className="text-center justify-center text-white text-base font-bold leading-normal">Bank Transfer</div>
                    </div>
                </div>
                </div>
            </div>
            <button 
              onClick={handleConfirmPublishing}
              className="self-stretch px-4 py-2 bg-slate-600 hover:bg-slate-700 transition-colors duration-200 cursor-pointer rounded-lg flex flex-col justify-center items-center gap-2.5 overflow-hidden"
            >
                <div className="inline-flex justify-center items-center gap-2">
                  <div className="text-center justify-center text-white text-sm font-semibold leading-tight">Confirm publishing</div>
                </div>
            </button>
            </div>
        </div>
        </div>
    </PagesWrapper>

  );
}

export default PostAdd; 