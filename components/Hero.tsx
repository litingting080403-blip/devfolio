export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/50 text-sm text-indigo-600 dark:text-indigo-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Open to Remote Work
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
          Full-Stack Developer
          <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Building Modern Web Apps
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I build responsive full-stack applications with React, Next.js, and Node.js.
          Passionate about clean code, modern UI, and turning ideas into working products.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 font-medium hover:border-indigo-500 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-sm text-zinc-500 dark:text-zinc-500">
          <div className="text-center">
            <div className="text-2xl font-bold text-zinc-900 dark:text-white">React</div>
            <div>Frontend</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-zinc-900 dark:text-white">Node.js</div>
            <div>Backend</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-zinc-900 dark:text-white">SQL</div>
            <div>Database</div>
          </div>
        </div>
      </div>
    </section>
  );
}
