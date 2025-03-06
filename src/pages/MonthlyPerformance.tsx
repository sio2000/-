import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Monthly Performance Analysis
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of our trading performance on a month-by-month basis, 
              showcasing consistent returns and strategic execution.
            </p>
          </div>
        </div>
      </section>

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
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Performance Statistics
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

      {/* Monthly Details Table */}
      <section className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Detailed Monthly Breakdown
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Month
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Return
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trades
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Win Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {monthlyData.map((month, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {month.month}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {month.return}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {month.trades}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {month.winRate}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonthlyPerformance;