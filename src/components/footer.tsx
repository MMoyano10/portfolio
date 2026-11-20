'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage, localized } from '@/context/language-context';

export default function Footer() {
  const { language } = useLanguage();
  return <footer className="border-t border-white/10 bg-[#0b0b0e]"><div className="container flex max-w-6xl flex-col items-center justify-between gap-5 py-9 sm:flex-row"><p className="text-sm text-white/60">© {new Date().getFullYear()} Mathius Moyano. {localized(language, 'All rights reserved.', 'Todos los derechos reservados.')}</p><div className="flex items-center gap-6"><Link href="https://github.com/MMoyano10" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/60 hover:text-white"><Github size={21}/></Link><Link href="https://www.linkedin.com/in/mathius-moyano/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-white"><Linkedin size={21}/></Link><a href="mailto:msmj1077@gmail.com" aria-label="Email" className="text-white/60 hover:text-white"><Mail size={21}/></a></div></div></footer>;
}
