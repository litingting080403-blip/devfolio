'use client';

import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          TL
        </a>

        <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
          <a href="#skills" className="hover:text-indigo-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
          <a href="/admin" className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">
            Admin
          </a>
        </div>

        <button className="sm:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="sm:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-6 pb-4 flex flex-col gap-3 text-sm font-medium">
          <a href="#skills" onClick={() => setOpen(false)} className="py-2 hover:text-indigo-500">Skills</a>
          <a href="#projects" onClick={() => setOpen(false)} className="py-2 hover:text-indigo-500">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="py-2 hover:text-indigo-500">Contact</a>
          <a href="/admin" className="py-2 px-4 rounded-lg bg-indigo-500 text-white text-center">Admin</a>
        </div>
      )}
    </nav>
  );
}
