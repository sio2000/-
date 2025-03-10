import React from 'react';
import { NavLink } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

const logo = new URL('../assets/images/logo.jpg', import.meta.url).href;

const Navbar = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/backtests', label: 'Backtests' },
    { path: '/live-vs-backtest', label: 'Live vs Backtest' },
    { path: '/monthly-performance', label: 'Monthly Performance' },
    { path: '/annual-performance', label: 'Annual Performance' },
    { path: '/business-plan', label: 'Business Plan' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex">
            <NavLink to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="ForexBot Pro Logo" 
                className="h-14 w-auto"
              />
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;