import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import CartSheet from "@/components/CartSheet";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { getProducts, type Product } from "@/data/products";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<"All" | "Egg" | "Eggless">("All");
  const [sortOrder, setSortOrder] = useState<"none" | "asc" | "desc">("none");

  const products = useMemo(() => getProducts(), []);

  const filtered = useMemo(() => {
    let result: Product[] = categoryFilter === "All" ? products : products.filter(p => p.category === categoryFilter);
    if (sortOrder === "asc") result = [...result].sort((a, b) => a.price - b.price);
    if (sortOrder === "desc") result = [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [products, categoryFilter, sortOrder]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCartOpen={() => setCartOpen(true)} />
      <HeroSection />

      <main id="menu" className="flex-1 py-12">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-2">
            Our Brownies
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Egg base ₹60/pc · Eggless base ₹70/pc
          </p>

          <FilterBar
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <div key={product.id} style={{ animationDelay: `${i * 80}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <AboutSection />
      <Footer />
      <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default Index;
