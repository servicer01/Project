import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="heading">
            AI-Powered Solutions to{' '}
            <span className="text-primary-600">Grow Your Business</span>
          </h1>
          <p className="subheading">
            Automate content, streamline communication, and win back your time — without hiring more staff.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Book a Free AI Strategy Session
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}