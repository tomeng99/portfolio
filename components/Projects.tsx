"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";

const projects = [
  {
    title: "Chatters",
    description:
      "A messenger app I built to learn how end-to-end encryption actually works — key exchange, NaCl boxes, group key distribution, and the cryptography that keeps messages private from the server itself.",
    tech: ["React Native", "Node.js", "TweetNaCl", "PostgreSQL"],
    href: "https://github.com/tomeng99/chatters",
    linkLabel: "View on GitHub",
  },
  {
    title: "QuizGame",
    description:
      "A live multiplayer quiz game built to explore how complex a platform like Kahoot really is — real-time scoring, cross-platform clients, and the infrastructure behind live competition.",
    tech: ["Expo", "React Native", "Fastify", "Socket.IO"],
    href: "https://github.com/tomeng99/QuizGame",
    linkLabel: "View on GitHub",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-sm font-medium tracking-[0.28em] text-zinc-500 uppercase">
            Projects
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Built to understand how things work.
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="space-y-5">
                <div className="inline-flex rounded-full border border-white/10 bg-zinc-900/80 p-3 text-zinc-300">
                  <Layers3 className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="leading-7 text-zinc-300">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs tracking-[0.2em] text-zinc-400 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-100 hover:text-white"
              >
                {project.linkLabel}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
