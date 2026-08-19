import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white p-8 rounded mb-8 shadow">
      <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">IOI Open-Source Explorer</p>
      <h1 className="text-4xl font-bold mb-6">
        Discover. Contribute. Grow with Open-Source.
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        The premier open-source project explorer built for IOI students. Discover projects, find beginner-friendly issues, and start making meaningful contributions.
      </p>
      <div>
        <Link
          href="/projects"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded hover:bg-blue-700 transition-colors"
        >
          Explore Projects
        </Link>
      </div>
    </section>
  );
}