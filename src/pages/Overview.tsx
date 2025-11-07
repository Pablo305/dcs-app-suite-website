import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Zap, 
  Target,
  CheckCircle,
  ArrowRight,
  Shield,
  Network,
  Cpu,
  Phone,
  Globe
} from 'lucide-react';

const Overview: React.FC = () => {
  const synergies = [
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
      icon: Network,
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
      icon: Cpu,
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
  ];

  const keyNumbers = [
    { label: 'Monthly Sales Volume', value: '100-200', description: 'Consistent conversions for internet services', icon: Target },
    { label: 'Active Call Volume', value: '3,000', description: 'Calls handled monthly through partnerships', icon: Phone },
    { label: 'Geographic Coverage', value: 'US + SA', description: 'Remote agents across multiple regions', icon: Globe },
    { label: 'Years of Experience', value: '10+', description: 'Industry veterans from Red Ventures', icon: Shield }
  ];

  const valueProps = [
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
  ];


  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
            {keyNumbers.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
            {synergies.map((synergy, index) => (
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
            {valueProps.map((prop, index) => (
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

      {/* DCS App Suite Portfolio - Key Asset */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Cpu className="w-16 h-16 text-blue-400 mx-auto mb-6" />
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <div className="text-lg font-bold text-white mb-2">KAAI Platform</div>
              <div className="text-sm text-gray-400 mb-3">Enterprise AI Content</div>
              <div className="text-green-400 font-bold">$850K</div>
              <div className="text-xs text-gray-500 mt-1">90% Complete</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <div className="text-lg font-bold text-white mb-2">CallMart Intelligence</div>
              <div className="text-sm text-gray-400 mb-3">Call Center AI</div>
              <div className="text-green-400 font-bold">$720K</div>
              <div className="text-xs text-gray-500 mt-1">85% Complete</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <div className="text-lg font-bold text-white mb-2">ISP Analytics</div>
              <div className="text-sm text-gray-400 mb-3">AI ISP Platform</div>
              <div className="text-green-400 font-bold">$650K</div>
              <div className="text-xs text-gray-500 mt-1">90% Complete</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <div className="text-lg font-bold text-white mb-2">EasyMovee</div>
              <div className="text-sm text-gray-400 mb-3">AI Moving Platform</div>
              <div className="text-green-400 font-bold">$480K</div>
              <div className="text-xs text-gray-500 mt-1">80% Complete</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <div className="text-lg font-bold text-white mb-2">Dual Chat AI</div>
              <div className="text-sm text-gray-400 mb-3">Multi-Provider AI</div>
              <div className="text-green-400 font-bold">$300K</div>
              <div className="text-xs text-gray-500 mt-1">85% Complete</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <div className="text-lg font-bold text-white mb-2">BPO Reconciliation</div>
              <div className="text-sm text-gray-400 mb-3">Enterprise Payroll</div>
              <div className="text-green-400 font-bold">$250K</div>
              <div className="text-xs text-gray-500 mt-1">100% Complete</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass p-6 md:col-span-2 lg:col-span-2"
            >
              <div className="text-lg font-bold text-white mb-2">AI CMS/Project Manager</div>
              <div className="text-sm text-gray-400 mb-3">3D Project Management Platform with AI Assistant</div>
              <div className="text-blue-400 font-bold">Innovation Project</div>
              <div className="text-xs text-gray-500 mt-1">60% Complete</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
