'use client';

import { useState } from 'react';
import Link from 'next/link';
import BookmarkButton from './BookmarkButton';

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C8.422 19.57 7.635 19.2 7.635 19.2c-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ProjectCard({ project }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [specsOpen, setSpecsOpen] = useState(false);

  const repoPath = project.githubUrl.replace('https://github.com/', '');
  const MAX_TAGS = 4;
  const visibleTechs = project.technologies.slice(0, MAX_TAGS);
  const extraCount = project.technologies.length - MAX_TAGS;

  return (
    <div className="bg-[#161616] border border-white/[0.08] rounded-2xl flex flex-col overflow-hidden hover:border-white/[0.15] transition-colors duration-200">

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3 flex-1">

        {/* Row 1: name + slots */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-bold text-[15px] leading-snug">
            {project.name}
          </h3>
          <div className="shrink-0 text-right">
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/25 font-semibold">ID</p>
            <p className="text-white font-bold text-xl leading-tight">#{project.id}</p>
          </div>
        </div>

        {/* Row 2: domain badge */}
        <div className="flex items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-white/40 border border-white/[0.12] rounded px-1.5 py-0.5">
            {project.domain}
          </span>
          <BookmarkButton
            projectId={project.id}
            isBookmarked={isBookmarked}
            onToggle={setIsBookmarked}
          />
        </div>

        {/* Row 3: github repo path */}
        <div className="flex items-center gap-1.5">
          <GithubIcon />
          <span className="text-white/35 text-xs truncate font-mono">
            {repoPath}
          </span>
        </div>

        {/* Row 4: description */}
        <p className="text-white/45 text-[13px] leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Row 5: tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {visibleTechs.map((tech, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-0.5 rounded bg-white/[0.05] text-white/55 border border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
          {extraCount > 0 && (
            <span className="text-[11px] px-2 py-0.5 rounded bg-white/[0.03] text-white/30 border border-white/[0.06]">
              +{extraCount} more
            </span>
          )}
        </div>

        {/* Row 6: difficulty + beginner badge */}
        <div className="flex gap-2 flex-wrap">
          <span className={`text-[11px] px-2 py-0.5 rounded border font-medium ${
            project.difficulty === 'Beginner'
              ? 'text-emerald-400 border-emerald-500/25 bg-emerald-500/8'
              : project.difficulty === 'Intermediate'
              ? 'text-amber-400 border-amber-500/25 bg-amber-500/8'
              : 'text-red-400 border-red-500/25 bg-red-500/8'
          }`}>
            {project.difficulty}
          </span>
          {project.beginnerFriendly && (
            <span className="text-[11px] px-2 py-0.5 rounded border text-sky-400 border-sky-500/25 bg-sky-500/8 font-medium">
              Good First Issue ✓
            </span>
          )}
        </div>

        {/* Row 7: project admin */}
        {project.projectAdmin && (
          <div className="pt-2 mt-1 border-t border-white/[0.06]">
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/25 font-semibold mb-1.5">
              PROJECT ADMIN
            </p>
            <p className="text-white/75 text-sm font-semibold leading-tight">
              {project.projectAdmin.name}
            </p>
            <div className="flex items-center gap-3 mt-1.5">
              <a
                href={project.projectAdmin.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white/35 hover:text-white/65 text-[12px] transition-colors"
              >
                <GithubIcon />
                github
              </a>
              <a
                href={project.projectAdmin.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white/35 hover:text-white/65 text-[12px] transition-colors"
              >
                <LinkedinIcon />
                linkedin
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Specs toggle section */}
      {specsOpen && (
        <div className="mx-5 mb-3 bg-[#1f1f1f] border border-white/[0.07] rounded-xl p-3">
          <p className="text-[11px] text-white/40 leading-relaxed mb-2">
            {project.skills ? project.skills.join(' • ') : 'See GitHub for full requirements.'}
          </p>
          <Link
            href={`/projects/${project.id}`}
            className="text-[11px] text-[#e8dcc8] hover:underline"
          >
            View full details →
          </Link>
        </div>
      )}

      {/* Card footer */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.06]">
        <button
          onClick={() => setSpecsOpen(!specsOpen)}
          className="flex items-center gap-1.5 text-white/35 hover:text-white/60 text-[12px] transition-colors"
        >
          <svg
            className={`w-3 h-3 transition-transform ${specsOpen ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          Specs
        </button>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-[#e8dcc8] text-black text-[12px] font-bold px-4 py-1.5 rounded-full hover:bg-[#d9ccb4] transition-colors"
        >
          GitHub Repo
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
