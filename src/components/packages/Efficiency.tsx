import React, { useState } from 'react';
import { Check, Zap, Clock, ArrowRight, FileText, BarChart, Lightbulb, Settings, Users } from 'lucide-react';

const EfficiencyPackage = () => {
  const [selectedTier, setSelectedTier] = useState('standard');

  const features = [
    'AI-assisted drafting of 2 key internal documents (handbook, proposals, templates)',
    'AI-powered summarization of 1-2 lengthy reports or datasets',
    '1-hour AI-facilitated brainstorming session (remote or in-person)',
    'Identification of 1-2 repetitive tasks for AI automation',
    'AI report generator connected to spreadsheets (Enhancement)',
    'Live meeting transcriber (Zoom or Meet bot) (Enhancement)',
    'Smart checklist generator for onboarding, hiring, etc. (Enhancement)'
  ];

  const tiers = {
    intro: {
      name: 'Introductory Rate',
      price: '$347-$547',
      description: 'Perfect for your first 3-5 clients',
      badge: 'Limited Time'
    },
    standard: {
      name: 'Standard Rate',
      price: '$600-$850',
      description: 'Complete operational efficiency overhaul',
      badge: 'Most Popular'
    }
  };

  const automationAreas = [
    {
      icon: FileText,
      title: 'Document Automation',
      description: 'Auto-generate reports, proposals, and templates',
      examples: ['Employee handbooks', 'Project proposals', 'Meeting summaries']
    },
    {
      icon: BarChart,
      title: 'Data Processing',
      description: 'Summarize complex reports and extract insights',
      examples: ['Sales reports', 'Market research', 'Performance data']
    },
    {
      icon: Settings,
      title: 'Task Automation',
      description: 'Identify and automate repetitive processes',
      examples: ['Scheduling', 'Data entry', 'Email reminders']
    },
    {
      icon: Users,
      title: 'Team Efficiency',
      description: 'Streamline collaboration and communication',
      examples: ['Meeting notes', 'Task assignments', 'Progress tracking']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            AI-Powered Efficiency
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Efficiency Plan
            <span className="block text-2xl text-violet-600 font-normal mt-2">
              Automate & Save Time
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop wasting time on repetitive tasks! Get your internal operations running smoother, 
            freeing your team to focus on growth, not grunt work.
          </p>
        </div>

        {/* Automation Areas */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {automationAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                  <area.icon className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{area.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <div className="space-y-2">
                {area.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                    <span className="text-sm text-gray-500">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ideal Client Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Perfect For Businesses</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-violet-50 rounded-lg">
              <Clock className="w-5 h-5 text-violet-600" />
              <span className="text-gray-700">Overwhelmed with admin tasks</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
              <FileText className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">Struggling with documentation</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-fuchsia-50 rounded-lg">
              <Users className="w-5 h-5 text-fuchsia-600" />
              <span className="text-gray-700">Need team time optimization</span>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {Object.entries(tiers).map(([key, tier]) => (
            <div 
              key={key}
              className={`relative bg-white rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedTier === key ? 'ring-2 ring-violet-500 transform scale-105' : ''
              }`}
              onClick={() => setSelectedTier(key)}
            >
              {tier.badge && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold ${
                  key === 'standard' ? 'bg-violet-600 text-white' : 'bg-purple-600 text-white'
                }`}>
                  {tier.badge}
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-violet-600 mb-2">{tier.price}</div>
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
                <div className="flex-shrink-0 w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-violet-600" />
                </div>
                <span className="text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Time Savings Section */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Reclaim Your Time</h2>
          <p className="text-lg mb-6 opacity-90">
            Typical clients save 15+ hours per week on administrative tasks, 
            allowing them to focus on strategic growth and customer relationships.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-80">Hours Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">75%</div>
              <div className="text-sm opacity-80">Faster Document Creation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">3x</div>
              <div className="text-sm opacity-80">Productivity Boost</div>
            </div>
          </div>
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 mb-8 border border-amber-200">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-bold text-gray-900">Brainstorming Session Included</h3>
          </div>
          <p className="text-gray-700">
            Every Efficiency Plan includes a dedicated 1-hour AI-facilitated brainstorming session 
            to identify your biggest time drains and automation opportunities.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Automate Your Operations
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-600 mt-4">
            Free efficiency audit included • Custom automation roadmap
          </p>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyPackage;