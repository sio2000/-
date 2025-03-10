import React from 'react';
import { ArrowRight, Award, Target, Clock, TrendingUp } from 'lucide-react';
import Button from '../components/Button';

const bioImage = new URL('../assets/images/bio.jpg', import.meta.url).href;

const Biography = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
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
              Our Story
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delayed">
              A journey of innovation and excellence in automated Forex trading
            </p>
          </div>
        </div>
      </section>

      {/* Biography Content */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image and Stats */}
            <div className="space-y-8 lg:sticky lg:top-24">
              {/* Bio Image with hover effect */}
              <div className="relative group transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={bioImage} 
                  alt="Giannis Christopoulos" 
                  className="rounded-2xl shadow-xl w-full object-cover transition-shadow duration-500 group-hover:shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                  opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold mb-2">Giannis Christopoulos</h3>
                  <p className="text-gray-200">Forex Trading Expert</p>
                </div>
              </div>

              {/* Stats Grid with hover effects */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Clock className="w-6 h-6 text-blue-600" />, bg: "blue", value: "15+ Years", label: "Trading Experience" },
                  { icon: <Target className="w-6 h-6 text-green-600" />, bg: "green", value: "34.8%", label: "Avg. Annual Return" },
                  { icon: <Award className="w-6 h-6 text-purple-600" />, bg: "purple", value: "100%", label: "Automated System" },
                  { icon: <TrendingUp className="w-6 h-6 text-orange-600" />, bg: "orange", value: "28", label: "Currency Pairs" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                      transform hover:-translate-y-1 hover:bg-${stat.bg}-50 cursor-pointer
                      animate-fade-in`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`bg-${stat.bg}-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 
                      group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Text Content with animations */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg space-y-8 hover:shadow-xl 
              transition-all duration-500 animate-fade-in-delayed">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                  The provided documents describe a <strong>highly sophisticated</strong> and <strong>fully automated Forex trading strategy</strong> developed by <strong>Giannis (John) Christopoulos</strong>, an experienced trader from Kalamata, Greece. This strategy has been meticulously designed and extensively tested through both <strong>historical data (backtesting)</strong> and <strong>real-market conditions (live trading)</strong> for over <strong>15 years</strong>. Its resilience in extreme market conditions, such as economic crises, post-news volatility, and unpredictable price fluctuations, makes it one of the most reliable and profitable trading strategies.
                </p>

                <p className="text-gray-600 leading-relaxed mt-6 hover:text-gray-900 transition-colors duration-300">
                  This strategy is based on a <strong>fully automated multi-currency, multi-timeframe trading system</strong> that leverages a unique combination of the <strong>Railway Track Pattern</strong>, <strong>Price Action</strong> techniques, and the <strong>Fibonacci sequence</strong>. By utilizing these elements, it identifies high-probability trade setups, particularly thriving in periods of high market volatility.
                </p>

                <p className="text-gray-600 leading-relaxed mt-6 hover:text-gray-900 transition-colors duration-300">
                  Over the past 15 years, the strategy has undergone <strong>rigorous testing</strong>, consistently delivering outstanding results even during global financial crises. From the <strong>2008 financial meltdown</strong> and the <strong>Eurozone debt crisis</strong> to the <strong>2015 Swiss Franc shock (Francogeddon)</strong>, the <strong>2016 Brexit crash</strong>, the <strong>2020 COVID-19 market turmoil</strong>, and the <strong>2024 "Black Monday"</strong>, this strategy has demonstrated its ability to generate profits even in the most challenging market environments.
                </p>

                <p className="text-gray-600 leading-relaxed mt-6 hover:text-gray-900 transition-colors duration-300">
                  This report provides a detailed analysis of the strategy, focusing on its <strong>performance</strong>, <strong>methodology</strong>, <strong>risk management</strong>, <strong>scalability</strong>, and its potential as a fully automated and highly profitable Forex trading system.
                </p>
              </div>

              {/* CTA Button with enhanced hover effect */}
              <div className="flex justify-center pt-6">
                <Button 
                  href="/contact" 
                  className="gap-2 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  Contact Us 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Biography; 