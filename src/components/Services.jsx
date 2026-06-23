import { Bot, Cloud, Gauge, Globe2, LayoutTemplate, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "AI-Assisted Website Development",
    icon: Bot,
    description: "Fast, polished websites built with modern AI-assisted development workflows."
  },
  {
    title: "Portfolio Website Development",
    icon: Globe2,
    description: "Modern personal portfolios that present skills, projects, and experience clearly."
  },
  {
    title: "Business Landing Pages",
    icon: LayoutTemplate,
    description: "Focused, responsive landing pages for campaigns, products, and lead generation."
  },
  {
    title: "DataOps Monitoring Solutions",
    icon: Gauge,
    description: "Monitoring-focused solutions for alerts, workflow health, dashboards, and operations."
  },
  {
    title: "Automation Workflows",
    icon: Workflow,
    description: "Reliable automation for repeatable workflows, operational tasks, and support processes."
  },
  {
    title: "Cloud Technology Solutions",
    icon: Cloud,
    description: "Cloud-aware implementation support for scalable, maintainable digital systems."
  }
];

function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Practical web services for growing digital needs."
          description="From launch-ready websites to ongoing maintenance, I help turn ideas into professional online experiences."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <article key={title} className="glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
