
"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import DashboardSection from '@/components/DashboardSection';
import Benefits from '@/components/Benefits';
import TargetUsers from '@/components/TargetUsers';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkMode = saved === 'dark' || (!saved && prefersDark);
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, isMounted]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen font-sans selection:bg-secondary selection:text-primary transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Partners />
        <ProblemSolution />
        <HowItWorks />
        <DashboardSection />
        <Benefits />
        <TargetUsers />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;