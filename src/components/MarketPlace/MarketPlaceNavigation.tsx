import { useState, useRef, useEffect } from 'react';
import AppLogo from '../AppLogo';
import {
  WalletIcon,
  DropDownIcon,
  NotificationBellIcon,
  SearchIcon,
} from '../../Icons/Icons';
import WalletAddressModal from './Modals/WalletAddressModal';

function MarketPlaceNavigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'P2P' | 'RWA'>('P2P');

    // Ref for language dropdown
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  return (
<nav className="fixed w-full px-4 md:px-8 pt-5 pb-3 bg-[#242538] bg-opacity-100 border-b border-slate-600 flex flex-wrap justify-between items-center gap-4 z-50">
      {/* Logo */}
      <AppLogo />

      {/* Nav Links */}
      <div className="hidden md:flex pl-0 md:pl-20 justify-start items-center gap-8">
      <div
          className={`p-1 ${activeTab === 'P2P' ? 'border-b border-indigo-50' : ''} cursor-pointer`}
          onClick={() => setActiveTab('P2P')}
        >
          <p className="text-indigo-50 text-xl font-medium">P2P</p>
        </div>
        <div
          className={`p-1 ${activeTab === 'RWA' ? 'border-b border-indigo-50' : ''} cursor-pointer`}
          onClick={() => setActiveTab('RWA')}
        >
          <p className="text-indigo-50 text-xl font-medium">RWA</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="hidden w-full md:w-[600px] sm:inline-flex flex-col justify-start items-center gap-2.5">
        <div className="w-full h-10">
          <div className="w-full px-3 py-2 bg-gray-900 rounded-md outline outline-offset-[-1px] outline-slate-600 flex justify-between items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent text-white placeholder-white text-sm font-semibold leading-tight focus:outline-none"
            />
            <div className="w-6 h-6">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Icons and Wallet */}
      <div className="flex justify-start items-center gap-4">
        {/* Notification */}
        <div className="relative flex justify-center items-center p-1">
          <NotificationBellIcon />
          <div className="h-3 px-1 absolute left-[20px] top-0 bg-rose-600 rounded-xl flex items-center justify-center">
            <p className="text-white text-[6px] font-medium leading-[10px]">0</p>
          </div>
        </div>

        {/* Wallet Dropdown Toggle */}
      <div ref={dropdownRef} className="relative">
        <div
          className="bg-neutral-800 rounded-3xl flex items-center gap-2 cursor-pointer"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <div className="px-4 py-3 rounded flex justify-center items-center overflow-hidden">
            <div className="flex justify-center items-center gap-2">
              <div className="flex justify-center items-center w-4 h-4">
                <WalletIcon />
              </div>
              <p className="text-white text-xs font-normal leading-tight">0x71e5..a92</p>
              <div className="flex justify-center items-center">
                <DropDownIcon />
              </div>
            </div>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 z-50">
            <WalletAddressModal />
          </div>
        )}
      </div>
      </div>
    </nav>
  );
}

export default MarketPlaceNavigation;
