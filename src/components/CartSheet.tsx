import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

type CartSheetProps = {
  open: boolean;
  onClose: () => void;
};

const WHATSAPP_NUMBER = "918428382877";
const INSTAGRAM_ID = "nats_vlog29";

const CartSheet = ({ open, onClose }: CartSheetProps) => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  const buildOrderText = () => {
    let text = "🍫 *New Order from Nats Brownies Website*\n\n";
    items.forEach(item => {
      text += `• ${item.name} (${item.category}) × ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    text += `\n*Total: ₹${totalPrice}*`;
    return text;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(buildOrderText());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("New Order - Nats Brownies");
    const body = encodeURIComponent(buildOrderText());
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-cocoa-dark/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display text-xl font-bold text-foreground">Your Cart</h2>
          <button onClick={onClose} className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.productId} className="flex items-center justify-between bg-secondary rounded-lg p-4">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.category} · ₹{item.price}/pc</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="p-1 text-muted-foreground hover:text-foreground">
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center font-semibold text-sm text-foreground">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="p-1 text-muted-foreground hover:text-foreground">
                      <Plus size={14} />
                    </button>
                    <button onClick={() => removeFromCart(item.productId)} className="p-1 text-destructive hover:text-destructive/80 ml-2">
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <p className="ml-4 font-bold text-foreground min-w-[60px] text-right">₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-display text-lg font-semibold text-foreground">Total</span>
              <span className="text-2xl font-bold text-caramel">₹{totalPrice}</span>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 bg-green-600 text-primary-foreground rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={20} />
              Order via WhatsApp
            </button>

            <div className="flex gap-3">
              <a
                href={`https://www.instagram.com/${INSTAGRAM_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors"
              >
                Instagram
              </a>
              <button
                onClick={handleEmail}
                className="flex-1 py-2.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors"
              >
                Email
              </button>
            </div>

            <button
              onClick={clearCart}
              className="w-full py-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSheet;
