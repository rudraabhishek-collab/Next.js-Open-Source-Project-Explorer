export default function SearchBar({ onSearch }) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search projects..."
        className="flex-1 px-3 py-2 border rounded"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
    </div>
  );
}