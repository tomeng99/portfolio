import { GitFork, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-lg font-medium text-zinc-100">Thomas G. Eng</p>
          <p className="mt-1 text-sm text-zinc-400">
            Developer, workshop facilitator, AI enthusiast.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/tomeng99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-white/20 hover:text-white"
          >
            <GitFork className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="mailto:thomas@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-white/20 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
