
import React from 'react';
import { motion } from 'framer-motion';

const partnerList = [
  { name: "GreenTech Institute", type: "Research Partner" },
  { name: "Bio-Energy Lab", type: "Technical Advisor" },
  { name: "Eco Sustainability Hub", type: "Grant Provider" },
  { name: "IoT Agriculture Alliance", type: "Strategic Partner" },
  { name: "Smart City Foundation", type: "Implementation Lead" }
];

const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-cream dark:bg-navy/20 border-y border-navy/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-widest text-navy/40 dark:text-white/30 mb-2">
              In Collaboration With
            </h3>
            <div className="w-12 h-1 bg-secondary rounded-full mx-auto md:mx-0"></div>
          </div>
          
          <div className="flex-1 flex flex-wrap justify-center md:justify-end items-center gap-8 lg:gap-16">
            {partnerList.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-lg font-heading font-bold text-navy/30 dark:text-white/30 group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-bold text-navy/20 dark:text-white/20 uppercase tracking-tighter group-hover:text-secondary dark:group-hover:text-primary transition-colors duration-300">
                    {partner.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
