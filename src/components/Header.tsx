"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-wood-light/40 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="focus-ring group flex items-center gap-3 rounded-sm"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="Wooden Spokes and Great Folks logo"
            width={48}
            height={48}
            className="h-11 w-11 transition-transform group-hover:rotate-12"
            priority
          />
          <div className="leading-tight">
            <p className="font-serif text-base font-bold tracking-tight text-ink sm:text-lg">
              Wooden Spokes
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-wood">
              &amp; Great Folks
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-parchment text-burgundy"
                    : "text-ink-muted hover:bg-parchment/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="focus-ring ml-2 rounded-sm bg-burgundy px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-burgundy-dark"
          >
            Start a Project
          </Link>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-sm border border-wood-light/60 p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-wood-light/40 bg-cream px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`focus-ring block rounded-sm px-3 py-2.5 text-base font-medium ${
                      active
                        ? "bg-parchment text-burgundy"
                        : "text-ink-muted hover:bg-parchment/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="focus-ring block rounded-sm bg-burgundy px-3 py-2.5 text-center text-base font-semibold text-white"
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
