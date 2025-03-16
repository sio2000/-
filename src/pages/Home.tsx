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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
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
      {/* Mobile styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .scroll-container {
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
            }
            .scroll-container::-webkit-scrollbar {
              display: none;
            }
            .scroll-container {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          }
        `}
      </style>

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
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
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
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
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

          {/* Track Record Button */}
          <div className="flex justify-center mt-12">
            <Button 
              href="https://www.myfxbook.com/members/giannis/funded-instatrader/10605583"
              variant="secondary"
              className="group relative flex items-center gap-3 px-8 py-4 text-lg font-semibold 
                        bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                        text-white rounded-xl shadow-lg hover:shadow-xl 
                        transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <LineChart className="w-6 h-6 text-blue-200" />
              {language === 'en' ? 'View Complete Track Record' : 'Δείτε το Πλήρες Ιστορικό'}
              <ExternalLink className="w-5 h-5 text-blue-200 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="scroll-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Explore Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive business plan and learn more about our story
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Business Plan Card */}
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-xl rounded-tr-xl">
                  Featured
                </div>
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      <Building2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Business Plan
                    </h3>
                    <p className="text-gray-600">
                      Explore our comprehensive investment structure, projected returns, and partnership opportunities.
                    </p>
                  </div>
                  <Button href="/business-plan" className="mt-auto gap-2 w-full justify-center">
                    View Business Plan <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                      Our Biography
                    </h3>
                    <p className="text-gray-600">
                      Learn about our journey, expertise, and proven track record in Forex trading.
                    </p>
                  </div>
                  <Button 
                    href="/biography" 
                    variant="secondary"
                    className="mt-auto gap-2 w-full justify-center bg-white text-green-600 border-green-200 hover:bg-green-50"
                  >
                    Read Our Story <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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