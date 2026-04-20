import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants.ts'; 

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <div className="inline-flex items-center gap-2 pill mb-6 backdrop-blur-sm">
          <span>AVAILABE FOR WORK</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 font-display text-glow">
          {PERSONAL_INFO.name.split(' ')[0]} <br className="sm:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-deep-purple">
            {PERSONAL_INFO.name.split(' ')[1]}
          </span>
        </h1>

        <div className="h-12 md:h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xl md:text-2xl text-blue-400 font-mono"
            >
              &lt; {PERSONAL_INFO.roles[roleIndex]} /&gt;
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="max-w-xl mx-auto text-white/50 mt-8 text-lg leading-relaxed px-4">
          Building high-performance, data-driven applications that bridge the gap between design and functionality.
        </p>

        <motion.div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#projects" className="button-magnetic flex items-center gap-3 hover:scale-105">
            EXPLORE MY LAB
          </a>
          <div className="flex items-center gap-4 px-6 py-4 glass rounded-2xl border-white/5 group">
             <div className="bg-green-500 w-2 h-2 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
             <span className="text-xs font-medium text-white/60">Based in Bhopal &bull; 42 Day Streak</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}