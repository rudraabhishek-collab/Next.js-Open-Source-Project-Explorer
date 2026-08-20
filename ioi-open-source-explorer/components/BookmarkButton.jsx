'use client';

import { useState, useEffect } from 'react';

const SAVED_PROJECTS_KEY = 'ioi-saved-projects';

function getSavedProjects(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  const stored = localStorage.getItem(SAVED_PROJECTS_KEY);
  return stored ? new Set(JSON.parse(stored)) : new Set();
}

function saveProjects(projects: Set<string>) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(SAVED_PROJECTS_KEY, JSON.stringify(Array.from(projects)));
  }
}

export default function BookmarkButton({ projectId, isBookmarked, onToggle }) {
  const [localIsBookmarked, setLocalIsBookmarked] = useState(isBookmarked);

  useEffect(() => {
    const saved = getSavedProjects();
    setLocalIsBookmarked(saved.has(projectId));
  }, [projectId]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = !localIsBookmarked;
    setLocalIsBookmarked(newState);
    const saved = getSavedProjects();
    if (newState) {
      saved.add(projectId);
    } else {
      saved.delete(projectId);
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