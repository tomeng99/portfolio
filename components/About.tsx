"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="scroll-mt-24 border-t border-white/8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-xl space-y-3">
          <p className="text-sm font-medium tracking-[0.28em] text-zinc-500 uppercase">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Developer, educator, and curious builder.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-zinc-300">
          I&apos;m a developer based in Norway who builds things for the web,
          runs workshops, and explores the cutting edge of AI. I enjoy turning
          complex ideas into useful products and creating learning experiences
          that help people move from curiosity to confidence.
        </p>
      </div>
    </motion.section>
  );
}
