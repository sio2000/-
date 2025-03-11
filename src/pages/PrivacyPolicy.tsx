import React from 'react';
import { Shield, Lock, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
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
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect and manage your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600" />
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This Privacy Policy explains how ForexBot ("we", "our", or "us") collects, uses, and protects your personal information when you use our website and services. We are committed to ensuring that your privacy is protected and maintaining the security of any personal information received from you.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Collection</h2>
              <p className="text-gray-600 mb-4">We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Personal information (name, email address, phone number) provided through contact forms</li>
                <li>Technical information (IP address, browser type, device information)</li>
                <li>Usage data (pages visited, time spent on site)</li>
                <li>Communication records when you contact us</li>
              </ul>
            </div>

            {/* Use of Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Information</h2>
              <p className="text-gray-600 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Send important updates and announcements</li>
                <li>Analyze and improve our website performance</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</h2>
              <p className="text-gray-600 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Professional advisers (lawyers, accountants, auditors)</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We do not sell your personal information to third parties.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-blue-600" />
                Data Security
              </h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Encryption of data transmission</li>
                <li>Secure servers and networks</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
              </ul>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies to improve your browsing experience. You can control cookies through your browser settings.
                Our cookies are used for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Essential website functionality</li>
                <li>Analytics and performance monitoring</li>
                <li>User preferences and settings</li>
              </ul>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.
                Significant changes will be notified through email or website announcements.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>Email: info@forexbot.gr</li>
                <li>Address: Kalamata, Greece</li>
              </ul>
            </div>

            {/* Last Updated */}
            <div className="text-sm text-gray-500 pt-6 border-t">
              Last updated: March 15, 2024
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 