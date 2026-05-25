import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  const projects = db.prepare('SELECT * FROM projects ORDER BY featured DESC, createdAt DESC').all();
  return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
  const { title, description, tech, imageUrl, demoUrl, githubUrl, featured } = await request.json();
  const stmt = db.prepare(
    'INSERT INTO projects (title, description, tech, imageUrl, demoUrl, githubUrl, featured) VALUES (?, ?, ?, ?, ?, ?, ?)'
  );
  const result = stmt.run(title, description, tech, imageUrl, demoUrl, githubUrl, featured ? 1 : 0);
  return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 });
}
