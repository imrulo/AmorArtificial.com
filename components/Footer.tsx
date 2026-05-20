import { DOMAIN } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border px-4 py-10 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center text-sm text-soft/50 md:flex-row md:justify-between md:text-left">
        <p className="max-w-xs text-soft/70">
          {DOMAIN} — Premium Domain Available for Acquisition
        </p>

        <nav aria-label="Footer links" className="flex gap-6">
          <a href="#" className="transition-colors hover:text-secondary">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-secondary">
            Terms
          </a>
        </nav>

        <p>
          Realizado por{" "}
          <a
            href="https://github.com/imrulo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient font-semibold transition-opacity hover:opacity-80"
          >
            imrulo.eth
          </a>
        </p>
      </div>

      <p className="mx-auto mt-6 max-w-7xl text-center text-xs text-soft/35">
        © {year} {DOMAIN}. Not a live business — domain for sale only.
      </p>
    </footer>
  );
}
