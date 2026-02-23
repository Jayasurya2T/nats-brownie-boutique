import { useState, useEffect } from "react";
import { getProducts, saveProducts, defaultProducts, type Product } from "@/data/products";
import { Plus, Pencil, Trash2, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState({ name: "", price: "", category: "Egg" as "Egg" | "Eggless", image: "" });

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const persist = (updated: Product[]) => {
    setProducts(updated);
    saveProducts(updated);
  };

  const handleSave = () => {
    if (!form.name || !form.price) return;
    if (editing) {
      persist(products.map(p => p.id === editing.id ? { ...p, name: form.name, price: Number(form.price), category: form.category, image: form.image || p.image } : p));
      setEditing(null);
    } else {
      const newProduct: Product = {
        id: `custom-${Date.now()}`,
        name: form.name,
        price: Number(form.price),
        category: form.category,
        image: form.image || "/placeholder.svg",
      };
      persist([...products, newProduct]);
    }
    setForm({ name: "", price: "", category: "Egg", image: "" });
  };

  const handleEdit = (p: Product) => {
    setEditing(p);
    setForm({ name: p.name, price: String(p.price), category: p.category, image: p.image });
  };

  const handleDelete = (id: string) => {
    persist(products.filter(p => p.id !== id));
  };

  const handleReset = () => {
    persist(defaultProducts);
    setEditing(null);
    setForm({ name: "", price: "", category: "Egg", image: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-display font-bold text-primary">Admin Panel</h1>
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to Store
          </Link>
        </div>
      </header>

      <div className="container py-8 max-w-3xl">
        {/* Form */}
        <div className="bg-card rounded-xl p-6 border border-border mb-8">
          <h2 className="font-display font-semibold text-lg text-foreground mb-4">
            {editing ? "Edit Product" : "Add New Product"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              placeholder="Product Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="px-4 py-2.5 rounded-lg bg-secondary text-foreground border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              placeholder="Price (₹)"
              type="number"
              value={form.price}
              onChange={e => setForm({ ...form, price: e.target.value })}
              className="px-4 py-2.5 rounded-lg bg-secondary text-foreground border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <select
              value={form.category}
              onChange={e => setForm({ ...form, category: e.target.value as "Egg" | "Eggless" })}
              className="px-4 py-2.5 rounded-lg bg-secondary text-foreground border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="Egg">Egg</option>
              <option value="Eggless">Eggless</option>
            </select>
            <input
              placeholder="Image URL (optional)"
              value={form.image}
              onChange={e => setForm({ ...form, image: e.target.value })}
              className="px-4 py-2.5 rounded-lg bg-secondary text-foreground border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-chocolate-light transition-colors">
              <Plus size={16} />
              {editing ? "Update" : "Add Product"}
            </button>
            {editing && (
              <button onClick={() => { setEditing(null); setForm({ name: "", price: "", category: "Egg", image: "" }); }} className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* Product List */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-semibold text-lg text-foreground">Products ({products.length})</h2>
          <button onClick={handleReset} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <RotateCcw size={14} />
            Reset to Default
          </button>
        </div>

        <div className="space-y-3">
          {products.map(p => (
            <div key={p.id} className="flex items-center gap-4 bg-card rounded-lg p-4 border border-border">
              <img src={p.image} alt={p.name} className="w-12 h-12 rounded-md object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.category} · ₹{p.price}</p>
              </div>
              <button onClick={() => handleEdit(p)} className="p-2 text-muted-foreground hover:text-primary transition-colors">
                <Pencil size={16} />
              </button>
              <button onClick={() => handleDelete(p.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
