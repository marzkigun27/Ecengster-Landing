import React from 'react';
import { motion } from 'framer-motion';

const BioDigesterIllustration: React.FC = () => {
  return (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
      {/* Background Shapes inspired by reference */}
      <rect width="800" height="600" fill="transparent" />
      <path d="M400 0L800 0L800 600L200 600Z" fill="#7ED6C1" fillOpacity="0.1" />
      <circle cx="700" cy="100" r="60" fill="#F2C94C" />
      <path d="M700 100L760 100M700 100L640 100M700 100L700 160M700 100L700 40" stroke="#F2C94C" strokeWidth="2" strokeDasharray="4 4" />

      {/* The Digester Tank */}
      <motion.g initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
        <rect x="250" y="250" width="200" height="250" rx="20" fill="#1F6F5C" />
        <path d="M250 270H450" stroke="white" strokeOpacity="0.1" strokeWidth="4" />
        <circle cx="350" cy="375" r="40" fill="white" fillOpacity="0.05" />
        
        {/* Tank Label */}
        <text x="350" y="480" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="12" fontWeight="bold">ANAEROBIC UNIT</text>
      </motion.g>

      {/* Gas Storage Bag */}
      <motion.g initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
        <path d="M550 150C650 150 700 220 700 300C700 380 650 450 550 450L500 450V150H550Z" fill="#7ED6C1" />
        <path d="M500 300L450 300" stroke="#1E2A32" strokeWidth="4" strokeDasharray="8 8" />
      </motion.g>

      {/* Floating Bubbles */}
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.circle
          key={i}
          cx={300 + Math.random() * 100}
          cy={450}
          r={5 + Math.random() * 5}
          fill="#F2C94C"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: -200 }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* ESP32 and Signal Waves */}
      <rect x="325" y="200" width="50" height="30" rx="4" fill="#1E2A32" />
      <text x="350" y="220" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">ESP32</text>
      
      {[1, 2, 3].map((i) => (
        <motion.circle
          key={`signal-${i}`}
          cx="350"
          cy="200"
          r={20 + i * 15}
          stroke="#7ED6C1"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.5, 0], scale: 1.5 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Nature Elements */}
      <motion.path d="M100 500C100 450 150 400 200 400" stroke="#1F6F5C" strokeWidth="8" strokeLinecap="round" />
      <motion.circle cx="100" cy="450" r="30" fill="#1F6F5C" />
      <motion.circle cx="150" cy="420" r="20" fill="#7ED6C1" />
      <motion.path d="M50 500H750" stroke="#1E2A32" strokeWidth="2" />
      
      {/* Sensor Lines */}
      <path d="M300 300L200 250" stroke="#1E2A32" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="200" cy="250" r="10" fill="#F2C94C" />
      <text x="180" y="240" fontSize="10" fill="#1E2A32" fontWeight="bold">pH SENSOR</text>

      <path d="M400 400L500 420" stroke="#1E2A32" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="500" cy="420" r="10" fill="#F2C94C" />
      <text x="515" y="425" fontSize="10" fill="#1E2A32" fontWeight="bold">TEMP SENSOR</text>
    </svg>
  );
};

export default BioDigesterIllustration;
