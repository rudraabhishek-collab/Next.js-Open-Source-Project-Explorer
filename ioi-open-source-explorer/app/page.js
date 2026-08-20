import Hero from '../components/Hero';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function Home() {
  const totalSlots = projects.reduce((sum, p) =>
    sum + (p.stars > 3000 ? 30 : p.stars > 2000 ? 15 : p.stars > 1000 ? 10 : 5), 0
  );

  return (
    <main className="bg-[#0c0c0c] min-h-screen">
      <Hero />

      {/* Stats strip — like the "SUMMER OF CODE" ticker section */}
      <section className="border-t border-white/[0.06] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 text-center mb-8 font-semibold">
            PROJECT REGISTRY OVERVIEW
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/[0.05]">
            {[
              { label: 'Total Projects', value: projects.length },
              { label: 'Open Slots', value: totalSlots },
              { label: 'Beginner Friendly', value: projects.filter((p) => p.beginnerFriendly).length },
              { label: 'Frontend Projects', value: projects.filter((p) => p.domain === 'Frontend').length },
              { label: 'Backend Projects', value: projects.filter((p) => p.domain === 'Backend').length },
            ].map((s) => (
              <div key={s.label} className="bg-[#0c0c0c] py-8 px-6 text-center">
                <p className="text-3xl sm:text-4xl font-black text-white mb-1">{s.value}</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/25 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — mirrors the 01/02/03 sections */}
      <section className="border-t border-white/[0.06] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 text-center mb-3 font-semibold">
            KICKSTART YOUR OPEN SOURCE JOURNEY
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
            Everything you need to contribute.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Explore Projects',
                desc: 'Browse through approved open-source projects across Frontend, Backend, AI/ML, and more.',
                href: '/projects',
              },
              {
                num: '02',
                title: 'Save & Bookmark',
                desc: 'Bookmark projects you find interesting. Your saved list persists across sessions.',
                href: '/saved',
              },
              {
                num: '03',
                title: 'Start Contributing',
                desc: 'Check requirements, connect with Project Admins on GitHub or LinkedIn, and open a PR.',
                href: '/projects',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-[#161616] border border-white/[0.07] rounded-2xl p-7 hover:border-white/[0.14] transition-colors"
              >
                <p className="text-[11px] text-white/20 font-mono mb-4">{item.num}</p>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{item.desc}</p>
                <Link
                  href={item.href}
                  className="text-[#e8dcc8] text-sm hover:underline underline-offset-2"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="border-t border-white/[0.06] py-24 text-center">
        <div className="max-w-lg mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4 font-semibold">
            READY TO START?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Find your next open-source project.
          </h2>
          <p className="text-white/35 text-sm leading-relaxed mb-8">
            Browse projects, discover the tech stack, bookmark your picks, and start contributing to the open-source community.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#e8dcc8] text-black font-bold px-7 py-3 rounded-full hover:bg-[#d9ccb4] transition-colors text-sm"
          >
            Explore Projects
            <span className="w-5 h-5 bg-black/15 rounded-full flex items-center justify-center text-xs">→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-[#e8dcc8] font-bold text-sm">
              IOI<sup className="text-[9px]">✦</sup>
            </span>
            <span className="text-white/25 text-xs ml-1">Open-Source Explorer</span>
          </div>
          <p className="text-white/20 text-xs">
            © 2026 IOI Open-Source Explorer. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/" className="text-white/30 hover:text-white/60 text-xs transition-colors">Home</Link>
            <Link href="/projects" className="text-white/30 hover:text-white/60 text-xs transition-colors">Projects</Link>
            <Link href="/saved" className="text-white/30 hover:text-white/60 text-xs transition-colors">Saved</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
