import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-medium mb-2">Project Alpha</h3>
            <p className="text-gray-500 text-sm">A modern web framework</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-medium mb-2">Project Beta</h3>
            <p className="text-gray-500 text-sm">AI-powered tooling</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-medium mb-2">Project Gamma</h3>
            <p className="text-gray-500 text-sm">Documentation hub</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 bg-white">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Core Engine</p>
            <p className="text-lg font-medium">1,242</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Frontend</p>
            <p className="text-lg font-medium">976</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Backend</p>
            <p className="text-lg font-medium">834</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">AI / ML</p>
            <p className="text-lg font-medium">312</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Documentation</p>
            <p className="text-lg font-medium">547</p>
          </div>
        </div>
      </section>
    </main>
  );
}