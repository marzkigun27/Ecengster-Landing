import React, { use } from 'react';
import { motion } from 'framer-motion';
import { Recycle, Zap, BookOpen, BatteryLow, Sprout, ShieldCheck } from 'lucide-react';

const benefitList = [
  {
    icon: <Recycle />,
    title: "Waste Reduction",
    desc: "Minimize landfill waste by recycling organic materials into value."
  },
  {
    icon: <Zap />,
    title: "Renewable Energy",
    desc: "Consistent source of cooking or heating fuel from free waste."
  },
  {
    icon: <BookOpen />,
    title: "Research Ready",
    desc: "Designed specifically for academic data collection and experimentation."
  },
  {
    icon: <BatteryLow />,
    title: "Low Power IoT",
    desc: "Energy-efficient ESP32 system can run on solar or battery for months."
  },
  {
    icon: <Sprout />,
    title: "Organic Fertilizer",
    desc: "Slurry byproduct is nutrient-rich fertilizer for your gardens."
  },
  {
    icon: <ShieldCheck />,
    title: "Safety Alerts",
    desc: "Instant notifications for pressure buildup or hazardous gas levels."
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-cream dark:bg-navy/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-navy dark:text-white mb-4">Core Benefits</h2>
          <div className="w-24 h-1.5 bg-primary dark:bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitList.map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-white dark:bg-navy p-8 rounded-3xl border border-primary/5 dark:border-white/5 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 dark:bg-white/5 text-primary dark:text-secondary flex items-center justify-center mb-6">
                <div className="w-8 h-8">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-navy dark:text-white mb-3">{benefit.title}</h3>
              <p className="text-navy/60 dark:text-white/60 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
