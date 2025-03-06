import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is this trading strategy?",
      answer: (
        <div className="space-y-4">
          <p>
            Our strategy is a sophisticated automated Forex trading system that has been developed and refined over 15+ years. It utilizes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Advanced algorithmic trading logic</li>
            <li>Multi-timeframe analysis</li>
            <li>Real-time market adaptation</li>
            <li>Proven risk management protocols</li>
          </ul>
          <p>
            The strategy has been extensively backtested across multiple market conditions and economic cycles, demonstrating consistent profitability.
          </p>
        </div>
      )
    },
    {
      question: "Is this strategy profitable?",
      answer: (
        <div className="space-y-4">
          <p>
            Yes, our strategy has demonstrated consistent profitability with:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Average annual returns of 34.8%</li>
            <li>Monthly returns between 2.5-3.5%</li>
            <li>Win rate above 68%</li>
            <li>Profit factor of 2.87</li>
          </ul>
          <p>
            All performance metrics are independently verified through MyFXBook and available for review.
          </p>
        </div>
      )
    },
    {
      question: "What is the minimum investment required?",
      answer: (
        <div className="space-y-4">
          <p>The investment structure consists of two components:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>€10,000 minimum trading capital</li>
            <li>€5,000 annual operational fee</li>
          </ul>
          <p>
            The operational fee covers infrastructure costs, legal compliance, algorithm maintenance, and corporate administration.
          </p>
        </div>
      )
    },
    {
      question: "How are profits distributed?",
      answer: (
        <div className="space-y-4">
          <p>
            Profits are distributed quarterly based on each partner's capital contribution. The process includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Quarterly performance assessment</li>
            <li>Profit calculation based on individual contribution</li>
            <li>Direct transfer to partner accounts</li>
            <li>Detailed performance reports</li>
          </ul>
        </div>
      )
    },
    {
      question: "What risks are involved?",
      answer: (
        <div className="space-y-4">
          <p>
            While all trading involves risk, we implement strict risk management protocols:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Maximum drawdown limit of 25%</li>
            <li>Position sizing of 0.5-1% per trade</li>
            <li>Automated stop-loss mechanisms</li>
            <li>Real-time risk monitoring</li>
          </ul>
          <p>
            Historical data shows our strategy maintains consistent performance even during major market events.
          </p>
        </div>
      )
    },
    {
      question: "Why an offshore structure?",
      answer: (
        <div className="space-y-4">
          <p>
            Our offshore structure provides several key advantages:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Tax-efficient operation</li>
            <li>Access to higher leverage (up to 1:500)</li>
            <li>Reduced regulatory restrictions</li>
            <li>International banking flexibility</li>
          </ul>
          <p>
            We maintain full legal compliance while optimizing operational efficiency.
          </p>
        </div>
      )
    },
    {
      question: "Can I withdraw my investment at any time?",
      answer: (
        <div className="space-y-4">
          <p>
            Investment terms include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Initial 12-month commitment period</li>
            <li>60-day notice for withdrawals after commitment period</li>
            <li>Monthly withdrawal opportunities</li>
            <li>No withdrawal fees</li>
          </ul>
          <p>
            This structure ensures strategy stability while maintaining reasonable liquidity for partners.
          </p>
        </div>
      )
    },
    {
      question: "How can I monitor my investment?",
      answer: (
        <div className="space-y-4">
          <p>
            We provide comprehensive monitoring tools:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Real-time MyFXBook tracking</li>
            <li>Monthly performance reports</li>
            <li>Quarterly investor updates</li>
            <li>Direct account access</li>
          </ul>
          <p>
            All partners receive full transparency into trading activities and performance metrics.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our Forex trading partnership opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-6">
                We're here to help! Contact us for detailed information about our 
                trading partnership opportunity.
              </p>
              <Button href="/contact" className="gap-2">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 