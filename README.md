# Tarun Sai Portfolio

A modern, responsive personal portfolio website for Tarun Sai, built with React, Vite, and Tailwind CSS.

## Features

- Dark mode by default
- Single page application
- Smooth scrolling navigation
- Responsive sections for hero, about, skills, services, projects, and contact
- Modern gradients, animations, and professional developer-focused styling
- SEO-friendly HTML metadata
- Production-ready Vite build setup

## Tech Stack

- React
- Tailwind CSS
- Vite
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
tarun-sai-portfolio/
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  eslint.config.js
  src/
    App.jsx
    main.jsx
    index.css
    components/
      About.jsx
      Contact.jsx
      Footer.jsx
      Hero.jsx
      Navbar.jsx
      Projects.jsx
      SectionHeading.jsx
      Services.jsx
      Skills.jsx
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Open [Vercel](https://vercel.com) and select **Add New Project**.
3. Import the GitHub repository.
4. Use these settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

## Customization

Update contact links, email address, project links, and project images in the components inside `src/components`.
