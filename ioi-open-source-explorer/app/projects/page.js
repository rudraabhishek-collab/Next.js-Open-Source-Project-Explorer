'use client';

import SearchBar from '../../components/SearchBar';
import StackFilter from '../../components/StackFilter';
import TrackFilter from '../../components/TrackFilter';
import ProjectList from '../../components/ProjectList';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedStack, setSelectedStack] = React.useState('All');
  const [selectedTrack, setSelectedTrack] = React.useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = React.useState('All');
  const [selectedBeginnerFriendly, setSelectedBeginnerFriendly] = React.useState('All');

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStack =
      selectedStack === 'All' ||
      project.technologies.some((tech) => tech.toLowerCase() === selectedStack.toLowerCase());

    const matchesTrack =
      selectedTrack === 'All' ||
      project.domain.toLowerCase() === selectedTrack.toLowerCase();

    const matchesDifficulty =
      selectedDifficulty === 'All' ||
      project.difficulty === selectedDifficulty;

    const matchesBeginnerFriendly =
      selectedBeginnerFriendly === 'All' ||
      project.beginnerFriendly === (selectedBeginnerFriendly === 'Beginner Friendly');

    return (
      matchesSearch &&
      matchesStack &&
      matchesTrack &&
      matchesDifficulty &&
      matchesBeginnerFriendly
    );
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedStack('All');
    setSelectedTrack('All');
    setSelectedDifficulty('All');
    setSelectedBeginnerFriendly('All');
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Explore Open-Source Projects
            </h1>
            <p className="text-gray-600">
              Browse approved projects, discover technologies, and find a project that matches your skills.
            </p>
          </div>

          <div className="mt-4 sm:mt-0 w-full sm:w-1/2">
            <SearchBar
              placeholder="Search projects, technologies, or requirements..."
              onSearch={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          <div className="sm:col-span-2 sm:grid-cols-3 gap-6">
            <TrackFilter
              tracks={['All', 'Core Engine', 'Frontend', 'Backend', 'AI / ML']}
              onTrackChange={(e) => setSelectedTrack(e.target.value)}
            />
            <StackFilter
              stacks={['React', 'TypeScript', 'JavaScript', 'Node.js', 'Next.js', 'Go', 'Python']}
              onStackChange={(e) => setSelectedStack(e.target.value)}
            />
            <div className="sm:col-span-2">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => setSelectedDifficulty('All')}
                  className={`px-3 py-1 text-sm rounded border ${
                    selectedDifficulty === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'border-gray-400'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedDifficulty('Beginner')}
                  className={`px-3 py-1 text-sm rounded border ${
                    selectedDifficulty === 'Beginner' ? 'bg-blue-600 text-white' : 'border-gray-400'
                  }`}
                >
                  Beginner
                </button>
                <button
                  onClick={() => setSelectedDifficulty('Intermediate')}
                  className={`px-3 py-1 text-sm rounded border ${
                    selectedDifficulty === 'Intermediate' ? 'bg-blue-600 text-white' : 'border-gray-400'
                  }`}
                >
                  Intermediate
                </button>
                <button
                  onClick={() => setSelectedDifficulty('Advanced')}
                  className={`px-3 py-1 text-sm rounded border ${
                    selectedDifficulty === 'Advanced' ? 'bg-blue-600 text-white' : 'border-gray-400'
                  }`}
                >
                  Advanced
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedBeginnerFriendly('All')}
                  className={`px-3 py-1 text-sm rounded border ${
                    selectedBeginnerFriendly === 'All' ? 'bg-blue-600 text-white' : 'border-gray-400'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedBeginnerFriendly('Beginner Friendly')}
                  className={`px-3 py-1 text-sm rounded border ${
                    selectedBeginnerFriendly === 'Beginner Friendly' ? 'bg-blue-600 text-white' : 'border-gray-400'
                  }`}
                >
                  Beginner Friendly
                </button>
                <button
                  onClick={() => setSelectedBeginnerFriendly('Not Beginner Friendly')}
                  className={`px-3 py-1 text-sm rounded border ${
                    selectedBeginnerFriendly === 'Not Beginner Friendly' ? 'bg-blue-600 text-white' : 'border-gray-400'
                  }`}
                >
                  Not Beginner Friendly
                </button>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <button
              onClick={clearFilters}
              className="w-full py-2 px-4 mt-4 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          <div className="sm:col-span-2 sm:grid-cols-3 gap-6">
            {filteredProjects.length === 0 ? (
              <div className="col-span-1 sm:col-span-2 text-center py-12">
                <p className="text-gray-600 text-lg">
                  No projects found
                </p>
                <p className="text-gray-500 mt-2">
                  Try changing your search or filters.
                </p>
              </div>
            ) : (
              <ProjectList projects={filteredProjects} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}