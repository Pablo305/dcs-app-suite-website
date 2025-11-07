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

      {/* ServiceStation Synergy Overview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 grid-pattern opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 title">
              FunneLeads + ServiceStationRE
            </h1>
            <p className="text-2xl md:text-3xl subtitle mb-6">
              Acquisition Synergy Overview
            </p>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Strategic partnership combining ServiceStation's cutting-edge platform with
              FunneLeads' proven sales execution and industry relationships
            </p>
          </motion.div>

          {/* Key Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Monthly Sales Volume', value: '100-200', description: 'Consistent conversions for internet services', icon: Target },
              { label: 'Active Call Volume', value: '3,000', description: 'Calls handled monthly through partnerships', icon: Phone },
              { label: 'Geographic Coverage', value: 'US + SA', description: 'Remote agents across multiple regions', icon: Shield },
              { label: 'Years of Experience', value: '10+', description: 'Industry veterans from Red Ventures', icon: Shield }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6"
              >
                <item.icon className="w-10 h-10 text-blue-400 mb-4" />
                <div className="text-3xl font-bold gradient-text mb-2">{item.value}</div>
                <div className="text-sm font-medium text-white mb-1">{item.label}</div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars of Synergy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 title">
              Three Pillars of Value
            </h2>
            <p className="text-xl subtitle">
              How FunneLeads enhances ServiceStation's business model
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: 'Active Revenue Operations',
                icon: DollarSign,
                description: 'Currently generating 100-200 monthly sales for internet services via Clearlink (3,000 calls/month), plus dedicated energy team for Texas Electricity Ratings',
                benefits: [
                  'Active call center operations with proven track record',
                  'Established infrastructure and systems already operational',
                  'Proven conversion success on qualified leads',
                  'PCI-compliant infrastructure already operational'
                ],
                metrics: [
                  { label: 'Monthly Sales', value: '100-200' },
                  { label: 'Call Volume', value: '3K/mo' },
                  { label: 'Active Contracts', value: '2 Major' }
                ]
              },
              {
                title: 'Network Amplification',
                icon: Users,
                description: 'Extensive industry network from decades of experience, including direct provider relationships and master dealer partnerships',
                benefits: [
                  'Piloted platforms: Sara Plus, Viasat, Metronet, Rise Broadband, HughesNet, BroadbandNow',
                  'Master dealer relationships: Ibex, AllConnect, P10, RSI',
                  'Red Ventures background (Pablo & George) brings deep industry connections',
                  'Active Texas Electricity Ratings contract with growing team'
                ],
                metrics: [
                  { label: 'Platforms Piloted', value: '6+' },
                  { label: 'Master Dealers', value: '4+' },
                  { label: 'RV Alumni', value: 'Yes' }
                ]
              },
              {
                title: 'Technology & Systems Integration',
                icon: Zap,
                description: 'Operational infrastructure with AI integration across order processing, quality assurance, and training',
                benefits: [
                  'Ytel cloud telephony system for reliable call handling',
                  'PlanPlus CRM with existing integration experience',
                  'Order Recon: AI-powered automated order verification',
                  'AI-driven QA and sales training for continuous improvement'
                ],
                metrics: [
                  { label: 'Telephony', value: 'Ytel' },
                  { label: 'CRM', value: 'PlanPlus' },
                  { label: 'AI Systems', value: '3 Active' }
                ]
              }
            ].map((synergy, index) => (
              <motion.div
                key={synergy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Title and Description */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <synergy.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{synergy.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{synergy.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {synergy.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-4">
                    {synergy.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gray-900/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 title">
              What ServiceStation Gets
            </h2>
            <p className="text-xl subtitle">
              Complete operational capabilities from day one
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Operational Infrastructure',
                points: [
                  'Remote workforce across US and South Africa',
                  'Currently handling 3,000 calls monthly for Clearlink',
                  '4 dedicated agents for Texas Electricity Ratings',
                  'Ytel cloud telephony and PlanPlus CRM systems'
                ]
              },
              {
                title: 'Industry Experience & Credibility',
                points: [
                  'Pablo & George: Red Ventures alumni with decades of experience',
                  'Helped pilot major platforms: Viasat, Metronet, Rise, HughesNet, BroadbandNow',
                  'Sales, customer service, and dealer-side expertise',
                  'Deep understanding of provider platforms and operations'
                ]
              },
              {
                title: 'Technology & Compliance',
                points: [
                  'AI integration: Order Recon, QA, and sales training',
                  'PCI compliant for secure transaction handling',
                  'Master dealer relationships: Ibex, AllConnect, P10, RSI',
                  'Extensive network of dealer contacts throughout the industry'
                ]
              }
            ].map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">{prop.title}</h3>
                <div className="space-y-3">
                  {prop.points.map((point, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DCS App Suite Portfolio - Strategic Asset */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Zap className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 title">
              DCS App Suite: $2.8M Technology Portfolio
            </h2>
            <p className="text-xl subtitle">
              Enterprise-grade AI applications with 15+ providers integrated
            </p>
          </motion.div>

          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Portfolio Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">$2.8M</div>
                  <div className="text-sm text-gray-400">Total Portfolio Value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">7</div>
                  <div className="text-sm text-gray-400">Enterprise Applications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-sm text-gray-400">AI Providers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">85%</div>
                  <div className="text-sm text-gray-400">Avg Completion</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Strategic Value for ServiceStation</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Ready-to-deploy ISP Analytics platform synergizes with ServiceStation's home services focus</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">CallMart Intelligence enhances call center operations with AI-powered quality assurance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Multi-provider AI integration experience accelerates ServiceStation's technology roadmap</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">$1.04M+ development investment represents significant IP and technical capabilities</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Application Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'KAAI Platform', desc: 'Enterprise AI Content', value: '$850K', complete: '90%' },
              { name: 'CallMart Intelligence', desc: 'Call Center AI', value: '$720K', complete: '85%' },
              { name: 'ISP Analytics', desc: 'AI ISP Platform', value: '$650K', complete: '90%' },
              { name: 'EasyMovee', desc: 'AI Moving Platform', value: '$480K', complete: '80%' },
              { name: 'Dual Chat AI', desc: 'Multi-Provider AI', value: '$300K', complete: '85%' },
              { name: 'BPO Reconciliation', desc: 'Enterprise Payroll', value: '$250K', complete: '100%' },
              { name: 'AI CMS/Project Manager', desc: '3D Project Management Platform with AI Assistant', value: 'Innovation', complete: '60%', span: true }
            ].map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass p-6 ${app.span ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className="text-lg font-bold text-white mb-2">{app.name}</div>
                <div className="text-sm text-gray-400 mb-3">{app.desc}</div>
                <div className={`font-bold ${app.value.includes('$') ? 'text-green-400' : 'text-blue-400'}`}>{app.value}</div>
                <div className="text-xs text-gray-500 mt-1">{app.complete} Complete</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Value Statement */}
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
