import { motion } from 'motion/react';
import { DATA_EXPERIENCE } from '../constants';

export default function Experience() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-display font-bold mb-16 text-center italic">Professional Journey</h2>
      <div className="space-y-12">
        {DATA_EXPERIENCE.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative pl-8 border-l border-white/10"
          >
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-electric-blue shadow-[0_0_10px_#3b82f6]" />
            <span className="text-xs font-bold text-electric-blue/60 uppercase tracking-tighter">{exp.period}</span>
            <h3 className="text-2xl font-bold mt-1">{exp.title}</h3>
            <p className="text-deep-purple font-medium mb-4">{exp.company} • {exp.location}</p>
            <p className="text-gray-400 leading-relaxed text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}