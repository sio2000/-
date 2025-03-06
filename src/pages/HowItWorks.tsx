import React from 'react';
import { Brain, ShieldCheck, TrendingUp, Zap, BarChart, Scale } from 'lucide-react';

const HowItWorks = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: 'AI-Powered Analysis',
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
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              How Our Trading Strategy Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our automated Forex trading system combines advanced AI algorithms with 
              proven risk management strategies to deliver consistent returns across 
              all market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Overview */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Strategy Overview
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Our trading strategy employs a sophisticated multi-factor approach that 
                  analyzes market conditions across different timeframes. By combining 
                  technical indicators with machine learning algorithms, we identify 
                  high-probability trading opportunities while maintaining strict risk 
                  management protocols.
                </p>
                <p className="mb-4">
                  The system monitors multiple currency pairs 24/7, executing trades only 
                  when specific criteria are met. This selective approach ensures we 
                  maintain a high win rate and favorable risk-reward ratio.
                </p>
                <p>
                  Each trade is automatically sized based on account equity and market 
                  volatility, with built-in protection mechanisms to guard against 
                  unexpected market movements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;