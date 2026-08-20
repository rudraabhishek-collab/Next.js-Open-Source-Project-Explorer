import Link from 'next/link';
import BookmarkButton from './BookmarkButton';

'use client';

export default function ProjectCard({ project }) {
  const [isBookmarked, setIsBookmarked] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = JSON.parse(localStorage.getItem('ioi-saved-projects') || '[]');
    return saved.includes(project.id);
  });

  const toggleBookmark = (value) => setIsBookmarked(value);

  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium">{project.name}</h3>
        <span className="text-sm text-gray-500">{project.id}</span>
      </div>
      <p className="text-gray-600 text-sm line-clamp-3 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Difficulty:</span>
          <span className={`text-sm font-medium ${project.difficulty.toLowerCase()}`}>
            {project.difficulty}
          </span>
        </div>
        <span className="text-xs text-gray-500">
          {project.stars} ★
        </span>
      </div>
      <div className="flex items-center">
        <span className="text-xs text-gray-400">
          {project.beginnerFriendly ? 'Beginner-friendly' : ''}
        </span>
      </div>
      <div className="mt-4">
        <Link
          href={`/projects/${project.id}`}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          View Project
        </Link>
        <BookmarkButton
          projectId={project.id}
          isBookmarked={isBookmarked}
          onToggle={toggleBookmark}
        />
      </div>
    </div>
  );
}