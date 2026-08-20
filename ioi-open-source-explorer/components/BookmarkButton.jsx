'use client';

import { useState, useEffect } from 'react';

const KEY = 'ioi-saved-projects';

function getSaved() {
  if (typeof window === 'undefined') return [];
  const s = localStorage.getItem(KEY);
  return s ? JSON.parse(s) : [];
}

export default function BookmarkButton({ projectId, isBookmarked, onToggle }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(getSaved().includes(projectId));
  }, [projectId]);

  const handle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const saved = getSaved();
    let next;
    if (active) {
      next = saved.filter((id) => id !== projectId);
    } else {
      next = [...saved, projectId];
    }
    localStorage.setItem(KEY, JSON.stringify(next));
    setActive(!active);
    onToggle?.(!active);
  };

  return (
    <button
      onClick={handle}
      title={active ? 'Remove bookmark' : 'Save project'}
      className={`text-lg transition-colors ${
        active ? 'text-[#e8dcc8]' : 'text-white/20 hover:text-white/50'
      }`}
    >
      {active ? '★' : '☆'}
    </button>
  );
}
