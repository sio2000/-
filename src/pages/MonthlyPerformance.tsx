import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

const MonthlyPerformance = () => {
  const { language } = useLanguage();

  const monthlyData = [
    { month: language === 'en' ? 'Jan 2024' : 'Ιαν 2024', return: 3.2, trades: 14, winRate: 71.4 },
    { month: language === 'en' ? 'Dec 2023' : 'Δεκ 2023', return: 2.9, trades: 12, winRate: 66.7 },
    { month: language === 'en' ? 'Nov 2023' : 'Νοε 2023', return: 3.1, trades: 15, winRate: 73.3 },
    { month: language === 'en' ? 'Oct 2023' : 'Οκτ 2023', return: 2.8, trades: 13, winRate: 69.2 },
    { month: language === 'en' ? 'Sep 2023' : 'Σεπ 2023', return: 3.0, trades: 16, winRate: 68.8 },
    { month: language === 'en' ? 'Aug 2023' : 'Αυγ 2023', return: 2.7, trades: 11, winRate: 63.6 },
    { month: language === 'en' ? 'Jul 2023' : 'Ιουλ 2023', return: 3.3, trades: 17, winRate: 70.6 },
    { month: language === 'en' ? 'Jun 2023' : 'Ιουν 2023', return: 2.9, trades: 14, winRate: 71.4 },
    { month: language === 'en' ? 'May 2023' : 'Μάι 2023', return: 3.1, trades: 15, winRate: 66.7 },
    { month: language === 'en' ? 'Apr 2023' : 'Απρ 2023', return: 2.8, trades: 12, winRate: 75.0 },
    { month: language === 'en' ? 'Mar 2023' : 'Μαρ 2023', return: 3.2, trades: 16, winRate: 68.8 },
    { month: language === 'en' ? 'Feb 2023' : 'Φεβ 2023', return: 2.9, trades: 13, winRate: 69.2 }
  ].reverse();

  const statistics = [
    { 
      label: language === 'en' ? 'Average Monthly Return' : 'Μέση Μηνιαία Απόδοση', 
      value: '3.0%' 
    },
    { 
      label: language === 'en' ? 'Average Trades per Month' : 'Μέσος Όρος Συναλλαγών ανά Μήνα', 
      value: '14' 
    },
    { 
      label: language === 'en' ? 'Average Win Rate' : 'Μέσο Ποσοστό Επιτυχίας', 
      value: '69.6%' 
    },
    { 
      label: language === 'en' ? 'Best Month' : 'Καλύτερος Μήνας', 
      value: '3.3%' 
    },
    { 
      label: language === 'en' ? 'Worst Month' : 'Χειρότερος Μήνας', 
      value: '2.7%' 
    },
    { 
      label: language === 'en' ? 'Consecutive Winning Months' : 'Συνεχόμενοι Κερδοφόροι Μήνες', 
      value: '12' 
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
              {language === 'en' ? 'Monthly Performance Analysis' : 'Ανάλυση Μηνιαίας Απόδοσης'}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delayed">
              {language === 'en'
                ? 'Detailed breakdown of our trading performance on a month-by-month basis, showcasing consistent returns and strategic execution.'
                : 'Λεπτομερής ανάλυση της απόδοσης των συναλλαγών μας σε μηνιαία βάση, που αναδεικνύει τις σταθερές αποδόσεις και τη στρατηγική εκτέλεση.'}
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
        <div className="chart-container">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'en' ? 'Monthly Returns (Last 12 Months)' : 'Μηνιαίες Αποδόσεις (Τελευταίοι 12 Μήνες)'}
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
                    name={language === 'en' ? 'Return %' : 'Απόδοση %'} 
                    fill="#0284c7" 
                  />
                  <Bar 
                    yAxisId="right"
                    dataKey="winRate" 
                    name={language === 'en' ? 'Win Rate %' : 'Ποσοστό Επιτυχίας %'} 
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
          <div className="stats-container">
            {/* Top 3 stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  label: language === 'en' ? "Average Monthly Return" : "Μέση Μηνιαία Απόδοση",
                  value: "3.0%",
                  icon: "📈",
                  description: language === 'en' ? "Consistent monthly performance" : "Σταθερή μηνιαία απόδοση",
                  trend: language === 'en' ? "Stable" : "Σταθερή",
                  trendColor: "text-green-400"
                },
                {
                  label: language === 'en' ? "Average Trades per Month" : "Μέσος Όρος Συναλλαγών ανά Μήνα",
                  value: "14",
                  icon: "🎯",
                  description: language === 'en' ? "Selective trading approach" : "Επιλεκτική προσέγγιση συναλλαγών",
                  trend: language === 'en' ? "Optimal" : "Βέλτιστη",
                  trendColor: "text-blue-400"
                },
                {
                  label: language === 'en' ? "Average Win Rate" : "Μέσο Ποσοστό Επιτυχίας",
                  value: "69.6%",
                  icon: "🏆",
                  description: language === 'en' ? "High probability setups" : "Υψηλής πιθανότητας setups",
                  trend: language === 'en' ? "Strong" : "Ισχυρή",
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

            {/* Center text */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {language === 'en' ? 'Performance Statistics' : 'Στατιστικά Απόδοσης'}
              </h2>
              <p className="text-blue-200 max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'Consistent performance across multiple metrics, demonstrating the reliability of our trading strategy'
                  : 'Σταθερή απόδοση σε πολλαπλές μετρήσεις, που αποδεικνύει την αξιοπιστία της στρατηγικής συναλλαγών μας'}
              </p>
            </div>

            {/* Bottom 3 stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  label: language === 'en' ? "Best Month" : "Καλύτερος Μήνας",
                  value: "3.3%",
                  icon: "⭐",
                  description: language === 'en' ? "Peak performance" : "Πιο καλή απόδοση",
                  trend: language === 'en' ? "July 2023" : "Ιούλιος 2023",
                  trendColor: "text-yellow-400"
                },
                {
                  label: language === 'en' ? "Worst Month" : "Χειρότερος Μήνας",
                  value: "2.7%",
                  icon: "📊",
                  description: language === 'en' ? "Risk-managed downside" : "Μείωση κινδύνου",
                  trend: language === 'en' ? "August 2023" : "Αύγουστος 2023",
                  trendColor: "text-blue-400"
                },
                {
                  label: language === 'en' ? "Consecutive Winning Months" : "Συνεχόμενοι Κερδοφόροι Μήνες",
                  value: "12",
                  icon: "🔄",
                  description: language === 'en' ? "Ongoing" : "Συνεχής επιτυχία",
                  trend: language === 'en' ? "Ongoing" : "Συνεχής",
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
        </div>
      </section>

      {/* Monthly Details Table */}
      <section className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Detailed Monthly Breakdown
          </h2>
          <div className="overflow-x-auto">
            <div className="min-w-[768px]">
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
          </div>
        </div>
      </section>

      {/* Strategy Overview Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {language === 'en' ? 'Strategy Overview' : 'Επισκόπηση Στρατηγικής'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Monthly Performance Card */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <BarChart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === 'en' ? 'Monthly Performance' : 'Μηνιαία Απόδοση'}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {language === 'en'
                    ? 'The strategy demonstrates selective market participation, focusing only on high-probability opportunities. Small declines before significant uptrends are part of the approach, indicating a well-managed risk-reward ratio.'
                    : 'Η στρατηγική επιδεικνύει επιλεκτική συμμετοχή στην αγορά, εστιάζοντας μόνο σε ευκαιρίες υψηλής πιθανότητας. Οι μικρές πτώσεις πριν από σημαντικές ανοδικές τάσεις αποτελούν μέρος της προσέγγισης, υποδεικνύοντας μια καλά διαχειριζόμενη αναλογία κινδύνου-ανταμοιβής.'}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-gradient-to-r from-blue-600 to-blue-200 rounded-full"></div>
                  <span className="text-blue-600 font-semibold">
                    {language === 'en' ? 'Monthly' : 'Μηνιαία'}
                  </span>
                </div>
              </div>

              {/* Annual Performance Card */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <LineChart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === 'en' ? 'Annual Performance' : 'Ετήσια Απόδοση'}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {language === 'en'
                    ? 'The strategy has proven its resilience during economic crises, achieving significant gains in periods such as the 2008 global financial crisis and the COVID-19 crisis.'
                    : 'Η στρατηγική έχει αποδείξει την ανθεκτικότητά της κατά τη διάρκεια οικονομικών κρίσεων, επιτυγχάνοντας σημαντικά κέρδη σε περιόδους όπως η παγκόσμια οικονομική κρίση του 2008 και η κρίση του COVID-19.'}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-gradient-to-r from-green-600 to-green-200 rounded-full"></div>
                  <span className="text-green-600 font-semibold">
                    {language === 'en' ? 'Annual' : 'Ετήσια'}
                  </span>
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

        /* Mobile-only styles (max-width: 768px) */
        @media (max-width: 768px) {
          /* Make charts scrollable on mobile */
          .chart-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          /* Hide scrollbars but keep functionality */
          .chart-container::-webkit-scrollbar {
            display: none;
          }
          
          .chart-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          /* Adjust padding for mobile */
          .p-8 {
            padding: 1rem;
          }

          /* Stack grid items on mobile */
          .grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          /* Make images responsive */
          img {
            max-width: 100%;
            height: auto;
          }

          /* Adjust chart heights for mobile */
          .h-[400px] {
            height: 300px;
          }

          /* Ensure charts are responsive */
          .recharts-wrapper {
            max-width: 100%;
          }

          /* Add horizontal scrolling for tables */
          .table-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          /* Reduce text sizes on mobile */
          .text-4xl {
            font-size: 2rem;
          }

          .text-2xl {
            font-size: 1.5rem;
          }

          /* Adjust spacing */
          .mb-6 {
            margin-bottom: 1rem;
          }

          .gap-8 {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MonthlyPerformance;