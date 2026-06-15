"use client";

import { motion } from "framer-motion";
import { CalendarDays, Mic2 } from "lucide-react";

const workshops = [
  {
    title: "Practical AI for Builders",
    date: "Spring 2026",
    description:
      "A hands-on session exploring prompting patterns, tool use, and practical ways to prototype with LLMs.",
  },
  {
    title: "Modern Web Workshop",
    date: "Autumn 2025",
    description:
      "An interactive workshop on shipping polished web experiences with modern frontend tooling and strong fundamentals.",
  },
  {
    title: "From Idea to Demo Day",
    date: "Summer 2025",
    description:
      "A collaborative format focused on rapid validation, storytelling, and building momentum around product ideas.",
  },
];

export function Workshops() {
  return (
    <motion.section
      id="workshops"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="scroll-mt-24 border-t border-white/8"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-sm font-medium tracking-[0.28em] text-zinc-500 uppercase">
            Workshops
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Sessions designed to be practical, collaborative, and energizing.
          </h2>
        </div>

        <div className="space-y-6">
          {workshops.map((workshop, index) => (
            <motion.article
              key={workshop.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:block" />
              <div className="relative grid gap-6 md:grid-cols-[180px_1fr] md:gap-10">
                <div className="space-y-3 md:pl-8">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-200">
                    <Mic2 className="h-4 w-4" />
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-zinc-400">
                    <CalendarDays className="h-4 w-4" />
                    {workshop.date}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-zinc-50">
                    {workshop.title}
                  </h3>
                  <p className="max-w-3xl leading-7 text-zinc-300">
                    {workshop.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
