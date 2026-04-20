import { PERSONAL_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-gray-500 text-sm italic">
          © {new Date().getFullYear()} Designed & Engineered by {PERSONAL_INFO.name}
        </p>
        <div className="flex gap-6 text-sm font-medium uppercase tracking-widest">
          <a href={PERSONAL_INFO.github} target="_blank" className="hover:text-electric-blue transition-colors">Github</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" className="hover:text-electric-blue transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}