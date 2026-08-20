'use client';

import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import StackFilter from '../../components/StackFilter';
import TrackFilter from '../../components/TrackFilter';
import ProjectList from '../../components/ProjectList';
import { projects } from '../../data/projects';

const TRACKS = ['All', 'Core Engine', 'Backend', 'Frontend', 'AI / ML', 'Documentation'];
const STACKS = ['React', 'TypeScript', 'Node.js', 'Go', 'Python', 'Next.js', 'Tailwind CSS'];

const totalSlots = projects.reduce((sum, p) =>
  sum + (p.stars > 3000 ? 30 : p.stars > 2000 ? 15 : p.stars > 1000 ? 10 : 5), 0
);

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [stack, setStack] = useState('All');
  const [track, setTrack] = useState('All');
  const [openOnly, setOpenOnly] = useState(false);

  const filtered = projects.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.technologies.some((t) => t.toLowerCase().includes(q)) ||
      (p.skills && p.skills.some((s) => s.toLowerCase().includes(q)));

    const matchStack =
      stack === 'All' ||
      p.technologies.some((t) => t.toLowerCase() === stack.toLowerCase());

    const matchTrack =
      track === 'All' || p.domain.toLowerCase() === track.toLowerCase();

    return matchSearch && matchStack && matchTrack;
  });

  return (
    <div className="min-h-screen bg-[#0c0c0c]">

      {/* Page header */}
      <div className="pt-24 pb-10 px-6 text-center border-b border-white/[0.06]">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-semibold mb-3">
          INGESTED MONOREPO PROJECTS
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-[1.1] max-w-3xl mx-auto">
          Explore{' '}
          <em className="italic text-[#e8dcc8]">Open Source Specifications.</em>
        </h1>
        <p className="mt-4 text-white/35 text-sm max-w-lg mx-auto leading-relaxed">
          Browse through approved open-source projects proposed by Project Admins.
          Review tech requirements, connect with PAs on public profiles, and choose your track.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4 space-y-4">

        {/* Search + open slots checkbox */}
        <div className="flex flex-wrap items-center gap-4">
          <SearchBar onSearch={setSearch} value={search} />
          <label className="flex items-center gap-2 cursor-pointer ml-auto shrink-0">
            <div
              role="checkbox"
              aria-checked={openOnly}
              tabIndex={0}
              onClick={() => setOpenOnly(!openOnly)}
              onKeyDown={(e) => e.key === 'Enter' && setOpenOnly(!openOnly)}
              className={`w-4 h-4 border rounded flex items-center justify-center transition-colors cursor-pointer ${
                openOnly
                  ? 'bg-[#e8dcc8] border-[#e8dcc8]'
                  : 'bg-transparent border-white/20 hover:border-white/35'
              }`}
            >
              {openOnly && (
                <svg className="w-2.5 h-2.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-[12px] text-white/35 select-none">
              Only show open slots ({totalSlots} total slots)
            </span>
          </label>
        </div>

        {/* Stack filters */}
        <StackFilter stacks={STACKS} selectedStack={stack} onStackChange={setStack} />

        {/* Track tabs */}
        <TrackFilter tracks={TRACKS} selectedTrack={track} onTrackChange={setTrack} />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 pt-2">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-white/35 text-lg mb-1">No projects found</p>
            <p className="text-white/20 text-sm mb-6">
              Try adjusting your search or filters.
            </p>
            <button
              onClick={() => { setSearch(''); setStack('All'); setTrack('All'); }}
              className="text-xs text-[#e8dcc8] border border-[#e8dcc8]/25 px-4 py-2 rounded-full hover:bg-[#e8dcc8]/8 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-[11px] text-white/20 mb-4">
              {filtered.length} project{filtered.length !== 1 ? 's' : ''} found
            </p>
            <ProjectList projects={filtered} />
          </>
        )}
      </div>
    </div>
  );
}
