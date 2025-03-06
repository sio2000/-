import React from 'react';
import { ArrowRight, LineChart, Shield, TrendingUp } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced Forex Trading <br />
              <span className="text-blue-600">Powered by AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
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

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Consistent Performance</h3>
              <p className="text-gray-600">
                Proven track record through various market conditions including major economic crises.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced Analytics</h3>
              <p className="text-gray-600">
                Sophisticated algorithms analyzing multiple market indicators for optimal trade execution.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Risk Management</h3>
              <p className="text-gray-600">
                Advanced risk management protocols ensuring capital preservation and steady growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;