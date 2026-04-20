import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 glass-dark"
    >
      <div className="text-xl font-display font-bold tracking-tighter text-glow">
        SK<span className="text-electric-blue">.</span>
      </div>
      <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">
        <a href="#about" className="hover:text-electric-blue transition-colors">About</a>
        <a href="#skills" className="hover:text-electric-blue transition-colors">Skills</a>
        <a href="#projects" className="hover:text-electric-blue transition-colors">Projects</a>
        <a href="#contact" className="hover:text-electric-blue transition-colors">Contact</a>
      </div>
      <a href={PERSONAL_INFO.linkedin} target="_blank" className="pill hover:bg-electric-blue transition-all">
        LinkedIn
      </a>
    </motion.nav>
  );
}