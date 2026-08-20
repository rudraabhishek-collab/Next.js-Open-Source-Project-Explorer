'use client';

import { useState, useEffect } from 'react';

const SAVED_PROJECTS_KEY = 'ioi-saved-projects';

function getSavedProjects() {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(SAVED_PROJECTS_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveProjects(projects) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(SAVED_PROJECTS_KEY, JSON.stringify(projects));
  }
}

export default function BookmarkButton({ projectId, isBookmarked, onToggle }) {
  const [localIsBookmarked, setLocalIsBookmarked] = useState(isBookmarked);

  useEffect(() => {
    const saved = getSavedProjects();
    setLocalIsBookmarked(saved.includes(projectId));
  }, [projectId]);

  const handleClick = (e) => {
    e.stopPropagation();
    const newState = !localIsBookmarked;
    setLocalIsBookmarked(newState);
    const saved = getSavedProjects();
    if (newState) {
      saved.push(projectId);
    } else {
      const index = saved.indexOf(projectId);
      if (index > -1) saved.splice(index, 1);
    }
    saveProjects(saved);
    onToggle?.(newState);
  };

  return (
    <button
      onClick={handleClick}
      className="text-gray-400 hover:text-yellow-500 p-1 rounded transition-colors"
      title={localIsBookmarked ? 'Remove bookmark' : 'Save bookmark'}
    >
      {localIsBookmarked ? '★' : '☆'}
    </button>
  );
}