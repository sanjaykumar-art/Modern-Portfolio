import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../constants';

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-24 px-4 max-w-4xl mx-auto text-center"
    >
      <div className="glass-dark p-12 md:p-20 rounded-[24px] border-white/5 relative overflow-hidden">
        <div className="relative z-10 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
            <div className="max-w-xs">
              <h2 className="text-4xl font-medium mb-8">Reach out at <span className="text-electric-blue glow-text">My Lab</span></h2>
              <div className="flex gap-4">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" title="GitHub" aria-label="Open GitHub profile" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                   <GitHubIcon width={18} height={18} className="text-white/40" />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" aria-label="Open LinkedIn profile" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                   <LinkedInIcon width={18} height={18} className="text-white/40" />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} title="Email" aria-label="Send an email" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                   <Mail size={18} className="text-white/40" />
                </a>
              </div>
            </div>
            <div className="flex-grow max-w-sm">
              <form className="space-y-4">
                <input type="email" placeholder="your@email.com" className="w-full px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:border-electric-blue/50 text-sm outline-none" />
                <button className="button-magnetic w-full py-4 text-xs flex items-center justify-center gap-2">
                  Initiate Handshake <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
