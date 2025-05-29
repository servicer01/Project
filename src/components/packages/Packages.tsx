import React from 'react';
import { motion } from 'framer-motion';

const packages = [
  {
    name: 'Kickstart Plan',
    description: 'Content & Visibility Boost',
    price: '$497',
    features: [
      'AI-powered content creation',
      'SEO optimization',
      'Social media templates',
      'Basic analytics dashboard',
    ],
  },
  {
    name: 'Connection Plan',
    description: 'Guest/Customer Messaging Automation',
    price: '$897',
    features: [
      'Custom AI chatbot',
      'Automated response templates',
      'Review management',
      'Guest satisfaction tracking',
    ],
  },
  {
    name: 'Streamliner Plan',
    description: 'Internal Ops, Docs, Scheduling',
    price: '$1,200',
    features: [
      'Workflow automation',
      'Document generation',
      'Dynamic pricing (STR)',
      'Advanced analytics',
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Choose Your Plan</h2>
          <p className="subheading">Flexible packages tailored to your needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <p className="text-3xl font-bold text-primary-600 mb-6">{pkg.price}</p>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary w-full text-center">
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}