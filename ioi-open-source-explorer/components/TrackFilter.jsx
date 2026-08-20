'use client';

export default function TrackFilter({ tracks, selectedTrack, onTrackChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tracks.map((track) => (
        <button
          key={track}
          onClick={() => onTrackChange(track)}
          className={`text-sm px-4 py-1.5 rounded-full border font-medium transition-colors ${
            selectedTrack === track
              ? 'bg-[#e8dcc8] text-black border-[#e8dcc8]'
              : 'border-white/[0.12] text-white/50 hover:border-white/25 hover:text-white/75 bg-transparent'
          }`}
        >
          {track}
        </button>
      ))}
    </div>
  );
}
