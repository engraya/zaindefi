import { useState, useRef, useEffect } from 'react';
import { navigationLinks } from '../lib/navLinks';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [open, setOpen] = useState(false);

  const languages = ['EN', 'FR', 'ES', 'DE', 'ZH'];

  const toggleDropdown = () => setOpen(!open);
  const handleSelect = (lang: string) => {
    setSelectedLang(lang);
    setOpen(false);
  };
  const toggleMenu = () => setIsOpen(!isOpen);

  // Ref for language dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown if click is outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="py-2.5 px-4 sm:px-6 lg:px-28 bg-gray-900">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewBox="0 0 29 26" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7593 0.96322C17.208 0.871534 17.6757 0.990714 18.0161 1.28348L27.6133 9.53822C28.0104 9.87977 28.173 10.404 28.0344 10.8958L25.0535 21.4762C24.9149 21.968 24.4985 22.3447 23.975 22.4517L11.3238 25.0368C10.8751 25.1285 10.4074 25.0093 10.067 24.7165L0.469799 16.4618C0.0727054 16.1202 -0.0899115 15.596 0.0486613 15.1042L3.02959 4.5238C3.16816 4.03196 3.58459 3.6553 4.10805 3.54834L16.7593 0.96322ZM10.4549 8.10723L4.06452 9.088L7.38311 11.367L10.0847 10.9524L8.9383 10.1651L17.9783 8.77767L13.142 15.1473L15.5839 14.7726L21.9886 6.33707L15.6503 7.30986L15.1472 4.34522L13.2769 4.63228L13.7799 7.59691L12.2213 7.83613L11.7182 4.87149L9.95181 5.14259L10.4549 8.10723ZM17.5015 18.5339L18.0045 21.4986L16.2381 21.7697L15.735 18.805L14.1764 19.0443L14.6795 22.0089L12.8091 22.2959L12.3061 19.3313L5.96768 20.3041L12.3724 11.8686L14.8143 11.4938L9.97803 17.8635L19.018 16.4761L17.8716 15.6888L20.5732 15.2741L23.8918 17.5532L17.5015 18.5339Z" fill="url(#paint0_radial_1859_14902)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7593 0.96322C17.208 0.871534 17.6757 0.990714 18.0161 1.28348L27.6133 9.53822C28.0104 9.87977 28.173 10.404 28.0344 10.8958L25.0535 21.4762C24.9149 21.968 24.4985 22.3447 23.975 22.4517L11.3238 25.0368C10.8751 25.1285 10.4074 25.0093 10.067 24.7165L0.469799 16.4618C0.0727054 16.1202 -0.0899115 15.596 0.0486613 15.1042L3.02959 4.5238C3.16816 4.03196 3.58459 3.6553 4.10805 3.54834L16.7593 0.96322ZM10.4549 8.10723L4.06452 9.088L7.38311 11.367L10.0847 10.9524L8.9383 10.1651L17.9783 8.77767L13.142 15.1473L15.5839 14.7726L21.9886 6.33707L15.6503 7.30986L15.1472 4.34522L13.2769 4.63228L13.7799 7.59691L12.2213 7.83613L11.7182 4.87149L9.95181 5.14259L10.4549 8.10723ZM17.5015 18.5339L18.0045 21.4986L16.2381 21.7697L15.735 18.805L14.1764 19.0443L14.6795 22.0089L12.8091 22.2959L12.3061 19.3313L5.96768 20.3041L12.3724 11.8686L14.8143 11.4938L9.97803 17.8635L19.018 16.4761L17.8716 15.6888L20.5732 15.2741L23.8918 17.5532L17.5015 18.5339Z" fill="white"/>
          <defs>
            <radialGradient id="paint0_radial_1859_14902" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.9291 13.0105) rotate(102.171) scale(13.5345 14.017)">
              <stop stop-color="#335584"/>
              <stop offset="1" stop-color="#11243E"/>
            </radialGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="10" viewBox="0 0 67 10" fill="none">
          <path d="M0.562256 9.85224V8.64612L6.74529 0.99349L6.95048 1.6728H0.658011V0.14782H8.55096V1.35394L2.36792 9.00657L2.14905 8.32726H8.72879V9.85224H0.562256Z" fill="white"/>
          <path d="M9.00355 9.85224L13.3125 0.14782H15.0635L19.3861 9.85224H17.5257L13.8187 1.1044H14.53L10.8366 9.85224H9.00355ZM10.987 7.60636L11.4658 6.19229H16.6366L17.1154 7.60636H10.987Z" fill="white"/>
          <path d="M20.6039 9.85224V0.14782H22.3822V9.85224H20.6039Z" fill="white"/>
          <path d="M24.9722 9.85224V0.14782H26.4359L32.4411 7.62022H31.7161V0.14782H33.4807V9.85224H32.017L26.0118 2.37984H26.7368V9.85224H24.9722Z" fill="white"/>
          <path d="M36.0465 9.85224V0.14782H40.2324C41.272 0.14782 42.184 0.35115 42.9683 0.757812C43.7525 1.16447 44.3635 1.72825 44.8013 2.44915C45.239 3.17005 45.4579 4.02034 45.4579 5.00003C45.4579 5.97047 45.239 6.82076 44.8013 7.5509C44.3635 8.2718 43.7525 8.83558 42.9683 9.24225C42.184 9.64891 41.272 9.85224 40.2324 9.85224H36.0465ZM37.8248 8.32726H40.1503C40.8708 8.32726 41.4909 8.18862 42.0107 7.91136C42.5396 7.63409 42.9455 7.24591 43.2282 6.74682C43.52 6.24774 43.6659 5.66547 43.6659 5.00003C43.6659 4.32534 43.52 3.74308 43.2282 3.25323C42.9455 2.75415 42.5396 2.36597 42.0107 2.0887C41.4909 1.81143 40.8708 1.6728 40.1503 1.6728H37.8248V8.32726Z" fill="white"/>
          <path d="M48.9895 4.18209H53.7499V5.66547H48.9895V4.18209ZM49.1263 8.34112H54.5296V9.85224H47.348V0.14782H54.3381V1.65894H49.1263V8.34112Z" fill="white"/>
          <path d="M58.1399 4.61185H62.9139V6.13683H58.1399V4.61185ZM58.2903 9.85224H56.512V0.14782H63.5021V1.65894H58.2903V9.85224Z" fill="white"/>
          <path d="M65.2219 9.85224V0.14782H67.0002V9.85224H65.2219Z" fill="white"/>
        </svg>
          {/* <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" /> */}
        </Link>

        {/* Right section (Lang, Wallet, Toggle) */}
        <div className="flex items-center lg:order-2 space-x-4">
          {/* Language Selector */}
          <div ref={dropdownRef} className="relative inline-block text-left">
            <div
              onClick={toggleDropdown}
              className="cursor-pointer p-2 rounded inline-flex justify-center items-center"
            >
              <div className="h-4 flex items-center gap-2">
                {/* Globe Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99992 1.33333C4.59416 1.33333 1.83325 4.09424 1.83325 7.5C1.83325 10.9058 4.59416 13.6667 7.99992 13.6667C11.4057 13.6667 14.1666 10.9058 14.1666 7.5C14.1666 4.09424 11.4057 1.33333 7.99992 1.33333ZM0.833252 7.5C0.833252 3.54196 4.04188 0.333332 7.99992 0.333332C11.958 0.333332 15.1666 3.54196 15.1666 7.5C15.1666 11.458 11.958 14.6667 7.99992 14.6667C4.04188 14.6667 0.833252 11.458 0.833252 7.5Z" fill="#5C66FF"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5.5C1.5 5.22386 1.72386 5 2 5H14C14.2761 5 14.5 5.22386 14.5 5.5C14.5 5.77614 14.2761 6 14 6H2C1.72386 6 1.5 5.77614 1.5 5.5Z" fill="#5C66FF"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.5C1.5 9.22386 1.72386 9 2 9H14C14.2761 9 14.5 9.22386 14.5 9.5C14.5 9.77614 14.2761 10 14 10H2C1.72386 10 1.5 9.77614 1.5 9.5Z" fill="#5C66FF"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0666 1.27891C7.51652 0.620353 8.48344 0.620363 8.93335 1.27894C10.3998 3.42558 11.1665 5.44528 11.1665 7.5C11.1665 9.55473 10.3998 11.5744 8.93334 13.7211C8.48344 14.3796 7.51653 14.3797 7.0666 13.7211C5.60001 11.5745 4.83324 9.55474 4.83325 7.5C4.83326 5.44527 5.60004 3.42556 7.0666 1.27891ZM8.10763 1.84302C8.05478 1.76566 7.94516 1.76566 7.8923 1.84302C6.49729 3.88494 5.83326 5.70999 5.83325 7.50001C5.83324 9.29003 6.49726 11.1151 7.8923 13.157C7.94515 13.2343 8.05478 13.2343 8.10763 13.157C9.50256 11.1151 10.1665 9.29003 10.1665 7.5C10.1665 5.70998 9.50256 3.88493 8.10763 1.84302Z" fill="#5C66FF"/>
                </svg>
                <div className="text-indigo-500 text-xs font-medium">{selectedLang}</div>
                <div className="flex justify-center items-center w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.56161 1.09232C9.7018 1.23251 9.7018 1.4598 9.56161 1.59999L5.25391 5.90768C5.11373 6.04787 4.88644 6.04787 4.74625 5.90768L0.438555 1.59999C0.298368 1.4598 0.298368 1.23251 0.438555 1.09232C0.578744 0.952136 0.806033 0.952136 0.946222 1.09232L5.00008 5.14618L9.05394 1.09232C9.19413 0.952136 9.42142 0.952136 9.56161 1.09232Z" fill="#5C66FF" stroke="#5C66FF" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            {open && (
              <div className="absolute right-0 mt-2 w-20 bg-white border border-gray-200 rounded shadow-lg z-50">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    onClick={() => handleSelect(lang)}
                    className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Connect Wallet Button */}
          <button className="px-4 py-2 cursor-pointer bg-indigo-500 rounded text-xs text-white hidden sm:inline-flex">
            Connect Wallet
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            {isOpen ? (

            <div className="p-2 bg-slate-600 rounded-lg inline-flex justify-center items-center gap-2 overflow-hidden">
            <div className="w-6 h-6 relative overflow-hidden">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
            </div>
          </div>
            ) : (
              <div className="p-2 bg-slate-600 rounded-lg inline-flex justify-center items-center gap-2 overflow-hidden">
              <div className="w-6 h-6 relative overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 12H3" stroke="#CDD0E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21 6H3" stroke="#CDD0E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21 18H3" stroke="#CDD0E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
            </div>
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 items-center lg:items-center">
            {navigationLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-700 lg:border-0 hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-indigo-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
