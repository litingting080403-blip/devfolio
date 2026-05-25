import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { title, description, tech, imageUrl, demoUrl, githubUrl, featured } = await request.json();
  db.prepare(
    'UPDATE projects SET title=?, description=?, tech=?, imageUrl=?, demoUrl=?, githubUrl=?, featured=? WHERE id=?'
  ).run(title, description, tech, imageUrl, demoUrl, githubUrl, featured ? 1 : 0, id);
  return NextResponse.json({ success: true });
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  db.prepare('DELETE FROM projects WHERE id=?').run(id);
  return NextResponse.json({ success: true });
}
