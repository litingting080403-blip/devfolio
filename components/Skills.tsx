interface Skill {
  id: number;
  name: string;
  category: string;
}

export function Skills({ skills }: { skills: Skill[] }) {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Tech Stack</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-center mb-12 max-w-lg mx-auto">
          Technologies I work with daily to build complete applications
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-colors">
              <h3 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <span
                      key={s.id}
                      className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium"
                    >
                      {s.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
