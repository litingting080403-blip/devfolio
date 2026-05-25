'use client';

import { useState, useEffect, FormEvent } from 'react';

interface Project {
  id: number; title: string; description: string; tech: string;
  imageUrl: string; demoUrl: string; githubUrl: string; featured: number;
}
interface Message {
  id: number; name: string; email: string; content: string; createdAt: string;
}

type Tab = 'projects' | 'messages';

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [editing, setEditing] = useState<Project | null>(null);
  const [form, setForm] = useState({ title: '', description: '', tech: '', imageUrl: '', demoUrl: '', githubUrl: '', featured: true });

  useEffect(() => {
    if (tab === 'projects') fetchProjects();
    else fetchMessages();
  }, [tab]);

  const fetchProjects = async () => {
    const res = await fetch('/api/projects');
    setProjects(await res.json());
  };
  const fetchMessages = async () => {
    const res = await fetch('/api/messages');
    setMessages(await res.json());
  };

  const resetForm = () => {
    setForm({ title: '', description: '', tech: '', imageUrl: '', demoUrl: '', githubUrl: '', featured: true });
    setEditing(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (editing) {
      await fetch(`/api/projects/${editing.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    resetForm();
    fetchProjects();
  };

  const handleEdit = (p: Project) => {
    setEditing(p);
    setForm({ title: p.title, description: p.description, tech: p.tech, imageUrl: p.imageUrl, demoUrl: p.demoUrl, githubUrl: p.githubUrl, featured: p.featured === 1 });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this project?')) return;
    await fetch(`/api/projects/${id}`, { method: 'DELETE' });
    fetchProjects();
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <a href="/" className="text-sm text-indigo-500 hover:text-indigo-600">← Back to Site</a>
        </div>

        <div className="flex gap-2 mb-6">
          <button onClick={() => setTab('projects')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === 'projects' ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900' : 'bg-zinc-100 dark:bg-zinc-800'}`}>
            Projects ({projects.length})
          </button>
          <button onClick={() => setTab('messages')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === 'messages' ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900' : 'bg-zinc-100 dark:bg-zinc-800'}`}>
            Messages ({messages.length})
          </button>
        </div>

        {tab === 'projects' && (
          <>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">{editing ? 'Edit Project' : 'Add Project'}</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required className="px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required rows={3} className="px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" />
                <input placeholder="Tech stack (comma separated)" value={form.tech} onChange={(e) => setForm({ ...form, tech: e.target.value })} required className="px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input placeholder="Image URL" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} className="px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <input placeholder="Demo URL" value={form.demoUrl} onChange={(e) => setForm({ ...form, demoUrl: e.target.value })} className="px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <input placeholder="GitHub URL" value={form.githubUrl} onChange={(e) => setForm({ ...form, githubUrl: e.target.value })} className="px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="rounded" />
                  Featured on homepage
                </label>
                <div className="flex gap-2">
                  <button type="submit" className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:opacity-90 transition-opacity">
                    {editing ? 'Update' : 'Create'}
                  </button>
                  {editing && (
                    <button type="button" onClick={resetForm} className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-medium">
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-4">
              {projects.map((p) => (
                <div key={p.id} className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{p.title}</h3>
                    <p className="text-sm text-zinc-500 truncate">{p.tech}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button onClick={() => handleEdit(p)} className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">Edit</button>
                    <button onClick={() => handleDelete(p.id)} className="px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/30 text-red-600 text-sm font-medium hover:bg-red-100 dark:hover:bg-red-950/50 transition-colors">Delete</button>
                  </div>
                </div>
              ))}
              {projects.length === 0 && <p className="text-center text-zinc-500 py-8">No projects yet. Add one above.</p>}
            </div>
          </>
        )}

        {tab === 'messages' && (
          <div className="flex flex-col gap-3">
            {messages.map((m) => (
              <div key={m.id} className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-semibold">{m.name}</span>
                    <span className="text-sm text-zinc-500 ml-2">{m.email}</span>
                  </div>
                  <span className="text-xs text-zinc-400">{new Date(m.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap">{m.content}</p>
              </div>
            ))}
            {messages.length === 0 && <p className="text-center text-zinc-500 py-8">No messages yet.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
