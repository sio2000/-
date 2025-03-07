import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Shield, 
  AlertTriangle,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm mb-4">
              Advanced AI-powered Forex trading solution delivering consistent returns through automated strategies and risk management.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                className="bg-[#1877F2] p-2 rounded-lg text-white hover:bg-[#1864F2] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                className="bg-[#1DA1F2] p-2 rounded-lg text-white hover:bg-[#1D8FF2] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                className="bg-[#E4405F] p-2 rounded-lg text-white hover:bg-[#D4304F] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="bg-[#0A66C2] p-2 rounded-lg text-white hover:bg-[#0955A2] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/backtests" className="hover:text-blue-400 transition-colors">Backtest Results</Link>
              </li>
              <li>
                <Link to="/live-vs-backtest" className="hover:text-blue-400 transition-colors">Live vs Backtest</Link>
              </li>
              <li>
                <Link to="/monthly-performance" className="hover:text-blue-400 transition-colors">Monthly Performance</Link>
              </li>
              <li>
                <Link to="/business-plan" className="hover:text-blue-400 transition-colors">Business Plan</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Security */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal & Security</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/risk-disclosure" className="hover:text-blue-400 transition-colors">Risk Disclosure</Link>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>256-bit SSL Protection</span>
              </li>
            </ul>
          </div>

          {/* Contact & Verification */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Verification</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://www.myfxbook.com/members/giannis/funded-instatrader/10605583" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verified by MyFXBook
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@forexbot.gr" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@forexbot.gr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm">
          <div className="text-center">
            <p>© AI Forex Trading Bot. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 