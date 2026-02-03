
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Book } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent -skew-x-12 translate-x-1/2 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary -skew-x-12 -translate-x-1/2 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
            Start Producing Clean <br className="hidden lg:block"/> Energy Today
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Build, monitor, and optimize your biogas system with Smart BioDigester. 
            Join the community of innovators powering the future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 30px -10px rgba(242, 201, 76, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-accent text-navy font-bold px-10 py-5 rounded-2xl flex items-center justify-center text-lg shadow-xl"
            >
              <Rocket className="mr-2 w-6 h-6" />
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, bg: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white font-bold px-10 py-5 rounded-2xl flex items-center justify-center text-lg backdrop-blur-sm"
            >
              <Book className="mr-2 w-6 h-6" />
              View Documentation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
