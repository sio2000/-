import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const logo = new URL('../assets/images/logo.jpg', import.meta.url).href;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'gr' : 'en');
  };

  const navItems = [
    { path: '/', label: language === 'en' ? 'Home' : 'Αρχική' },
    { path: '/backtests', label: language === 'en' ? 'Backtests' : 'Backtests' },
    { path: '/live-vs-backtest', label: language === 'en' ? 'Live vs Backtest' : 'Live vs Backtest' },
    { path: '/monthly-performance', label: language === 'en' ? 'Monthly Performance' : 'Μηνιαία Απόδοση' },
    { path: '/annual-performance', label: language === 'en' ? 'Annual Performance' : 'Ετήσια Απόδοση' },
    { path: '/business-plan', label: language === 'en' ? 'Business Plan' : 'Επιχειρηματικό Πλάνο' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: language === 'en' ? 'Contact' : 'Επικοινωνία' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center min-w-[200px] mr-8">
            <NavLink to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="ForexBot Pro Logo" 
                className="h-14 w-auto"
              />
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-6 pl-4">
            {navItems.map((item) => (
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
            ))}
            
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 flex items-center gap-2 ml-4"
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
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 flex items-center gap-2"
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