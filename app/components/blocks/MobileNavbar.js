// components/MobileNav.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import Arrow from "./Arrow";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to toggle background / logo contrast
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkBase = "font-barlow font-bold text-sm uppercase tracking-[0.06em]";

  const closeAnd = () => () => {
    setOpen(false);
    fn?.();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] lg:hidden transition-colors duration-300 bg-primary`}
      aria-label="Mobile Navigation"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between w-full p-5">
        <div className="flex-1">
          {/* Use a light/dark logo variant if you have both; defaulting to the same */}
          <img
            src="/img/logo-padel.png"
            alt="The Padel Analyst"
            className="h-8 w-auto"
          />
        </div>

        {!open && (
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`w-8 h-8 grid place-items-center rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 ${
              scrolled ? "text-white" : "text-white"
            }`}
          >
            <ListIcon weight="bold" className="w-6 h-6" />
          </button>
        )}
        {open && (
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 grid place-items-center rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <XIcon className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Slide-down menu */}
      <Transition
        show={open}
        enter="transition ease-out duration-250"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div className="relative">
          <div className="absolute inset-x-0 -top-[72px] p-5 bg-primary/70 backdrop-blur border-b border-neutral-700 rounded-b-2xl shadow-lg">
            {/* Menu header */}
            <div className="flex items-center justify-between w-full px-1">
              <img
                src="/img/logo-padel.png"
                alt="The Padel Analyst"
                className="h-8 w-auto"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-8 h-8 grid place-items-center rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <XIcon weight="bold" className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-5 w-full px-1 mt-6">
              <Link
                href="#how-it-works"
                onClick={closeAnd()}
                className={`${linkBase} text-white/80 hover:text-white`}
              >
                How It Works
              </Link>
              <Link
                href="#coaches"
                onClick={closeAnd()}
                className={`${linkBase} text-white/80 hover:text-white`}
              >
                Coaches
              </Link>
              <Link
                href="#clients"
                onClick={closeAnd()}
                className={`${linkBase} text-white/80 hover:text-white`}
              >
                Clients
              </Link>
              <Link
                href="#faq"
                onClick={closeAnd()}
                className={`${linkBase} text-white/80 hover:text-white`}
              >
                FAQ
              </Link>
            </div>

            {/* CTA */}
            <div className="mt-6 px-1">
              <Link
                href="/"
                onClick={closeAnd()}
                className="flex space-x-1 items-center md:h-8 h-10 px-3 rounded-xl justify-center bg-accent/40 pointer-events-none transition-transform duration-150 ease-out motion-safe:active:scale-[0.98]"
              >
                <span className="font-barlow font-bold text-sm uppercase text-primary tracking-[0.06em]">
                  Book Session
                </span>
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
}
