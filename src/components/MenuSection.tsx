import { useMemo, useState } from "react";
import { categories, menuItems, type CategoryId } from "@/data/restaurant";
import { FoodCard } from "@/components/FoodCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">("all");

  const visibleItems = useMemo(
    () =>
      activeCategory === "all"
        ? menuItems
        : menuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="menu" className="bg-background py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our Menu"
          title="Cooked fresh, served generously"
          description="Every dish is prepared to order using produce from local growers. Filter by course to find what you are in the mood for."
        />

        <Reveal className="mt-10">
          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-all",
                  activeCategory === category.id
                    ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground",
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 80}>
              <FoodCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
