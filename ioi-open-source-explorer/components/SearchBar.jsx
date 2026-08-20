'use client';

export default function SearchBar({ onSearch, value }) {
  return (
    <div className="relative flex-1">
      <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
        <svg className="w-3.5 h-3.5 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search projects, tracks, or requirements..."
        value={value || ''}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full bg-[#161616] border border-white/[0.08] rounded-lg pl-9 pr-4 py-2.5 text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
      />
      {value && (
        <button
          onClick={() => onSearch('')}
          className="absolute inset-y-0 right-3 flex items-center text-white/25 hover:text-white/50 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
