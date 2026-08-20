export default function SearchBar({ onSearch }) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search projects, technologies, or requirements..."
        onChange={(e) => onSearch(e.target.value)}
        className="flex-1 px-3 py-2 border rounded"
      />
      <button
        onClick={() => {}}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Search
      </button>
    </div>
  );
}