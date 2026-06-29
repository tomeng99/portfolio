"use client";

import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "ai-infra", label: "AI & Infra" },
];

export function Nav() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <a
          href="#hero"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.24em] text-zinc-100 uppercase"
        >
          <Sparkles className="h-4 w-4 text-zinc-400" />
          Thomas G. Eng
        </a>

        <div className="-mx-1 flex items-center gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 [scrollbar-width:none] md:mx-0">
          {sections.map((section) => {
            const isActive = activeId === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm whitespace-nowrap ${
                  isActive
                    ? "bg-white text-zinc-950"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {section.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
