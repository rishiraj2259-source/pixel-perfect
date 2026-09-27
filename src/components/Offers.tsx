import { Check } from "lucide-react";
import { offers } from "@/data/restaurant";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Offers() {
  return (
    <section id="offers" className="bg-charcoal py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Offers"
          title="Deals worth planning a visit around"
          description="Available in the dining room and for takeaway. No booking fee, no fine print."
          tone="dark"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <Reveal key={offer.id} delay={index * 110}>
              <article className="flex h-full flex-col rounded-3xl border border-charcoal-foreground/10 bg-charcoal-foreground/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {offer.tag}
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-charcoal-foreground">
                  {offer.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-foreground/65">
                  {offer.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {offer.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-2 text-sm text-charcoal-foreground/80"
                    >
                      <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-charcoal-foreground/10 pt-6">
                  <span className="font-display text-3xl font-semibold text-primary">
                    {offer.price}
                  </span>
                  <a
                    href="#contact"
                    className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                  >
                    Claim Offer
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
