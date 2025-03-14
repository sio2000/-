import React from 'react';
import { ArrowRight, LineChart, Shield, TrendingUp, Brain, ShieldCheck, Zap, BarChart, Scale, ExternalLink, Building2, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

const heroBackground = new URL('../assets/images/herobackground.jpg', import.meta.url).href;
const codeImage = new URL('../assets/images/code.jpg', import.meta.url).href;
const tradingImage = new URL('../assets/images/trading.jpg', import.meta.url).href;
const forexVideo = new URL('../assets/video/fvid.mp4', import.meta.url).href;

const Home = () => {
  const { language } = useLanguage();
  // Add state for tracking screen width
  const [isMobile, setIsMobile] = React.useState(false);

  // Add effect to handle screen resize
  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is standard mobile breakpoint
    };

    // Check initially
    checkIfMobile();

    // Add resize listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: 'Based on Human Observation',
      description: 'Advanced algorithms process market data in real-time, identifying optimal trading opportunities across multiple currency pairs.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: 'Risk Management',
      description: 'Sophisticated risk management protocols protect capital through position sizing and stop-loss mechanisms.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Market Adaptation',
      description: 'Dynamic strategy adjustment based on market volatility and economic conditions.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Automated Execution',
      description: 'Lightning-fast trade execution with zero emotional bias, operating 24/7 across all market conditions.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      title: 'Performance Tracking',
      description: 'Real-time monitoring and detailed performance analytics for complete transparency.'
    },
    {
      icon: <Scale className="w-8 h-8 text-blue-600" />,
      title: 'Scalability',
      description: 'Proven ability to scale across multiple accounts while maintaining consistent performance.'
    }
  ];

  return (
    <div className="min-h-screen">
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

          /* Make images and videos responsive */
          img, video {
            max-width: 100%;
            height: auto;
          }

          /* Ensure feature cards stack properly */
          .features-grid {
            grid-template-columns: 1fr;
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

          /* Adjust hero section for mobile */
          .hero-content {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          /* Make buttons stack on mobile */
          .button-container {
            flex-direction: column;
            gap: 1rem;
          }

          /* Adjust feature section spacing */
          .feature-section {
            padding: 2rem 1rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Conditional Background */}
        <div className="absolute inset-0 w-full h-full">
          {isMobile ? (
            // Mobile Background Image
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroBackground})` }}
            />
          ) : (
            // Desktop/Tablet Video
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src={forexVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced Forex Trading <br />
              <span className="text-blue-400">Powered by Human Expertise</span>
            </h1>
            <div className="button-container flex flex-col sm:flex-row gap-4 justify-center mt-24">
              <Button
                href="https://www.myfxbook.com/members/giannis/funded-instatrader/10605583"
                className="gap-2"
              >
                View on MyFXBook <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" href="/contact" className="gap-2">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MyFXBook Live Performance Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in flex items-center justify-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              {language === 'en' ? 'Live Trading Performance' : 'Απόδοση Live Συναλλαγών'}
            </h2>
            
            {/* Strategy Performance Description */}
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100/50 backdrop-blur-sm mb-12">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Since the strategy has proven profitable trades vs losing trades at a ratio of 
                <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md mx-1 shadow-sm"> 
                  60% winners 
                </span> 
                vs 
                <span className="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md mx-1 shadow-sm">
                  40% losers
                </span>, 
                and a risk-to-reward ratio of 
                <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md mx-1 shadow-sm">
                  $1 risked / $1.61 gained
                </span>, 
                the expected return per 100 trades is calculated as follows on a 
                <span className="font-bold text-gray-900">$10,000</span> account with 
                <span className="font-bold text-gray-900">0.20 Lot</span> size per trade:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                  <h4 className="text-green-800 font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Profitable trades
                  </h4>
                  <p className="text-green-700">
                    <span className="text-lg">60 trades × $322</span>
                    <br />
                    <span className="text-2xl font-bold">= $19,320</span>
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-red-100">
                  <h4 className="text-red-800 font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Losing trades
                  </h4>
                  <p className="text-red-700">
                    <span className="text-lg">40 trades × $200</span>
                    <br />
                    <span className="text-2xl font-bold">= $8,000</span>
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                  <h4 className="text-blue-800 font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Net expected profit
                  </h4>
                  <p className="text-blue-700">
                    <span className="text-lg">$19,320 – $8,000</span>
                    <br />
                    <span className="text-2xl font-bold">= $11,320</span>
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 italic text-center bg-blue-50/50 p-4 rounded-xl shadow-inner">
                This clearly demonstrates that the strategy has a consistently positive expected return of 
                <span className="font-bold text-blue-600 bg-white px-2 py-0.5 rounded-md mx-1 shadow-sm">
                  $11,320 per 100 trades
                </span>, 
                confirming its profitability and sustainability over the long term.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Gain</h3>
                <p className="text-4xl font-bold text-blue-600">+116.71%</p>
                <p className="text-sm text-gray-500 mt-2">Since inception</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Monthly Average</h3>
                <p className="text-4xl font-bold text-blue-600">+5.80%</p>
                <p className="text-sm text-gray-500 mt-2">Consistent monthly returns</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Win Rate</h3>
                <p className="text-4xl font-bold text-blue-600">62%</p>
                <p className="text-sm text-gray-500 mt-2">Long positions success rate</p>
              </div>
            </div>

            {/* MyFXBook Widgets */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Growth Widget */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Growth Performance</h3>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <a 
                    href="https://www.myfxbook.com/members/giannis/funded-instatrader/10605583"
                    className="block relative transform transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <img 
                      alt="MyFXBook Growth Widget"
                      src="https://widgets.myfxbook.com/custom-widget?id=10605583&width=800&height=550&bart=0&linet=0&symbol=CHFJPY&magic=-1&title=Funded%20InstaTrader&titles=12&bgColor=ffffff&gridColor=bdbdbd&lineColor=ff0505&barColor=ffadad&bar1Color=ffadad&fontColor=525252&chartbgc=ffffff&equityColor=eff45a"
                      className="w-full h-[500px] rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-black ring-opacity-5"></div>
                  </a>
                </div>
              </div>

              {/* Monthly Performance Widget */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Monthly Performance</h3>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <a 
                    href="https://www.myfxbook.com/members/giannis/funded-instatrader/10605583"
                    className="block relative transform transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <img 
                      alt="MyFXBook Monthly Performance"
                      src="https://widgets.myfxbook.com/custom-widget?id=10605583&width=800&height=550&bart=1&linet=5&symbol=CHFJPY&magic=-1&title=Funded%20InstaTrader&titles=12&bgColor=ffffff&gridColor=bdbdbd&lineColor=ff0505&barColor=ffadad&bar1Color=ffadad&fontColor=525252&chartbgc=ffffff&equityColor=eff45a"
                      className="w-full h-[500px] rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-black ring-opacity-5"></div>
                  </a>
                </div>
              </div>

              {/* Instructions */}
              <div className="md:col-span-2 text-center mt-4">
                <p className="text-gray-600 italic flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Select above on the chart to view the corresponding page on MyFXBook.com
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                href="https://www.myfxbook.com/members/giannis/funded-instatrader/10605583"
                className="gap-2 text-lg px-8 py-4 shadow-lg hover:shadow-xl"
              >
                View Complete Track Record <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="feature-section py-20">
        <div className="scroll-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
              Key Features
            </h3>
            <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br from-white to-blue-50 group"
                >
                  <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-all duration-300 group-hover:bg-blue-100">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 h-1 w-0 group-hover:w-1/3 bg-blue-500 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'en' ? 'How it Works' : 'Πώς Λειτουργεί'}
            </h2>
          </div>

          {/* First Row */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="w-full md:w-1/2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={codeImage}
                  alt="Trading Algorithm"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white text-lg font-semibold">
                    {language === 'en' ? 'Advanced Trading Algorithm' : 'Προηγμένος Αλγόριθμος Συναλλαγών'}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === 'en' ? (
                  <>
                    The system monitors <strong>multiple currency pairs 24/7</strong>, executing trades only when <strong>specific criteria</strong> are met. This selective approach ensures we maintain a <strong>high win rate</strong> and favourable <strong>risk-reward ratio</strong>, emphasizing on risk management and profitability.
                  </>
                ) : (
                  <>
                    Το σύστημα παρακολουθεί <strong>πολλαπλά ζεύγη νομισμάτων 24/7</strong>, εκτελώντας συναλλαγές μόνο όταν πληρούνται <strong>συγκεκριμένα κριτήρια</strong>. Αυτή η επιλεκτική προσέγγιση εξασφαλίζει <strong>υψηλό ποσοστό επιτυχίας</strong> και ευνοϊκή <strong>αναλογία κινδύνου-ανταμοιβής</strong>, δίνοντας έμφαση στη διαχείριση κινδύνου και την κερδοφορία.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-16">
            <div className="w-full md:w-1/2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={tradingImage}
                  alt="Trading Dashboard"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white text-lg font-semibold">
                    {language === 'en' ? 'Real-time Monitoring' : 'Παρακολούθηση σε Πραγματικό Χρόνο'}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === 'en' ? (
                  <>
                    We utilize only a fraction of our available leverage (<strong>1:2 of the 1:500 leverage</strong>) to maintain <strong>strict risk control</strong>. Profits are consistently reinvested, significantly enhancing <strong>growth potential</strong> and profitability over time.
                  </>
                ) : (
                  <>
                    Χρησιμοποιούμε μόνο ένα μικρό μέρος της διαθέσιμης μόχλευσης (<strong>1:2 από τη μόχλευση 1:500</strong>) για να διατηρούμε <strong>αυστηρό έλεγχο κινδύνου</strong>. Τα κέρδη επανεπενδύονται συστηματικά, ενισχύοντας σημαντικά τη <strong>δυνατότητα ανάπτυξης</strong> και την κερδοφορία με την πάροδο του χρόνου.
                  </>
                )}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === 'en' ? (
                  <>
                    Additionally, our trading strategy is <strong>fully scalable</strong>, allowing us to adjust positions seamlessly according to the size of the capital managed, ensuring <strong>consistent performance</strong> and effective risk management across all account sizes.
                  </>
                ) : (
                  <>
                    Επιπλέον, η στρατηγική συναλλαγών μας είναι <strong>πλήρως κλιμακούμενη</strong>, επιτρέποντάς μας να προσαρμόζουμε τις θέσεις ομαλά ανάλογα με το μέγεθος του διαχειριζόμενου κεφαλαίου, διασφαλίζοντας <strong>σταθερή απόδοση</strong> και αποτελεσματική διαχείριση κινδύνου σε όλα τα μεγέθη λογαριασμών.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'en' ? 'Explore Our Journey' : 'Εξερευνήστε την Πορεία μας'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              {language === 'en'
                ? 'Discover our comprehensive trading approach and learn how you can be part of our success story.'
                : 'Ανακαλύψτε την ολοκληρωμένη προσέγγισή μας στις συναλλαγές και μάθετε πώς μπορείτε να γίνετε μέρος της επιτυχημένης πορείας μας.'}
            </p>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Business Plan Card */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      <Building2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {language === 'en' ? 'Business Plan' : 'Επιχειρηματικό Πλάνο'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en'
                        ? 'Review our detailed business strategy, projected returns, and partnership structure.'
                        : 'Δείτε την αναλυτική επιχειρηματική μας στρατηγική, τις προβλεπόμενες αποδόσεις και τη δομή συνεργασίας.'}
                    </p>
                  </div>
                  <Button href="/business-plan" className="mt-auto gap-2 w-full justify-center">
                    {language === 'en' ? 'View Business Plan' : 'Προβολή Επιχειρηματικού Πλάνου'} 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Biography Card */}
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      <BookOpen className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {language === 'en' ? 'Our Biography' : 'Η Βιογραφία μας'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en'
                        ? 'Learn about our journey, expertise, and proven track record in Forex trading.'
                        : 'Μάθετε για την πορεία μας, την εξειδίκευσή μας και το αποδεδειγμένο ιστορικό μας στις συναλλαγές Forex.'}
                    </p>
                  </div>
                  <Button 
                    href="/biography" 
                    variant="secondary"
                    className="mt-auto gap-2 w-full justify-center bg-white text-green-600 border-green-200 hover:bg-green-50"
                  >
                    {language === 'en' ? 'Read Our Story' : 'Διαβάστε την Ιστορία μας'} 
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;