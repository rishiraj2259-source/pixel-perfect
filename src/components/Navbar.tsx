import { useEffect, useState } from "react";
import { Menu, ShoppingBag, UtensilsCrossed, X } from "lucide-react";
import { navLinks } from "@/data/restaurant";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || mobileOpen
          ? "bg-charcoal/95 shadow-[var(--shadow-soft)] backdrop-blur"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="section-shell flex h-20 items-center justify-between gap-4"
      >
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2 text-charcoal-foreground"
          onClick={() => setMobileOpen(false)}
        >
          <UtensilsCrossed className="size-6 shrink-0 text-primary" aria-hidden="true" />
          <span className="truncate font-display text-2xl font-semibold tracking-tight">
            Urban<span className="text-primary">Bite</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === link.id
                    ? "bg-primary/15 text-primary"
                    : "text-charcoal-foreground/80 hover:text-primary",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
            className="relative rounded-full border border-charcoal-foreground/15 bg-charcoal-foreground/5 p-2.5 text-charcoal-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <ShoppingBag className="size-5" aria-hidden="true" />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            ) : null}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Book a Table
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="rounded-full border border-charcoal-foreground/15 p-2.5 text-charcoal-foreground lg:hidden"
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-charcoal-foreground/10 bg-charcoal/98 lg:hidden">
          <ul className="section-shell flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    active === link.id
                      ? "bg-primary/15 text-primary"
                      : "text-charcoal-foreground/85 hover:bg-charcoal-foreground/5",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                Book a Table
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
