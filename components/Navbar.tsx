
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Sun, Moon } from 'lucide-react';
import logoTheEcengs from '../public/logo-theeceng.png';
import Image from 'next/image';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 dark:bg-darkBg/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src={logoTheEcengs}
            alt="The Ecengs Logo"
            width={180}
            height={180}
            className="h-12 w-auto md:h-24"
            priority
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-navy/80 dark:text-white/80 hover:text-primary dark:hover:text-secondary transition-colors font-medium">Home</a>
          <a href="#how-it-works" className="text-navy/80 dark:text-white/80 hover:text-primary dark:hover:text-secondary transition-colors font-medium">How It Works</a>
          <a href="#monitoring" className="text-navy/80 dark:text-white/80 hover:text-primary dark:hover:text-secondary transition-colors font-medium">Monitoring</a>
          <a href="#benefits" className="text-navy/80 dark:text-white/80 hover:text-primary dark:hover:text-secondary transition-colors font-medium">Benefits</a>
          <a href="#target" className="text-navy/80 dark:text-white/80 hover:text-primary dark:hover:text-secondary transition-colors font-medium">Community</a>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-xl bg-navy/5 dark:bg-white/10 text-navy dark:text-white"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <Sun className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Moon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-navy font-bold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Dashboard
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
