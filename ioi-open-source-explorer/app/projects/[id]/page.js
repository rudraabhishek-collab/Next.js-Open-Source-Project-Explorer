import ProjectDetails from '../../components/ProjectDetails';

export default function ProjectDetailPage({ params }) {
  const projectId = params?.id;

  if (!projectId) {
    return <ProjectNotFound />;
  }

  const projectData = projects.find((p) => p.id === projectId);

  if (!projectData) {
    return <ProjectNotFound />;
  }

  return <ProjectDetails project={projectData} />;
}

function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Project not found
        </h1>
        <p className="text-gray-600 mb-6">
          The project you're looking for does not exist.
        </p>
        <div>
          <Link
            href="/projects"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}