import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const strengths = [
  "Data Operations and monitoring experience",
  "Automation-first engineering mindset",
  "Technical support and production issue analysis",
  "Cloud-ready development practices"
];

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering reliable systems and clean digital experiences."
          description="I combine software engineering, DataOps, automation, and technical support experience to build practical solutions that are easy to operate and maintain."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-2xl p-6">
            <p className="text-lg leading-8 text-slate-300">
              Software Engineer with experience in Data Operations, Monitoring, Automation, and
              Technical Support. I enjoy turning business requirements into polished web
              experiences and dependable backend workflows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div key={strength} className="flex gap-3 rounded-2xl border border-line bg-white/[0.03] p-5">
                <CheckCircle2 className="mt-1 shrink-0 text-cyan-300" size={22} />
                <p className="font-medium leading-7 text-slate-200">{strength}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 rounded-2xl border border-line bg-slate-900/50 p-6 text-center text-slate-300">
          Expertise in Linux, SQL, Airflow, Grafana, Snowflake, AWS, Docker, and Python.
        </p>
      </div>
    </section>
  );
}

export default About;
