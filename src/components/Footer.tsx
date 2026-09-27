import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, UtensilsCrossed } from "lucide-react";
import { contactInfo, navLinks } from "@/data/restaurant";

const socials = [
  { label: "UrbanBite on Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "UrbanBite on Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "UrbanBite on X", href: "https://x.com", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="bg-charcoal pt-16 text-charcoal-foreground">
      <div className="section-shell grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="size-6 text-primary" aria-hidden="true" />
            <span className="font-display text-2xl font-semibold">
              Urban<span className="text-primary">Bite</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-foreground/65">
            Good food and great moments on Harbour Street since 2015. Wood-fired plates, market
            produce and a room built for long dinners.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid size-10 place-items-center rounded-full border border-charcoal-foreground/15 text-charcoal-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                <social.icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-base font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm text-charcoal-foreground/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-base font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-charcoal-foreground/70">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
                className="hover:text-primary"
              >
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold">Opening Hours</h3>
          <ul className="mt-4 space-y-3 text-sm text-charcoal-foreground/70">
            {contactInfo.hours.map((entry) => (
              <li key={entry.days}>
                <span className="block text-charcoal-foreground/90">{entry.days}</span>
                <span>{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/10 py-6">
        <p className="section-shell text-center text-xs text-charcoal-foreground/55">
          © {new Date().getFullYear()} UrbanBite Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
