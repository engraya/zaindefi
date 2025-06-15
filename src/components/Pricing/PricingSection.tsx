import React, { useState } from 'react';
import { DropDownSvg, SearchSvg } from '../../Icons/Icons';

type CurrencyType = 'crypto' | 'fiat' | 'both';

interface PaymentMethod {
  id: number;
  name: string;
  color: string;
}

interface CryptoOption {
  id: number;
  name: string;
  color: string;
}

const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 1, name: 'USDT', color: 'text-green-500' },
  { id: 2, name: 'USDC', color: 'text-blue-500' },
  { id: 3, name: 'DAI', color: 'text-yellow-500' },
];

const CRYPTO_OPTIONS: CryptoOption[] = [
  { id: 1, name: 'Bitcoin (BTC)', color: 'text-orange-500' },
  { id: 2, name: 'Ethereum (ETH)', color: 'text-purple-500' },
  { id: 3, name: 'Binance Coin (BNB)', color: 'text-yellow-500' },
];

const PricingSection: React.FC = () => {
  const [selectedCurrencyType, setSelectedCurrencyType] = useState<CurrencyType>('crypto');
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoOption | null>(null);
  const [paymentSearchTerm, setPaymentSearchTerm] = useState('');
  const [cryptoSearchTerm, setCryptoSearchTerm] = useState('');
  const [isPaymentDropdownOpen, setIsPaymentDropdownOpen] = useState(false);
  const [isCryptoDropdownOpen, setIsCryptoDropdownOpen] = useState(false);
  const [negotiationAllowed, setNegotiationAllowed] = useState(true);
  const [unitPrice, setUnitPrice] = useState('');
  const [total, setTotal] = useState('');
  const [minPurchase, setMinPurchase] = useState('');
  const [maxPurchase, setMaxPurchase] = useState('');

  const filteredPaymentMethods = PAYMENT_METHODS.filter(method =>
    method.name.toLowerCase().includes(paymentSearchTerm.toLowerCase())
  );

  const filteredCryptoOptions = CRYPTO_OPTIONS.filter(crypto =>
    crypto.name.toLowerCase().includes(cryptoSearchTerm.toLowerCase())
  );

  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-5">
      <div className="justify-center text-white text-base font-bold leading-normal">Pricing & Payment</div>
      
      {/* Currency Type Selection */}
      <div className="w-full sm:w-80 flex flex-col justify-start items-start gap-3">
        <div className="self-stretch text-gray-300 text-sm font-bold leading-snug">Accepted Currency</div>
        <div className="self-stretch flex flex-wrap sm:flex-nowrap justify-start items-start gap-4">
          {/* Crypto Radio */}
          <div 
            onClick={() => setSelectedCurrencyType('crypto')}
            className="flex-1 sm:flex-none flex justify-start items-start gap-4 cursor-pointer"
          >
            <div className="w-6 h-6 relative overflow-hidden">
              <div className={`w-5 h-5 left-[2px] top-[2px] absolute rounded-full ${selectedCurrencyType === 'crypto' ? 'bg-[#3396FF]' : 'bg-gray-400'}`} />
              <div className="w-6 h-6 left-0 top-0 absolute border border-gray-400 rounded-full" />
            </div>
            <div className="inline-flex flex-col justify-center items-start">
              <div className={`text-sm font-medium leading-snug ${selectedCurrencyType === 'crypto' ? 'text-[#3396FF]' : 'text-gray-400'}`}>
                Crypto
              </div>
            </div>
          </div>

          {/* Fiat Radio */}
          <div 
            onClick={() => setSelectedCurrencyType('fiat')}
            className="flex-1 sm:flex-none flex justify-start items-center gap-4 cursor-pointer"
          >
            <div className="w-6 h-6 relative overflow-hidden">
              <div className={`w-5 h-5 left-[2px] top-[2px] absolute rounded-full ${selectedCurrencyType === 'fiat' ? 'bg-[#3396FF]' : 'bg-gray-400'}`} />
              <div className="w-6 h-6 left-0 top-0 absolute border border-gray-400 rounded-full" />
            </div>
            <div className="inline-flex flex-col justify-center items-start">
              <div className={`text-sm font-medium leading-snug ${selectedCurrencyType === 'fiat' ? 'text-[#3396FF]' : 'text-gray-400'}`}>
                Fiat
              </div>
            </div>
          </div>

          {/* Both Radio */}
          <div 
            onClick={() => setSelectedCurrencyType('both')}
            className="flex-1 sm:flex-none flex justify-start items-center gap-4 cursor-pointer"
          >
            <div className="w-6 h-6 relative overflow-hidden">
              <div className={`w-5 h-5 left-[2px] top-[2px] absolute rounded-full ${selectedCurrencyType === 'both' ? 'bg-[#3396FF]' : 'bg-gray-400'}`} />
              <div className="w-6 h-6 left-0 top-0 absolute border border-gray-400 rounded-full" />
            </div>
            <div className="inline-flex flex-col justify-center items-start">
              <div className={`text-sm font-medium leading-snug ${selectedCurrencyType === 'both' ? 'text-[#3396FF]' : 'text-gray-400'}`}>
                Both
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Currency Selection Dropdowns */}
      <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-5">
        <div className="w-full sm:flex-1 h-16 flex flex-col justify-start items-start gap-2">
          <div className="text-white text-sm font-semibold leading-tight">Accepted Currency</div>
          <div className="w-full flex flex-col justify-start items-start gap-1 relative">
            <div 
              className="self-stretch h-10 px-3 py-2 bg-neutral-800 rounded-md flex flex-col justify-center items-start gap-1 cursor-pointer hover:bg-neutral-700 transition-colors duration-200"
              onClick={() => setIsPaymentDropdownOpen(!isPaymentDropdownOpen)}
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
                      <div className="text-gray-400 text-sm font-normal leading-tight">Select currency</div>
                    )}
                  </div>
                </div>
                <DropDownSvg/>
              </div>
            </div>
            {isPaymentDropdownOpen && (
              <div className="w-full p-2 bg-gray-900 rounded-xl inline-flex flex-col justify-start items-start gap-2.5 absolute top-full left-0 z-10 mt-1 shadow-lg">
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch h-9 px-3 py-2 bg-gray-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                      <div className="flex-1 flex justify-start items-center gap-3">
                        <SearchSvg/>
                        <input
                          type="text"
                          value={paymentSearchTerm}
                          onChange={(e) => setPaymentSearchTerm(e.target.value)}
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
                        onClick={() => {
                          setSelectedPayment(method);
                          setIsPaymentDropdownOpen(false);
                        }}
                        className="self-stretch px-3 py-2 rounded-md flex flex-col justify-start items-start gap-1 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                      >
                        <div className="self-stretch inline-flex justify-start items-start gap-3">
                          <div className="flex justify-start items-start gap-1">
                            <div className="flex justify-start items-center gap-1">
                              <div className={`${method.color} font-semibold`}>|</div>
                              <div className="text-indigo-50 text-sm font-normal">{method.name}</div>
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

        <div className="w-full sm:flex-1 h-16 flex flex-col justify-start items-start gap-2">
          <div className="text-white text-sm font-semibold leading-tight">Accepted cryptocurrency</div>
          <div className="w-full flex flex-col justify-start items-start gap-1 relative">
            <div 
              className="self-stretch h-10 px-3 py-2 bg-neutral-800 rounded-md flex flex-col justify-center items-start gap-1 cursor-pointer hover:bg-neutral-700 transition-colors duration-200"
              onClick={() => setIsCryptoDropdownOpen(!isCryptoDropdownOpen)}
            >
              <div className="self-stretch inline-flex justify-between items-start">
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-start items-center gap-1">
                    {selectedCrypto ? (
                      <div className="flex items-center gap-1">
                        <div className={`${selectedCrypto.color} font-semibold`}>|</div>
                        <div className="text-indigo-50 text-sm font-normal">{selectedCrypto.name}</div>
                      </div>
                    ) : (
                      <div className="text-gray-400 text-sm font-normal leading-tight">Select crypto</div>
                    )}
                  </div>
                </div>
                <DropDownSvg/>
              </div>
            </div>
            {isCryptoDropdownOpen && (
              <div className="w-full p-2 bg-gray-900 rounded-xl inline-flex flex-col justify-start items-start gap-2.5 absolute top-full left-0 z-10 mt-1 shadow-lg">
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch h-9 px-3 py-2 bg-gray-800 rounded-md outline outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                      <div className="flex-1 flex justify-start items-center gap-3">
                        <SearchSvg/>
                        <input
                          type="text"
                          value={cryptoSearchTerm}
                          onChange={(e) => setCryptoSearchTerm(e.target.value)}
                          placeholder="search"
                          className="flex-1 bg-transparent text-slate-600 text-sm font-normal leading-tight focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    {filteredCryptoOptions.map((crypto) => (
                      <div 
                        key={crypto.id} 
                        onClick={() => {
                          setSelectedCrypto(crypto);
                          setIsCryptoDropdownOpen(false);
                        }}
                        className="self-stretch px-3 py-2 rounded-md flex flex-col justify-start items-start gap-1 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                      >
                        <div className="self-stretch inline-flex justify-start items-start gap-3">
                          <div className="flex justify-start items-start gap-1">
                            <div className="flex justify-start items-center gap-1">
                              <div className={`${crypto.color} font-semibold`}>|</div>
                              <div className="text-indigo-50 text-sm font-normal">{crypto.name}</div>
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

      {/* Price Inputs */}
      <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-5">
        <div className="w-full sm:flex-1 h-16 flex flex-col justify-start items-start gap-2">
          <div className="text-white text-sm font-semibold leading-tight">Unit Price</div>
          <input
            type="number"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            placeholder="$ 0.00"
            className="w-full h-10 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 text-white text-sm font-normal focus:outline-none"
          />
        </div>

        <div className="w-full sm:flex-1 h-16 flex flex-col justify-start items-start gap-2">
          <div className="text-white text-sm font-semibold leading-tight">Total</div>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            placeholder="$ 0.00"
            className="w-full h-10 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 text-white text-sm font-normal focus:outline-none"
          />
        </div>
      </div>

      {/* Purchase Limits */}
      <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-5">
        <div className="w-full sm:flex-1 h-16 flex flex-col justify-start items-start gap-2">
          <div className="text-white text-sm font-semibold leading-tight">Min Purchase</div>
          <input
            type="number"
            value={minPurchase}
            onChange={(e) => setMinPurchase(e.target.value)}
            placeholder="$ 0.00"
            className="w-full h-10 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 text-white text-sm font-normal focus:outline-none"
          />
        </div>

        <div className="w-full sm:flex-1 h-16 flex flex-col justify-start items-start gap-2">
          <div className="text-white text-sm font-semibold leading-tight">Max Purchase</div>
          <input
            type="number"
            value={maxPurchase}
            onChange={(e) => setMaxPurchase(e.target.value)}
            placeholder="$ 0.00"
            className="w-full h-10 px-3 py-2 bg-neutral-800 rounded-md outline outline-offset-[-1px] outline-slate-600 text-white text-sm font-normal focus:outline-none"
          />
        </div>
      </div>

      {/* Negotiation Toggle */}
      <div className="self-stretch flex justify-between items-center">
        <div className="text-gray-200 text-base font-semibold">Allow Negotiation</div>
        <div 
          onClick={() => setNegotiationAllowed(!negotiationAllowed)}
          className={`relative w-14 h-8 rounded-2xl cursor-pointer transition-colors duration-200 ${negotiationAllowed ? 'bg-[#3396FF]' : 'bg-gray-600'}`}
        >
          <div 
            className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-all duration-200 ${negotiationAllowed ? 'right-1' : 'left-1'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingSection; 