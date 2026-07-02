"use client";

import { Reveal } from "./lib/animations";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border" style={{ background: 'var(--surface)' }}>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex justify-center">
          <p
            className="text-lg font-display font-medium tracking-wide leading-relaxed text-center"
            style={{ color: "var(--foreground)" }}
          >
            © {new Date().getFullYear()} Alicia Azirou — Tous droits réservés.
          </p>
        </div>
      </div>

    </footer>
  );
}
