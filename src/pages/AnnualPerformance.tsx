import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { AlertCircle } from 'lucide-react';

const AnnualPerformance = () => {
  const annualData = [
    { year: 2008, return: 32.5, marketEvent: 'Financial Crisis', description: 'Global financial crisis and market crash' },
    { year: 2009, return: 28.7, marketEvent: 'Recovery', description: 'Post-crisis recovery period' },
    { year: 2010, return: 35.2, marketEvent: 'European Debt Crisis', description: 'Sovereign debt crisis in Europe' },
    { year: 2011, return: 31.8, marketEvent: 'US Credit Downgrade', description: 'S&P downgrades US credit rating' },
    { year: 2012, return: 29.5, marketEvent: 'Eurozone Crisis', description: 'Continued European economic struggles' },
    { year: 2013, return: 33.6, marketEvent: 'Fed Taper Tantrum', description: 'Market reaction to Fed policy changes' },
    { year: 2014, return: 30.9, marketEvent: 'Oil Price Crash', description: 'Major decline in oil prices' },
    { year: 2015, return: 34.7, marketEvent: 'China Slowdown', description: 'Chinese economic growth concerns' },
    { year: 2016, return: 36.1, marketEvent: 'Brexit', description: 'UK votes to leave the European Union' },
    { year: 2017, return: 38.4, marketEvent: 'Crypto Boom', description: 'Cryptocurrency market surge' },
    { year: 2018, return: 32.8, marketEvent: 'Trade War', description: 'US-China trade tensions' },
    { year: 2019, return: 35.9, marketEvent: 'Fed Rate Cuts', description: 'Federal Reserve policy shift' },
    { year: 2020, return: 42.3, marketEvent: 'COVID-19', description: 'Global pandemic market impact' },
    { year: 2021, return: 39.6, marketEvent: 'Recovery Rally', description: 'Post-pandemic market recovery' },
    { year: 2022, return: 36.7, marketEvent: 'Inflation Crisis', description: 'High inflation and rate hikes' },
    { year: 2023, return: 37.8, marketEvent: 'Banking Crisis', description: 'Regional banking sector issues' },
    { year: 2024, return: 34.2, marketEvent: 'Black Monday', description: 'January 2024 market correction' }
  ];

  const crisisPerformance = [
    {
      event: '2008 Financial Crisis',
      return: 32.5,
      marketReturn: -38.5,
      description: 'Maintained positive returns during global market meltdown'
    },
    {
      event: 'Brexit (2016)',
      return: 36.1,
      marketReturn: -12.4,
      description: 'Capitalized on GBP volatility'
    },
    {
      event: 'COVID-19 (2020)',
      return: 42.3,
      marketReturn: -26.7,
      description: 'Best performing year during extreme volatility'
    },
    {
      event: 'Black Monday (2024)',
      return: 34.2,
      marketReturn: -15.8,
      description: 'Consistent performance during market correction'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Annual Performance Analysis
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track record of consistent returns across multiple economic cycles,
              demonstrating resilience during major market events.
            </p>
          </div>
        </div>
      </section>

      {/* Annual Returns Chart */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Annual Returns (2008-2024)
            </h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={annualData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis domain={[0, 50]} />
                  <Tooltip content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                          <p className="font-bold text-gray-900">{data.year}</p>
                          <p className="text-blue-600">Return: {data.return}%</p>
                          <p className="text-gray-600">{data.marketEvent}</p>
                          <p className="text-sm text-gray-500">{data.description}</p>
                        </div>
                      );
                    }
                    return null;
                  }} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="return"
                    name="Annual Return %"
                    stroke="#0284c7"
                    fill="#bfdbfe"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Performance */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Performance During Major Market Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {crisisPerformance.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {event.event}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Strategy Return</p>
                        <p className="text-2xl font-bold text-blue-600">
                          +{event.return}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Market Return</p>
                        <p className="text-2xl font-bold text-red-600">
                          {event.marketReturn}%
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Performance Insights
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-gray-700">
                  <strong>Consistent Growth:</strong> Maintained positive returns every year since 2008,
                  with an average annual return of 34.8%
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-gray-700">
                  <strong>Crisis Resilience:</strong> Demonstrated ability to generate profits during
                  major market downturns and economic crises
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-gray-700">
                  <strong>Volatility Management:</strong> Successfully adapted to varying market
                  conditions while maintaining risk parameters
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-gray-700">
                  <strong>Market Independence:</strong> Returns show low correlation with traditional
                  market movements, providing true diversification
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnualPerformance;