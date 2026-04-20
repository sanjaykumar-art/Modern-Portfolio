import { motion } from 'motion/react';
import { DATA_SKILLS, VIBE_DATA } from '../constants';

export default function BentoSkills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-display font-bold mb-12 text-center underline decoration-electric-blue decoration-4 underline-offset-8">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        {/* Large Status Card */}
        <motion.div whileHover={{ y: -5 }} className="md:col-span-2 md:row-span-2 glass rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <p className="text-electric-blue font-bold uppercase text-xs tracking-widest mb-2">Current Vibe</p>
            <h3 className="text-4xl font-display font-bold">{VIBE_DATA.status}</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs text-gray-400">Learning</p>
              <p className="font-medium text-deep-purple">{VIBE_DATA.learning}</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Cards */}
        {DATA_SKILLS.slice(0, 6).map((skill, index) => (
          <motion.div key={index} whileHover={{ scale: 1.02 }} className="glass rounded-3xl p-6 flex flex-col justify-center items-center text-center">
            <p className="text-2xl font-bold text-white mb-1">{skill.name}</p>
            <p className="text-[10px] uppercase tracking-tighter text-gray-500">{skill.category}</p>
            <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.proficiency}%` }} className="h-full bg-electric-blue" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}