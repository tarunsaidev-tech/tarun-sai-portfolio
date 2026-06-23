import { Github, Linkedin, Mail, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";

const links = {
  github: "https://github.com/tarunsaidev-tech",
  linkedin: "https://www.linkedin.com/in/tarun-sai-mutyala-a494b01a0/",
  email: "mailto:tarunsai28123@gmail.com"
};

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something useful."
          description="Have a website idea, portfolio requirement, or automation need? Send a message and I will get back to you."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <form className="glass-panel rounded-2xl p-6" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-200">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-line bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-200">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-line bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-semibold text-slate-200">Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                className="mt-2 w-full resize-none rounded-xl border border-line bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 sm:w-auto"
            >
              Send Message <Send size={18} />
            </button>
          </form>

          <aside className="glass-panel rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white">Contact Details</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Use the form or connect through email and professional profiles.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={links.email}
                className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.03] p-4 text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                <Mail className="text-cyan-300" size={20} />
                tarunsai28123@gmail.com
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.03] p-4 text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                <Linkedin className="text-cyan-300" size={20} />
                LinkedIn
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.03] p-4 text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                <Github className="text-cyan-300" size={20} />
                GitHub
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
