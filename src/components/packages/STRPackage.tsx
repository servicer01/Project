import React, { useState } from 'react';
import { Check, Home, MessageCircle, TrendingUp, Calendar, Star, DollarSign, ArrowRight, Bot, Search, BarChart3 } from 'lucide-react';

const STRPackage = () => {
  const [selectedSolution, setSelectedSolution] = useState('communication');

  const solutions = {
    communication: {
      title: 'Enhanced Guest Communication',
      icon: MessageCircle,
      features: [
        '24/7 AI Chatbots for guest questions',
        'Personalized welcome messages & booking confirmations',
        'Automated review requests + follow-ups',
        'Cancellation management and rebooking assistance'
      ],
      painPoints: 'Time-consuming guest communication, missed inquiries, inconsistent messaging'
    },
    visibility: {
      title: 'Maximize Visibility & Bookings',
      icon: Search,
      features: [
        'SEO-optimized listing content (Airbnb, VRBO)',
        'AI-enhanced photo captions + local keyword research',
        'Dynamic pricing recommendations based on demand',
        'Automated promotions for slow periods'
      ],
      painPoints: 'Low visibility on platforms, difficulty attracting right guests'
    },
    operations: {
      title: 'Streamline Operations',
      icon: Calendar,
      features: [
        'Auto-scheduling for cleanings & turnovers',
        'Maintenance alerts & inventory tracking',
        'Upsell local experiences & late checkout offers',
        'Occupancy forecasting and optimization'
      ],
      painPoints: 'Coordinating cleaning schedules, managing maintenance requests'
    },
    experience: {
      title: 'Guest Experience & Upselling',
      icon: Star,
      features: [
        'AI-powered local attraction recommendations',
        'Personalized welcome guides and instructions',
        'Automated upselling of extra services',
        'Sentiment analysis of guest reviews'
      ],
      painPoints: 'Providing personalized recommendations, increasing revenue through upselling'
    }
  };

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$597',
      features: [
        'Basic chatbot setup',
        'Welcome message automation',
        'Review request system',
        'Basic listing optimization'
      ],
      ideal: '1-3 properties'
    },
    {
      name: 'Professional',
      price: '$997',
      features: [
        'Full communication suite',
        'Dynamic pricing integration',
        'Advanced SEO optimization',
        'Cleaning/maintenance automation',
        'Guest experience enhancements'
      ],
      ideal: '4-10 properties',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,497',
      features: [
        'Everything in Professional',
        'Multi-platform management',
        'Advanced analytics dashboard',
        'Custom integrations',
        'Dedicated support'
      ],
      ideal: '10+ properties'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Home className="w-4 h-4" />
            Branson STR Solutions
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Solutions for Branson STR Hosts
            <span className="block text-2xl text-blue-600 font-normal mt-2">
              Automate Guest Communication • Boost Bookings • Save Hours
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed specifically for Airbnb, VRBO, and local property managers in Branson & Southwest Missouri
          </p>
        </div>

        {/* Solution Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {Object.entries(solutions).map(([key, solution]) => (
            <button
              key={key}
              onClick={() => setSelectedSolution(key)}
              className={`p-6 rounded-xl transition-all duration-300 text-left ${
                selectedSolution === key
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              <solution.icon className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-sm mb-2">{solution.title}</h3>
              <p className={`text-xs ${selectedSolution === key ? 'text-blue-100' : 'text-gray-500'}`}>
                {solution.painPoints}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Solution Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            {React.createElement(solutions[selectedSolution].icon, { className: "w-8 h-8 text-blue-600" })}
            <h2 className="text-2xl font-bold text-gray-900">{solutions[selectedSolution].title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Pain Points Solved</h3>
              <p className="text-gray-600 mb-6">{solutions[selectedSolution].painPoints}</p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">AI Solutions Included</h3>
              <div className="space-y-3">
                {solutions[selectedSolution].features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Choose Your Package</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl ${
                  tier.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600 text-sm">Ideal for {tier.ideal}</p>
                </div>
                
                <div className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full mt-6 py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  tier.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 mb-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Potential ROI for Branson STR Hosts</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">25%</div>
              <div className="text-sm text-gray-600">Booking Rate Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">15hrs</div>
              <div className="text-sm text-gray-600">Saved Per Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.8★</div>
              <div className="text-sm text-gray-600">Average Review Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$500+</div>
              <div className="text-sm text-gray-600">Monthly Revenue Boost</div>
            </div>
          </div>
        </div>

        {/* Special Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900">24/7 AI Guest Support</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Never miss a guest inquiry again. Our AI chatbots handle common questions about 
              check-in, amenities, directions, and local attractions around the clock.
            </p>
            <div className="text-sm text-purple-600 font-semibold">
              Instant responses • Consistent messaging • Human oversight
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900">Sentiment Analysis Bonus</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Advanced AI analyzes your guest reviews to identify trends, highlight strengths, 
              and suggest improvements to boost your ratings.
            </p>
            <div className="text-sm text-orange-600 font-semibold">
              Review insights • Rating optimization • Competitive analysis
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your STR Business?</h2>
          <p className="text-lg mb-6 opacity-90">
            Custom plans and revenue-share options available for larger property portfolios
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <div>📞 (417) 231-3576</div>
            <div>📧 dan@bransonai.com</div>
            <div>📍 Serving Branson & SW Missouri</div>
          </div>
          
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg">
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default STRPackage;