import { PleasedIcon, CopyIcon, CheckIcon, GreyCheckIcon, SendIcon, AttachmentIcon, RedWarningIcon } from '../../Icons/CompletedIcons';
import { SellerUserIcon } from '../../Icons/DetailsIcon';
import PagesWrapper from '../../layouts/PagesWrapper';
import type { FC } from 'react';
import React from 'react';

// Components
const OrderInfo: FC = () => (
  <div className="self-stretch px-4 sm:px-6 pt-6 pb-10 bg-gray-900 rounded-lg flex flex-col justify-start items-start gap-4">
    <div className="self-stretch inline-flex justify-start items-center">
      <div className="w-6 h-4 pr-2 inline-flex flex-col justify-start items-start">
        <div className="w-4 h-4 bg-[#FF9500] rounded-full" />
      </div>
      <div className="inline-flex flex-col justify-start items-start">
        <div className="justify-start text-[#E5E7EB] text-lg font-medium leading-7">Order Info</div>
      </div>
    </div>
    <div className="self-stretch flex flex-col sm:flex-row justify-center items-start gap-4">
      <OrderInfoItem label="Pay" value="2,000.000 GBP" valueColor="text-[#22C55E]" />
      <OrderInfoItem label="Price" value="0.934 GBP" />
      <OrderInfoItem label="Total Quantity" value="2,141.7130 bbl" isLast />
    </div>
  </div>
);

interface OrderInfoItemProps {
  label: string;
  value: string;
  valueColor?: string;
  isLast?: boolean;
}

const OrderInfoItem: FC<OrderInfoItemProps> = ({ label, value, valueColor = "text-[#E5E7EB]", isLast }) => (
  <div className={`flex-1 self-stretch ${!isLast ? 'sm:pr-4 sm:border-r border-[#9CA3AF]' : ''} ${isLast ? 'sm:pl-4' : ''} inline-flex flex-col justify-start items-start gap-1`}>
    <div className="self-stretch flex flex-col justify-start items-start">
      <div className="self-stretch justify-start text-[#9CA3AF] text-base font-normal leading-normal">{label}</div>
    </div>
    <div className="self-stretch flex flex-col justify-start items-start">
      <div className={`self-stretch justify-start ${valueColor} text-base font-medium leading-normal`}>{value}</div>
    </div>
  </div>
);

interface CryptoAssetProps {
  asset: string;
  address: string;
}

const CryptoAsset: FC<CryptoAssetProps> = ({ asset, address }) => (
  <div className="self-stretch flex flex-col justify-start items-start gap-2 sm:gap-3">
    <div className="self-stretch flex justify-between items-start">
      <div className="flex flex-col justify-start items-start">
        <div className="text-[#9CA3AF] text-xs sm:text-sm md:text-base font-normal leading-snug sm:leading-normal">Asset</div>
      </div>
      <div className="flex justify-start items-center gap-1 sm:gap-2">
        <div className="flex flex-col justify-start items-start">
          <div className="text-[#E5E7EB] text-xs sm:text-sm md:text-base font-medium leading-snug sm:leading-normal">{asset}</div>
        </div>
        <div className="w-5 sm:w-7 h-4 sm:h-5 pl-1 sm:pl-2">
          <CopyIcon />
        </div>
      </div>
    </div>
    <div className="self-stretch flex justify-between items-start">
      <div className="flex flex-col justify-start items-start">
        <div className="text-[#9CA3AF] text-xs sm:text-sm md:text-base font-normal leading-snug sm:leading-normal">Wallet Address</div>
      </div>
      <div className="flex justify-start items-center gap-1 sm:gap-2">
        <div className="flex flex-col justify-start items-start">
          <div className="text-[#E5E7EB] text-xs sm:text-sm md:text-base font-medium leading-snug sm:leading-normal">{address}</div>
        </div>
        <div className="w-5 sm:w-7 h-4 sm:h-5 pl-1 sm:pl-2">
          <CopyIcon />
        </div>
      </div>
    </div>
  </div>
);

const PaymentMethods: FC = () => (
  <div className="self-stretch p-3 sm:p-4 md:p-6 bg-gray-900 rounded-lg flex flex-col justify-start items-start gap-3 sm:gap-4">
    <div className="self-stretch flex justify-start items-center gap-2">
      <div className="w-5 sm:w-6 h-4 pr-2 flex justify-start items-start">
        <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#FF9500] rounded-full" />
      </div>
      <div className="flex flex-col justify-start items-start">
        <div className="text-[#E5E7EB] text-base sm:text-lg font-medium leading-normal sm:leading-7">Payment Methods Accepted by the Seller</div>
      </div>
    </div>
    <div className="self-stretch flex flex-col justify-start items-start">
      <div className="self-stretch text-[#9CA3AF] text-xs sm:text-sm md:text-base font-normal leading-snug sm:leading-normal">
        Please select a payment method and use the details of the bank or the payment service of your choosing to complete the payment.
      </div>
    </div>
    <div className="self-stretch p-3 sm:p-4 bg-[#FF950033] rounded-lg outline outline-[#FBBF24] flex flex-col justify-start items-start">
      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="self-stretch text-[#FFA94D] text-xs sm:text-sm md:text-base font-normal leading-snug sm:leading-normal">
          Make sure not to remark sensitive words such as "BTC/USDT purchase" when transferring fiat, otherwise the transfer may fail.
        </div>
      </div>
    </div>
    <div className="self-stretch px-3 sm:px-4 pt-4 sm:pt-6 pb-3 sm:pb-4 rounded-lg outline outline-[#9CA3AF] flex flex-col justify-start items-start gap-3 sm:gap-4">
      <div className="self-stretch flex justify-start items-center gap-2">
        <div className="w-6 sm:w-8 h-5 sm:h-6 pr-2 flex justify-start items-start">
          <div className="w-5 sm:w-6 h-5 sm:h-6 bg-[#FF9500] rounded-full flex justify-center items-center">
            <CheckIcon />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="text-[#E5E7EB] text-sm sm:text-base font-medium leading-normal">Crypto</div>
        </div>
      </div>
      <CryptoAsset asset="USDT" address="0x567opkjhfg98765678eckj" />
      <CryptoAsset asset="BTC" address="0x567opkjhfg98765678eckj" />
    </div>
  </div>
);

const TimerBox: FC<{ value: string }> = ({ value }) => (
  <div className="w-8 sm:w-10 h-8 sm:h-10 px-px py-1.5 sm:py-2 bg-[#B54142] rounded-lg flex justify-center items-center">
    <div className="text-center justify-center text-white text-sm sm:text-base font-bold leading-normal">{value}</div>
  </div>
);

const PaymentWarning: FC = () => (
  <div className="self-stretch flex justify-start items-start gap-2">
    <div className="w-6 sm:w-7 h-8 sm:h-9 pt-1 flex-shrink-0">
      <div className="w-6 sm:w-7 h-6 sm:h-8 bg-[#FF9500] rounded-full flex justify-center items-center">
        <PleasedIcon />
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-start items-start">
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <WarningText text="Please complete payment within the allowed timeframe." />
        <WarningText text="After making the payment using an payment method outside of Bybit, please click on the 'I have completed the payment' button below." />
        <WarningText text="Note: The order will be automatically canceled if the button is not clicked by the deadline." isNote />
      </div>
    </div>
  </div>
);

const WarningText: FC<{ text: string; isNote?: boolean }> = ({ text, isNote }) => (
  <div className="self-stretch flex flex-col justify-start items-start">
    <div className={`self-stretch justify-start ${isNote ? 'text-[#9CA3AF]' : 'text-[#E5E7EB]'} text-xs sm:text-base font-normal leading-tight sm:leading-normal`}>
      {text}
    </div>
  </div>
);

const PaymentTimer: FC = () => (
  <div className="self-stretch px-3 sm:px-4 md:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8 bg-gray-900 rounded-lg flex flex-col justify-start items-start gap-3 sm:gap-4">
    <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
      <div className="flex flex-col justify-start items-start">
        <div className="text-[#E5E7EB] text-base sm:text-lg md:text-xl font-bold leading-tight sm:leading-7">
          Complete Your Payment Within:
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 sm:gap-3">
        <TimerBox value="14" />
        <TimerBox value="43" />
      </div>
    </div>
    <PaymentWarning />
  </div>
);

const ActionButtons: FC = () => (
  <div className="self-stretch pt-2 flex flex-col sm:flex-row justify-start items-stretch sm:items-start gap-4 sm:gap-[0px]">
    <button className="w-full sm:w-auto px-6 sm:px-11 py-4 bg-indigo-700 rounded flex justify-center items-center overflow-hidden">
      <div className="h-5 flex justify-center items-center gap-2">
        <div className="justify-start text-indigo-50 text-base font-normal">Payment Completed</div>
      </div>
    </button>
    <div className="sm:pl-4">
      <button className="w-full sm:w-auto px-6 sm:px-11 py-4 rounded outline outline-offset-[-1px] outline-indigo-400 inline-flex justify-center items-center overflow-hidden">
        <div className="h-5 flex justify-center items-center gap-2">
          <div className="justify-start text-indigo-400 text-base font-normal">Cancel Order</div>
        </div>
      </button>
    </div>
  </div>
);

interface MessageProps {
  text: string;
  timestamp?: string;
  isUser?: boolean;
  isSystem?: boolean;
}

const Message: FC<MessageProps> = ({ text, timestamp, isUser, isSystem }) => {
  const baseClasses = "max-w-[90%] sm:max-w-[70%] px-3 py-2 rounded-2xl";
  const messageClasses = isSystem 
    ? "bg-slate-800 rounded-lg self-center" 
    : isUser 
      ? "bg-slate-600 self-end" 
      : "bg-[#FF950033] self-start";

  return (
    <div className="flex flex-col w-full gap-2">
      {timestamp && (
        <div className="w-full text-center">
          <span className="text-[#737373] text-xs font-normal">
            {timestamp}
          </span>
        </div>
      )}
      <div className={`${baseClasses} ${messageClasses}`}>
        <div className="text-[#E5E7EB] text-xs font-normal leading-tight">
          {text}
        </div>
      </div>
    </div>
  );
};

interface UserProfileProps {
  name: string;
  address: string;
}

const UserProfile: FC<UserProfileProps> = ({ name, address }) => (
  <div className="self-stretch px-4 py-4 border-b border-[#9CA3AF] flex flex-col justify-start items-start gap-1">
    <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-2 sm:gap-0">
      <div className="flex-1 flex justify-start items-center">
        <div className="w-14 h-12 pr-3 inline-flex flex-col justify-start items-start">
          <div className="w-12 h-12 bg-gray-900 rounded-full inline-flex justify-center items-center">
            <SellerUserIcon />
          </div>
        </div>
        <div className="inline-flex flex-col justify-start items-start">
          <div className="self-stretch inline-flex justify-start items-center gap-[0px]">
            <div className="inline-flex flex-col justify-start items-start">
              <div className="justify-start text-[#E5E7EB] text-base font-medium leading-normal">{name}</div>
            </div>
            <div className="w-6 h-5 pl-1">
              <CheckIcon />
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center">
            <div className="pr-1 inline-flex flex-col justify-start items-start">
              <div className="flex flex-col justify-start items-start overflow-hidden">
                <div className="justify-start text-[#8689AA] text-sm font-normal leading-tight">{address}</div>
              </div>
            </div>
            <div className="w-4 h-4">
              <CopyIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col justify-start items-start">
        <div className="justify-start text-[#F59E0B] text-sm font-normal leading-tight">Report User</div>
      </div>
    </div>
  </div>
);

const SecurityWarning: FC = () => (
  <div className="self-stretch px-4 py-3 rounded-xl flex flex-col justify-start items-start">
    <div className="self-stretch bg-gray-800 rounded-xl flex flex-col justify-start items-start gap-1">
      <div className="self-stretch px-3 py-3 flex flex-col justify-start items-start gap-2">
        <WarningItem text="The assets of the seller have been locked. You can make the transfer with confidence." />
        <WarningItem text="Please chat within the platform. External records cannot be used as evidence in order disputes." />
      </div>
    </div>
  </div>
);

const WarningItem: FC<{ text: string }> = ({ text }) => (
  <div className="self-stretch inline-flex justify-start items-start">
    <div className="w-6 h-5 pr-2 pt-0.5">
      <GreyCheckIcon />
    </div>
    <div className="flex-1 inline-flex flex-col justify-start items-start">
      <div className="self-stretch justify-start text-[#737373] text-xs font-normal leading-none">{text}</div>
    </div>
  </div>
);

interface ChatInputProps {
  onSend?: (message: string) => void;
}

const ChatInput: FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = React.useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend?.(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="self-stretch px-2 sm:px-3 py-3 border-t border-[#9CA3AF] flex justify-start items-center gap-2">
      <div className="flex-1 flex items-center bg-[#374151] rounded-lg overflow-hidden">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your message"
          className="flex-1 px-2 sm:px-3 py-2.5 bg-transparent text-[#E5E7EB] text-sm font-normal placeholder-[#9CA3AF] outline-none"
        />
      </div>
      <button 
        className="w-8 sm:w-10 h-8 flex items-center justify-center hover:bg-[#4B5563] rounded-lg transition-colors"
        title="Attach file"
      >
        <AttachmentIcon />
      </button>
      <button 
        className={`w-8 sm:w-10 h-8 flex items-center justify-center rounded-lg transition-colors ${
          message.trim() 
            ? 'text-[#FF9500] hover:bg-[#4B5563] cursor-pointer' 
            : 'text-[#9CA3AF] cursor-not-allowed'
        }`}
        onClick={handleSend}
        disabled={!message.trim()}
        title="Send message"
      >
        <SendIcon />
      </button>
    </div>
  );
};

const ChatSection: FC = () => {
  const handleSendMessage = (message: string) => {
    // Handle sending message here
    console.log('Sending message:', message);
  };

  return (
    <div className="w-full flex-1 bg-gray-900 rounded-3xl flex flex-col justify-start items-start overflow-hidden">
      <UserProfile name="GlobalOilTrader" address="0x8a72...9e41" />
      <SecurityWarning />
      <div className="self-stretch p-4 flex flex-col justify-start items-start gap-4 overflow-y-auto flex-grow">
        <Message 
          timestamp="2025-05-02 14:46:18"
          text="Order created: Purchase of Crude Oil - Bonny Light (Tokenized) for 2,000.000 GBP"
          isSystem
        />
        <Message 
          text="Hello, I'm confirming the Revolut account number is 5488880267635915. Is that correct?"
          isUser
        />
        <Message 
          text="Yes, that's correct. Please make sure not to mention oil or crypto in your payment remarks. Just send as a regular transfer."
        />
        <Message 
          text="I've just completed the payment of 2,000 GBP to your Revolut account. The reference is 'Payment for goods' as advised."
          isUser
        />
        <Message 
          text="Great, I've received your payment. I'm releasing the tokens now. Thank you for the smooth transaction!"
        />
        <Message 
          text="Tokens have been released to your wallet. Transaction completed successfully."
          isSystem
        />
      </div>
      <div className="self-stretch p-3 sm:p-4 flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch px-3 py-3 bg-[#B5414233] rounded-lg outline outline-[#EF4444] flex flex-col justify-start items-start">
          <div className="self-stretch inline-flex justify-start items-start">
            <div className="w-6 h-5 pr-2 pt-0.5">
              <RedWarningIcon />
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-start text-[#EF4444] text-xs sm:text-sm font-normal leading-tight">
                Be careful not to be fooled by fake Customer Support agents. Real Customer Support agents have a blue checkmark next to their profile picture.
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

const Completed: FC = () => {
  return (
    <PagesWrapper>
      <div className="self-stretch px-4 py-6 bg-gray-800 rounded-xl inline-flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <div className="flex justify-center items-center gap-2.5">
            <div className="justify-start text-[#E5E7EB] text-xl sm:text-2xl font-bold leading-loose">
              Buy Crude Oil - Bonny Light (Tokenized)
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-end items-start gap-2 sm:gap-6">
            <div className="justify-start text-[#E5E7EB] text-base font-normal leading-normal">
              2025-05-14:34:23
            </div>
            <div className="flex justify-start items-center gap-1">
              <div className="justify-start text-[#E5E7EB] text-base font-normal leading-normal">
                345678900987654567
              </div>
              <div className="w-7 h-5 pl-2">
                <CopyIcon />
              </div>
            </div>
          </div>
        </div>
        
        <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-6">
          <div className="w-full lg:w-[697px] self-stretch inline-flex flex-col justify-start items-start gap-6">
            <PaymentTimer />
            <OrderInfo />
            <PaymentMethods />
            <ActionButtons />
          </div>
          <div className="w-full lg:flex-1">
            <ChatSection />
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
};

export default Completed; 

