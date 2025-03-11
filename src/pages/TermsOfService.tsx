import React from 'react';
import { Scale, FileText, AlertTriangle } from 'lucide-react';

const TermsOfService = () => {
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
              <Scale className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                By accessing and using ForexBot ("the Website"), you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services. These terms constitute a legally binding 
                agreement between you and ForexBot ("we", "our", or "us").
              </p>
            </div>

            {/* Use of the Website */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of the Website</h2>
              <p className="text-gray-600 mb-4">You agree to use the Website in accordance with the following conditions:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Comply with all applicable laws and regulations</li>
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to interfere with the Website's security or functionality</li>
                <li>Not engage in unauthorized data collection or mining</li>
                <li>Respect other users and their rights</li>
              </ul>
            </div>

            {/* User Accounts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
              <p className="text-gray-600 mb-4">When creating and maintaining an account:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>One account per individual or entity</li>
              </ul>
            </div>

            {/* Intellectual Property Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                All content on this Website, including but not limited to text, graphics, logos, images, audio clips, 
                digital downloads, data compilations, and software, is the property of ForexBot or its content suppliers 
                and protected by international copyright laws. The compilation of all content on this site is the exclusive 
                property of ForexBot.
              </p>
            </div>

            {/* Content and Contributions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Content and Contributions</h2>
              <p className="text-gray-600 mb-4">By submitting content to our Website:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>You grant us a worldwide, non-exclusive license to use the content</li>
                <li>You warrant that your content is original and non-infringing</li>
                <li>We reserve the right to remove or modify any content</li>
                <li>You accept responsibility for your contributions</li>
              </ul>
            </div>

            {/* Limitations of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
                Limitations of Liability
              </h2>
              <p className="text-gray-600 mb-4">
                Our services are provided "as is" without any warranties. We shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Any direct, indirect, or consequential damages</li>
                <li>Loss of profits or trading losses</li>
                <li>Data loss or system failures</li>
                <li>Accuracy of financial information or advice</li>
              </ul>
            </div>

            {/* Third-Party Links and Services */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links and Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Our Website may contain links to third-party websites or services. We are not responsible for the content, 
                accuracy, or practices of these third-party sites. Use of third-party services is at your own risk and 
                subject to their respective terms of service.
              </p>
            </div>

            {/* Termination of Access */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination of Access</h2>
              <p className="text-gray-600 mb-4">We reserve the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Terminate or suspend access without prior notice</li>
                <li>Block IP addresses or users violating these terms</li>
                <li>Take legal action against violations</li>
                <li>Report illegal activities to authorities</li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600">
                We may modify these terms at any time. Changes will be effective immediately upon posting to the Website. 
                Your continued use of the Website after changes constitutes acceptance of the modified terms. We will notify 
                users of significant changes via email or website announcement.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600">
                These terms are governed by and construed in accordance with the laws of Greece. Any disputes shall be 
                subject to the exclusive jurisdiction of the courts in Greece.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For any questions about these Terms of Service, please contact us at:
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

export default TermsOfService; 