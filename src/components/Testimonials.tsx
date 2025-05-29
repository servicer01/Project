import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Airbnb Host',
    content: 'Diamond D. AI Solutions saved me 5+ hours every week on guest communication. My listing went from invisible to booked solid!',
    rating: 5,
  },
  {
    name: 'Mike Thompson',
    role: 'Real Estate Agent',
    content: 'The AI-powered listing descriptions have transformed my business. Properties are selling faster and for better prices.',
    rating: 5,
  },
  {
    name: 'Lisa Chen',
    role: 'Restaurant Owner',
    content: 'Their social media automation has given us consistent engagement without taking up my valuable time.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Client Success Stories</h2>
          <p className="subheading">See how AI is transforming businesses like yours</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}