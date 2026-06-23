import { Code, Database, GitBranch, Gauge, Server, Settings, Snowflake, Terminal, Wind } from "lucide-react";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "Airflow", icon: Wind },
  { name: "Grafana", icon: Gauge },
  { name: "Snowflake", icon: Snowflake },
  { name: "SQL", icon: Database },
  { name: "Linux", icon: Terminal },
  { name: "Python", icon: Code },
  { name: "AWS", icon: Server },
  { name: "Docker", icon: Settings },
  { name: "React", icon: Code },
  { name: "GitHub", icon: GitBranch }
];

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to build, automate, and monitor."
          description="A focused technical stack for modern web development, data operations, cloud workflows, and reliable delivery."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group rounded-2xl border border-line bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10"
            >
              <Icon className="mb-5 text-cyan-300 transition group-hover:scale-110" size={28} />
              <h3 className="text-lg font-semibold text-white">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
