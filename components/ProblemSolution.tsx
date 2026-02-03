
import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    "Organic waste is underutilized",
    "Manual biogas systems lack monitoring",
    "Gas production is unpredictable",
    "Safety risks without real-time data"
  ];

  const solutions = [
    "Automated sensor monitoring",
    "Stable anaerobic fermentation",
    "Real-time gas & slurry data",
    "Safe and efficient biogas production"
  ];

  return (
    <section className="py-24 bg-white dark:bg-darkBg relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl font-heading font-bold text-navy dark:text-white mb-8">
              The Problem with Traditional Waste & Energy Systems
            </h2>
            <ul className="space-y-6">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <XCircle className="text-red-400 dark:text-red-500 w-6 h-6 mt-1 flex-shrink-0" />
                  <span className="text-navy/70 dark:text-white/60 text-lg">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="hidden md:flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-cream dark:bg-navy/50 flex items-center justify-center">
              <ArrowRight className="text-primary dark:text-secondary w-6 h-6" />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-cream dark:bg-navy p-8 lg:p-12 rounded-3xl border-2 border-primary/10 dark:border-white/5 shadow-xl transition-all"
          >
            <h2 className="text-3xl font-heading font-bold text-primary dark:text-secondary mb-8">
              Smart BioDigester Solves This
            </h2>
            <ul className="space-y-6">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle className="text-primary dark:text-secondary w-6 h-6 mt-1 flex-shrink-0" />
                  <span className="text-navy dark:text-white text-lg font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
