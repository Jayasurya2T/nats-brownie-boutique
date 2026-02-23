import { useState } from "react";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(
      { productId: product.id, name: product.name, price: product.price, category: product.category },
      qty
    );
    setQty(1);
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in-up">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
            product.category === "Egg"
              ? "bg-caramel text-accent-foreground"
              : "bg-primary text-primary-foreground"
          }`}
        >
          {product.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-display font-semibold text-lg text-foreground">{product.name}</h3>
        <p className="text-caramel font-bold text-xl mt-1">₹{product.price}</p>
        <p className="text-muted-foreground text-xs mt-0.5">per piece</p>

        <div className="flex items-center justify-between mt-4 gap-3">
          <div className="flex items-center gap-2 bg-secondary rounded-lg">
            <button
              onClick={() => setQty(q => Math.max(1, q - 1))}
              className="p-2 text-secondary-foreground hover:text-primary transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center font-semibold text-foreground">{qty}</span>
            <button
              onClick={() => setQty(q => q + 1)}
              className="p-2 text-secondary-foreground hover:text-primary transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-chocolate-light transition-colors"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
