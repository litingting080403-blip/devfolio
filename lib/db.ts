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
      'E-Commerce Dashboard',
      'A full-stack e-commerce admin dashboard with real-time analytics, order management, and inventory tracking. Features interactive charts, role-based access control, and responsive design.',
      'Next.js, TypeScript, PostgreSQL, Prisma, Tailwind CSS, Chart.js',
      'https://placehold.co/600x400/1a1a2e/eee?text=E-Commerce+Dashboard',
      'https://example.com/demo1',
      'https://github.com/example/demo1',
      1
    );
    insertProject.run(
      'TaskFlow App',
      'A collaborative project management tool with Kanban boards, Gantt charts, and team chat. Real-time updates via WebSockets, file attachments, and third-party integrations with Slack and GitHub.',
      'React, Node.js, Socket.io, MongoDB, Express, Docker',
      'https://placehold.co/600x400/16213e/eee?text=TaskFlow+App',
      'https://example.com/demo2',
      'https://github.com/example/demo2',
      1
    );
    insertProject.run(
      'AI Content Generator',
      'An AI-powered content creation platform that generates blog posts, social media captions, and email newsletters. Built with OpenAI API integration and a custom prompt engineering interface.',
      'Next.js, Python, FastAPI, PostgreSQL, Redis, OpenAI API',
      'https://placehold.co/600x400/0f3460/eee?text=AI+Content+Gen',
      'https://example.com/demo3',
      'https://github.com/example/demo3',
      1
    );
    insertProject.run(
      'DevConnect',
      'A social platform for developers featuring project showcases, code reviews, and mentorship matching. Includes real-time notifications, markdown support, and a reputation system.',
      'Next.js, TypeScript, Prisma, PostgreSQL, NextAuth.js, Tailwind CSS',
      'https://placehold.co/600x400/533483/eee?text=DevConnect',
      'https://example.com/demo4',
      'https://github.com/example/demo4',
      1
    );

    const skills = [
      ['React', 'Frontend'], ['Next.js', 'Frontend'], ['TypeScript', 'Frontend'],
      ['Tailwind CSS', 'Frontend'], ['HTML/CSS', 'Frontend'], ['Redux', 'Frontend'],
      ['Node.js', 'Backend'], ['Express', 'Backend'], ['Python', 'Backend'],
      ['FastAPI', 'Backend'], ['PostgreSQL', 'Database'], ['MongoDB', 'Database'],
      ['Prisma', 'Database'], ['Redis', 'Database'], ['Docker', 'DevOps'],
      ['AWS', 'DevOps'], ['Git', 'DevOps'], ['CI/CD', 'DevOps'],
    ];
    for (const [name, category] of skills) {
      insertSkill.run(name, category);
    }
  });

  seed();
}

export default db;
