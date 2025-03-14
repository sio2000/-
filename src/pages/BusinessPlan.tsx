import React from 'react';
import { Building2, PieChart, Shield, Landmark, BarChart4, Users, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

const BusinessPlan = () => {
  const { language } = useLanguage();

  const projectedReturns = [
    { year: 2024, conservative: 25, expected: 32, aggressive: 38 },
    { year: 2025, conservative: 27, expected: 34, aggressive: 40 },
    { year: 2026, conservative: 26, expected: 33, aggressive: 39 },
    { year: 2027, conservative: 28, expected: 35, aggressive: 41 },
  ];

  const annualFees = [
    {
      category: language === 'en' ? 'Infrastructure & Technology' : 'Υποδομή & Τεχνολογία',
      amount: 1800,
      items: [
        language === 'en' ? 'Server costs' : 'Κόστη διακομιστών',
        language === 'en' ? 'VPS hosting' : 'Φιλοξενία VPS',
        language === 'en' ? 'Data feeds' : 'Τροφοδοσία δεδομένων',
        language === 'en' ? 'Trading software' : 'Λογισμικό συναλλαγών'
      ]
    },
    {
      category: language === 'en' ? 'Legal & Compliance' : 'Νομικά & Συμμόρφωση',
      amount: 1500,
      items: [
        language === 'en' ? 'Legal consultancy' : 'Νομική συμβουλευτική',
        language === 'en' ? 'Regulatory compliance' : 'Κανονιστική συμμόρφωση',
        language === 'en' ? 'Audit fees' : 'Κόστη ελέγχου'
      ]
    },
    {
      category: language === 'en' ? 'Operations' : 'Λειτουργίες',
      amount: 1200,
      items: [
        language === 'en' ? 'Algorithm maintenance' : 'Συντήρηση αλγορίθμου',
        language === 'en' ? 'Performance monitoring' : 'Παρακολούθηση απόδοσης',
        language === 'en' ? 'Risk management' : 'Διαχείριση κινδύνου'
      ]
    },
    {
      category: language === 'en' ? 'Administrative' : 'Διοικητικά',
      amount: 500,
      items: [
        language === 'en' ? 'Banking fees' : 'Τραπεζικά έξοδα',
        language === 'en' ? 'Accounting services' : 'Λογιστικές υπηρεσίες',
        language === 'en' ? 'Corporate maintenance' : 'Εταιρική συντήρηση'
      ]
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
            backgroundImage: `url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')`,
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
              {language === 'en' ? 'Investment Partnership Structure' : 'Δομή Επενδυτικής Συνεργασίας'}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delayed">
              {language === 'en' 
                ? 'Join our proven Forex trading venture with 15+ years of backtested results. We offer a transparent partnership model with consistent returns and professional management.'
                : 'Συμμετέχετε στο αποδεδειγμένο εγχείρημα διαπραγμάτευσης Forex με 15+ χρόνια δοκιμασμένων αποτελεσμάτων. Προσφέρουμε ένα διαφανές μοντέλο συνεργασίας με σταθερές αποδόσεις και επαγγελματική διαχείριση.'}
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12">
            {/* Business Model */}
            <section className="bg-white p-4 md:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Business Model' : 'Επιχειρηματικό Μοντέλο'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {language === 'en' ? 'Investment Structure' : 'Δομή Επένδυσης'}
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      {language === 'en' ? 'Minimum trading capital: €10,000' : 'Ελάχιστο κεφάλαιο συναλλαγών: €10,000'}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      {language === 'en' ? 'Annual operational fee: €5,000' : 'Ετήσιο λειτουργικό κόστος: €5,000'}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      {language === 'en' ? 'Profit sharing based on capital contribution' : 'Διανομή κερδών βάσει κεφαλαιακής συνεισφοράς'}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      {language === 'en' ? 'Quarterly profit distributions' : 'Τριμηνιαίες διανομές κερδών'}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {language === 'en' ? 'Partner Benefits' : 'Οφέλη Συνεργατών'}
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      {language === 'en' ? 'Access to proven trading algorithm' : 'Πρόσβαση σε δοκιμασμένο αλγόριθμο συναλλαγών'}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      {language === 'en' ? 'Real-time performance monitoring' : 'Παρακολούθηση απόδοσης σε πραγματικό χρόνο'}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      {language === 'en' ? 'Professional risk management' : 'Επαγγελματική διαχείριση κινδύνου'}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      {language === 'en' ? 'Tax-efficient structure' : 'Φορολογικά αποδοτική δομή'}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Annual Fee Breakdown */}
            <section className="bg-gradient-to-br from-blue-50 to-white p-4 md:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <PieChart className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Annual Fee Breakdown' : 'Ανάλυση Ετήσιων Εξόδων'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {annualFees.map((fee, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {fee.category}
                    </h3>
                    <p className="text-2xl font-bold text-blue-600 mb-4">
                      €{fee.amount}
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {fee.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Offshore Structure */}
            <section className="bg-white p-4 md:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <Landmark className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Offshore Structure' : 'Υπεράκτια Δομή'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {language === 'en' ? 'Jurisdictions' : 'Δικαιοδοσίες'}
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>Belize</li>
                    <li>Seychelles</li>
                    <li>St. Vincent</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {language === 'en' ? 'Benefits' : 'Οφέλη'}
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>{language === 'en' ? 'Tax efficiency' : 'Φορολογική αποδοτικότητα'}</li>
                    <li>{language === 'en' ? 'Higher leverage options' : 'Επιλογές υψηλότερης μόχλευσης'}</li>
                    <li>{language === 'en' ? 'Flexible regulations' : 'Ευέλικτοι κανονισμοί'}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {language === 'en' ? 'Compliance' : 'Συμμόρφωση'}
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>{language === 'en' ? 'Full legal transparency' : 'Πλήρης νομική διαφάνεια'}</li>
                    <li>{language === 'en' ? 'Regular audits' : 'Τακτικοί έλεγχοι'}</li>
                    <li>{language === 'en' ? 'Professional management' : 'Επαγγελματική διαχείριση'}</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Risk Management */}
            <section className="bg-white p-4 md:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Risk Management' : 'Διαχείριση Κινδύνου'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">
                    {language === 'en' ? 'Position Sizing' : 'Μέγεθος Θέσης'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Risk per trade limited to 0.5-1% of capital, ensuring sustainable growth and protection against adverse market movements.'
                      : 'Κίνδυνος ανά συναλλαγή περιορισμένος στο 0.5-1% του κεφαλαίου, διασφαλίζοντας βιώσιμη ανάπτυξη και προστασία από αρνητικές κινήσεις της αγοράς.'}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">
                    {language === 'en' ? 'Drawdown Control' : 'Έλεγχος Μείωσης'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Historical maximum drawdown of 25% with built-in circuit breakers and risk reduction mechanisms.'
                      : 'Ιστορική μέγιστη μείωση 25% με ενσωματωμένους μηχανισμούς διακοπής και μείωσης κινδύνου.'}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">
                    {language === 'en' ? 'Monitoring' : 'Παρακολούθηση'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? '24/7 algorithm monitoring with continuous optimization and performance analysis.'
                      : '24/7 παρακολούθηση αλγορίθμου με συνεχή βελτιστοποίηση και ανάλυση απόδοσης.'}
                  </p>
                </div>
              </div>
            </section>

            {/* Become a Partner */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 md:p-8 rounded-2xl shadow-lg text-white">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">
                  {language === 'en' ? 'Become a Partner' : 'Γίνετε Συνεργάτης'}
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  {language === 'en'
                    ? 'Join our successful trading venture with a minimum investment of €10,000 plus annual operational costs. Gain access to professional forex trading infrastructure and consistent returns.'
                    : 'Συμμετέχετε στο επιτυχημένο εγχείρημα συναλλαγών με ελάχιστη επένδυση €10,000 συν ετήσια λειτουργικά κόστη. Αποκτήστε πρόσβαση σε επαγγελματική υποδομή συναλλαγών forex και σταθερές αποδόσεις.'}
                </p>
                <Button 
                  href="/contact"
                  variant="secondary" 
                  className="text-blue-600 hover:text-blue-700"
                >
                  {language === 'en' ? 'Contact Us to Get Started' : 'Επικοινωνήστε μαζί μας για να ξεκινήσετε'} 
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan; 