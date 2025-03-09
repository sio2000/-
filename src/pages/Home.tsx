import React from 'react';
import { ArrowRight, LineChart, Shield, TrendingUp, Brain, ShieldCheck, Zap, BarChart, Scale, ExternalLink } from 'lucide-react';
import Button from '../components/Button';

const heroBackground = new URL('../assets/images/herobackground.jpg', import.meta.url).href;
const codeImage = new URL('../assets/images/code.jpg', import.meta.url).href;
const tradingImage = new URL('../assets/images/trading.jpg', import.meta.url).href;
const forexVideo = new URL('../assets/video/fvid.mp4', import.meta.url).href;

const Home = () => {
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
      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced Forex Trading <br />
              <span className="text-blue-400">Powered by Human Expertise</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              A proven automated trading strategy that has consistently delivered results
              through multiple economic cycles and market conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in flex items-center justify-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              Live Trading Performance
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How it Works
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full backdrop-blur-sm bg-white/90">
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Image */}
                  <div className="hidden lg:block lg:col-span-3">
                    <img
                      src={codeImage}
                      alt="Trading Code"
                      className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                    />
                  </div>

                  {/* Center Text Content */}
                  <div className="lg:col-span-6">
                    <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600">
                      <p>
                        The system monitors <span className="font-bold">multiple currency pairs 24/7</span>, 
                        executing trades only when <span className="font-bold">specific criteria</span> are met. 
                        This selective approach ensures we maintain a <span className="font-bold">high win rate</span> and 
                        <span className="font-bold"> favourable risk-reward ratio</span>, emphasizing on 
                        <span className="font-bold"> risk management</span> and <span className="font-bold">profitability</span>.
                      </p>
                      
                      <p>
                        We utilize only a <span className="font-bold">fraction of our available leverage</span> 
                        (<span className="font-bold">1:2 of the 1:500 leverage</span>) to maintain 
                        <span className="font-bold"> strict risk control</span>. Profits are consistently 
                        <span className="font-bold"> reinvested</span>, significantly enhancing growth potential 
                        and profitability over time.
                      </p>
                      
                      <p>
                        Additionally, our trading strategy is <span className="font-bold">fully scalable</span>, 
                        allowing us to adjust positions seamlessly according to the size of the capital managed, 
                        ensuring <span className="font-bold">consistent performance</span> and 
                        <span className="font-bold"> effective risk management</span> across all account sizes.
                      </p>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="hidden lg:block lg:col-span-3">
                    <img
                      src={tradingImage}
                      alt="Trading Analysis"
                      className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trust us, we are ForexBot!
            </h2>
          </div>

          {/* Reduced max-width container for smaller video */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              {/* Video Container with 16:9 Aspect Ratio */}
              <div className="relative pb-[56.25%] h-0">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={forexVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Optional Overlay for Better UI */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;