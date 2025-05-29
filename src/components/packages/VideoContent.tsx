import React, { useState } from 'react';
import { Check, Video, Play, Users, Building, Home, Camera, Zap, ArrowRight, Star, Briefcase } from 'lucide-react';

const VideoContentPackage = () => {
  const [selectedService, setSelectedService] = useState('brands');

  const services = {
    brands: {
      title: 'E-commerce Brands',
      icon: Users,
      price: '$100-$300 per video',
      monthly: '$500-$1,000/month',
      description: 'AI-generated UGC content for Facebook ads, Instagram reels, TikToks, YouTube shorts',
      features: [
        'No paid actors or cameras needed',
        'High-end visuals matching brand aesthetic',
        'Ready-to-use content for multiple platforms',
        '4-8 different videos per month package'
      ]
    },
    agencies: {
      title: 'Marketing Agencies',
      icon: Briefcase,
      price: 'Custom pricing',
      monthly: '$1,000-$4,000/month',
      description: 'B-roll, product shots, and stock content for agency clients',
      features: [
        'No crew deployment needed',
        'Assets delivered without client interaction',
        'Helps retain clients using AI tools',
        'Increases agency profit margins'
      ]
    },
    realtors: {
      title: 'Real Estate Agents',
      icon: Home,
      price: '$200 vs $2,000',
      monthly: '$800-$1,200/month',
      description: 'Cinematic drone flyovers, interior B-roll, neighborhood lifestyle shots',
      features: [
        'Professional million-dollar agent look',
        'Dramatic cost savings over traditional video',
        'Cinematic quality drone footage',
        'Interior and exterior property showcases'
      ]
    },
    stock: {
      title: 'Stock Footage',
      icon: Camera,
      price: 'Per upload',
      monthly: 'Passive income',
      description: '5-10 second hyper-niche stock videos for major platforms',
      features: [
        'No cold outreach required',
        'Upload to Pond5, Adobe Stock, Art List',
        'Hyper-specific niche moments',
        'AI-generated prompts via ChatGPT'
      ]
    },
    service: {
      title: 'Service Businesses',
      icon: Building,
      price: '$300-$500/month',
      monthly: 'Content packages',
      description: 'Before/after reels for roofers, landscapers, med spas, etc.',
      features: [
        'Cinematic before/after transformations',
        'Custom logo integration',
        'Monthly content packages',
        'Permissionless marketing approach'
      ]
    }
  };

  const agencyPitch = {
    subject: "AI Video Production Partnership",
    message: `Hey! Not sure if your team is experimenting with AI video tools yet, but I've been using Google's new Veo 3 model and it's incredible!

You can generate cinematic content from text prompts - I'm using it to produce ads, B-roll and UGC style content for brands without ever picking up a camera.

Happy to show a few examples if you're interested! This could save your clients thousands on low-budget shoots without sacrificing quality.

Better yet, it could prevent you from losing clients who are about to discover these tools themselves.`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Video className="w-4 h-4" />
            AI Video Generation - Veo 3
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Video Content Creation
            <span className="block text-2xl text-red-600 font-normal mt-2">
              Professional Videos Without Cameras or Actors
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary AI video generation that creates high-end visuals indistinguishable from real footage. 
            Move fast while this tech is brand new - your edge won't last forever.
          </p>
        </div>

        {/* Service Selection */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setSelectedService(key)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                selectedService === key
                  ? 'bg-red-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              <service.icon className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-semibold">{service.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Service Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            {React.createElement(services[selectedService].icon, { className: "w-8 h-8 text-red-600" })}
            <h2 className="text-3xl font-bold text-gray-900">{services[selectedService].title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Overview</h3>
              <p className="text-gray-600 mb-6">{services[selectedService].description}</p>
              
              <div className="space-y-3">
                {services[selectedService].features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing</h3>
              <div className="bg-red-50 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-red-600 mb-2">
                  {services[selectedService].price}
                </div>
                <div className="text-gray-600">Per video rate</div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-xl font-bold text-gray-900 mb-2">
                  {services[selectedService].monthly}
                </div>
                <div className="text-gray-600">Monthly packages</div>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Pitch Section */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Agency Partnership Pitch Template</h2>
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="font-bold mb-3">{agencyPitch.subject}</h3>
            <div className="text-sm opacity-90 whitespace-pre-line leading-relaxed">
              {agencyPitch.message}
            </div>
          </div>
          <p className="text-sm opacity-80 mt-4">
            💡 Pro tip: Create 2-3 sample videos for their existing clients first, then send with this message
          </p>
        </div>

        {/* Strategy Tips */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-600" />
              <h3 className="text-xl font-bold text-gray-900">Move Fast Strategy</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• This tech is brand new - most people don't know it exists</li>
              <li>• Your edge weakens as others catch up</li>
              <li>• Test fast, send DMs, get first client</li>
              <li>• One video sale = case study for scaling</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900">Positioning Tips</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Don't pitch "AI" - pitch leverage and results</li>
              <li>• Show demos, don't over-explain technology</li>
              <li>• Focus on problem-solving, not features</li>
              <li>• Let agencies handle clients, you deliver content</li>
            </ul>
          </div>
        </div>

        {/* ROI Showcase */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 mb-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Potential Monthly Revenue</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$2,000</div>
              <div className="text-sm text-gray-600">5 brand clients × $400/month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$3,000</div>
              <div className="text-sm text-gray-600">1 agency partnership</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$1,500</div>
              <div className="text-sm text-gray-600">Stock footage passive income</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Start Creating AI Videos
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-600 mt-4">
            Portfolio building session • Demo creation • Strategy consultation
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoContentPackage;