import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Airflow Monitoring Dashboard",
    description: "Monitoring and troubleshooting Airflow DAG workflows and data pipelines.",
    tags: ["Airflow", "Python", "Linux"]
  },
  {
    title: "DataOps Monitoring Solution",
    description: "Monitoring data operations, alerts, and workflow health.",
    tags: ["Grafana", "SQL", "Snowflake"]
  },
  {
    title: "Personal Portfolio Website",
    description: "Modern responsive portfolio website showcasing projects and experience.",
    tags: ["React", "Tailwind CSS"]
  },
  {
    title: "AI-Assisted Business Website",
    description: "Business website built using AI-assisted development workflows.",
    tags: ["React", "AI Tools", "Tailwind CSS"]
  }
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work and sample builds."
          description="A few representative projects showing frontend development, practical product thinking, and cloud-aware engineering."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="overflow-hidden rounded-2xl border border-line bg-slate-900/70 shadow-card transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-400/20 via-indigo-400/15 to-fuchsia-400/20">
                <div className="absolute inset-6 rounded-2xl border border-white/10 bg-white/[0.03]" />
                <p className="relative text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
                  Project 0{index + 1}
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 min-h-24 leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="https://github.com/tarunsaidev-tech"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:bg-cyan-300/10"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href="#home"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
