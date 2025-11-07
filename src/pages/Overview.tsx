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
      title: 'Immediate Revenue Impact',
      icon: DollarSign,
      description: 'FunneLeads brings a proven sales force already generating $100K+ monthly revenue for similar platforms',
      benefits: [
        '15 trained agents ready to convert ServiceStation leads',
        'No hiring or training costs - revenue starts Week 1',
        'Proven 10-15% conversion rate on qualified leads',
        'PCI-compliant infrastructure already operational'
      ],
      metrics: [
        { label: 'Monthly Revenue', value: '$100K+' },
        { label: 'Time to Deploy', value: '4 Weeks' },
        { label: 'Conversion Rate', value: '10-15%' }
      ]
    },
    {
      title: 'Network Amplification',
      icon: Network,
      description: 'Established provider relationships and master dealer partnerships expand ServiceStation\'s ecosystem immediately',
      benefits: [
        'Active partnerships: AT&T, Viasat, Metronet, Rise Broadband',
        'Master dealer access: Ibex, Allconnect, P10, RSI',
        'Texas Electricity Ratings contract for energy sector',
        'Existing integrations with provider platforms'
      ],
      metrics: [
        { label: 'Provider Partners', value: '25+' },
        { label: 'Master Dealers', value: '4 Major' },
        { label: 'Active Contracts', value: '$1.2M' }
      ]
    },
    {
      title: 'Technology Integration',
      icon: Cpu,
      description: 'AI-powered operations and proven systems enhance ServiceStation\'s platform capabilities',
      benefits: [
        'Order Recon: Automated order verification system',
        'AI Quality Assurance: Real-time call monitoring',
        'Seamless CRM integration capabilities',
        'Real-time analytics and performance tracking'
      ],
      metrics: [
        { label: 'Order Accuracy', value: '99.2%' },
        { label: 'System Uptime', value: '99.5%' },
        { label: 'AI-Powered QA', value: 'Active' }
      ]
    }
  ];

  const keyNumbers = [
    { label: 'Monthly Sales Volume', value: '100-200', description: 'Consistent conversions for internet services', icon: Target },
    { label: 'Active Call Volume', value: '1,000+', description: 'Calls handled monthly through partnerships', icon: Phone },
    { label: 'Geographic Coverage', value: 'US + SA', description: 'Remote agents across multiple regions', icon: Globe },
    { label: 'Years of Experience', value: '10+', description: 'Industry veterans from Red Ventures', icon: Shield }
  ];

  const valueProps = [
    {
      title: 'Scalable Operations',
      points: [
        'Remote call center infrastructure already built',
        'Proven ability to handle 1,000-2,000 calls monthly',
        'Can scale up or down based on demand',
        'All agents trained in multi-provider sales'
      ]
    },
    {
      title: 'Industry Credibility',
      points: [
        'Leadership team from Red Ventures background',
        'Trusted by major platforms like Clearlink',
        'Long-term contract with Texas Electricity Ratings',
        'Established relationships with key providers'
      ]
    },
    {
      title: 'Technology Stack',
      points: [
        'Cloud telephony via Ytel for reliability',
        'PlanPlus CRM integration experience',
        'PCI compliant for secure payment handling',
        'AI-driven quality assurance and training'
      ]
    }
  ];

  const timeline = [
    {
      week: 'Week 1',
      title: 'Systems Integration',
      tasks: ['CRM connection', 'Lead routing setup', 'Access provisioning', 'Security protocols']
    },
    {
      week: 'Week 2',
      title: 'Agent Onboarding',
      tasks: ['ServiceStation training', 'Platform familiarization', 'Provider education', 'Quality standards']
    },
    {
      week: 'Week 3',
      title: 'Pilot Program',
      tasks: ['Limited lead volume', 'Process refinement', 'Feedback loops', 'Performance tracking']
    },
    {
      week: 'Week 4',
      title: 'Full Deployment',
      tasks: ['Complete lead access', 'Full team activation', 'Ongoing optimization', 'Revenue generation']
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

      {/* Integration Timeline */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 title">
              4-Week Integration Timeline
            </h2>
            <p className="text-xl subtitle">
              From partnership to revenue generation
            </p>
          </motion.div>

          <div className="space-y-6">
            {timeline.map((phase, index) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm font-semibold text-blue-400 mb-1">{phase.week}</div>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {phase.tasks.map((task, idx) => (
                    <div key={idx} className="text-sm text-gray-300 flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-12"
          >
            <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Strategic Partnership Opportunity
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              FunneLeads brings proven sales execution, established partnerships, and AI-powered 
              operations ready to enhance ServiceStation's platform immediately.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">$100K+</div>
                <div className="text-gray-400">Monthly Revenue</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text-success mb-2">Zero</div>
                <div className="text-gray-400">Hiring Costs</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text-warning mb-2">4 Weeks</div>
                <div className="text-gray-400">To Revenue</div>
              </div>
            </div>

            <p className="text-lg text-gray-400 mb-8">
              This is a first conversation to explore synergies and mutual benefits. 
              Let's discuss how FunneLeads can accelerate ServiceStation's growth.
            </p>

            <button className="btn-primary inline-flex items-center space-x-2 group">
              <span>Schedule Strategy Discussion</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
