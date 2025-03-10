import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart } from 'recharts';

const MonthlyPerformance = () => {
  const monthlyData = [
    { month: 'Jan 2024', return: 3.2, trades: 14, winRate: 71.4 },
    { month: 'Dec 2023', return: 2.9, trades: 12, winRate: 66.7 },
    { month: 'Nov 2023', return: 3.1, trades: 15, winRate: 73.3 },
    { month: 'Oct 2023', return: 2.8, trades: 13, winRate: 69.2 },
    { month: 'Sep 2023', return: 3.0, trades: 16, winRate: 68.8 },
    { month: 'Aug 2023', return: 2.7, trades: 11, winRate: 63.6 },
    { month: 'Jul 2023', return: 3.3, trades: 17, winRate: 70.6 },
    { month: 'Jun 2023', return: 2.9, trades: 14, winRate: 71.4 },
    { month: 'May 2023', return: 3.1, trades: 15, winRate: 66.7 },
    { month: 'Apr 2023', return: 2.8, trades: 12, winRate: 75.0 },
    { month: 'Mar 2023', return: 3.2, trades: 16, winRate: 68.8 },
    { month: 'Feb 2023', return: 2.9, trades: 13, winRate: 69.2 }
  ].reverse();

  const statistics = [
    { label: 'Average Monthly Return', value: '3.0%' },
    { label: 'Average Trades per Month', value: '14' },
    { label: 'Average Win Rate', value: '69.6%' },
    { label: 'Best Month', value: '3.3%' },
    { label: 'Worst Month', value: '2.7%' },
    { label: 'Consecutive Winning Months', value: '12' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
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
              Monthly Performance Analysis
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delayed">
              Detailed breakdown of our trading performance on a month-by-month basis, 
              showcasing consistent returns and strategic execution.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
      {/* Monthly Returns Chart */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Monthly Returns (Last 12 Months)
            </h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    yAxisId="left"
                    dataKey="return" 
                    name="Return %" 
                    fill="#0284c7" 
                  />
                  <Bar 
                    yAxisId="right"
                    dataKey="winRate" 
                    name="Win Rate %" 
                    fill="#6366f1" 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Statistics */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Performance Statistics
          </h2>
          <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
            Consistent performance across multiple metrics, demonstrating the reliability of our trading strategy
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                label: "Average Monthly Return",
                value: "3.0%",
                icon: "📈",
                description: "Consistent monthly performance",
                trend: "Stable",
                trendColor: "text-green-400"
              },
              {
                label: "Average Trades per Month",
                value: "14",
                icon: "🎯",
                description: "Selective trading approach",
                trend: "Optimal",
                trendColor: "text-blue-400"
              },
              {
                label: "Average Win Rate",
                value: "69.6%",
                icon: "🏆",
                description: "High probability setups",
                trend: "Strong",
                trendColor: "text-green-400"
              },
              {
                label: "Best Month",
                value: "3.3%",
                icon: "⭐",
                description: "Peak performance",
                trend: "July 2023",
                trendColor: "text-yellow-400"
              },
              {
                label: "Worst Month",
                value: "2.7%",
                icon: "📊",
                description: "Risk-managed downside",
                trend: "August 2023",
                trendColor: "text-blue-400"
              },
              {
                label: "Consecutive Winning Months",
                value: "12",
                icon: "🔄",
                description: "Unbroken success streak",
                trend: "Ongoing",
                trendColor: "text-green-400"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 
                  transform hover:-translate-y-1 transition-all duration-300
                  hover:bg-white/15 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-4xl mb-4 block" role="img" aria-label={stat.label}>
                      {stat.icon}
                    </span>
                    <h3 className="text-lg font-medium text-blue-100 group-hover:text-white transition-colors">
                      {stat.label}
                    </h3>
                  </div>
                  <span className="text-3xl font-bold text-white">
                    {stat.value}
                  </span>
                </div>
                
                <p className="text-blue-200 text-sm mb-3">
                  {stat.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></div>
                  </div>
                  <span className={`text-sm font-medium ${stat.trendColor}`}>
                    {stat.trend}
                  </span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 -mb-2 -ml-2 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Details Table */}
      <section className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Detailed Monthly Breakdown
          </h2>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    {["Month", "Return", "Trades", "Win Rate"].map((header, index) => (
                      <th
                        key={index}
                        className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {monthlyData.map((month, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-blue-50/50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-gray-900">
                          {month.month}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-bold text-blue-600">
                          {month.return}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">
                          {month.trades}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${month.winRate >= 70 ? 'bg-green-100 text-green-800' : 
                          month.winRate >= 65 ? 'bg-blue-100 text-blue-800' : 
                          'bg-gray-100 text-gray-800'}`}>
                          {month.winRate}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Overview Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Strategy Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Monthly Performance Card */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <BarChart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Monthly Performance
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The strategy demonstrates selective market participation, focusing only on 
                  high-probability opportunities. Small declines before significant uptrends 
                  are part of the approach, indicating a well-managed risk-reward ratio.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-gradient-to-r from-blue-600 to-blue-200 rounded-full"></div>
                  <span className="text-blue-600 font-semibold">Monthly</span>
                </div>
              </div>

              {/* Annual Performance Card */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <LineChart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Annual Performance
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The strategy has proven its resilience during economic crises, achieving 
                  significant gains in periods such as the 2008 global financial crisis 
                  and the COVID-19 crisis.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-gradient-to-r from-green-600 to-green-200 rounded-full"></div>
                  <span className="text-green-600 font-semibold">Annual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default MonthlyPerformance;