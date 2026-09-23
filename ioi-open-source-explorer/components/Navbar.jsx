'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Saved', href: '/saved' },
  { label: 'Join Community', href: 'https://discord.gg', external: true },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-14 px-6 sm:px-10">

      {/* Logo — pinned to left */}
      <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2">
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Logo image */}
          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-white/10">
            <img
              src="/logo.png"
              alt="IOI Logo"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Wordmark */}
          <div className="hidden sm:flex flex-col leading-none gap-[3px]">
            <span className="text-white font-semibold text-[13px] tracking-tight leading-none">
              Open-Source Explorer
            </span>
            <span className="text-[#e8dcc8]/45 text-[9px] uppercase tracking-[0.2em] font-medium leading-none">
              by Institute of Innovation
            </span>
          </div>
        </Link>
      </div>

      {/* Pill nav — absolutely centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <nav className="flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 shadow-lg shadow-black/20">
          {links.map(({ label, href, external }) => {
            const isActive = !external && pathname === href;
            return external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-sm font-medium text-white/55 hover:text-white transition-colors rounded-full hover:bg-white/5 whitespace-nowrap"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className={`px-4 py-1.5 text-sm font-medium transition-colors rounded-full whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-white/55 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

    </div>
  );
}
