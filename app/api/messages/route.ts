import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  const messages = db.prepare('SELECT * FROM messages ORDER BY createdAt DESC').all();
  return NextResponse.json(messages);
}

export async function POST(request: NextRequest) {
  const { name, email, content } = await request.json();
  if (!name || !email || !content) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }
  db.prepare('INSERT INTO messages (name, email, content) VALUES (?, ?, ?)').run(name, email, content);
  return NextResponse.json({ success: true }, { status: 201 });
}
