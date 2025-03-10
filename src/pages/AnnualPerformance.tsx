import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { AlertCircle, BarChart } from 'lucide-react';

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Annual Performance Analysis
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delayed">
              Track record of consistent returns across multiple economic cycles, 
              demonstrating resilience during major market events.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
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

            {/* Performance During Major Market Events */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Performance During Major Market Events
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Our strategy has consistently delivered positive returns during significant market downturns
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      event: "2008 Financial Crisis",
                      strategyReturn: 32.5,
                      marketReturn: -38.5,
                      description: "Maintained positive returns during global market meltdown",
                      icon: "🏦",
                      bgColor: "from-gray-900 via-blue-900 to-blue-800"
                    },
                    {
                      event: "Brexit (2016)",
                      strategyReturn: 36.1,
                      marketReturn: -12.4,
                      description: "Capitalized on GBP volatility",
                      icon: "🇬🇧",
                      bgColor: "from-gray-900 via-blue-900 to-blue-800"
                    },
                    {
                      event: "COVID-19 (2020)",
                      strategyReturn: 42.3,
                      marketReturn: -26.7,
                      description: "Best performing year during extreme volatility",
                      icon: "📈",
                      bgColor: "from-gray-900 via-blue-900 to-blue-800"
                    },
                    {
                      event: "Black Monday (2024)",
                      strategyReturn: 34.2,
                      marketReturn: -15.8,
                      description: "Consistent performance during market correction",
                      icon: "📊",
                      bgColor: "from-gray-900 via-blue-900 to-blue-800"
                    }
                  ].map((crisis, index) => (
                    <div
                      key={index}
                      className="relative bg-white rounded-2xl shadow-lg overflow-hidden group
                        transform hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${crisis.bgColor} p-6`}>
                        <div className="flex items-center gap-3">
                          <span className="text-3xl bg-white/20 p-2 rounded-lg backdrop-blur-sm" 
                            role="img" aria-label="Event Icon">
                            {crisis.icon}
                          </span>
                          <h3 className="text-lg font-bold text-white leading-tight">
                            {crisis.event}
                          </h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        {/* Returns Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                            <p className="text-xs font-medium text-gray-600 mb-1">
                              Strategy Return
                            </p>
                            <div className="text-center">
                              <p className="text-xl font-bold text-green-600 leading-none">
                                +{crisis.strategyReturn}%
                              </p>
                            </div>
                          </div>
                          
                          <div className="bg-red-50 p-3 rounded-xl border border-red-100">
                            <p className="text-xs font-medium text-gray-600 mb-1">
                              Market Return
                            </p>
                            <div className="text-center">
                              <p className="text-xl font-bold text-red-600 leading-none">
                                {crisis.marketReturn}%
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Outperformance */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-medium text-gray-600">
                              Outperformance
                            </span>
                            <span className="text-sm font-bold text-green-600">
                              +{(crisis.strategyReturn - crisis.marketReturn).toFixed(1)}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${
                                crisis.bgColor 
                                  ? 'from-gray-600 to-gray-500' 
                                  : crisis.color === 'green'
                                    ? 'from-emerald-500 to-emerald-400'
                                    : `from-${crisis.color}-500 to-${crisis.color}-400`
                              }`}
                              style={{ width: `${((crisis.strategyReturn - crisis.marketReturn) / 100) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                          <p className="text-xs text-gray-600">
                            {crisis.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Key Insights */}
            <section className="mb-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Key Performance Insights
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Consistent Growth",
                        description: "Maintained positive returns every year since 2008, with an average annual return of 34.8%",
                        icon: "📈",
                        color: "emerald"
                      },
                      {
                        title: "Crisis Resilience",
                        description: "Demonstrated ability to generate profits during major market downturns and economic crises",
                        icon: "🛡️",
                        color: "blue"
                      },
                      {
                        title: "Volatility Management",
                        description: "Successfully adapted to varying market conditions while maintaining risk parameters",
                        icon: "⚡",
                        color: "purple"
                      },
                      {
                        title: "Market Independence",
                        description: "Returns show low correlation with traditional market movements, providing true diversification",
                        icon: "🎯",
                        color: "indigo"
                      }
                    ].map((insight, index) => (
                      <div 
                        key={index}
                        className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 
                          transform hover:-translate-y-1 transition-all duration-300
                          hover:bg-white/15 group animate-fade-in"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <span className="text-3xl bg-white/20 p-2 rounded-lg backdrop-blur-sm" 
                              role="img" aria-label={insight.title}>
                              {insight.icon}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-${insight.color}-300 
                              transition-colors duration-300">
                              {insight.title}
                            </h3>
                            <p className="text-blue-100 group-hover:text-white transition-colors duration-300">
                              {insight.description}
                            </p>
                          </div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r from-${insight.color}-500 to-${insight.color}-400 
                                transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                              style={{ width: '100%' }}
                            ></div>
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 
                          bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-2xl 
                          group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300">
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Strategy Overview Section - Moved to bottom */}
            <section>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Strategy Overview</h2>
                  <div className="grid md:grid-cols-2 gap-8">
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
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualPerformance;