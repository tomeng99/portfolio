"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-24 items-end overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/thomas-presenting.jpeg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.2),rgba(10,10,10,0.72)_52%,rgba(10,10,10,0.96))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%)]" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-14 sm:px-6 md:pb-20 lg:px-8"
      >
        <div className="max-w-3xl space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-sm font-medium tracking-[0.36em] text-zinc-300 uppercase"
          >
            Developer · Workshop Facilitator · AI Enthusiast
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Thomas G. Eng
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl"
          >
            Building thoughtful digital products, leading hands-on workshops,
            and experimenting with the practical edge of AI.
          </motion.p>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-medium text-white hover:bg-white/14"
        >
          Scroll to explore
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
