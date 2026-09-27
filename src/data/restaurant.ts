import starter1 from "@/assets/starter-1.jpg";
import starter2 from "@/assets/starter-2.jpg";
import main1 from "@/assets/main-1.jpg";
import main2 from "@/assets/main-2.jpg";
import pizza1 from "@/assets/pizza-1.jpg";
import pizza2 from "@/assets/pizza-2.jpg";
import burger1 from "@/assets/burger-1.jpg";
import burger2 from "@/assets/burger-2.jpg";
import dessert1 from "@/assets/dessert-1.jpg";
import drink1 from "@/assets/drink-1.jpg";

export type CategoryId =
  | "starters"
  | "mains"
  | "pizza"
  | "burgers"
  | "desserts"
  | "drinks";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryId;
  image: string;
  popular?: boolean;
};

export const categories: { id: CategoryId | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Main Course" },
  { id: "pizza", label: "Pizza" },
  { id: "burgers", label: "Burgers" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

export const menuItems: MenuItem[] = [
  {
    id: "truffle-arancini",
    name: "Truffle Arancini",
    description: "Crisp risotto spheres with black truffle and aged parmesan cream.",
    price: 9.5,
    category: "starters",
    image: starter1,
    popular: true,
  },
  {
    id: "salt-pepper-calamari",
    name: "Salt & Pepper Calamari",
    description: "Golden fried calamari with lemon aioli and cracked pepper.",
    price: 11,
    category: "starters",
    image: starter2,
  },
  {
    id: "burrata-plate",
    name: "Burrata & Heirloom Tomato",
    description: "Creamy burrata, slow-roasted tomatoes, basil oil and sourdough toast.",
    price: 12.5,
    category: "starters",
    image: starter1,
  },
  {
    id: "ribeye-peppercorn",
    name: "Grilled Ribeye Steak",
    description: "28-day aged ribeye, green peppercorn sauce and fire-roasted vegetables.",
    price: 28,
    category: "mains",
    image: main1,
    popular: true,
  },
  {
    id: "truffle-tagliatelle",
    name: "Truffle Mushroom Tagliatelle",
    description: "Fresh egg pasta, wild mushrooms, truffle cream and parmesan shavings.",
    price: 19.5,
    category: "mains",
    image: main2,
    popular: true,
  },
  {
    id: "herb-chicken",
    name: "Herb Butter Roast Chicken",
    description: "Half free-range chicken with thyme butter, confit garlic and jus.",
    price: 21,
    category: "mains",
    image: main1,
  },
  {
    id: "seared-salmon",
    name: "Seared Atlantic Salmon",
    description: "Crisp-skin salmon, lemon beurre blanc and charred asparagus.",
    price: 24,
    category: "mains",
    image: main2,
  },
  {
    id: "margherita",
    name: "Wood-Fired Margherita",
    description: "San Marzano tomato, fior di latte, basil and cold-pressed olive oil.",
    price: 14,
    category: "pizza",
    image: pizza1,
    popular: true,
  },
  {
    id: "hot-honey-pepperoni",
    name: "Hot Honey Pepperoni",
    description: "Double pepperoni, mozzarella, chili flakes and a warm honey drizzle.",
    price: 16.5,
    category: "pizza",
    image: pizza2,
    popular: true,
  },
  {
    id: "truffle-funghi",
    name: "Truffle Funghi Pizza",
    description: "Wild mushrooms, taleggio, rosemary and white truffle oil.",
    price: 17,
    category: "pizza",
    image: pizza1,
  },
  {
    id: "urban-smash",
    name: "HUNGRY KYA! Double Smash",
    description: "Two seared beef patties, aged cheddar, house sauce and skin-on fries.",
    price: 15.5,
    category: "burgers",
    image: burger1,
    popular: true,
  },
  {
    id: "buttermilk-chicken-burger",
    name: "Buttermilk Chicken Burger",
    description: "Crunchy buttermilk chicken, apple slaw and smoked chipotle mayo.",
    price: 14.5,
    category: "burgers",
    image: burger2,
  },
  {
    id: "mushroom-swiss-burger",
    name: "Mushroom Swiss Burger",
    description: "Grilled beef patty, garlic mushrooms, swiss cheese and truffle mayo.",
    price: 16,
    category: "burgers",
    image: burger1,
  },
  {
    id: "lava-cake",
    name: "Molten Chocolate Lava Cake",
    description: "Warm dark chocolate pudding with vanilla bean ice cream and berries.",
    price: 9,
    category: "desserts",
    image: dessert1,
    popular: true,
  },
  {
    id: "vanilla-berry-sundae",
    name: "Berry Vanilla Sundae",
    description: "Madagascan vanilla gelato, macerated berries and toasted almonds.",
    price: 7.5,
    category: "desserts",
    image: dessert1,
  },
  {
    id: "cold-brew",
    name: "Barrel Cold Brew",
    description: "Slow-steeped single origin cold brew served over cracked ice.",
    price: 4.5,
    category: "drinks",
    image: drink1,
  },
  {
    id: "berry-lemonade",
    name: "Wild Berry Lemonade",
    description: "House lemonade shaken with muddled berries and fresh mint.",
    price: 5,
    category: "drinks",
    image: drink1,
  },
];

export const popularItems = menuItems.filter((item) => item.popular);

export const features = [
  {
    title: "Fresh Ingredients",
    description: "Produce delivered every morning from local growers and markets.",
    icon: "leaf",
  },
  {
    title: "Expert Chefs",
    description: "A kitchen team trained across Italy, Japan and New York.",
    icon: "chef",
  },
  {
    title: "Fast Service",
    description: "Most dishes reach your table in under 15 minutes.",
    icon: "clock",
  },
  {
    title: "Cozy Atmosphere",
    description: "Warm lighting, soft music and seating built for long dinners.",
    icon: "heart",
  },
] as const;

export const offers = [
  {
    id: "weekend-special",
    title: "Weekend Special",
    tag: "Sat & Sun",
    description:
      "Any wood-fired pizza with a signature dessert and a house drink for a fixed weekend price.",
    price: "$24",
    perks: ["1 pizza", "1 dessert", "1 drink"],
  },
  {
    id: "family-feast",
    title: "Family Feast",
    tag: "Serves 4",
    description:
      "Two mains, two pizzas, a sharing starter platter and a jug of wild berry lemonade.",
    price: "$79",
    perks: ["2 mains", "2 pizzas", "Sharing platter"],
  },
  {
    id: "lunch-combo",
    title: "Lunch Combo",
    tag: "Mon–Fri, 12–4pm",
    description:
      "A starter, one main course and a cold brew — designed to fit into a real lunch break.",
    price: "$18",
    perks: ["1 starter", "1 main", "1 cold brew"],
  },
];

export const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Menu Items" },
  { value: "25K+", label: "Happy Customers" },
];

export const reviews = [
  {
    name: "Ananya Sharma",
    role: "Food blogger",
    rating: 5,
    text: "The truffle tagliatelle is the best plate of pasta I have had this year. Service was warm without hovering.",
    initials: "AS",
  },
  {
    name: "Marcus Bell",
    role: "Regular guest",
    rating: 5,
    text: "We book the corner table every Friday. The double smash burger and the cold brew never disappoint.",
    initials: "MB",
  },
  {
    name: "Leah Fontaine",
    role: "Local resident",
    rating: 4,
    text: "Lovely lighting, generous portions and genuinely friendly staff. The lava cake is worth saving room for.",
    initials: "LF",
  },
  {
    name: "Daniel Okafor",
    role: "Visited for anniversary",
    rating: 5,
    text: "They remembered it was our anniversary and sent out a dessert. Ribeye was cooked exactly as asked.",
    initials: "DO",
  },
];

export const contactInfo = {
  address: "42 Harbour Street, Riverside District, Portland, OR 97204",
  phone: "+1 (503) 555-0148",
  email: "hello@HUNGRY KYA!.com",
  hours: [
    { days: "Monday – Thursday", time: "11:00 AM – 10:30 PM" },
    { days: "Friday – Saturday", time: "11:00 AM – 12:00 AM" },
    { days: "Sunday", time: "12:00 PM – 10:00 PM" },
  ],
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "about", label: "About" },
  { id: "offers", label: "Offers" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export const formatPrice = (value: number) =>
  value.toLocaleString("en-US", { style: "currency", currency: "USD" });
