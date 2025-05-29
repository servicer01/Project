import React from 'react';
import { motion } from 'framer-motion';
import { FaPencilAlt, FaRobot, FaInstagram, FaFileAlt, FaCalendarAlt } from 'react-icons/fa';

const services = [
  {
    icon: FaPencilAlt,
    title: 'Content Creation & SEO',
    description: 'Engaging content that ranks and converts',
    link: '/services/content.jsx',
  },
  {
    icon: FaRobot,
    title: 'Chatbots & Guest Messaging',
    description: 'Automated responses that feel personal',
    link: '/services/messaging.jsx',
  },
  {
    icon: FaInstagram,
    title: 'Social Media & Review Management',
    description: 'Consistent engagement and reputation building',
    link: '/services/social.jsx',
  },
  {
    icon: FaFileAlt,
    title: 'Internal Docs & Automation',
    description: 'Streamlined operations and documentation',
    link: '/services/automation.jsx',
  },
  {
    icon: FaCalendarAlt,
    title: 'Dynamic Pricing & Calendar Sync',
    description: 'Optimize your STR pricing automatically',
    link: '/services/dynamic.jsx',
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading">What We Offer</h2>
          <p className="subheading">Comprehensive AI solutions for your business needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}