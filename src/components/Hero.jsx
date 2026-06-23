import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  ServerCog,
} from "lucide-react";

const links = {
  github: "https://github.com/tarunsaidev-tech",
  linkedin: "https://www.linkedin.com/in/tarun-sai-mutyala-a494b01a0/",
  email: "mailto:tarunsai28123@gmail.com",
};

const highlights = [
  { icon: Code2, label: "AI-assisted websites" },
  { icon: ServerCog, label: "Automation workflows" },
  { icon: Database, label: "DataOps systems" },
  { icon: Cloud, label: "Cloud technologies" },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="mb-5 inline-flex max-w-full flex-wrap rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            Software Engineer | DataOps Engineer
          </p>

          <h1 className="max-w-full break-words text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
            Hi, I&apos;m <span className="gradient-text">Tarun Sai</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            DataOps Engineer specializing in monitoring, automation, cloud
            technologies, and AI-assisted web development.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              View Projects <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-300/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={links.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:-translate-y-0.5 hover:text-cyan-300"
            >
              <Github size={22} />
            </a>

            <a
              href={links.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:-translate-y-0.5 hover:text-cyan-300"
            >
              <Linkedin size={22} />
            </a>

            <a
              href={links.email}
              aria-label="Email"
              className="text-slate-400 transition hover:-translate-y-0.5 hover:text-cyan-300"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-indigo-400/20 to-fuchsia-400/20 blur-2xl" />

          <div className="glass-panel relative rounded-3xl p-6 shadow-card">
            <div className="mb-6 flex items-center justify-between border-b border-line pb-5">
              <div>
                <p className="text-sm text-slate-400">Current Focus</p>
                <p className="mt-1 text-xl font-bold text-white">
                  Modern Web + DataOps
                </p>
              </div>

              <div className="h-12 w-12 rounded-2xl bg-cyan-300/15 p-3 text-cyan-200">
                <ServerCog />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-line bg-white/[0.03] p-5"
                >
                  <Icon className="mb-4 text-cyan-300" size={26} />
                  <p className="font-semibold text-white">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950/70 p-5">
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <pre className="max-w-full overflow-x-auto whitespace-pre-wrap break-words text-sm leading-7 text-slate-300">
                <code>{`const engineer = {
  name: "Tarun Sai",
  role: "DataOps Engineer",
  stack: ["Airflow", "Grafana", "Snowflake", "SQL", "Linux", "AWS"],
  focus: "Monitoring, Automation & AI-Assisted Development"
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;