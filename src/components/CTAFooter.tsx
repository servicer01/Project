import React from 'react';
import { motion } from 'framer-motion';

export default function CTAFooter() {
  return (
    <section id="contact" className="section bg-primary-600 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Book your free AI strategy session today and discover how we can help you grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="src\components\ai-booking-system.tsx"
              className="btn bg-white text-primary-600 hover:bg-primary-50"
            >
              Book Your Free AI Strategy Session
            </a>
            <a
              href="#"
              className="btn bg-primary-700 text-white hover:bg-primary-800"
            >
              Download Sample AI Copy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}