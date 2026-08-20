'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';

function getSavedIds() {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('ioi-saved-projects');
  return stored ? JSON.parse(stored) : [];
}

function saveIds(ids) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('ioi-saved-projects', JSON.stringify(ids));
  }
}

export default function SavedPage() {
  const [savedIds, setSavedIds] = useState(() => getSavedIds());

  useEffect(() => {
    const stored = localStorage.getItem('ioi-saved-projects');
    if (stored) setSavedIds(JSON.parse(stored));
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Saved Projects
          </h1>
          <p className="text-gray-600">
            Projects you've bookmarked for your open-source journey.
          </p>
        </div>

        {savedIds.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              No saved projects yet
            </p>
            <p className="text-gray-500">
              Explore open-source projects and bookmark the ones you want to contribute to.
            </p>
            <div className="mt-6">
              <a
                href="/projects"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
              >
                Explore Projects
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter((p) => savedIds.includes(p.id)).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}