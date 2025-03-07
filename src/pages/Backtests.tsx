import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Backtests = () => {
  // Sample backtest data (2008-2023)
  const performanceData = [
    { year: '2008', return: 32.5, drawdown: -12.3 },
    { year: '2009', return: 28.7, drawdown: -8.5 },
    { year: '2010', return: 35.2, drawdown: -10.1 },
    { year: '2011', return: 31.8, drawdown: -9.7 },
    { year: '2012', return: 29.5, drawdown: -7.8 },
    { year: '2013', return: 33.6, drawdown: -11.2 },
    { year: '2014', return: 30.9, drawdown: -8.9 },
    { year: '2015', return: 34.7, drawdown: -10.5 },
    { year: '2016', return: 36.1, drawdown: -12.8 },
    { year: '2017', return: 38.4, drawdown: -9.3 },
    { year: '2018', return: 32.8, drawdown: -11.7 },
    { year: '2019', return: 35.9, drawdown: -10.2 },
    { year: '2020', return: 42.3, drawdown: -13.5 },
    { year: '2021', return: 39.6, drawdown: -11.8 },
    { year: '2022', return: 36.7, drawdown: -12.1 },
    { year: '2023', return: 37.8, drawdown: -10.9 }
  ];

  const statistics = [
    { label: 'CAGR', value: '34.8%' },
    { label: 'Win Rate', value: '68.5%' },
    { label: 'Profit Factor', value: '2.87' },
    { label: 'Max Drawdown', value: '13.5%' },
    { label: 'Sharpe Ratio', value: '2.93' },
    { label: 'Recovery Factor', value: '4.12' }
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Historical Performance
            </h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
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
              src="https://www.youtube.com/embed/vE9bW6gXOeg"
              title="How It Works"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
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
    </div>
  );
};

export default Backtests;