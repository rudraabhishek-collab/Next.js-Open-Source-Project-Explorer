import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between sm:flex-row sm items-center sm:justify-start">
        <div className="flex items-center gap-2">
          <Link href="/">
            <h1 className="text-xl font-semibold text-gray-800">IOI Explorer</h1>
          </Link>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
            Home
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-gray-900 font-medium">
            Projects
          </Link>
          <Link href="/saved" className="text-gray-600 hover:text-gray-900 font-medium">
            Saved
          </Link>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 font-medium"
            title="Join Community"
          >
            Join Community
          </a>
        </div>
        <div className="hidden sm:block flex items-center gap-4">
          {/* Mobile menu button will go here */}
        </div>
      </div>
    </nav>
  );
}