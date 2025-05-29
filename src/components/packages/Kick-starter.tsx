import React, { useState } from 'react';
import { Check, Star, ArrowRight, Zap, Target, Users, TrendingUp } from 'lucide-react';

const KickstartPackage = () => {
  const [selectedTier, setSelectedTier] = useState('standard');

  const features = [
    'AI-generated social media post ideas & captions (10-12 ready-to-use for 2 platforms)',
    'AI assistance for engaging headlines & calls to action for digital ads',
    'AI-drafted website copy for 1-2 core pages (About Us, Services Overview)',
    'AI-powered keyword suggestions for local SEO optimization',
    '1 round of human review and refinement for all content',
    'Canva-integrated templates (Enhancement)',
    'Dynamic video ad mockups via AI (Enhancement)',
    'Image generation for seasonal campaigns (Enhancement)'
  ];

  const tiers = {
    intro: {
      name: 'Introductory Rate',
      price: '$497-$697',
      description: 'Perfect for your first 3-5 clients',
      badge: 'Limited Time'
    },
    standard: {
      name: 'Standard Rate',
      price: '$750-$1,200',
      description: 'Full-featured package for established pricing',
      badge: 'Most Popular'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            AI-Powered Marketing
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kickstart Plan
            <span className="block text-2xl text-blue-600 font-normal mt-2">
              Attract & Engage Faster
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop struggling with what to post! Get professional, engaging content ideas delivered to you, 
            saving hours and attracting more local customers.
          </p>
        </div>

        {/* Ideal Client Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Perfect For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <Users className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Fresh content needs</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Social media struggles</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
              <Star className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">Local visibility boost</span>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {Object.entries(tiers).map(([key, tier]) => (
            <div 
              key={key}
              className={`relative bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedTier === key ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
              onClick={() => setSelectedTier(key)}
            >
              {tier.badge && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold ${
                  key === 'standard' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
                }`}>
                  {tier.badge}
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{tier.price}</div>
                <p className="text-gray-600 text-sm">{tier.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Transform Your Marketing Today</h2>
          <p className="text-lg mb-6 opacity-90">
            This investment can save you 10+ hours per week in content creation, which translates to 
            $500+ in employee time, plus the intangible benefits of better customer engagement and increased sales.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-80">Hours Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">$500+</div>
              <div className="text-sm opacity-80">Value Per Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">2x</div>
              <div className="text-sm opacity-80">Engagement Boost</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-600 mt-4">
            Free AI Discovery Session included • No obligation assessment
          </p>
        </div>
      </div>
    </div>
  );
};

export default KickstartPackage;