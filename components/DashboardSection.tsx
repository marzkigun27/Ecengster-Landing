
import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart3, Radio, Brain, Database, Globe } from 'lucide-react';

const data = [
  { time: '00:00', gas: 400, temp: 35 },
  { time: '04:00', gas: 300, temp: 34 },
  { time: '08:00', gas: 600, temp: 37 },
  { time: '12:00', gas: 800, temp: 39 },
  { time: '16:00', gas: 700, temp: 38 },
  { time: '20:00', gas: 900, temp: 36 },
  { time: '23:59', gas: 850, temp: 35 },
];

const features = [
  { icon: <BarChart3 className="w-5 h-5" />, text: "Real-time sensor data visualization" },
  { icon: <Radio className="w-5 h-5" />, text: "MQTT-based wireless communication" },
  { icon: <Brain className="w-5 h-5" />, text: "Smart anomaly alerts & notifications" },
  { icon: <Database className="w-5 h-5" />, text: "Historical analysis (InfluxDB-ready)" },
  { icon: <Globe className="w-5 h-5" />, text: "Access from any device, anywhere" },
];

const DashboardSection: React.FC = () => {
  return (
    <section id="monitoring" className="py-24 bg-white dark:bg-darkBg relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-navy rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden ring-1 ring-white/10"
          >
            {/* Mock Dashboard Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="text-white font-bold text-lg">System Dashboard</h4>
                <p className="text-white/40 text-xs">Unit: DB-Alpha-01 (Active)</p>
              </div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
            </div>

            {/* Live Chart */}
            <div className="h-64 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorGas" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7ED6C1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#7ED6C1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="time" stroke="#ffffff40" fontSize={10} />
                  <YAxis stroke="#ffffff40" fontSize={10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1E2A32', border: '1px solid #ffffff10', borderRadius: '8px' }}
                    itemStyle={{ color: '#7ED6C1' }}
                  />
                  <Area type="monotone" dataKey="gas" stroke="#7ED6C1" fillOpacity={1} fill="url(#colorGas)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-xl">
                <p className="text-white/40 text-xs mb-1 uppercase tracking-wider">Methane</p>
                <p className="text-xl font-bold text-accent">65.2%</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <p className="text-white/40 text-xs mb-1 uppercase tracking-wider">Temp</p>
                <p className="text-xl font-bold text-white">37.4°C</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <p className="text-white/40 text-xs mb-1 uppercase tracking-wider">pH</p>
                <p className="text-xl font-bold text-secondary">6.8</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl font-heading font-bold text-navy dark:text-white mb-6">Monitor Everything. Anywhere.</h2>
            <p className="text-lg text-navy/60 dark:text-white/60 mb-8 leading-relaxed">
              Our advanced IoT integration allows you to step away from manual logs. Get high-resolution data streamed via MQTT directly to your private dashboard.
            </p>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3 text-navy dark:text-white font-semibold">
                  <div className="bg-primary/10 dark:bg-white/10 p-2 rounded-lg text-primary dark:text-secondary">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <motion.button 
              whileHover={{ x: 10 }}
              className="mt-10 flex items-center text-primary dark:text-secondary font-bold text-lg group"
            >
              Explore Dashboard Demo
              <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
