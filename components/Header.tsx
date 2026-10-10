"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        scrolled || open
          ? "border-b border-line/80 bg-paper/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#top"
          className="transition-opacity duration-300 hover:opacity-70"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-terracotta"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#enquire"
            className="rounded-full bg-ink px-4 py-2 text-[12px] uppercase tracking-[0.18em] text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta hover:shadow-[0_10px_22px_-12px_rgba(154,74,44,0.8)] motion-reduce:hover:translate-y-0"
          >
            Enquire
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center transition-opacity duration-300 hover:opacity-60 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-ink transition ${open ? "translate-y-[4px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-ink transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper px-5 py-8 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-serif text-3xl transition-colors duration-300 hover:text-terracotta"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#enquire"
              className="font-serif text-3xl transition-colors duration-300 hover:text-terracotta"
              onClick={() => setOpen(false)}
            >
              Enquire
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
