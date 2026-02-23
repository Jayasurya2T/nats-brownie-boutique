type FilterBarProps = {
  categoryFilter: "All" | "Egg" | "Eggless";
  setCategoryFilter: (v: "All" | "Egg" | "Eggless") => void;
  sortOrder: "none" | "asc" | "desc";
  setSortOrder: (v: "none" | "asc" | "desc") => void;
};

const FilterBar = ({ categoryFilter, setCategoryFilter, sortOrder, setSortOrder }: FilterBarProps) => {
  const categories: ("All" | "Egg" | "Eggless")[] = ["All", "Egg", "Eggless"];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      <div className="flex gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              categoryFilter === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {cat === "All" ? "All" : cat}
          </button>
        ))}
      </div>
      <select
        value={sortOrder}
        onChange={e => setSortOrder(e.target.value as "none" | "asc" | "desc")}
        className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="none">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default FilterBar;
