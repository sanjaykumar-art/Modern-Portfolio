import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import BentoSkills from './components/BentoSkills.tsx';
import ProjectShowreel from './components/ProjectShowreel.tsx';
import Experience from './components/Experience.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-electric-blue/50 pointer-events-none z-[100] hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isPointer ? 1.5 : 1,
        backgroundColor: isPointer ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
    />
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-obsidian-950 mesh-gradient selection:bg-electric-blue/30 selection:text-white">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-electric-blue z-[60] origin-left"
        style={{ scaleX }}
      />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <BentoSkills />
        <ProjectShowreel />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <div className="noise-overlay fixed inset-0 pointer-events-none opacity-[0.03] z-[99]" />
    </div>
  );
}
