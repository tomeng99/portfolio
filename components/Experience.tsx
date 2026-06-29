"use client";

import { motion } from "framer-motion";
import { Briefcase, Radio } from "lucide-react";

const experiences = [
  {
    title: "EC-play",
    role: "Developer — first coding job",
    description:
      "Built everything from the ground up. EC-play is a platform for learning music in schools — designed to make music education interactive, engaging, and accessible for students and teachers.",
    icon: Briefcase,
  },
  {
    title: "Telenor Student Crew",
    role: "Ambassador",
    description:
      "Part of Telenor's student engagement program, representing one of the Nordics' largest telecom companies and bridging the gap between technology and the next generation of talent.",
    icon: Radio,
  },
];

export function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="scroll-mt-24 border-t border-white/8"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-sm font-medium tracking-[0.28em] text-zinc-500 uppercase">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Where I&apos;ve built and represented.
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.article
                key={exp.title}
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
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-zinc-400">{exp.role}</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-zinc-50">
                      {exp.title}
                    </h3>
                    <p className="max-w-3xl leading-7 text-zinc-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
