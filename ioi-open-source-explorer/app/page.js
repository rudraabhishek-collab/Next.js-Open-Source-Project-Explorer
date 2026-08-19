import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Projects</h2>
        <ProjectList projects={[
          {
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
            projectAdmin: {
              name: 'Alice Chen',
              github: 'https://github.com/alicechen',
              linkedin: 'https://linkedin.com/in/alicechen',
            },
          },
          {
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
            projectAdmin: {
              name: 'Bob Sharma',
              github: 'https://github.com/bobsharma',
              linkedin: 'https://linkedin.com/in/bobsharma',
            },
          },
          {
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
            projectAdmin: {
              name: 'Carol Lim',
              github: 'https://github.com/carollim',
              linkedin: 'https://linkedin.com/in/carollim',
            },
          },
        ]} />
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