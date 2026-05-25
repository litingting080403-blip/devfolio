import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  const skills = db.prepare('SELECT * FROM skills ORDER BY category, id').all();
  return NextResponse.json(skills);
}
