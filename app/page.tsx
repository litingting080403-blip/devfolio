import db from '@/lib/db';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const projects = db.prepare('SELECT * FROM projects WHERE featured = 1 ORDER BY createdAt DESC').all() as Array<{
    id: number; title: string; description: string; tech: string;
    imageUrl: string; demoUrl: string; githubUrl: string;
  }>;
  const skills = db.prepare('SELECT * FROM skills ORDER BY category, id').all() as Array<{
    id: number; name: string; category: string;
  }>;

  return (
    <>
      <Navbar />
      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}
