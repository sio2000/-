import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const LiveVsBacktest = () => {
  const monthlyData = [
    { month: 'Jan', live: 2.8, backtest: 2.9 },
    { month: 'Feb', live: 3.1, backtest: 2.8 },
    { month: 'Mar', live: 2.9, backtest: 3.0 },
    { month: 'Apr', live: 3.2, backtest: 3.1 },
    { month: 'May', live: 2.7, backtest: 2.8 },
    { month: 'Jun', live: 3.0, backtest: 2.9 }
  ];

  const metrics = [
    {
      title: 'Average Monthly Return',
      live: '2.95%',
      backtest: '2.92%',
      difference: '+0.03%'
    },
    {
      title: 'Win Rate',
      live: '67.8%',
      backtest: '68.5%',
      difference: '-0.7%'
    },
    {
      title: 'Average Drawdown',
      live: '4.2%',
      backtest: '4.1%',
      difference: '+0.1%'
    },
    {
      title: 'Profit Factor',
      live: '2.82',
      backtest: '2.87',
      difference: '-0.05'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Live vs Backtest Performance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comparing real-world trading results with backtested performance to 
              demonstrate the reliability and consistency of our strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Comparison Chart */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Monthly Performance Comparison
            </h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="live" 
                    name="Live Performance %" 
                    stroke="#0284c7" 
                    strokeWidth={2} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="backtest" 
                    name="Backtest Performance %" 
                    stroke="#6366f1" 
                    strokeWidth={2} 
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Comparison */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Key Metrics Comparison
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {metric.title}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Live</p>
                    <p className="text-2xl font-bold text-blue-600">{metric.live}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Backtest</p>
                    <p className="text-2xl font-bold text-indigo-600">{metric.backtest}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Difference</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.difference}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveVsBacktest;