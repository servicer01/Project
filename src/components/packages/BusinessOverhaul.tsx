import React, { useState } from 'react';
import { Check, Zap, Users, TrendingUp, Settings, Star, ArrowRight, Palette, MessageCircle, BarChart, Cog, Crown, DollarSign, Building, Sparkles } from 'lucide-react';

const BusinessOverhaulPackage = () => {
  const [selectedTier, setSelectedTier] = useState('pro');
  const [selectedComponent, setSelectedComponent] = useState('brand');

  const components = {
    brand: {
      title: 'Brand Presence Rebuild',
      icon: Palette,
      features: [
        'Logo & brand pack (AI-generated + refined)',
        'Website strategy + AI-drafted SEO content (5+ pages)',
        'Social platform setup + content calendar (30-day AI-generated)',
        'AI-driven customer persona modeling'
      ]
    },
    sales: {
      title: 'Sales Funnel Optimization',
      icon: TrendingUp,
      features: [
        'Landing page with optimized CTAs',
        'AI-generated ad copy + Google/local search SEO',
        'Simple chatbot to guide customers from landing to sale',
        'Conversion tracking and optimization'
      ]
    },
    customer: {
      title: 'Customer Experience Automation',
      icon: MessageCircle,
      features: [
        'Advanced RAG-powered knowledge base systems',
        'Multi-agent customer service with escalation workflows',
        'Custom chat agents trained on business data',
        'Automated review management with AI insights'
      ]
    },
    operations: {
      title: 'Operations & Backend Efficiency',
      icon: Settings,
      features: [
        'Top 3 time drains → AI agent systems',
        'Legacy system modernization via API integration',
        'Custom data pipeline creation & ETL services',
        'AI-driven internal dashboards & business intelligence'
      ]
    },
    growth: {
      title: 'Ongoing Growth Strategy',
      icon: BarChart,
      features: [
        'Bi-weekly or monthly content drops',
        'Quarterly performance reports (AI summarized)',
        'CRM, POS, or PMS system integrations',
        'Strategic growth planning and execution'
      ]
    }
  };

  const tiers = {
    lite: {
      name: 'Lite Overhaul',
      price: '$1,500 - $2,500',
      description: 'Basic setup across all 5 components',
      features: [
        'Essential brand elements',
        'Basic automation setup',
        'Simple chatbot integration',
        'Core process optimization',
        '30-day content calendar'
      ],
      ideal: 'Startups & Solo Entrepreneurs'
    },
    pro: {
      name: 'Pro Overhaul',
      price: '$3,000 - $5,000',
      description: 'Includes integration & more agents',
      features: [
        'Complete brand overhaul',
        'Advanced automation systems',
        'Multi-platform integrations',
        'Custom AI agents',
        'Quarterly strategy sessions'
      ],
      ideal: 'Growing Businesses',
      popular: true
    },
    elite: {
      name: 'Elite Overhaul',
      price: '$6,000+',
      description: 'Full build, training, long-term roadmap + 3-month retainer',
      features: [
        'Everything in Pro',
        'White-glove implementation',
        'Dedicated account manager',
        'Monthly optimization calls',
        'Priority support & updates'
      ],
      ideal: 'Established Companies'
    }
  };

  const customPackages = [
    {
      name: 'Starter Brand Boost',
      description: 'Logo, 1-page website, social starter kit',
      price: '$800 - $1,200',
      icon: Sparkles
    },
    {
      name: 'Digital Concierge',
      description: 'FAQ bot, review responder, welcome email flow',
      price: '$600 - $900',
      icon: MessageCircle
    },
    {
      name: 'AI Admin Assistant',
      description: 'Report summarizer, email generator, scheduler',
      price: '$500 - $800',
      icon: Cog
    },
    {
      name: 'Rental Property Pack',
      description: 'Listing optimizer, guest chatbot, cleaning scheduler',
      price: '$700 - $1,100',
      icon: Building
    },
    {
      name: 'Retail Growth Kit',
      description: 'POS-linked AI analytics, promo generator, signage mockups',
      price: '$900 - $1,400',
      icon: TrendingUp
    }
  ];

  const technicalServices = [
    {
      name: 'AI Intelligence Layer',
      description: 'Custom RAG systems, multi-agent workflows, advanced AI processing',
      price: '$2,000 - $4,000',
      icon: Zap,
      features: [
        'RAG knowledge base systems',
        'Multi-agent decision workflows',
        'Advanced chatbot development',
        'AI document processing'
      ]
    },
    {
      name: 'Business Automation Layer',
      description: 'Complete workflow automation, CRM integration, data pipelines',
      price: '$1,500 - $3,500',
      icon: Settings,
      features: [
        'CRM automation workflows',
        'Data pipeline creation',
        'Legacy system integration',
        'Marketing automation'
      ]
    },
    {
      name: 'Full-Stack AI Automation',
      description: 'End-to-end intelligent systems combining automation + AI',
      price: '$4,000 - $8,000+',
      icon: Crown,
      features: [
        'Intelligent automation ecosystems',
        'Smart BI dashboards',
        'Automated customer service',
        'Custom AI frameworks'
      ]
    }
  ];

  const packageEnhancements = [
    {
      title: 'Kickstart Plan - Attract & Engage',
      subtitle: 'Marketing Enhancement',
      features: [
        'Canva-integrated templates',
        'Dynamic video ad mockups via AI',
        'Image generation for seasonal campaigns'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Connection Plan - Customer Service',
      subtitle: 'Service Enhancement',
      features: [
        'Feedback sentiment dashboard',
        'Advanced agent trained on prior customer tickets',
        'Integration with Google My Business for live reputation monitoring'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Efficiency Plan - Internal Ops',
      subtitle: 'Operations Enhancement',
      features: [
        'AI report generator connected to spreadsheets',
        'Live meeting transcriber (Zoom or Meet bot)',
        'Smart checklist generator for onboarding, hiring, etc.'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Crown className="w-4 h-4" />
            Complete Business Transformation
          </div>
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Full-Stack AI Automation System
            <span className="block text-2xl text-indigo-600 font-normal mt-2">
              Business Transformation • Technical Integration • Intelligent Automation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete business transformation combining traditional automation with advanced AI - 
            from simple workflows to complex intelligent systems that grow with your business.
          </p>
        </div>

        {/* Component Selection */}
        <div className="grid md:grid-cols-5 gap-4 mb-12">
          {Object.entries(components).map(([key, component]) => {
            const IconComponent = component.icon;
            return (
              <button
                key={key}
                onClick={() => setSelectedComponent(key)}
                className={`p-4 rounded-xl transition-all duration-300 border-2 ${
                  selectedComponent === key
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                <IconComponent className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-semibold text-center">
                  {component.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Component Details */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            {React.createElement(components[selectedComponent].icon, {
              className: "w-8 h-8 text-indigo-600"
            })}
            <h2 className="text-2xl font-bold text-gray-900">
              {components[selectedComponent].title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {components[selectedComponent].features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Choose Your Transformation Level
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(tiers).map(([key, tier]) => (
              <div
                key={key}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 ${
                  selectedTier === key
                    ? 'border-indigo-500 shadow-xl transform scale-105'
                    : 'border-gray-200 hover:border-indigo-300'
                } ${tier.popular ? 'ring-4 ring-indigo-100' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="text-center text-sm text-gray-600 mb-4">
                    Ideal for: <strong>{tier.ideal}</strong>
                  </div>
                  <button
                    onClick={() => setSelectedTier(key)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      selectedTier === key
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {selectedTier === key ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Package Enhancements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Package Enhancements
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Modular upgrades to existing packages for specialized needs
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {packageEnhancements.map((enhancement, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className={`w-full h-32 bg-gradient-to-r ${enhancement.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{enhancement.title}</h3>
                <p className="text-sm text-indigo-600 font-semibold mb-4">{enhancement.subtitle}</p>
                <div className="space-y-2">
                  {enhancement.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Services Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Advanced Technical Services
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Full-stack AI automation solutions for complex business needs
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {technicalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">{service.name}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-indigo-400 mb-4">{service.price}</div>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
          
          {/* Migration Path Callout */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Growth Path Automation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-semibold mb-2">Phase 1: Foundation</div>
                <div className="text-blue-100 text-sm">Start with n8n automation for immediate ROI</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-semibold mb-2">Phase 2: Intelligence</div>
                <div className="text-blue-100 text-sm">Add Flowise AI layers as your business grows</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-semibold mb-2">Phase 3: Ecosystem</div>
                <div className="text-blue-100 text-sm">Full intelligent automation ecosystem</div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Package Builder */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Custom Package Builder
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Mix and match components for your specific business needs
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customPackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">{pkg.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-600">{pkg.price}</span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                      Add to Quote
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Note */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-12">
          <DollarSign className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-bold mb-2">Flexible Pricing</h3>
          <p className="text-indigo-100 mb-4">
            All packages include hourly rates for extras: $75-$100/hour
          </p>
          <p className="text-sm text-indigo-200">
            Pricing varies based on complexity, number of components, and estimated API costs
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get a custom quote based on your specific needs and start your complete business transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOverhaulPackage;