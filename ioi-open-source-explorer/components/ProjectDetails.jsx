'use client';

import BookmarkButton from './BookmarkButton';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectDetails({ project }) {
  const [isBookmarked, setIsBookmarked] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = JSON.parse(localStorage.getItem('ioi-saved-projects') || '[]');
    return saved.includes(project.id);
  });

  const toggleBookmark = (value: boolean) => setIsBookmarked(value);
  return (
    <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        {project.name}
      </h2>
      <p className="text-gray-600 text-sm mb-6 line-clamp-4">
        {project.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <p className="text-sm text-gray-500 mb-1">Domain:</p>
          <p className="font-medium text-gray-900">{project.domain}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Difficulty:</p>
          <p className={`font-medium ${project.difficulty.toLowerCase()}`}>
            {project.difficulty}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Stars:</p>
          <p className="font-medium text-gray-900">{project.stars}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Beginner Friendly:</p>
          <p className={project.beginnerFriendly ? 'text-green-600' : 'text-red-600'}>
            {project.beginnerFriendly ? 'Yes' : 'No'}
          </p>
        </div>
      </div>

      <div className="mb-8">
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

      <div>
        <p className="text-sm text-gray-500 mb-2">Skills Required:</p>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <BookmarkButton
          projectId={project.id}
          isBookmarked={isBookmarked}
          onToggle={toggleBookmark}
        />
        <ProjectAdmin project={project} />
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          View on GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="-mr-1 inline align-middle h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M12 0l-1.46 1.46 1.42 1.42L16.74 8l6.06 6.06L8 16.74l-1.46 1.42L12 24l-12-12z"
            />
          </svg>
        </a>
      </div>
  );
}