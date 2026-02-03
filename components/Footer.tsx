
import React from 'react';
import { Leaf, Github, Mail, Linkedin } from 'lucide-react';
import logoTheEcengs from '../public/logo-theeceng.png';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream dark:bg-darkBg pt-20 pb-10 border-t border-navy/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src={logoTheEcengs}
                alt="The Ecengs Logo"
                width={180}
                height={180}
                className="h-10 w-auto md:h-24"
              />
            </div>
            <p className="text-navy/60 dark:text-white/40 max-w-sm mb-8 leading-relaxed">
              Advancing sustainable waste management through IoT and smart technology. Empowering communities with clean, renewable energy insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-navy/5 dark:bg-white/5 rounded-full text-navy dark:text-white hover:bg-primary dark:hover:bg-secondary hover:text-white dark:hover:text-navy transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-navy/5 dark:bg-white/5 rounded-full text-navy dark:text-white hover:bg-primary dark:hover:bg-secondary hover:text-white dark:hover:text-navy transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-navy/5 dark:bg-white/5 rounded-full text-navy dark:text-white hover:bg-primary dark:hover:bg-secondary hover:text-white dark:hover:text-navy transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-navy dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-navy/60 dark:text-white/40">
              <li><a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-primary dark:hover:text-secondary transition-colors">How It Works</a></li>
              <li><a href="#monitoring" className="hover:text-primary dark:hover:text-secondary transition-colors">Monitoring</a></li>
              <li><a href="#benefits" className="hover:text-primary dark:hover:text-secondary transition-colors">Benefits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-navy dark:text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-navy/60 dark:text-white/40">
              <li><a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors">Open Source</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-navy/40 text-sm">
          <p>© {new Date().getFullYear()} Smart BioDigester. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-navy dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
