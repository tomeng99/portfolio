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
            Developer, tinkerer, and relentless explorer of technology.
          </h2>
        </div>
        <div className="max-w-2xl space-y-5 text-lg leading-8 text-zinc-300">
          <p>
            I&apos;m a developer based in Norway who loves exploring all kinds
            of technology. I build things to understand how they really work
            under the hood — whether that&apos;s end-to-end encryption,
            real-time multiplayer systems, or self-hosted infrastructure.
          </p>
          <p>
            As part of Telenor&apos;s student crew, I&apos;m an ambassador
            for one of the Nordics&apos; largest telecom companies. I&apos;m also
            deeply engaged in AI — setting up language models on-prem,
            building security harnesses, and figuring out how to let agents
            work autonomously without the permission fatigue of approving
            every single action.
          </p>
          <p>
            When I&apos;m not doing that, I&apos;m tinkering with Kubernetes
            clusters — like the one running on this VPS that deploys and
            hosts all my projects, including this portfolio.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
