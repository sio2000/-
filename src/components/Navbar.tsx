import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const logo = new URL('../assets/images/logo.jpg', import.meta.url).href;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBacktestOpen, setIsBacktestOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'gr' : 'en');
  };

  const mainNavItems = [
    { path: '/', label: language === 'en' ? 'Home' : 'Αρχική' },
    { type: 'backtest', label: language === 'en' ? 'Backtest' : 'Backtest' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: language === 'en' ? 'Contact' : 'Επικοινωνία' },
  ];

  const backtestItems = [
    { path: '/live-vs-backtest', label: language === 'en' ? 'Live vs Backtest' : 'Live vs Backtest' },
    { path: '/annual-performance', label: language === 'en' ? 'Annual Performance' : 'Ετήσια Απόδοση' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center min-w-[200px]">
            <NavLink to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="ForexBot Pro Logo" 
                className="h-14 w-auto"
              />
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item, index) => 
              item.type === 'backtest' ? (
                <div key="backtest" className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-600 
                             hover:text-blue-600 hover:bg-blue-50 transition-colors group-hover:text-blue-600"
                    onMouseEnter={() => setIsBacktestOpen(true)}
                    onMouseLeave={() => setIsBacktestOpen(false)}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>

                  <div
                    className={`absolute top-full left-0 w-48 py-2 bg-white rounded-md shadow-lg transform 
                             transition-all duration-200 ${
                               isBacktestOpen
                                 ? 'opacity-100 translate-y-0'
                                 : 'opacity-0 translate-y-2 pointer-events-none'
                             }`}
                    onMouseEnter={() => setIsBacktestOpen(true)}
                    onMouseLeave={() => setIsBacktestOpen(false)}
                  >
                    {backtestItems.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm transition-colors ${
                            isActive
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                          }`
                        }
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium 
                       text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'EL' : 'EN'}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="px-3 py-2">
              <div className="font-medium text-gray-600 mb-2">
                {language === 'en' ? 'Backtest' : 'Backtest'}
              </div>
              <div className="pl-4 space-y-1">
                {backtestItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium 
                       text-gray-600 hover:text-blue-600 hover:bg-blue-50 flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'Ελληνικά' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;