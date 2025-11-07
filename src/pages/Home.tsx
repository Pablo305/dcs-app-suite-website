import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  TrendingUp, 
  Users, 
  Shield,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  DollarSign
} from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { label: 'Monthly Sales', value: '100-200', icon: Target },
    { label: 'Calls Handled', value: '3,000', icon: Phone },
    { label: 'Conversion Rate', value: '10-15%', icon: TrendingUp },
    { label: 'Years Experience', value: '10+', icon: Shield },
  ];

  const keyCapabilities = [
    {
      title: 'Proven Sales Performance',
      icon: TrendingUp,
      description: 'Clearlink partnership: 3,000 monthly calls generating 100-200 internet service sales. Texas Electricity Ratings: 4 dedicated full-time agents.',
      metrics: ['Consistent conversions', 'Multi-channel operations', 'Growing partnerships']
    },
    {
      title: 'Scalable Infrastructure',
      icon: Users,
      description: 'Remote call center with agents across the U.S. and South Africa. Ytel cloud telephony, PlanPlus CRM integration, and PCI-compliant systems.',
      metrics: ['Remote workforce', 'Enterprise systems', 'Secure & compliant']
    },
    {
      title: 'Industry Experience & Network',
      icon: Shield,
      description: 'Decades of combined experience from Red Ventures. Established relationships with master dealers (Ibex, AllConnect, P10, RSI) and extensive dealer network.',
      metrics: ['Red Ventures alumni', 'Master dealer access', 'Deep industry contacts']
    },
    {
      title: 'Platform & AI Integration',
      icon: Zap,
      description: 'Hands-on experience with platforms like Viasat, Metronet, Rise Broadband, HughesNet, BroadbandNow. AI-powered Order Recon, QA, and sales training.',
      metrics: ['Platform expertise', 'AI-driven operations', 'Quality systems']
    }
  ];

  const coreServices = [
    {
      service: 'Internet Services',
      providers: 'AT&T, Viasat, Metronet, Rise Broadband, HughesNet',
      volume: '3,000 calls/month'
    },
    {
      service: 'Energy Services',
      providers: 'Texas Electricity Ratings partnership',
      volume: '4 full-time dedicated agents'
    },
    {
      service: 'Home Services',
      providers: 'Security, TV, phone bundles',
      volume: 'Multi-vertical capability'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 grid-pattern opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 title">
              FunneLeads LLC
            </h1>
            
            <p className="text-2xl md:text-3xl subtitle mb-8 max-w-4xl mx-auto">
              Turn Every Address Into Revenue
            </p>

            <p className="text-xl subtitle mb-12 max-w-3xl mx-auto">
              Specialized sales and customer acquisition for home services. We partner with businesses 
              to ensure every lead is contacted and converted efficiently.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section id="capabilities" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 title">
              What We Bring
            </h2>
            <p className="text-xl subtitle max-w-3xl mx-auto">
              Proven sales execution, established partnerships, and cutting-edge technology 
              ready to deploy for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {keyCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{capability.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {capability.description}
                </p>

                <div className="space-y-2">
                  {capability.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900"></div>
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 title">
              Service Coverage
            </h2>
            <p className="text-xl subtitle">
              Comprehensive expertise across multiple home service verticals
            </p>
          </motion.div>

          <div className="space-y-6">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.service}</h3>
                    <p className="text-gray-400">{service.providers}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold gradient-text-success">{service.volume}</div>
                    <div className="text-sm text-gray-500">Current Volume</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DCS App Suite Portfolio */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Zap className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 title">
              DCS App Suite
            </h2>
            <p className="text-2xl subtitle mb-4">
              Revolutionary AI-Powered Ecosystem
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              $2.8M portfolio of enterprise-grade AI applications with 15+ AI providers integrated
            </p>
          </motion.div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-6 text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">$2.8M</div>
              <div className="text-sm text-gray-400">Portfolio Value</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">7</div>
              <div className="text-sm text-gray-400">Enterprise Apps</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-gray-400">AI Providers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-6 text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">85%</div>
              <div className="text-sm text-gray-400">Avg Completion</div>
            </motion.div>
          </div>

          {/* Key Applications Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <h3 className="text-lg font-bold text-white mb-2">KAAI Platform</h3>
              <p className="text-sm text-gray-400 mb-3">Enterprise AI Content Optimization</p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">90% Complete</span>
                <span className="text-green-400">$850K Value</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <h3 className="text-lg font-bold text-white mb-2">CallMart Intelligence</h3>
              <p className="text-sm text-gray-400 mb-3">Call Center AI with 95.3% Accuracy</p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">85% Complete</span>
                <span className="text-green-400">$720K Value</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <h3 className="text-lg font-bold text-white mb-2">ISP Analytics</h3>
              <p className="text-sm text-gray-400 mb-3">AI ISP Platform - 50K+ ZIPs</p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">90% Complete</span>
                <span className="text-green-400">$650K Value</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <h3 className="text-lg font-bold text-white mb-2">EasyMovee Platform</h3>
              <p className="text-sm text-gray-400 mb-3">AI Moving Platform with CRM</p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">80% Complete</span>
                <span className="text-green-400">$480K Value</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <h3 className="text-lg font-bold text-white mb-2">Dual Chat AI</h3>
              <p className="text-sm text-gray-400 mb-3">Multi-Provider AI Orchestration</p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">85% Complete</span>
                <span className="text-green-400">$300K Value</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <h3 className="text-lg font-bold text-white mb-2">BPO Reconciliation</h3>
              <p className="text-sm text-gray-400 mb-3">Enterprise Payroll - 100% Accuracy</p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">100% Complete</span>
                <span className="text-green-400">$250K Value</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass p-6 md:col-span-2 lg:col-span-1"
            >
              <h3 className="text-lg font-bold text-white mb-2">AI CMS/Project Manager</h3>
              <p className="text-sm text-gray-400 mb-3">3D Project Management Platform</p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">60% Complete</span>
                <span className="text-blue-400">Innovation Project</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-12 text-center"
          >
            <DollarSign className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Operational & Proven
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our sales infrastructure, established partnerships, and AI-powered systems
              are actively generating results across multiple home service verticals.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
