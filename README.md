# DevFolio — Full-Stack Developer Portfolio

A modern full-stack portfolio site built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **SQLite**. Features a public portfolio page and an admin dashboard for content management.

## Features

- Responsive single-page portfolio with smooth scroll navigation
- Dynamic project showcase with tech stack tags
- Skills section organized by category (Frontend, Backend, Database, DevOps)
- Working contact form with SQLite storage
- Admin dashboard for CRUD management of projects
- Admin inbox to view contact messages
- Dark mode support
- Fully typed with TypeScript

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Database | SQLite (better-sqlite3) |
| Deployment | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- **Portfolio** — `/`
- **Admin** — `/admin`

## Project Structure

```
├── app/
│   ├── page.tsx              # Public landing page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── admin/page.tsx        # Admin dashboard (client)
│   └── api/
│       ├── projects/         # Projects CRUD
│       ├── messages/         # Contact form storage
│       └── skills/           # Skills data
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/
    └── db.ts                 # SQLite setup + seed data
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | List all projects |
| POST | `/api/projects` | Create a project |
| PUT | `/api/projects/[id]` | Update a project |
| DELETE | `/api/projects/[id]` | Delete a project |
| GET | `/api/skills` | List all skills |
| POST | `/api/messages` | Submit contact form |
| GET | `/api/messages` | View messages (admin) |
