import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import * as TooltipUI from '@radix-ui/react-tooltip';

const Backtests = () => {
  // Sample backtest data (2008-2023)
  const performanceData = [
    { year: '2008', return: 358, drawdown: -72 },
    { year: '2009', return: 170, drawdown: -28 },
    { year: '2010', return: 105, drawdown: -28 },
    { year: '2011', return: 272, drawdown: -22 },
    { year: '2012', return: 5, drawdown: -10 },
    { year: '2013', return: -12, drawdown: -23 },
    { year: '2014', return: 99, drawdown: -19 },
    { year: '2015', return: 155, drawdown: -60 },
    { year: '2016', return: 148, drawdown: -40 },
    { year: '2017', return: -25, drawdown: -26 },
    { year: '2018', return: 2, drawdown: -33 },
    { year: '2019', return: 68, drawdown: -26 },
    { year: '2020', return: 200, drawdown: -39 },
    { year: '2021', return: 0, drawdown: -15 },
    { year: '2022', return: 67, drawdown: -14 },
    { year: '2023', return: 27, drawdown: -20 },
    { year: '2024', return: 138, drawdown: -28 }
  ];

  const statistics = [
    { label: 'CAGR', value: '79.98%' },
    { label: 'Win Rate', value: '59.5%' },
    { label: 'Profit Factor', value: '2.40' },
    { label: 'Max Drawdown', value: '40% (2008 and 2015)' },
    { label: 'Sharpe Ratio', value: '1.10' },
    { label: 'Risk/Reward', value: '1/1.6' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Backtest Results (2008-2023)
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delayed">
              Comprehensive backtest analysis demonstrating consistent performance through 
              multiple market cycles and economic conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Performance Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="h-6 w-1 bg-blue-600 rounded-full"></div>
              Historical Performance
            </h2>
              <div className="flex items-center gap-4 text-sm">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  98% Quality Score
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800">
                  1.2M+ Data Points
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                  Multiple Timeframes
                </span>
              </div>
            </div>
            
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <RechartsTooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="return" 
                    name="Annual Return %" 
                    stroke="#0284c7" 
                    strokeWidth={2} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="drawdown" 
                    name="Max Drawdown %" 
                    stroke="#ef4444" 
                    strokeWidth={2} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Backtest Statistics */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Detailed Backtest Results
            </h2>
            
            {/* Key Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Trading Period</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Symbol:</span>
                    <span className="font-semibold">USDJPY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Period:</span>
                    <span className="font-semibold">M5 (2008.01.01 - 2024.12.31)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Initial Deposit:</span>
                    <span className="font-semibold">€10,000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Leverage:</span>
                    <span className="font-semibold">1:500</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Metrics</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Net Profit:</span>
                    <span className="font-semibold text-green-600">€214,056,308.07</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gross Profit:</span>
                    <span className="font-semibold text-green-600">€365,934,912.36</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gross Loss:</span>
                    <span className="font-semibold text-red-600">-€151,878,604.29</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Profit Factor:</span>
                    <span className="font-semibold">2.41</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Trading Statistics</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Trades:</span>
                    <span className="font-semibold">12,684</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Win Rate:</span>
                    <span className="font-semibold text-green-600">59.93%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Profit Trades:</span>
                    <span className="font-semibold">7,602</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loss Trades:</span>
                    <span className="font-semibold">5,082</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trading Pairs & Timeframes */}
            <div className="mb-12">
              {/* Title Section */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Trading Capabilities
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  The bot trades on the following timeframes, supporting 
                  <span className="font-semibold text-blue-600"> 28 currency pairs </span> 
                  and
                  <span className="font-semibold text-green-600"> 16 timeframes</span>.
                </p>
              </div>

              {/* Grid Container */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Trading Pairs */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Trading Pairs (28)
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'AUDCAD', 'AUDCHF', 'AUDJPY', 'AUDNZD', 'AUDUSD',
                      'CADCHF', 'CADJPY', 'CHFJPY', 'EURAUD', 'EURCAD',
                      'EURCHF', 'EURGBP', 'EURJPY', 'EURNZD', 'EURUSD',
                      'GBPAUD', 'GBPCAD', 'GBPCHF', 'GBPJPY', 'GBPNZD',
                      'GBPUSD', 'NZDCAD', 'NZDCHF', 'NZDJPY', 'NZDUSD',
                      'USDCAD', 'USDCHF', 'USDJPY'
                    ].map((pair) => (
                      <div 
                        key={pair} 
                        className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        {pair}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link
                      to="/trading-pairs"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white 
                               font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 gap-2"
                    >
                      Major & Minor Pairs
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Timeframes */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Timeframes (16)
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'PERIOD_M5',
                      'PERIOD_M10',
                      'PERIOD_M12',
                      'PERIOD_M15',
                      'PERIOD_M20',
                      'PERIOD_M30',
                      'PERIOD_H1',
                      'PERIOD_H2',
                      'PERIOD_H3',
                      'PERIOD_H4',
                      'PERIOD_H6',
                      'PERIOD_H8',
                      'PERIOD_H12',
                      'PERIOD_D1',
                      'PERIOD_W1',
                      'PERIOD_MN1'
                    ].map((timeframe) => (
                      <div 
                        key={timeframe} 
                        className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-between"
                      >
                        <span>{timeframe}</span>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Multi-timeframe analysis from 5 minutes to monthly timeframes
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Statistics */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  Trade Analysis
                  <TooltipUI.Provider>
                    <TooltipUI.Root>
                      <TooltipUI.Trigger asChild>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <Info className="w-4 h-4" />
                        </button>
                      </TooltipUI.Trigger>
                      <TooltipUI.Portal>
                        <TooltipUI.Content
                          className="max-w-xs bg-gray-900 text-white p-4 rounded-lg shadow-lg text-sm"
                          sideOffset={5}
                        >
                          <p className="font-semibold mb-2">Understanding Win Rate & Risk/Reward Ratio</p>
                          <p className="mb-2">Out of 100 trades, we win 60% and lose 40%.</p>
                          <p className="mb-2">Each winning trade yields $1.60, while each losing trade costs $1.00.</p>
                          <p className="mb-2">Risk/Reward Ratio = 1:1.6 (for every $1 risked, we aim to gain $1.60).</p>
                          <p className="mb-2">Total profit from winning trades: 60 × $1.60 = $96</p>
                          <p className="mb-2">Total loss from losing trades: 40 × $1.00 = $40</p>
                          <p>Net profit: $96 - $40 = $56 per 100 trades.</p>
                          <TooltipUI.Arrow className="fill-gray-900" />
                        </TooltipUI.Content>
                      </TooltipUI.Portal>
                    </TooltipUI.Root>
                  </TooltipUI.Provider>
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Profit Trade:</span>
                    <span className="font-semibold">€48,136.66</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Loss Trade:</span>
                    <span className="font-semibold">-€29,885.60</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Largest Profit Trade:</span>
                    <span className="font-semibold text-green-600">€497,646.95</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Largest Loss Trade:</span>
                    <span className="font-semibold text-red-600">-€123,577.79</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Risk Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center gap-2">
                      Profit Factor
                      <TooltipUI.Provider>
                        <TooltipUI.Root>
                          <TooltipUI.Trigger asChild>
                            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                              <Info className="w-4 h-4" />
                            </button>
                          </TooltipUI.Trigger>
                          <TooltipUI.Portal>
                            <TooltipUI.Content
                              className="max-w-xs bg-gray-900 text-white p-4 rounded-lg shadow-lg text-sm"
                              sideOffset={5}
                            >
                              The profit factor shows how many times the gross profit (Sum of all the winning trades) 
                              exceeds the gross loss (Sum of all the losing trades). The higher the value, the better.
                              <TooltipUI.Arrow className="fill-gray-900" />
                            </TooltipUI.Content>
                          </TooltipUI.Portal>
                        </TooltipUI.Root>
                      </TooltipUI.Provider>
                    </span>
                    <span className="font-semibold">3.88</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center gap-2">
                      Sharpe Ratio
                      <TooltipUI.Provider>
                        <TooltipUI.Root>
                          <TooltipUI.Trigger asChild>
                            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                              <Info className="w-4 h-4" />
                            </button>
                          </TooltipUI.Trigger>
                          <TooltipUI.Portal>
                            <TooltipUI.Content
                              className="max-w-xs bg-gray-900 text-white p-4 rounded-lg shadow-lg text-sm"
                              sideOffset={5}
                            >
                              The Sharpe ratio is used to characterize how well the return of an asset compensates 
                              the investor for the risk taken. The higher the value, the better.
                              <TooltipUI.Arrow className="fill-gray-900" />
                            </TooltipUI.Content>
                          </TooltipUI.Portal>
                        </TooltipUI.Root>
                      </TooltipUI.Provider>
                    </span>
                    <span className="font-semibold">1.07</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center gap-2">
                      Z-Score
                      <TooltipUI.Provider>
                        <TooltipUI.Root>
                          <TooltipUI.Trigger asChild>
                            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                              <Info className="w-4 h-4" />
                            </button>
                          </TooltipUI.Trigger>
                          <TooltipUI.Portal>
                            <TooltipUI.Content
                              className="max-w-xs bg-gray-900 text-white p-4 rounded-lg shadow-lg text-sm"
                              sideOffset={5}
                            >
                              Z-Score is used for calculating the ability of a trading system to generate wins and 
                              losses in streaks. It enables us to see if the streaks generated are of a random pattern or not.
                              In this system, there is a 99.99% chance that a profit will be followed by a profit.
                              <TooltipUI.Arrow className="fill-gray-900" />
                            </TooltipUI.Content>
                          </TooltipUI.Portal>
                        </TooltipUI.Root>
                      </TooltipUI.Provider>
                    </span>
                    <span className="font-semibold">-104.80 (94.74%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-center mt-12 pt-8 border-t border-gray-100">
              <a
                href="/backtest.7z"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg 
                         hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg gap-2 
                         transform hover:translate-y-[-2px]"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Backtest Report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="mb-20 bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              Expert Advisor: Backtested for Enduring Performance
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-delayed">
              Watch this video to understand how our AI-powered Forex trading system operates
            </p>
          </div>
          <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D685636760460232"
              title="How It Works"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Key Performance Statistics */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center animate-fade-in">
            Key Performance Statistics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-50/30"
              >
                <h3 className="text-lg font-semibold text-gray-600 mb-2 transition-colors duration-200 group-hover:text-gray-900">
                  {stat.label}
                </h3>
                <p className="text-3xl font-bold text-blue-600 transition-colors duration-200 group-hover:text-blue-700">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Experience These Results?
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Join our successful trading venture and gain access to our proven AI-powered 
                Forex trading strategy. Contact us today to learn more about partnership opportunities.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl 
                         hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl 
                         transform hover:-translate-y-1 gap-2"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-blue-400">
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-2">15+</p>
                <p className="text-blue-100">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-2">28</p>
                <p className="text-blue-100">Currency Pairs</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-2">34.8%</p>
                <p className="text-blue-100">Average Annual Return</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Backtests;