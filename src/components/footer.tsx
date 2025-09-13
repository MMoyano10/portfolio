import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import KickIcon from '../../source/icons/kick-icon';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container flex flex-col md:flex-row items-center justify-between py-8">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {year} Mathius Moyano. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link
            href="https://github.com/MMoyano10"
            className="text-muted-foreground hover:text-[#ADBAC7] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mathius-moyano/"
            className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/mathiusmoyano/"
            className="text-muted-foreground hover:text-[#E4405F] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.youtube.com/@mathiusmoyano"
            className="text-muted-foreground hover:text-[#FF0000] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </Link>
          <Link
            href="https://kick.com/mathiusmoyano"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kick"
            className="text-muted-foreground hover:text-[#53FC18] transition-colors"
          >
            <KickIcon className="h-4 w-5" brand={false} />
          </Link>
        </div>
      </div>
    </footer>
  );
}