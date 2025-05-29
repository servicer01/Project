import React, { useState } from 'react';
import { Check, MessageCircle, Star, ArrowRight, Users, Clock, Shield, BarChart3 } from 'lucide-react';

const ConnectionPackage = () => {
  const [selectedTier, setSelectedTier] = useState('standard');

  const features = [
    'AI-generated comprehensive FAQ responses (5-7 common customer questions)',
    'Basic AI chatbot script drafts for FAQs (ready for website/messaging)',
    'AI-assisted analysis of existing customer reviews (Google, Yelp)',
    'AI-generated draft responses for 3-5 positive and 3-5 negative reviews',
    '1 round of human review and refinement for all content',
    'Feedback sentiment dashboard (Enhancement)',
    'Advanced agent trained on prior customer tickets (Enhancement)',
    'Google My Business integration for live reputation monitoring (Enhancement)'
  ];

  const tiers = {
    intro: {
      name: 'Introductory Rate',
      price: '$397-$597',
      description: 'Perfect for your first 3-5 clients',
      badge: 'Limited Time'
    },
    standard: {
      name: 'Standard Rate',
      price: '$650-$950',
      description: 'Full-featured customer service automation',
      badge: 'Most Popular'
    }
  };

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry again'
    },
    {
      icon: Users,
      title: 'Consistent Responses',
      description: 'Professional, on-brand messaging every time'
    },
    {
      icon: Shield,
      title: 'Review Management',
      description: 'Smart responses that protect your reputation'
    },
    {
      icon: BarChart3,
      title: 'Sentiment Analysis',
      description: 'Track customer satisfaction trends'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageCircle className="w-4 h-4" />
            AI-Powered Customer Service
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Connection Plan
            <span className="block text-2xl text-emerald-600 font-normal mt-2">
              Smart Customer Service
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Free up your team from repetitive questions and improve customer satisfaction 
            with instant, consistent answers and smarter review management.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                <benefit.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Ideal Client Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Perfect For Businesses With</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700">Repetitive customer inquiries</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-lg">
              <Star className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700">Review management needs</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
              <Users className="w-5 h-5 text-cyan-600" />
              <span className="text-gray-700">Communication bottlenecks</span>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {Object.entries(tiers).map(([key, tier]) => (
            <div 
              key={key}
              className={`relative bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedTier === key ? 'ring-2 ring-emerald-500 transform scale-105' : ''
              }`}
              onClick={() => setSelectedTier(key)}
            >
              {tier.badge && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold ${
                  key === 'standard' ? 'bg-emerald-600 text-white' : 'bg-teal-600 text-white'
                }`}>
                  {tier.badge}
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-2">{tier.price}</div>
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
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Customer Service ROI</h2>
          <p className="text-lg mb-6 opacity-90">
            Reduce response time by 90%, increase customer satisfaction, and free up your team 
            to focus on high-value activities instead of repetitive inquiries.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">90%</div>
              <div className="text-sm opacity-80">Faster Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5★</div>
              <div className="text-sm opacity-80">Review Management</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Upgrade Customer Service
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-600 mt-4">
            Free consultation • Custom demo available
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectionPackage;