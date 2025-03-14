import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowDownToLine } from 'lucide-react';

const valBackground = new URL('../assets/images/val.jpg', import.meta.url).href;

const LiveVsBacktest = () => {
  const { language } = useLanguage();

  const monthlyData = [
    { month: language === 'en' ? 'Jan' : 'Ιαν', live: 2.1, backtest: 2.3 },
    { month: language === 'en' ? 'Feb' : 'Φεβ', live: 1.8, backtest: 1.9 },
    { month: language === 'en' ? 'Mar' : 'Μαρ', live: 2.4, backtest: 2.2 },
    { month: language === 'en' ? 'Apr' : 'Απρ', live: 1.9, backtest: 2.0 },
    { month: language === 'en' ? 'May' : 'Μάι', live: 2.2, backtest: 2.1 },
    { month: language === 'en' ? 'Jun' : 'Ιουν', live: 2.0, backtest: 2.2 }
  ];

  const metrics = [
    { name: language === 'en' ? 'Win Rate' : 'Ποσοστό Επιτυχίας', live: 68, backtest: 71 },
    { name: language === 'en' ? 'Avg Win' : 'Μέσο Κέρδος', live: 2.1, backtest: 2.3 },
    { name: language === 'en' ? 'Avg Loss' : 'Μέση Απώλεια', live: 1.2, backtest: 1.1 },
    { name: language === 'en' ? 'Profit Factor' : 'Συντελεστής Κέρδους', live: 1.8, backtest: 1.9 }
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
              {language === 'en' 
                ? 'Live vs Backtest Performance' 
                : 'Σύγκριση Απόδοσης Live vs Backtest'}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Comparing real-world trading results with backtested performance to demonstrate the reliability and consistency of our strategy.'
                : 'Σύγκριση των αποτελεσμάτων πραγματικών συναλλαγών με την απόδοση των δοκιμών για την απόδειξη της αξιοπιστίας και της συνέπειας της στρατηγικής μας.'}
            </p>
          </div>
        </div>
      </section>

      {/* Add mobile-only styles */}
      <style jsx>{`
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

          /* Adjust metrics cards */
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 1. Monthly Performance Comparison */}
      <section className="mb-20">
        <div className="chart-container">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'en' ? 'Monthly Performance Comparison' : 'Σύγκριση Μηνιαίας Απόδοσης'}
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
                    name={language === 'en' ? 'Live Trading' : 'Live Συναλλαγές'} 
                    stroke="#2563eb" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="backtest" 
                    name={language === 'en' ? 'Backtest' : 'Δοκιμές'} 
                    stroke="#64748b" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Performance Analysis */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Strategy Validation Results' : 'Αποτελέσματα Επικύρωσης Στρατηγικής'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Detailed analysis of our trading strategy performance and statistical validation'
                : 'Λεπτομερής ανάλυση της απόδοσης της στρατηγικής συναλλαγών και στατιστική επικύρωση'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                {language === 'en' ? 'Key Findings' : 'Βασικά Ευρήματα'}
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  {language === 'en'
                    ? '• High correlation between live and backtest results'
                    : '• Υψηλή συσχέτιση μεταξύ live και backtest αποτελεσμάτων'}
                </li>
                <li>
                  {language === 'en'
                    ? '• Consistent performance across different market conditions'
                    : '• Σταθερή απόδοση σε διαφορετικές συνθήκες αγοράς'}
                </li>
                <li>
                  {language === 'en'
                    ? '• Similar risk metrics in both environments'
                    : '• Παρόμοιες μετρήσεις ρίσκου και στα δύο περιβάλλοντα'}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                {language === 'en' ? 'Statistical Measures' : 'Στατιστικά Μέτρα'}
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  {language === 'en'
                    ? '• R-squared value: 0.92'
                    : '• Τιμή R-squared: 0.92'}
                </li>
                <li>
                  {language === 'en'
                    ? '• Standard deviation difference: 0.07%'
                    : '• Διαφορά τυπικής απόκλισης: 0.07%'}
                </li>
                <li>
                  {language === 'en'
                    ? '• Average monthly return difference: 0.1%'
                    : '• Διαφορά μέσης μηνιαίας απόδοσης: 0.1%'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Performance Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Detailed Performance Metrics' : 'Αναλυτικές Μετρήσεις Απόδοσης'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Comprehensive comparison of key performance indicators between live trading and backtesting results'
                : 'Πλήρης σύγκριση βασικών δεικτών απόδοσης μεταξύ αποτελεσμάτων live συναλλαγών και δοκιμών'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Average Win Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
                {language === 'en' ? 'Average Win' : 'Μέσο Κέρδος'}
              </h3>
              
              <div className="space-y-6">
                {/* Performance Bars */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">{language === 'en' ? 'Live Trading' : 'Live Συναλλαγές'}</span>
                    <span className="font-medium">2.1%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: '91.3%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Backtest</span>
                    <span className="font-medium">2.3%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full bg-green-400 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">{language === 'en' ? 'Difference' : 'Διαφορά'}</span>
                    <span className="text-sm font-medium text-green-600">-0.20%</span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      {language === 'en' 
                        ? 'Average profit per winning trade shows strong consistency between live and backtested results.'
                        : 'Το μέσο κέρδος ανά επιτυχημένη συναλλαγή δείχνει ισχυρή συνέπεια μεταξύ live και δοκιμαστικών αποτελεσμάτων.'}
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li>• {language === 'en' ? 'Minimal variation in win sizes' : 'Ελάχιστη διακύμανση στα μεγέθη κέρδους'}</li>
                      <li>• {language === 'en' ? 'Consistent execution quality' : 'Σταθερή ποιότητα εκτέλεσης'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Average Loss Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
                {language === 'en' ? 'Average Loss' : 'Μέση Απώλεια'}
              </h3>
              
              <div className="space-y-6">
                {/* Performance Bars */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">{language === 'en' ? 'Live Trading' : 'Live Συναλλαγές'}</span>
                    <span className="font-medium">1.2%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full bg-red-600 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Backtest</span>
                    <span className="font-medium">1.1%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full bg-red-400 rounded-full" style={{ width: '91.7%' }}></div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">{language === 'en' ? 'Difference' : 'Διαφορά'}</span>
                    <span className="text-sm font-medium text-red-600">+0.10%</span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      {language === 'en'
                        ? 'Risk management systems effectively control losses, with only minor deviation from backtested results.'
                        : 'Τα συστήματα διαχείρισης κινδύνου ελέγχουν αποτελεσματικά τις απώλειες, με ελάχιστη απόκλιση από τα δοκιμαστικά αποτελέσματα.'}
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li>• {language === 'en' ? 'Strict stop-loss adherence' : 'Αυστηρή τήρηση stop-loss'}</li>
                      <li>• {language === 'en' ? 'Effective risk control' : 'Αποτελεσματικός έλεγχος κινδύνου'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Profit Factor Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                {language === 'en' ? 'Profit Factor' : 'Συντελεστής Κέρδους'}
              </h3>
              
              <div className="space-y-6">
                {/* Performance Bars */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">{language === 'en' ? 'Live Trading' : 'Live Συναλλαγές'}</span>
                    <span className="font-medium">1.8</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '94.7%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Backtest</span>
                    <span className="font-medium">1.9</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full bg-blue-400 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">{language === 'en' ? 'Difference' : 'Διαφορά'}</span>
                    <span className="text-sm font-medium text-blue-600">-0.10</span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      {language === 'en'
                        ? 'The ratio between gross profit and gross loss demonstrates robust trading efficiency.'
                        : 'Η αναλογία μεταξύ μικτού κέρδους και μικτής ζημίας δείχνει ισχυρή αποδοτικότητα συναλλαγών.'}
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li>• {language === 'en' ? 'Strong profitability ratio' : 'Ισχυρός δείκτης κερδοφορίας'}</li>
                      <li>• {language === 'en' ? 'Consistent performance metrics' : 'Σταθερές μετρήσεις απόδοσης'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Download Report Section */}
      <section className="relative py-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'en' 
                ? 'Get the Complete Performance Analysis' 
                : 'Λάβετε την Πλήρη Ανάλυση Απόδοσης'}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              {language === 'en'
                ? 'Download our detailed report comparing live trading results with backtested performance, including statistical analysis and methodology.'
                : 'Κατεβάστε την αναλυτική μας αναφορά που συγκρίνει τα αποτελέσματα των live συναλλαγών με την απόδοση των δοκιμών, συμπεριλαμβανομένης της στατιστικής ανάλυσης και της μεθοδολογίας.'}
            </p>
            <a
              href="/reports/live-vs-backtest-analysis.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl 
                       font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 
                       transform hover:-translate-y-1"
            >
              <ArrowDownToLine className="w-5 h-5" />
              {language === 'en' ? 'Download Full Report' : 'Λήψη Πλήρους Αναφοράς'}
            </a>
          </div>
        </div>
      </section>

      {/* 5. Performance Analysis Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Trading Analysis"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'en' ? 'Strategy Validation Results' : 'Αποτελέσματα Επικύρωσης Στρατηγικής'}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {language === 'en' ? (
                    <>
                      The performance of a strategy can vary significantly when applied to <strong className="text-black">real market conditions</strong> compared to <strong className="text-black">historical data</strong>. By comparing the results, you can determine whether your strategy performs equally well in <strong className="text-black">live trading</strong> or if there are discrepancies that need to be addressed. This analysis helps identify differences in <strong className="text-black">profit</strong>, <strong className="text-black">drawdown</strong>, <strong className="text-black">stability</strong>, and <strong className="text-black">volatility</strong>, providing valuable insights for improving performance.
                    </>
                  ) : (
                    <>
                      Η απόδοση μιας στρατηγικής μπορεί να διαφέρει σημαντικά όταν εφαρμόζεται σε <strong className="text-black">πραγματικές συνθήκες αγοράς</strong> σε σύγκριση με τα <strong className="text-black">ιστορικά δεδομένα</strong>. Συγκρίνοντας τα αποτελέσματα, μπορείτε να διαπιστώσετε εάν η στρατηγική σας αποδίδει εξίσου καλά στις <strong className="text-black">ζωντανές συναλλαγές</strong> ή εάν υπάρχουν αποκλίσεις που πρέπει να αντιμετωπιστούν. Αυτή η ανάλυση βοηθά στον εντοπισμό διαφορών στο <strong className="text-black">κέρδος</strong>, τη <strong className="text-black">πτώση</strong>, τη <strong className="text-black">σταθερότητα</strong> και τη <strong className="text-black">μεταβλητότητα</strong>, παρέχοντας πολύτιμες πληροφορίες για τη βελτίωση της απόδοσης.
                    </>
                  )}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'en' ? (
                    <>
                      With a detailed comparison of the data, you can assess whether your approach is sustainable in the long run. Instead of relying solely on theoretical results, the real picture shows whether your strategy can withstand actual market conditions. With this information, you can identify strengths and weaknesses, optimize your strategy, and increase your chances of <strong className="text-green-600 underline">success</strong>.</>
                  ) : (
                    <>
                      Με μια λεπτομερή σύγκριση των δεδομένων, μπορείτε να αξιολογήσετε εάν η προσέγγισή σας είναι βιώσιμη μακροπρόθεσμα. Αντί να βασίζεστε μόνο σε θεωρητικά αποτελέσματα, η πραγματική εικόνα δείχνει εάν η στρατηγική σας μπορεί να αντέξει τις πραγματικές συνθήκες αγοράς. Με αυτές τις πληροφορίες, μπορείτε να εντοπίσετε δυνατά και αδύναμα σημεία, να βελτιστοποιήσετε τη στρατηγική σας και να αυξήσετε τις πιθανότητες <strong className="text-green-600 underline">επιτυχίας</strong>.</>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveVsBacktest;