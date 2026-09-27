import { useEffect, useState } from "react";
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { formatPrice } from "@/data/restaurant";
import { useCart } from "@/hooks/useCart";

export function CartPanel() {
  const { lines, total, count, isOpen, closeCart, increment, decrement, removeItem, clearCart } =
    useCart();
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (!isOpen) setConfirmed(false);
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeCart]);

  const handleCheckout = () => {
    clearCart();
    setConfirmed(true);
  };

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[60] ${isOpen ? "" : "pointer-events-none"}`}
    >
      <button
        type="button"
        tabIndex={isOpen ? 0 : -1}
        aria-label="Close cart"
        onClick={closeCart}
        className={`absolute inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-label="Your order"
        aria-modal={isOpen}
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-background shadow-[var(--shadow-lift)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border px-5 py-5">
          <div className="flex min-w-0 items-center gap-2">
            <ShoppingBag className="size-5 shrink-0 text-primary" aria-hidden="true" />
            <h2 className="truncate text-lg font-semibold">
              Your Order{count > 0 ? ` (${count})` : ""}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              {confirmed ? (
                <>
                  <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
                  <p className="text-lg font-semibold">Order confirmed</p>
                  <p className="max-w-xs text-sm text-muted-foreground">
                    Thank you! Your order has been placed and our kitchen is on it.
                  </p>
                </>
              ) : (
                <>
                  <ShoppingBag className="size-10 text-muted-foreground/50" aria-hidden="true" />
                  <p className="text-lg font-semibold">Your cart is empty</p>
                  <p className="max-w-xs text-sm text-muted-foreground">
                    Browse the menu and add a few dishes to get started.
                  </p>
                </>
              )}
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map((line) => (
                <li
                  key={line.item.id}
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-2xl border border-border bg-card p-3"
                >
                  <img
                    src={line.item.image}
                    alt={line.item.name}
                    loading="lazy"
                    width={944}
                    height={704}
                    className="size-20 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="min-w-0 truncate font-semibold">{line.item.name}</p>
                      <button
                        type="button"
                        onClick={() => removeItem(line.item.id)}
                        aria-label={`Remove ${line.item.name}`}
                        className="shrink-0 rounded-lg p-1 text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <Trash2 className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {formatPrice(line.item.price)} each
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1 rounded-full border border-border p-1">
                        <button
                          type="button"
                          onClick={() => decrement(line.item.id)}
                          aria-label={`Decrease quantity of ${line.item.name}`}
                          className="grid size-7 place-items-center rounded-full transition-colors hover:bg-secondary"
                        >
                          <Minus className="size-3.5" aria-hidden="true" />
                        </button>
                        <span className="min-w-6 text-center text-sm font-semibold">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => increment(line.item.id)}
                          aria-label={`Increase quantity of ${line.item.name}`}
                          className="grid size-7 place-items-center rounded-full transition-colors hover:bg-secondary"
                        >
                          <Plus className="size-3.5" aria-hidden="true" />
                        </button>
                      </div>
                      <span className="font-display text-base font-semibold text-primary">
                        {formatPrice(line.item.price * line.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="border-t border-border px-5 py-5">
          <div className="flex items-center justify-between text-base">
            <span className="font-medium text-muted-foreground">Total</span>
            <span className="font-display text-2xl font-semibold text-foreground">
              {formatPrice(total)}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            disabled={lines.length === 0}
            className="mt-4 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Checkout
          </button>
        </footer>
      </aside>
    </div>
  );
}
