'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';
import Link from 'next/link';

const KEY = 'ioi-saved-projects';

export default function SavedPage() {
  const [savedIds, setSavedIds] = useState([]);

  useEffect(() => {
    const load = () => {
      const s = localStorage.getItem(KEY);
      setSavedIds(s ? JSON.parse(s) : []);
    };
    load();
    window.addEventListener('storage', load);
    return () => window.removeEventListener('storage', load);
  }, []);

  const remove = (id) => {
    const next = savedIds.filter((s) => s !== id);
    setSavedIds(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  };

  const saved = projects.filter((p) => savedIds.includes(p.id));

  return (
    <div className="min-h-screen bg-[#0c0c0c]">

      {/* Header */}
      <div className="pt-24 pb-10 px-6 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-semibold mb-2">
            YOUR COLLECTION
          </p>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Saved Projects</h1>
              <p className="text-white/35 text-sm mt-1.5">
                Projects you've bookmarked for your open-source journey.
              </p>
            </div>
            {saved.length > 0 && (
              <span className="text-[#e8dcc8] text-sm font-semibold shrink-0">
                {saved.length} saved
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {saved.length === 0 ? (
          <div className="text-center py-28 max-w-sm mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#161616] border border-white/[0.07] flex items-center justify-center mx-auto mb-5">
              <span className="text-white/20 text-2xl">☆</span>
            </div>
            <h2 className="text-white/60 font-bold text-lg mb-2">No saved projects yet</h2>
            <p className="text-white/25 text-sm leading-relaxed mb-8">
              Explore open-source projects and bookmark the ones you want to contribute to.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#e8dcc8] text-black font-bold px-6 py-2.5 rounded-full hover:bg-[#d9ccb4] transition-colors text-sm"
            >
              Explore Projects →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {saved.map((project) => (
              <div key={project.id} className="relative group">
                <ProjectCard project={project} />
                <button
                  onClick={() => remove(project.id)}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 text-[10px] font-semibold text-red-400/70 hover:text-red-400 border border-red-400/20 hover:border-red-400/40 px-2.5 py-1 rounded-full transition-all bg-[#161616]"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
