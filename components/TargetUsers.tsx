
import React from 'react';
import { motion } from 'framer-motion';

const targets = [
  "Universities & Research Labs",
  "Rural Communities",
  "Eco-Villages",
  "Engineering Students",
  "Smart City Pilot Projects"
];

const TargetUsers: React.FC = () => {
  return (
    <section id="target" className="py-24 bg-navy text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl font-heading font-bold mb-12">Designed For</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {targets.map((target, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-colors"
            >
              {target}
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed italic">
            "We believe in a circular economy where every gram of organic waste is a potential joule of energy."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetUsers;
