import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const valBackground = new URL('../assets/images/val.jpg', import.meta.url).href;

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${valBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Live vs Backtest Performance
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comparing real-world trading results with backtested performance to 
              demonstrate the reliability and consistency of our strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Comparison Chart */}
      <section className="py-20">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Metrics Comparison
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Detailed analysis of performance metrics between live trading and backtesting results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                  {metric.title}
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 font-medium">Live Trading</p>
                    <p className="text-2xl font-bold text-blue-600">{metric.live}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 font-medium">Backtest</p>
                    <p className="text-2xl font-bold text-indigo-600">{metric.backtest}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 font-medium">Difference</p>
                    <p className={`text-2xl font-bold ${
                      metric.difference.startsWith('+') 
                        ? 'text-green-600' 
                        : metric.difference.startsWith('-') 
                          ? 'text-red-600' 
                          : 'text-gray-900'
                    }`}>
                      {metric.difference}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        style={{ 
                          width: `${
                            metric.title === 'Win Rate' 
                              ? parseFloat(metric.live) 
                              : metric.title === 'Average Monthly Return'
                                ? parseFloat(metric.live) * 20
                                : 100
                          }%` 
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {metric.title === 'Win Rate' ? 'Success Rate' : 'Performance Match'}
                    </span>
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