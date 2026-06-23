import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Software Engineer / DataOps Engineer",
    label: "Current Role",
    responsibilities: [
      "Airflow DAG monitoring",
      "Grafana dashboard monitoring",
      "Alert investigation and troubleshooting",
      "Snowflake data operations",
      "SQL troubleshooting",
      "Linux operations",
      "Workflow monitoring and automation"
    ]
  },
  {
    title: "L2 Support Engineer",
    label: "Previous Role",
    responsibilities: [
      "Active Directory user management",
      "MFA troubleshooting",
      "ServiceNow ticket handling",
      "User support and incident resolution",
      "Account unlocks and password resets"
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Operational experience across DataOps and technical support."
          description="Hands-on work with monitoring, troubleshooting, automation, user support, and production workflow reliability."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-indigo-300/60 to-transparent sm:block" />

          <div className="space-y-6">
            {roles.map((role) => (
              <article key={role.title} className="relative sm:pl-12">
                <span className="absolute left-0 top-7 hidden h-8 w-8 rounded-full border border-cyan-300/50 bg-ink shadow-glow sm:block" />
                <div className="glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    {role.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{role.title}</h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {role.responsibilities.map((responsibility) => (
                      <div key={responsibility} className="flex gap-3 rounded-xl border border-line bg-white/[0.03] p-3">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={18} />
                        <p className="text-sm leading-6 text-slate-300">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
