'use client';

import { useState } from 'react';
import BookmarkButton from './BookmarkButton';
import ProjectAdmin from './ProjectAdmin';
import Link from 'next/link';

export default function ProjectDetails({ project }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = (value) => setIsBookmarked(value);

  return (
    <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto">
      <div className="flex items-start justify-between mb-1">
        <h2 className="text-2xl font-bold text-gray-900">{project.name}</h2>
        <BookmarkButton
          projectId={project.id}
          isBookmarked={isBookmarked}
          onToggle={toggleBookmark}
        />
      </div>
      <p className="text-gray-600 text-sm mb-6">{project.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <p className="text-sm text-gray-500 mb-1">Domain:</p>
          <p className="font-medium text-gray-900">{project.domain}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Difficulty:</p>
          <span
            className={`inline-block text-xs font-semibold px-2 py-1 rounded ${
              project.difficulty === 'Beginner'
                ? 'bg-green-100 text-green-700'
                : project.difficulty === 'Intermediate'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {project.difficulty}
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Stars:</p>
          <p className="font-medium text-gray-900">⭐ {project.stars.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Beginner Friendly:</p>
          <p className={project.beginnerFriendly ? 'text-green-600 font-medium' : 'text-red-500 font-medium'}>
            {project.beginnerFriendly ? 'Yes' : 'No'}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">Technologies:</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.skills && project.skills.length > 0 && (
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Skills Required:</p>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs text-gray-600 bg-blue-50 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col gap-4">
        {project.projectAdmin && <ProjectAdmin project={project} />}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition-colors font-medium w-fit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
        <Link href="/projects" className="text-sm text-gray-500 hover:text-gray-700">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
