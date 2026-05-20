"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DOMAIN, NAV_LINKS } from "@/lib/constants";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#home" className="font-display text-lg font-bold md:text-xl">
          <GradientText>{DOMAIN}</GradientText>
        </a>

        <ul className="hidden items-center gap-8 md:flex" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-soft/80 transition-colors hover:text-secondary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Badge variant="success">Available Now</Badge>
          <WhatsAppButton label="WhatsApp" size="sm" />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-glass-border md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card mx-4 overflow-hidden rounded-2xl border border-glass-border md:hidden"
          >
            <ul className="flex flex-col gap-1 p-4" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm font-medium text-soft/90",
                      "hover:bg-glass"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2 border-t border-glass-border pt-3">
                <Badge variant="success" className="w-fit">
                  Available Now
                </Badge>
                <WhatsAppButton label="Contact via WhatsApp" size="sm" className="w-full" />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
