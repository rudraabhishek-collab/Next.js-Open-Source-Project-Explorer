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

    return matchesSearch && matchesStack && matchesTrack;
  });

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
          </div>

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
    </main>
  );
}