import { motion } from 'motion/react';
import { DATA_PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';

export default function ProjectShowreel() {
  return (
    <section id="projects" className="py-20 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold italic">Selected Works</h2>
            <p className="text-gray-500 mt-2">Projects built with passion and precision.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATA_PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="glass-dark rounded-[2rem] overflow-hidden group border border-white/5"
            >
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tech.map((t, i) => <span key={i} className="pill text-[10px]">{t}</span>)}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-electric-blue transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    title={`View ${project.title} source code`}
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="p-3 bg-white/5 rounded-full hover:bg-electric-blue transition-all"
                  >
                    <GitHubIcon width={18} height={18} />
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    title={`Open ${project.title} live project`}
                    aria-label={`Open ${project.title} live project`}
                    className="p-3 bg-white/5 rounded-full hover:bg-electric-blue transition-all"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
