import { Quote, Star } from "lucide-react";
import { reviews } from "@/data/restaurant";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

export function Reviews() {
  return (
    <section id="reviews" className="bg-secondary/60 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Reviews"
          title="What our guests say"
          description="Collected from diners who booked a table with us over the past few months."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={(index % 2) * 100}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
                <Quote className="size-7 text-primary/40" aria-hidden="true" />
                <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/85">
                  “{review.text}”
                </p>

                <div className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 border-t border-border pt-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-charcoal font-display text-base font-semibold text-primary">
                    {review.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-foreground">{review.name}</p>
                    <p className="truncate text-sm text-muted-foreground">{review.role}</p>
                    <div
                      className="mt-1 flex gap-0.5"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          aria-hidden="true"
                          className={cn(
                            "size-4",
                            starIndex < review.rating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground/40",
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
