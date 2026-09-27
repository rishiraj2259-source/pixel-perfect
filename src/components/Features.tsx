import { ChefHat, Clock, Heart, Leaf } from "lucide-react";
import { features } from "@/data/restaurant";
import { Reveal } from "@/components/Reveal";

const icons = {
  leaf: Leaf,
  chef: ChefHat,
  clock: Clock,
  heart: Heart,
} as const;

export function Features() {
  return (
    <section className="bg-charcoal pb-20">
      <div className="section-shell">
        <div className="grid gap-5 rounded-3xl border border-charcoal-foreground/10 bg-charcoal-foreground/5 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon];
            return (
              <Reveal key={feature.title} delay={index * 90}>
                <div className="flex h-full flex-col gap-3 rounded-2xl p-4 transition-colors hover:bg-charcoal-foreground/5">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-charcoal-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal-foreground/65">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
