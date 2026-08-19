export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-semibold">IOI Explorer</h1>
        <div className="hidden md:flex items-center gap-6">
          <a href="/projects" className="text-gray-600 hover:text-blue-600">Projects</a>
          <a href="/saved" className="text-gray-600 hover:text-blue-600">Saved</a>
        </div>
      </div>
    </nav>
  );
}