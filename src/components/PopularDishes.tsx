import { ArrowRight } from "lucide-react";
import { popularItems } from "@/data/restaurant";
import { FoodCard } from "@/components/FoodCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function PopularDishes() {
  return (
    <section className="bg-secondary/60 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Guest Favourites"
          title="The dishes people come back for"
          description="Six plates that leave our kitchen more than any others, week after week."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularItems.slice(0, 6).map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 80}>
              <FoodCard item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View Full Menu
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
