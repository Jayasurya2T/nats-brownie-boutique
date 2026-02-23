import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link, useLocation } from "react-router-dom";

type HeaderProps = {
  onCartOpen: () => void;
};

const Header = ({ onCartOpen }: HeaderProps) => {
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-display font-bold text-primary">
            Nats Brownies
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Menu
          </Link>
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </a>
          <Link
            to="/admin"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/admin" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Admin
          </Link>
          <button
            onClick={onCartOpen}
            className="relative p-2 rounded-full bg-primary text-primary-foreground hover:bg-chocolate-light transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-caramel text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
