export default function ProjectAdmin({ project }) {
  return (
    <div className="mt-6 pt-6 border-t border-gray-200">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-600">Project Admin:</span>
        <div>
          <a
            href={project.projectAdmin.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            GitHub: {project.projectAdmin.name}
          </a>
          <br />
          <a
            href={project.projectAdmin.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            LinkedIn: {project.projectAdmin.name}
          </a>
        </div>
      </div>
    </div>
  );
}