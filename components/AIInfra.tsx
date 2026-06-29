"use client";

import { motion } from "framer-motion";
import { Bot, ServerCog, ShieldCheck } from "lucide-react";

const notes = [
  {
    title: "On-prem AI models",
    description:
      "Setting up and running language models on-premises — full control over data, no external API dependencies, and the infrastructure to serve them at usable speeds.",
    icon: Bot,
  },
  {
    title: "Security harnesses for agents",
    description:
      "Building guardrails around AI agents so they can work autonomously without creating permission fatigue — the right balance of safety and flow, so you don't have to approve every single action.",
    icon: ShieldCheck,
  },
  {
    title: "Kubernetes on a VPS",
    description:
      "Running a self-hosted Kubernetes cluster on a VPS — the same setup that deploys and hosts all my projects, including this portfolio. Tinkering with the full pipeline from CI to production.",
    icon: ServerCog,
  },
];

export function AIInfra() {
  return (
    <motion.section
      id="ai-infra"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-sm font-medium tracking-[0.28em] text-zinc-500 uppercase">
            AI &amp; Infrastructure
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            What I&apos;m exploring right now.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {notes.map((note, index) => {
            const Icon = note.icon;

            return (
              <motion.article
                key={note.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-zinc-900/90 p-3 text-zinc-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-50">
                  {note.title}
                </h3>
                <p className="mt-3 leading-7 text-zinc-300">
                  {note.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
