import React from 'react';
import { Check, ArrowRight, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const TradingPairs = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
          {/* Header with gradient background */}
          <div className="text-center mb-12 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trading Pairs Coverage
            </h2>
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-4xl font-bold text-blue-600">28</span>
              <span className="text-xl text-gray-600">Currency Pairs</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Major Pairs */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Major Pairs (15)
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'EUR/USD',
                  'GBP/USD',
                  'USD/JPY',
                  'USD/CHF',
                  'USD/CAD',
                  'EUR/JPY',
                  'EUR/GBP',
                  'EUR/CHF',
                  'EUR/CAD',
                  'GBP/JPY',
                  'GBP/CHF',
                  'GBP/CAD',
                  'CAD/JPY',
                  'CAD/CHF',
                  'CHF/JPY'
                ].map((pair) => (
                  <div 
                    key={pair} 
                    className="p-3 bg-gray-50 rounded-lg text-gray-700 transition-all duration-200
                             hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-0.5
                             hover:bg-white cursor-pointer"
                  >
                    {pair}
                  </div>
                ))}
              </div>
            </div>

            {/* Minor Pairs */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                Minor Pairs (13)
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'AUD/USD',
                  'NZD/USD',
                  'AUD/JPY',
                  'AUD/CHF',
                  'AUD/CAD',
                  'AUD/NZD',
                  'EUR/AUD',
                  'EUR/NZD',
                  'GBP/AUD',
                  'GBP/NZD',
                  'NZD/JPY',
                  'NZD/CAD',
                  'NZD/CHF'
                ].map((pair) => (
                  <div 
                    key={pair} 
                    className="p-3 bg-gray-50 rounded-lg text-gray-700 transition-all duration-200
                             hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:-translate-y-0.5
                             hover:bg-white cursor-pointer"
                  >
                    {pair}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-blue-800 text-center text-lg">
              Our AI trading system actively monitors and trades all major and minor currency pairs, 
              providing comprehensive coverage of the most liquid and traded pairs in the Forex market.
            </p>
          </div>

          {/* Understanding section with better styling */}
          <div className="mt-16 space-y-12">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
                Understanding Our Currency Pairs
              </h3>
              
              <div className="space-y-6 text-lg">
                <p className="text-gray-600 leading-relaxed">
                  The Major Pairs are the most traded currency pairs in the Forex market, always including 
                  the US dollar (USD) paired with other strong currencies like EUR/USD, GBP/USD, and USD/JPY. 
                  These pairs offer high liquidity and tight spreads, making them a favorite among traders.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  On the other hand, Minor Pairs do not include USD but consist of strong currencies like 
                  EUR/GBP, EUR/AUD, and GBP/JPY. While they have slightly lower liquidity, they present 
                  significant trading opportunities due to their higher volatility.
                </p>
              </div>
            </div>

            {/* Strategy section with enhanced styling */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-green-600 rounded-full"></div>
                Strategy & Importance of Coverage
              </h3>
              
              <p className="text-gray-600 mb-8 text-lg">
                Our AI-powered trading bot selects currency pairs based on liquidity, volatility, and 
                trading opportunities. Covering both Major and Minor Pairs allows us to:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Diversify risk – Reducing dependency on a single market.',
                  'Unlock more trading opportunities – Capturing trends and movements across different pairs.',
                  'Ensure consistent performance – Balancing stability from major pairs with dynamic moves from minor pairs.'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <div className="mt-1">
                      <Check className="w-6 h-6 text-green-500" />
                    </div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-lg mb-8">
                This comprehensive approach enables our bot to maintain high performance and adapt to 
                market conditions, maximizing profitability with smart, data-driven decisions.
              </p>

              {/* Performance Button */}
              <div className="flex justify-center mt-12">
                <Link
                  to="/monthly-performance"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white text-lg
                           font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 
                           shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <LineChart className="w-6 h-6" />
                  Check Our Monthly Performance
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPairs; 