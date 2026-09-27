import { Plus } from "lucide-react";
import { formatPrice, type MenuItem } from "@/data/restaurant";
import { useCart } from "@/hooks/useCart";

export function FoodCard({ item }: { item: MenuItem }) {
  const { addItem, openCart } = useCart();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={944}
          height={704}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-charcoal/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-charcoal-foreground backdrop-blur">
          {item.category === "mains" ? "Main Course" : item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 text-lg font-semibold leading-snug text-foreground">
            {item.name}
          </h3>
          <span className="shrink-0 font-display text-lg font-semibold text-primary">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        <button
          type="button"
          onClick={() => {
            addItem(item);
            openCart();
          }}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-charcoal-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Plus className="size-4" aria-hidden="true" />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
