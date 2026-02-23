import cashewImg from "@/assets/brownie-cashew.jpg";
import badamImg from "@/assets/brownie-badam.jpg";
import walnutImg from "@/assets/brownie-walnut.jpg";
import kitkatImg from "@/assets/brownie-kitkat.jpg";
import oreoImg from "@/assets/brownie-oreo.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Egg" | "Eggless";
  image: string;
};

export const defaultProducts: Product[] = [
  // Egg Brownies
  { id: "egg-cashew", name: "Cashews Brownie", price: 80, category: "Egg", image: cashewImg },
  { id: "egg-badam", name: "Badam Brownie", price: 70, category: "Egg", image: badamImg },
  { id: "egg-walnut", name: "Walnut Brownie", price: 70, category: "Egg", image: walnutImg },
  { id: "egg-kitkat", name: "KitKat Brownie", price: 60, category: "Egg", image: kitkatImg },
  { id: "egg-oreo", name: "Oreo Brownie", price: 70, category: "Egg", image: oreoImg },
  // Eggless Brownies
  { id: "eggless-cashew", name: "Cashew Brownie", price: 90, category: "Eggless", image: cashewImg },
  { id: "eggless-badam", name: "Badam Brownie", price: 80, category: "Eggless", image: badamImg },
  { id: "eggless-walnut", name: "Walnut Brownie", price: 80, category: "Eggless", image: walnutImg },
  { id: "eggless-kitkat", name: "KitKat Brownie", price: 70, category: "Eggless", image: kitkatImg },
  { id: "eggless-oreo", name: "Oreo Brownie", price: 80, category: "Eggless", image: oreoImg },
];

// Load products from localStorage or use defaults
export function getProducts(): Product[] {
  const stored = localStorage.getItem("nats-products");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultProducts;
    }
  }
  return defaultProducts;
}

export function saveProducts(products: Product[]) {
  localStorage.setItem("nats-products", JSON.stringify(products));
}
