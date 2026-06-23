import { Github, Linkedin, Mail } from "lucide-react";

const links = {
  github: "https://github.com/tarunsaidev-tech",
  linkedin: "https://www.linkedin.com/in/tarun-sai-mutyala-a494b01a0/",
  email: "mailto:tarunsai28123@gmail.com"
};

function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-400">
          Copyright &copy; {new Date().getFullYear()} Tarun Sai. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={links.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:-translate-y-0.5 hover:text-cyan-300"
          >
            <Github size={20} />
          </a>
          <a
            href={links.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:-translate-y-0.5 hover:text-cyan-300"
          >
            <Linkedin size={20} />
          </a>
          <a href={links.email} aria-label="Email" className="text-slate-400 transition hover:-translate-y-0.5 hover:text-cyan-300">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
