import React from 'react';
import { Building2, PieChart, Shield, Landmark, BarChart4, Users, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const BusinessPlan = () => {
  const projectedReturns = [
    { year: 2024, conservative: 25, expected: 32, aggressive: 38 },
    { year: 2025, conservative: 27, expected: 34, aggressive: 40 },
    { year: 2026, conservative: 26, expected: 33, aggressive: 39 },
    { year: 2027, conservative: 28, expected: 35, aggressive: 41 },
  ];

  const annualFees = [
    {
      category: 'Infrastructure & Technology',
      amount: 1800,
      items: ['Server costs', 'VPS hosting', 'Data feeds', 'Trading software']
    },
    {
      category: 'Legal & Compliance',
      amount: 1500,
      items: ['Legal consultancy', 'Regulatory compliance', 'Audit fees']
    },
    {
      category: 'Operations',
      amount: 1200,
      items: ['Algorithm maintenance', 'Performance monitoring', 'Risk management']
    },
    {
      category: 'Administrative',
      amount: 500,
      items: ['Banking fees', 'Accounting services', 'Corporate maintenance']
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
              Investment Partnership Structure
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delayed">
              Join our proven Forex trading venture with 15+ years of backtested results. 
              We offer a transparent partnership model with consistent returns and professional management.
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
                <h2 className="text-2xl font-bold text-gray-900">Business Model</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Investment Structure</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      Minimum trading capital: €10,000
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      Annual operational fee: €5,000
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      Profit sharing based on capital contribution
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      Quarterly profit distributions
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Partner Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      Access to proven trading algorithm
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      Real-time performance monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      Professional risk management
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      Tax-efficient structure
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Annual Fee Breakdown */}
            <section className="bg-gradient-to-br from-blue-50 to-white p-4 md:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <PieChart className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Annual Fee Breakdown</h2>
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
                <h2 className="text-2xl font-bold text-gray-900">Offshore Structure</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Jurisdictions</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>Belize</li>
                    <li>Seychelles</li>
                    <li>St. Vincent</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>Tax efficiency</li>
                    <li>Higher leverage options</li>
                    <li>Flexible regulations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Compliance</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>Full legal transparency</li>
                    <li>Regular audits</li>
                    <li>Professional management</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Risk Management */}
            <section className="bg-white p-4 md:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Risk Management</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Position Sizing</h3>
                  <p className="text-gray-600">
                    Risk per trade limited to 0.5-1% of capital, ensuring sustainable 
                    growth and protection against adverse market movements.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Drawdown Control</h3>
                  <p className="text-gray-600">
                    Historical maximum drawdown of 25% with built-in circuit breakers 
                    and risk reduction mechanisms.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Monitoring</h3>
                  <p className="text-gray-600">
                    24/7 algorithm monitoring with continuous optimization and 
                    performance analysis.
                  </p>
                </div>
              </div>
            </section>

            {/* Become a Partner */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 md:p-8 rounded-2xl shadow-lg text-white">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
                <p className="text-lg mb-8 opacity-90">
                  Join our successful trading venture with a minimum investment of €10,000 
                  plus annual operational costs. Gain access to professional forex trading 
                  infrastructure and consistent returns.
                </p>
                <Button 
                  href="/contact"
                  variant="secondary" 
                  className="text-blue-600 hover:text-blue-700"
                >
                  Contact Us to Get Started <ArrowRight className="ml-2 w-5 h-5" />
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