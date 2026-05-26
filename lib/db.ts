import Database from 'better-sqlite3';
import path from 'path';

const dbPath = process.env.VERCEL ? '/tmp/data.db' : path.join(process.cwd(), 'data.db');

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    tech TEXT NOT NULL,
    imageUrl TEXT NOT NULL DEFAULT '',
    demoUrl TEXT NOT NULL DEFAULT '',
    githubUrl TEXT NOT NULL DEFAULT '',
    featured INTEGER NOT NULL DEFAULT 1,
    createdAt TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    content TEXT NOT NULL,
    createdAt TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS skills (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'Frontend'
  );
`);

const seedProjects = db.prepare('SELECT COUNT(*) as count FROM projects').get() as { count: number };
if (seedProjects.count === 0) {
  const insertProject = db.prepare(
    'INSERT INTO projects (title, description, tech, imageUrl, demoUrl, githubUrl, featured) VALUES (?, ?, ?, ?, ?, ?, ?)'
  );
  const insertSkill = db.prepare('INSERT INTO skills (name, category) VALUES (?, ?)');

  const seed = db.transaction(() => {
    insertProject.run(
      'DevFolio - Portfolio Site',
      'A personal developer portfolio built with Next.js and SQLite. Features a responsive landing page, dynamic project showcase, contact form with database storage, and an admin dashboard for content management.',
      'Next.js, TypeScript, Tailwind CSS, SQLite, Vercel',
      'https://placehold.co/600x400/6366f1/fff?text=DevFolio',
      'https://devfolio-silk-two.vercel.app',
      'https://github.com/litingting080403-blip/devfolio',
      1
    );
    insertProject.run(
      'Weather Dashboard',
      'A real-time weather app with city search, current conditions, and 5-day forecast. Uses free Open-Meteo API — no API key needed. Features geolocation auto-detect and responsive design.',
      'Next.js, TypeScript, Tailwind CSS, Open-Meteo API, Vercel',
      'https://placehold.co/600x400/06b6d4/fff?text=Weather+Dashboard',
      'https://weather-app-pi-brown-85.vercel.app',
      'https://github.com/litingting080403-blip/weather-app',
      1
    );
    insertProject.run(
      'TaskFlow - Task Manager',
      'A full-stack task management app with user login, task CRUD, drag-and-drop sorting, and category filters. Tasks persist in PostgreSQL with a REST API backend.',
      'Next.js, TypeScript, Prisma, PostgreSQL, NextAuth.js, Tailwind CSS',
      'https://placehold.co/600x400/8b5cf6/fff?text=TaskFlow',
      'https://taskflow-demo.vercel.app',
      'https://github.com/litingting080403-blip/taskflow',
      1
    );
    insertProject.run(
      'Markdown Blog Platform',
      'A blog that renders Markdown articles with code syntax highlighting. Features dark mode toggle, SEO-friendly pages, and a simple admin interface for writing and publishing posts.',
      'Next.js, TypeScript, MDX, Tailwind CSS, Vercel',
      'https://placehold.co/600x400/ec4899/fff?text=Markdown+Blog',
      'https://blog-demo.vercel.app',
      'https://github.com/litingting080403-blip/blog',
      1
    );

    const skills = [
      ['React', 'Frontend'], ['Next.js', 'Frontend'], ['TypeScript', 'Frontend'],
      ['Tailwind CSS', 'Frontend'], ['HTML/CSS', 'Frontend'],
      ['Node.js', 'Backend'], ['Express', 'Backend'],
      ['PostgreSQL', 'Database'], ['MongoDB', 'Database'], ['Prisma', 'Database'],
      ['Git', 'DevOps'], ['Vercel', 'DevOps'], ['Docker', 'DevOps'],
      ['REST APIs', 'Backend'], ['GraphQL', 'Backend'],
    ];
    for (const [name, category] of skills) {
      insertSkill.run(name, category);
    }
  });

  seed();
}

export default db;
