
import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Flame, Activity, Package, Monitor } from 'lucide-react';

const steps = [
  {
    icon: <Trash2 className="w-8 h-8" />,
    title: "Waste Input",
    desc: "Organic waste is collected and prepped for digestion."
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: "Anaerobic Digestion",
    desc: "Waste decomposes in a sealed HDPE digester unit."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Sensor Monitoring",
    desc: "pH, temp, and methane are monitored by IoT sensors."
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Gas Collection",
    desc: "Renewable biogas is stored and ready for use."
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Insights & Alerts",
    desc: "Receive real-time data via the cloud dashboard."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-cream dark:bg-navy/30 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-navy dark:text-white mb-4">How Smart BioDigester Works</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-primary/10 dark:bg-white/10 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-navy border-2 border-primary/20 dark:border-white/10 flex items-center justify-center text-primary dark:text-secondary mb-6 shadow-lg group-hover:scale-110 group-hover:bg-primary dark:group-hover:bg-secondary group-hover:text-white dark:group-hover:text-navy transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-navy dark:text-white mb-2">{step.title}</h3>
                <p className="text-navy/60 dark:text-white/60 text-sm leading-relaxed">{step.desc}</p>
                
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent text-navy font-bold flex items-center justify-center text-xs shadow-md">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
