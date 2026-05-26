export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Tingting Li. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/litingting080403-blip" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/%E5%A9%B7%E5%A9%B7-%E6%9D%8E-a3943540a/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
