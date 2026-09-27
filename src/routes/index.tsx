import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { PopularDishes } from "@/components/PopularDishes";
import { MenuSection } from "@/components/MenuSection";
import { About } from "@/components/About";
import { Offers } from "@/components/Offers";
import { Reviews } from "@/components/Reviews";
import { Reservation } from "@/components/Reservation";
import { Footer } from "@/components/Footer";
import { CartPanel } from "@/components/CartPanel";
import { CartProvider } from "@/hooks/useCart";

const title = "UrbanBite — Good Food. Great Moments.";
const description =
  "UrbanBite is a Portland neighbourhood restaurant serving wood-fired pizza, aged steaks and handmade pasta. Browse the menu, grab an offer or book a table.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PopularDishes />
        <MenuSection />
        <About />
        <Offers />
        <Reviews />
        <Reservation />
      </main>
      <Footer />
      <CartPanel />
    </CartProvider>
  );
}
