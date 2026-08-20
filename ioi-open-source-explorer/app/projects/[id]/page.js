export const generateStaticParams = async () => {
  const projects = [
    { id: '1', name: 'OpenSourceFeed' },
    { id: '2', name: 'BugBounty' },
    { id: '3', name: 'SkillTracker' },
    { id: '4', name: 'DataPulse' },
    { id: '5', name: 'DocuReady' },
    { id: '6', name: 'CoreEngine' },
    { id: '7', name: 'AuthGuard' },
    { id: '8', name: 'LearnHub' },
    { id: '9', name: 'API sandbox' },
    { id: '10', name: 'TestMaster' },
  ];
  return projects.map((project) => ({ id: project.id }));
};

export default function ProjectDetailPage({ params }) {
  const projectId = params?.id;

  // Simple project data lookup
  const projectData = {
    '1': {
      id: '1',
      name: 'OpenSourceFeed',
      description: 'A React-based platform for discovering trending open-source projects and contributions',
      domain: 'Frontend',
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      difficulty: 'Intermediate',
      stars: 2450,
      beginnerFriendly: true,
      githubUrl: 'https://github.com/opensource-ioi/opensource-feed',
      skills: ['React', 'TypeScript', 'API Integration', 'Responsive Design'],
    },
    '2': {
      id: '2',
      name: 'BugBounty',
      description: 'A full-stack application for tracking and managing software bugs with AI-powered prioritization',
      domain: 'Backend',
      technologies: ['Node.js', 'Go', 'Python', 'PostgreSQL'],
      difficulty: 'Advanced',
      stars: 3890,
      beginnerFriendly: false,
      githubUrl: 'https://github.com/opensource-ioi/bug-bounty',
      skills: ['Node.js', 'Go', 'Python', 'Database Design', 'AI/ML'],
    },
    '3': {
      id: '3',
      name: 'SkillTracker',
      description: 'A personal learning tracker built with Next.js for IOI students to monitor skill progression',
      domain: 'Frontend',
      technologies: ['Next.js', 'TypeScript', 'React', 'Prisma'],
      difficulty: 'Beginner',
      stars: 1120,
      beginnerFriendly: true,
      githubUrl: 'https://github.com/opensource-ioi/skill-tracker',
      skills: ['Next.js', 'TypeScript', 'Prisma ORM', 'CSS Modules'],
    },
    '4': {
      id: '4',
      name: 'DataPulse',
      description: 'A real-time data visualization dashboard for monitoring system metrics and analytics',
      domain: 'AI / ML',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'FastAPI'],
      difficulty: 'Advanced',
      stars: 4200,
      beginnerFriendly: false,
      githubUrl: 'https://github.com/opensource-ioi/datapulse',
      skills: ['Python', 'TensorFlow', 'Data Visualization', 'API Development'],
    },
    '5': {
      id: '5',
      name: 'DocuReady',
      description: 'A documentation generation tool that automates README creation and API documentation',
      domain: 'Documentation',
      technologies: ['JavaScript', 'Node.js', 'Shelljs', 'Markdown'],
      difficulty: 'Beginner',
      stars: 890,
      beginnerFriendly: true,
      githubUrl: 'https://github.com/opensource-ioi/docu-ready',
      skills: ['JavaScript', 'Node.js', 'Markdown Processing', 'CLI Tools'],
    },
    '6': {
      id: '6',
      name: 'CoreEngine',
      description: 'A high-performance computing library for numerical simulations and scientific computing',
      domain: 'Core Engine',
      technologies: ['C++', 'Python', 'CUDA', 'OpenMP'],
      difficulty: 'Advanced',
      stars: 5100,
      beginnerFriendly: false,
      githubUrl: 'https://github.com/opensource-ioi/core-engine',
      skills: ['C++', 'Parallel Computing', 'Numerical Methods', 'Optimization'],
    },
    '7': {
      id: '7',
      name: 'AuthGuard',
      description: 'A secure authentication middleware for Next.js applications with OAuth and JWT',
      domain: 'Backend',
      technologies: ['Next.js', 'Node.js', 'JWT', 'Passport.js'],
      difficulty: 'Intermediate',
      stars: 1750,
      beginnerFriendly: true,
      githubUrl: 'https://github.com/opensource-ioi/auth-guard',
      skills: ['Next.js', 'Node.js', 'Authentication', 'Security'],
    },
    '8': {
      id: '8',
      name: 'LearnHub',
      description: 'A collaborative learning platform for IOI students to share resources and track progress',
      domain: 'Frontend',
      technologies: ['React', 'TypeScript', 'Redux', 'Socket.io'],
      difficulty: 'Intermediate',
      stars: 3100,
      beginnerFriendly: true,
      githubUrl: 'https://github.com/opensource-ioi-learnhub/learnhub',
      skills: ['React', 'TypeScript', 'Redux', 'WebSockets'],
    },
    '9': {
      id: '9',
      name: 'API sandbox',
      description: 'A sandbox environment for testing and prototyping REST and GraphQL APIs quickly',
      domain: 'Backend',
      technologies: ['Go', 'Fiber', 'GraphQL', 'Docker'],
      difficulty: 'Beginner',
      stars: 1530,
      beginnerFriendly: true,
      githubUrl: 'https://github.com/opensource-ioi/api-sandbox',
      skills: ['Go', 'Fiber', 'GraphQL', 'Docker'],
    },
    '10': {
      id: '10',
      name: 'TestMaster',
      description: 'A comprehensive testing framework for JavaScript projects with CI/CD integration',
      domain: 'Documentation',
      technologies: ['JavaScript', 'Jest', 'Cypress', 'GitHub Actions'],
      difficulty: 'Intermediate',
      stars: 2050,
      beginnerFriendly: true,
      githubUrl: 'https://github.com/opensource-ioi/testmaster',
      skills: ['JavaScript', 'Jest', 'Cypress', 'CI/CD'],
    },
  }[projectId];

  if (!projectId || !projectData) {
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
            <a
              href="/projects"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Back to Projects
            </a>
          </div>
        </div>
      </div>
    );
  }

  const project = projectData;

  return (
    <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        {project.name}
      </h2>
      <p className="text-gray-600 text-sm mb-6 line-clamp-4">
        {project.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <p className="text-sm text-gray-500 mb-1">Domain:</p>
          <p className="font-medium text-gray-900">{project.domain}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Difficulty:</p>
          <p className={`font-medium ${project.difficulty.toLowerCase()}`}>
            {project.difficulty}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Stars:</p>
          <p className="font-medium text-gray-900">{project.stars}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Beginner Friendly:</p>
          <p className={project.beginnerFriendly ? 'text-green-600' : 'text-red-600'}>
            {project.beginnerFriendly ? 'Yes' : 'No'}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-2">Technologies:</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-2">Skills Required:</p>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          View on GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="-mr-1 inline align-middle h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M12 0l-1.46 1.46 1.42 1.42L16.74 8l6.06 6.06L8 16.74l-1.46 1.42L12 24l-12-12z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}