import { projects } from '../../../data/projects';
import Link from 'next/link';

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

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#0c0c0c] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/25 text-sm mb-2">404</p>
          <h1 className="text-2xl font-bold text-white/60 mb-3">Project Not Found</h1>
          <p className="text-white/25 mb-6 text-sm">The project you're looking for doesn't exist.</p>
          <Link
            href="/projects"
            className="text-sm bg-[#e8dcc8] text-black px-5 py-2.5 rounded-full hover:bg-[#d9ccb4] transition-colors font-bold"
          >
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const slots = project.stars > 3000 ? 30 : project.stars > 2000 ? 15 : project.stars > 1000 ? 10 : 5;
  const repoPath = project.githubUrl.replace('https://github.com/', '');

  return (
    <main className="min-h-screen bg-[#0c0c0c] pt-16 pb-20 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-white/25 hover:text-white/55 text-xs mb-8 transition-colors mt-4"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <div className="bg-[#161616] border border-white/[0.08] rounded-2xl overflow-hidden">

          {/* Header */}
          <div className="p-7 border-b border-white/[0.06]">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h1 className="text-2xl font-bold text-white leading-tight">{project.name}</h1>
              <div className="shrink-0 text-right">
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/25 font-semibold">SLOTS</p>
                <p className="text-white font-black text-3xl leading-tight">{slots}</p>
              </div>
            </div>

            {/* Domain + difficulty badge row */}
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-white/40 border border-white/[0.12] rounded px-1.5 py-0.5">
                {project.domain}
              </span>
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
              <span className="text-white/25 text-xs ml-auto">⭐ {project.stars.toLocaleString()}</span>
            </div>

            {/* Repo path */}
            <div className="flex items-center gap-1.5 mb-5">
              <GithubIcon />
              <span className="text-white/30 text-xs font-mono truncate">{repoPath}</span>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="p-7 border-b border-white/[0.06]">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/25 font-semibold mb-3">TECHNOLOGIES</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/55">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          {project.skills && project.skills.length > 0 && (
            <div className="p-7 border-b border-white/[0.06]">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/25 font-semibold mb-3">SKILLS REQUIRED</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-sky-500/[0.06] border border-sky-500/[0.18] rounded-full text-sky-300/70">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Admin */}
          {project.projectAdmin && (
            <div className="p-7 border-b border-white/[0.06]">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/25 font-semibold mb-4">PROJECT ADMIN</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/[0.07] border border-white/[0.1] flex items-center justify-center text-white/50 font-bold text-sm shrink-0">
                  {project.projectAdmin.name[0].toUpperCase()}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{project.projectAdmin.name}</p>
                  <div className="flex items-center gap-4 mt-1.5">
                    <a
                      href={project.projectAdmin.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-white/35 hover:text-white/65 text-xs transition-colors"
                    >
                      <GithubIcon />
                      github
                    </a>
                    <a
                      href={project.projectAdmin.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-white/35 hover:text-white/65 text-xs transition-colors"
                    >
                      <LinkedinIcon />
                      linkedin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer actions */}
          <div className="p-7 flex flex-col sm:flex-row gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#e8dcc8] text-black font-bold py-3 rounded-full hover:bg-[#d9ccb4] transition-colors text-sm"
            >
              <GithubIcon />
              GitHub Repo ↗
            </a>
            <Link
              href="/projects"
              className="flex-1 flex items-center justify-center gap-2 bg-white/[0.05] border border-white/[0.1] text-white/60 font-medium py-3 rounded-full hover:bg-white/[0.08] hover:text-white/80 transition-colors text-sm"
            >
              ← All Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
