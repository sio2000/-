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
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Backtest Results (2008-2023)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive backtest analysis demonstrating consistent performance 
              through multiple market cycles and economic conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Chart */}
      <section className="mb-20">
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

      {/* Key Statistics */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Key Performance Statistics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  {stat.label}
                </h3>
                <p className="text-3xl font-bold text-blue-600">
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