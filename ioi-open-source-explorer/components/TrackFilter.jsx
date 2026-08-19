export default function TrackFilter({ tracks, onTrackChange }) {
  return (
    <div>
      <span className="text-sm text-gray-600 mr-2">Track:</span>
      <button className="mx-1 px-2 py-1 text-sm rounded hover:bg-gray-200">All</button>
    </div>
  );
}