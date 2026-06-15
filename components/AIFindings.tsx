"use client";

import { motion } from "framer-motion";
import { Bot, TerminalSquare, WandSparkles } from "lucide-react";

const notes = [
  {
    title: "Prompt patterns that reduce ambiguity",
    description:
      "Notes from testing how tighter constraints, better examples, and clear success criteria change model outputs.",
    icon: WandSparkles,
  },
  {
    title: "Tool-using workflows for real tasks",
    description:
      "Experiments with chaining LLMs, terminal tools, and structured prompts into repeatable developer workflows.",
    icon: TerminalSquare,
  },
  {
    title: "Small models, sharp interfaces",
    description:
      "Observations on where lighter models shine when paired with good context, focused UI, and sensible guardrails.",
    icon: Bot,
  },
];

export function AIFindings() {
  return (
    <motion.section
      id="ai-findings"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-sm font-medium tracking-[0.28em] text-zinc-500 uppercase">
            AI Findings
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Lab notes from ongoing experiments.
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
