import React, { memo, useCallback } from 'react';
import HeartIcon from './icons/HeartIcon';
import { CopyIcon, PlatformIcon, TokenizeIcon, DropdownIcon, StarIcon, SellerUserIcon, VerifiedIcon, ToolTipIcon } from '../Icons/DetailsIcon';

interface CardDetail {
  label: string;
  value: string;
}

interface CardDetailsRightColumnProps {
  card: {
    title: string;
    price: string;
    details: CardDetail[];
  };
}

const PriceCard: React.FC<{ 
  title: string;
  price: string;
  details: CardDetail[];
  onFavorite: () => void;
}> = memo(({ title, price, details, onFavorite }) => (
  <div className="w-full p-4 sm:p-6 bg-gray-900 rounded-lg flex flex-col gap-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 flex-wrap">
        <h1 className="text-white text-lg sm:text-xl font-bold">{title}</h1>
        <span className="px-2 py-1 bg-[#0A573A] rounded-full text-[#94E8C9] text-xs inline-flex items-center gap-1">
          <TokenizeIcon className="text-[#94E8C9]" />
          Tokenized
        </span>
      </div>
      <HeartIcon className="text-gray-400 cursor-pointer shrink-0" onClick={onFavorite} />
    </div>
    <div className="text-[#C1C5E0] text-sm sm:text-base">Light sweet crude, API 34.0</div>
    <div className="text-[#C1C5E0] text-sm sm:text-base">{details[0].value}</div>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
      <div>
        <div className="text-[#C1C5E0] text-sm">Unit Price</div>
        <div className="text-white text-xl sm:text-2xl font-bold">{price} USDT</div>
      </div>
      <div>
        <div className="text-[#C1C5E0] text-sm">Total Value</div>
        <div className="text-white text-xl sm:text-2xl font-semibold">{price}</div>
      </div>
    </div>
    <div className="text-[#8689AA] text-sm">Contract Address</div>
    <div className="flex items-center gap-2 overflow-x-auto">
      <div className="text-white font-medium whitespace-nowrap">{details[0].value}</div>
      <button className="p-1 hover:bg-gray-800 rounded shrink-0">
        <CopyIcon className="text-[#C1C5E0] w-4 h-4" />
      </button>
      <a href="#" className="text-[#45D8A1] text-sm whitespace-nowrap hover:underline">View on Etherscan</a>
    </div>
    <div className="flex items-center gap-2">
      <PlatformIcon className="text-[#6DABF2]" />
      <span className="text-[#6DABF2] text-sm">Platform Escrow</span>
    </div>
  </div>
));

const OfferSection: React.FC<{ price: string }> = memo(({ price }) => {
  const [formData, setFormData] = React.useState({
    offerPrice: price,
    quantity: '500000',
    totalValue: '$36,250,000',
    paymentMethod: 'USDT (ERC20)',
    termsAccepted: false
  });

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }
    console.log('Submitting offer:', formData);
  }, [formData]);

  return (
    <div className="w-full p-4 sm:p-6 bg-gray-900 rounded-2xl flex flex-col gap-5">
      <h2 className="text-white text-lg sm:text-xl font-semibold">Make an Offer</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-gray-500 text-sm">Offer Price (per barrel)</label>
          <div className="relative">
            <input 
              type="text" 
              className="w-full pl-16 pr-16 py-3 bg-[#1D1E2B] rounded-lg outline outline-slate-600 text-white"
              value={formData.offerPrice}
              onChange={(e) => handleInputChange('offerPrice', e.target.value)}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 select-none">USDT</span>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-300 text-sm cursor-pointer">MAX</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-500 text-sm">Quantity (barrels)</label>
          <div className="relative">
            <input 
              type="text" 
              className="w-full pr-16 py-3 px-3 bg-[#1D1E2B] rounded-lg outline outline-slate-600 text-white"
              value={formData.quantity}
              onChange={(e) => handleInputChange('quantity', e.target.value)}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-300 text-sm cursor-pointer">MAX</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-500 text-sm">Total Value</label>
          <div className="p-3 bg-[#1D1E2B] rounded-lg outline outline-slate-600">
            <div className="text-white text-base font-medium">{formData.totalValue}</div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-500 text-sm">Payment Method</label>
          <div className="relative">
            <select 
              className="w-full appearance-none pl-3 pr-8 py-3 bg-[#1D1E2B] rounded-lg outline outline-slate-600 text-white"
              value={formData.paymentMethod}
              onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
            >
              <option value="USDT (ERC20)">USDT (ERC20)</option>
              <option value="USDC">USDC</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <DropdownIcon className="text-[#9CA3AF]" />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            className="w-5 h-5 mt-1 bg-[#3396FF] rounded cursor-pointer"
            checked={formData.termsAccepted}
            onChange={(e) => handleInputChange('termsAccepted', String(e.target.checked))}
          />
          <label htmlFor="terms" className="text-gray-200 text-xs sm:text-sm cursor-pointer">
            I agree to the <span className="text-[#3396FF] hover:underline cursor-pointer">Terms of Service</span> and have read the <span className="text-[#3396FF] hover:underline cursor-pointer">Risk Disclosure</span>
          </label>
        </div>

        <button 
          onClick={handleSubmit}
          className="w-full px-4 sm:px-11 py-3 sm:py-4 bg-emerald-500 rounded text-indigo-50 text-sm sm:text-base font-normal hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!formData.termsAccepted}
        >
          Make Offer
        </button>
      </div>
    </div>
  );
});

const SellerInfo: React.FC = memo(() => (
  <div className="w-full p-4 sm:p-6 bg-gray-900 rounded-2xl flex flex-col gap-5">
    <h2 className="text-white text-lg sm:text-xl font-semibold">Seller Information</h2>
    
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gray-900 rounded-full flex justify-center items-center shrink-0">
        <SellerUserIcon className="w-6 h-6 text-Grey-Text-secondary" />
      </div>
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1">
          <div className="text-white text-base font-medium truncate">GlobalOilTrader</div>
          <VerifiedIcon className="w-4 h-4 text-Success-success-500 shrink-0" />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#8689AA] text-sm truncate">0x8a72...9e41</div>
          <button className="p-1 hover:bg-gray-800 rounded shrink-0">
            <CopyIcon className="w-4 h-4 text-[#8689AA]" />
          </button>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="text-[#8689AA] text-sm sm:text-base">Rating</div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <StarIcon key={index} className="w-4 h-4" />
          ))}
          <span className="text-white text-sm sm:text-base ml-1">(4.9)</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-[#8689AA] text-sm sm:text-base">Pool Contribution (USDT)</div>
          <ToolTipIcon className="w-4 h-4 text-[#8689AA] shrink-0" />
        </div>
        <div className="text-white text-sm sm:text-base font-medium">1,000,000 USDT</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-[#8689AA] text-sm sm:text-base">Completed Transactions</div>
        <div className="text-white text-sm sm:text-base font-medium">86</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-[#8689AA] text-sm sm:text-base">Avg. Response Time</div>
        <div className="text-white text-sm sm:text-base font-medium">1 hour</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-[#8689AA] text-sm sm:text-base">Member Since</div>
        <div className="text-white text-sm sm:text-base font-medium">Aug 2023</div>
      </div>
    </div>
  </div>
));

const CardDetailsRightColumn: React.FC<CardDetailsRightColumnProps> = memo(({ card }) => {
  const handleFavorite = useCallback(() => {
    console.log('Added to favorites');
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <PriceCard 
        title={card.title}
        price={card.price}
        details={card.details}
        onFavorite={handleFavorite}
      />
      <OfferSection price={card.price} />
      <SellerInfo />
    </div>
  );
});

CardDetailsRightColumn.displayName = 'CardDetailsRightColumn';

export default CardDetailsRightColumn; 