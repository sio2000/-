import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, ArrowRight, HelpCircle } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: language === 'en' ? "What is this trading strategy?" : "Τι είναι αυτή η στρατηγική συναλλαγών;",
      answer: language === 'en' 
        ? "Our trading strategy combines algorithmic analysis with human expertise to identify and execute profitable Forex trades. It uses advanced technical indicators, market sentiment analysis, and risk management protocols."
        : "Η στρατηγική συναλλαγών μας συνδυάζει την αλγοριθμική ανάλυση με την ανθρώπινη εμπειρία για την αναγνώριση και εκτέλεση κερδοφόρων συναλλαγών Forex. Χρησιμοποιεί προηγμένους τεχνικούς δείκτες, ανάλυση συναισθήματος αγοράς και πρωτόκολλα διαχείρισης κινδύνου."
    },
    {
      question: language === 'en' ? "Is this strategy profitable?" : "Είναι κερδοφόρα αυτή η στρατηγική;",
      answer: language === 'en'
        ? "Yes, our strategy has demonstrated consistent profitability with an average monthly return of 2-3%. Historical performance and backtesting results are available for review."
        : "Ναι, η στρατηγική μας έχει επιδείξει σταθερή κερδοφορία με μέση μηνιαία απόδοση 2-3%. Τα ιστορικά αποτελέσματα απόδοσης και backtesting είναι διαθέσιμα προς εξέταση."
    },
    {
      question: language === 'en' ? "What is the minimum investment required?" : "Ποια είναι η ελάχιστη απαιτούμενη επένδυση;",
      answer: language === 'en'
        ? "The minimum investment is €10,000, plus annual operational costs. This ensures sufficient capital for optimal strategy execution and risk management."
        : "Η ελάχιστη επένδυση είναι €10.000, συν τα ετήσια λειτουργικά κόστη. Αυτό εξασφαλίζει επαρκές κεφάλαιο για βέλτιστη εκτέλεση στρατηγικής και διαχείριση κινδύνου."
    },
    {
      question: language === 'en' ? "How are profits distributed?" : "Πώς διανέμονται τα κέρδη;",
      answer: language === 'en'
        ? "Profits are distributed monthly to partners based on their investment percentage. We maintain complete transparency with detailed performance reports."
        : "Τα κέρδη διανέμονται μηνιαία στους συνεργάτες με βάση το ποσοστό επένδυσής τους. Διατηρούμε πλήρη διαφάνεια με λεπτομερείς αναφορές απόδοσης."
    },
    {
      question: language === 'en' ? "What risks are involved?" : "Ποιοι κίνδυνοι υπάρχουν;",
      answer: language === 'en'
        ? "Like all trading, Forex involves risks. We mitigate these through strict risk management, limiting per-trade exposure to 0.5-1% of capital, and maintaining a maximum drawdown limit of 25%."
        : "Όπως όλες οι συναλλαγές, το Forex ενέχει κινδύνους. Τους μετριάζουμε μέσω αυστηρής διαχείρισης κινδύνου, περιορίζοντας την έκθεση ανά συναλλαγή στο 0.5-1% του κεφαλαίου και διατηρώντας ένα μέγιστο όριο μείωσης 25%."
    },
    {
      question: language === 'en' ? "Why an offshore structure?" : "Γιατί υπεράκτια δομή;",
      answer: language === 'en'
        ? "The offshore structure provides tax efficiency, legal protection, and operational flexibility. We ensure full compliance with all relevant regulations."
        : "Η υπεράκτια δομή παρέχει φορολογική αποδοτικότητα, νομική προστασία και λειτουργική ευελιξία. Εξασφαλίζουμε πλήρη συμμόρφωση με όλους τους σχετικούς κανονισμούς."
    },
    {
      question: language === 'en' ? "Can I withdraw my investment at any time?" : "Μπορώ να αποσύρω την επένδυσή μου οποιαδήποτε στιγμή;",
      answer: language === 'en'
        ? "Yes, you can withdraw your investment with 30 days' notice. This period ensures proper position management and orderly account closure."
        : "Ναι, μπορείτε να αποσύρετε την επένδυσή σας με προειδοποίηση 30 ημερών. Αυτή η περίοδος εξασφαλίζει σωστή διαχείριση θέσεων και ομαλό κλείσιμο λογαριασμού."
    },
    {
      question: language === 'en' ? "How can I monitor my investment?" : "Πώς μπορώ να παρακολουθώ την επένδυσή μου;",
      answer: language === 'en'
        ? "You'll have access to real-time performance tracking through Myfxbook, plus detailed monthly reports and regular strategy updates."
        : "Θα έχετε πρόσβαση σε παρακολούθηση απόδοσης σε πραγματικό χρόνο μέσω του Myfxbook, καθώς και λεπτομερείς μηνιαίες αναφορές και τακτικές ενημερώσεις στρατηγικής."
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
            backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-full mb-6 backdrop-blur-sm">
              <HelpCircle className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'en' ? 'Frequently Asked Questions' : 'Συχνές Ερωτήσεις'}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Find detailed answers about our Forex trading strategy and partnership opportunities'
                : 'Βρείτε λεπτομερείς απαντήσεις σχετικά με τη στρατηγική συναλλαγών Forex και τις ευκαιρίες συνεργασίας'}
            </p>
          </div>
        </div>
      </section>

      {/* Add mobile-only styles */}
      <style jsx>{`
        /* Mobile-only styles (max-width: 768px) */
        @media (max-width: 768px) {
          /* Make sections scrollable on mobile */
          .scroll-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding: 0 1rem;
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
          .p-8, .p-12 {
            padding: 1.5rem;
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

          /* Reduce text sizes on mobile */
          .text-4xl {
            font-size: 2rem;
          }

          .text-2xl {
            font-size: 1.5rem;
          }

          .text-xl {
            font-size: 1.125rem;
          }

          /* Adjust spacing */
          .mb-6 {
            margin-bottom: 1rem;
          }

          .mb-12 {
            margin-bottom: 2rem;
          }

          .gap-8 {
            gap: 1rem;
          }

          /* FAQ specific mobile styles */
          .faq-grid {
            grid-template-columns: 1fr;
            margin: 0 auto;
            max-width: 100%;
          }

          .faq-item {
            padding: 1rem;
            margin-bottom: 0.5rem;
          }

          .faq-content {
            padding: 1rem 0;
            margin-left: -0.5rem;
          }

          /* Adjust category buttons */
          .category-buttons {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 0.5rem;
            padding: 0 1rem;
          }

          .category-buttons button {
            width: 100%;
            white-space: normal;
            height: auto;
            min-height: 48px;
            font-size: 0.875rem;
            padding: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          /* Make contact section stack on mobile */
          .contact-section {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
            margin-top: 2rem;
          }

          /* Adjust icon sizes and containers */
          .icon-container {
            width: 2.5rem;
            height: 2.5rem;
            min-width: 2.5rem;
          }

          /* Improve button touch targets */
          button {
            min-height: 44px;
          }

          /* Adjust hero section padding */
          .py-24 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }

          /* Improve readability */
          .text-gray-600 {
            font-size: 0.9375rem;
            line-height: 1.5;
          }
        }
      `}</style>

      {/* FAQ Content */}
      <div className="scroll-container">
        {/* FAQ Grid */}
        <div className="faq-grid grid gap-6">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="faq-item bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="icon-container bg-blue-100 p-2 rounded-lg">
                    <HelpCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-left">
                    {item.question}
                  </h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="faq-content mt-4 pl-14">
                  <div className="prose prose-blue max-w-none text-gray-600">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'en' ? 'Still Have Questions?' : 'Έχετε ακόμα ερωτήσεις;'}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? "We're here to help! Contact us for detailed information about our trading partnership opportunity."
                : 'Είμαστε εδώ για να βοηθήσουμε! Επικοινωνήστε μαζί μας για λεπτομερείς πληροφορίες σχετικά με την ευκαιρία συνεργασίας μας.'}
            </p>
            <Button 
              href="/contact" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'en' ? 'Contact Us' : 'Επικοινωνήστε μαζί μας'} <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 