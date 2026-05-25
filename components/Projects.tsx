interface Project {
  id: number;
  title: string;
  description: string;
  tech: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
}

export function Projects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <section id="projects" className="py-24 px-6 text-center">
        <p className="text-zinc-500">No projects yet.</p>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-center mb-12 max-w-lg mx-auto">
          Full-stack applications showcasing my development workflow
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all"
            >
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-indigo-500/40">{project.title[0]}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.split(',').map((t) => (
                    <span key={t.trim()} className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                      {t.trim()}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.demoUrl} className="text-sm font-medium text-indigo-500 hover:text-indigo-600 transition-colors">
                    Live Demo →
                  </a>
                  <a href={project.githubUrl} className="text-sm font-medium text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
