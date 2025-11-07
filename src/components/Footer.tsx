import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, TrendingUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 border-t border-white/10">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">FunneLeads LLC</h2>
                <p className="text-sm text-gray-400">Sales & Acquisition Experts</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Specialized sales and customer acquisition company focusing on home services. 
              We partner with businesses to ensure every lead is contacted and converted efficiently.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center glass rounded-lg p-3">
                <div className="text-2xl font-bold gradient-text-success">100+</div>
                <div className="text-xs text-gray-400">Monthly Sales</div>
              </div>
              <div className="text-center glass rounded-lg p-3">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-xs text-gray-400">Years Exp</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/overview"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span>ServiceStation Synergy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Internet Service Sales</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Energy Services</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Home Services</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Multi-Provider Support</span>
              </li>
            </ul>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <h4 className="text-sm font-semibold text-white mb-2">Contact</h4>
              <a 
                href="mailto:contact@funneleads.com" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@funneleads.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} FunneLeads LLC. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Powered by industry expertise</span>
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
