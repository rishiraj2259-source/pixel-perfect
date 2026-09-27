import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden bg-charcoal">
      <img
        src={heroImage}
        alt="Warmly lit UrbanBite dining room with set tables and brass pendant lamps"
        width={1600}
        height={1008}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40"
        aria-hidden="true"
      />

      <div className="section-shell flex min-h-[92vh] flex-col justify-center py-32">
        <div className="max-w-2xl">
          <p className="animate-in fade-in slide-in-from-bottom-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary duration-700">
            <Star className="size-3.5 fill-current" aria-hidden="true" />
            Riverside District · Portland
          </p>

          <h1 className="animate-in fade-in slide-in-from-bottom-6 mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-charcoal-foreground duration-700 sm:text-6xl lg:text-7xl">
            Good Food. <span className="text-gradient-gold">Great Moments.</span>
          </h1>

          <p className="animate-in fade-in slide-in-from-bottom-8 mt-6 max-w-xl text-base leading-relaxed text-charcoal-foreground/75 duration-1000 sm:text-lg">
            UrbanBite is a neighbourhood kitchen built around wood fire, market produce and
            unhurried evenings. Wood-fired pizza, aged steaks and handmade pasta, served in a room
            made for lingering.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-8 mt-9 flex flex-col gap-3 duration-1000 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.03]"
            >
              Explore Menu
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-charcoal-foreground/30 px-7 py-3.5 text-sm font-semibold text-charcoal-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
