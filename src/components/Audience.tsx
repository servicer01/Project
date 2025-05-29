import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaUtensils, FaGraduationCap } from 'react-icons/fa';

const audiences = [
  {
    icon: FaHome,
    title: 'STR Hosts',
    description: 'Faster guest messaging, better reviews',
  },
  {
    icon: FaBuilding,
    title: 'Real Estate Agents',
    description: 'Listing content, client follow-ups, property copy',
  },
  {
    icon: FaUtensils,
    title: 'Restaurants & Retail',
    description: 'Social media automation, menu ideas, customer replies',
  },
  {
    icon: FaGraduationCap,
    title: 'Academic Professionals',
    description: 'Paper outlines, citations, grammar help',
  },
];

export default function Audience() {
  return (
    <section id="audience" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Who We Help</h2>
          <p className="subheading">Tailored AI solutions for your specific needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <item.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}