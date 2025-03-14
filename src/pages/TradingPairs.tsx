import React from 'react';
import { Check, ArrowRight, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const TradingPairs = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
          {/* Header with gradient background */}
          <div className="text-center mb-12 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Trading Pairs Coverage' : 'Κάλυψη Ζευγών Συναλλαγών'}
            </h2>
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-4xl font-bold text-blue-600">28</span>
              <span className="text-xl text-gray-600">
                {language === 'en' ? 'Currency Pairs' : 'Ζεύγη Νομισμάτων'}
              </span>
            </div>
          </div>
          
          {/* Add mobile-only styles */}
          <style jsx>{`
            /* Mobile-only styles (max-width: 768px) */
            @media (max-width: 768px) {
              /* Make sections scrollable on mobile */
              .scroll-container {
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
              }

              /* Hide scrollbars but keep functionality */
              .scroll-container::-webkit-scrollbar {
                display: none;
              }
              
              .scroll-container {
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

              /* Make currency pair cards responsive */
              .pair-grid {
                grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
              }

              /* Make images responsive */
              img {
                max-width: 100%;
                height: auto;
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

              /* Adjust benefit cards */
              .benefit-card {
                padding: 0.75rem;
              }
            }
          `}</style>

          {/* Wrap currency pairs in scrollable container */}
          <div className="scroll-container">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Major Pairs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  {language === 'en' ? 'Major Pairs (15)' : 'Κύρια Ζεύγη (15)'}
                </h3>
                <div className="pair-grid grid grid-cols-2 gap-4">
                  {[
                    'EUR/USD',
                    'GBP/USD',
                    'USD/JPY',
                    'USD/CHF',
                    'USD/CAD',
                    'EUR/JPY',
                    'EUR/GBP',
                    'EUR/CHF',
                    'EUR/CAD',
                    'GBP/JPY',
                    'GBP/CHF',
                    'GBP/CAD',
                    'CAD/JPY',
                    'CAD/CHF',
                    'CHF/JPY'
                  ].map((pair) => (
                    <div 
                      key={pair} 
                      className="p-3 bg-gray-50 rounded-lg text-gray-700 transition-all duration-200
                               hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-0.5
                               hover:bg-white cursor-pointer"
                    >
                      {pair}
                    </div>
                  ))}
                </div>
              </div>

              {/* Minor Pairs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  {language === 'en' ? 'Minor Pairs (13)' : 'Δευτερεύοντα Ζεύγη (13)'}
                </h3>
                <div className="pair-grid grid grid-cols-2 gap-4">
                  {[
                    'AUD/USD',
                    'NZD/USD',
                    'AUD/JPY',
                    'AUD/CHF',
                    'AUD/CAD',
                    'AUD/NZD',
                    'EUR/AUD',
                    'EUR/NZD',
                    'GBP/AUD',
                    'GBP/NZD',
                    'NZD/JPY',
                    'NZD/CAD',
                    'NZD/CHF'
                  ].map((pair) => (
                    <div 
                      key={pair} 
                      className="p-3 bg-gray-50 rounded-lg text-gray-700 transition-all duration-200
                               hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:-translate-y-0.5
                               hover:bg-white cursor-pointer"
                    >
                      {pair}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-blue-800 text-center text-lg">
              {language === 'en' 
                ? 'Our trading system actively monitors and trades all major and minor currency pairs, providing comprehensive coverage of the most liquid and traded pairs in the Forex market.'
                : 'Το σύστημα συναλλαγών μας παρακολουθεί ενεργά και πραγματοποιεί συναλλαγές σε όλα τα κύρια και δευτερεύοντα ζεύγη νομισμάτων, παρέχοντας ολοκληρωμένη κάλυψη των πιο ρευστών και εμπορεύσιμων ζευγών στην αγορά Forex.'}
            </p>
          </div>

          {/* Understanding section with better styling */}
          <div className="mt-16 space-y-12">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
                {language === 'en' 
                  ? 'Understanding Our Currency Pairs'
                  : 'Κατανόηση των Ζευγών Νομισμάτων'}
              </h3>
              
              <div className="space-y-6 text-lg">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'en' 
                    ? 'The Major Pairs are the most traded currency pairs in the Forex market, always including the US dollar (USD) paired with other strong currencies like EUR/USD, GBP/USD, and USD/JPY. These pairs offer high liquidity and tight spreads, making them a favorite among traders.'
                    : 'Τα Κύρια Ζεύγη είναι τα πιο συχνά διαπραγματεύσιμα ζεύγη νομισμάτων στην αγορά Forex, συμπεριλαμβάνοντας πάντα το αμερικανικό δολάριο (USD) σε συνδυασμό με άλλα ισχυρά νομίσματα όπως EUR/USD, GBP/USD και USD/JPY. Αυτά τα ζεύγη προσφέρουν υψηλή ρευστότητα και στενά spreads, καθιστώντας τα αγαπημένα μεταξύ των traders.'}
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  {language === 'en'
                    ? 'On the other hand, Minor Pairs do not include USD but consist of strong currencies like EUR/GBP, EUR/AUD, and GBP/JPY. While they have slightly lower liquidity, they present significant trading opportunities due to their higher volatility.'
                    : 'Από την άλλη πλευρά, τα Δευτερεύοντα Ζεύγη δεν περιλαμβάνουν το USD αλλά αποτελούνται από ισχυρά νομίσματα όπως EUR/GBP, EUR/AUD και GBP/JPY. Παρόλο που έχουν ελαφρώς χαμηλότερη ρευστότητα, παρουσιάζουν σημαντικές ευκαιρίες συναλλαγών λόγω της υψηλότερης μεταβλητότητάς τους.'}
                </p>
              </div>
            </div>

            {/* Strategy section with enhanced styling */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-green-600 rounded-full"></div>
                {language === 'en' 
                  ? 'Strategy & Importance of Coverage'
                  : 'Στρατηγική & Σημασία της Κάλυψης'}
              </h3>
              
              <p className="text-gray-600 mb-8 text-lg">
                {language === 'en'
                  ? 'Our AI-powered trading bot selects currency pairs based on liquidity, volatility, and trading opportunities. Covering both Major and Minor Pairs allows us to:'
                  : 'Το bot συναλλαγών μας με τεχνητή νοημοσύνη επιλέγει ζεύγη νομισμάτων με βάση τη ρευστότητα, τη μεταβλητότητα και τις ευκαιρίες συναλλαγών. Η κάλυψη τόσο των Κύριων όσο και των Δευτερευόντων Ζευγών μας επιτρέπει να:'}
              </p>

              {/* Wrap benefits in scrollable container */}
              <div className="scroll-container mt-12">
                <div className="space-y-4">
                  {[
                    language === 'en' 
                      ? 'Diversify risk – Reducing dependency on a single market.'
                      : 'Διαφοροποιούμε τον κίνδυνο – Μειώνοντας την εξάρτηση από μία μόνο αγορά.',
                    language === 'en'
                      ? 'Unlock more trading opportunities – Capturing trends and movements across different pairs.'
                      : 'Ξεκλειδώνουμε περισσότερες ευκαιρίες συναλλαγών – Εντοπίζοντας τάσεις και κινήσεις σε διαφορετικά ζεύγη.',
                    language === 'en'
                      ? 'Ensure consistent performance – Balancing stability from major pairs with dynamic moves from minor pairs.'
                      : 'Εξασφαλίζουμε σταθερή απόδοση – Εξισορροπώντας τη σταθερότητα των κύριων ζευγών με τις δυναμικές κινήσεις των δευτερευόντων ζευγών.'
                  ].map((benefit, index) => (
                    <div key={index} className="benefit-card flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                      <div className="mt-1">
                        <Check className="w-6 h-6 text-green-500" />
                      </div>
                      <p className="text-gray-700 text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-lg mb-8">
                {language === 'en'
                  ? 'This comprehensive approach enables our bot to maintain high performance and adapt to market conditions, maximizing profitability with smart, data-driven decisions.'
                  : 'Αυτή η ολοκληρωμένη προσέγγιση επιτρέπει στο bot μας να διατηρεί υψηλή απόδοση και να προσαρμόζεται στις συνθήκες της αγοράς, μεγιστοποιώντας την κερδοφορία με έξυπνες, βασισμένες σε δεδομένα αποφάσεις.'}
              </p>

              {/* Performance Button */}
              <div className="flex justify-center mt-12">
                <Link
                  to="/monthly-performance"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white text-lg
                           font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 
                           shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <LineChart className="w-6 h-6" />
                  {language === 'en' 
                    ? 'Check Our Monthly Performance'
                    : 'Δείτε τη Μηνιαία μας Απόδοση'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPairs; 