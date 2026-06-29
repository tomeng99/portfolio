import { GitFork, Mail } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-lg font-medium text-zinc-100">Thomas G. Eng</p>
          <p className="mt-1 text-sm text-zinc-400">
            Developer, tinkerer, AI explorer.
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
            href="https://no.linkedin.com/in/thomasgeng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-white/20 hover:text-white"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="mailto:thomas@eng.software"
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
