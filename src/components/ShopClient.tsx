"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X, Check } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import QuickView from "@/components/QuickView";
import { products, BRANDS, type Product, type Category } from "@/data/products";
import { cn } from "@/lib/utils";

const CATEGORY_OPTIONS: Category[] = [
  "Perfume",
  "Skincare",
  "Makeup",
  "Foundation",
  "Lip Products",
  "Serums",
  "Gift Sets",
];

const AVAILABILITY = ["Pre-order", "In Stock", "Limited Stock"] as const;

const PRICE_RANGES = [
  { label: "Under ৳2,000", min: 0, max: 2000 },
  { label: "৳2,000 – ৳5,000", min: 2000, max: 5000 },
  { label: "৳5,000 – ৳15,000", min: 5000, max: 15000 },
  { label: "Over ৳15,000", min: 15000, max: Infinity },
];

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
] as const;

type SortValue = (typeof SORTS)[number]["value"];

export default function ShopClient({
  initialCategory,
  initialBrand,
}: {
  initialCategory?: string;
  initialBrand?: string;
}) {
  const [categories, setCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [brands, setBrands] = useState<string[]>(
    initialBrand ? [initialBrand] : []
  );
  const [priceIdx, setPriceIdx] = useState<number | null>(null);
  const [availability, setAvailability] = useState<string[]>([]);
  const [sort, setSort] = useState<SortValue>("featured");
  const [quick, setQuick] = useState<Product | null>(null);
  const [mobileFilters, setMobileFilters] = useState(false);

  const toggle = (
    list: string[],
    setter: (v: string[]) => void,
    value: string
  ) =>
    setter(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
    );

  const filtered = useMemo(() => {
    let out = products.filter((p) => {
      if (
        categories.length &&
        !p.categories.some((c) => categories.includes(c))
      )
        return false;
      if (brands.length && !brands.includes(p.brand)) return false;
      if (availability.length && !availability.includes(p.availability))
        return false;
      if (priceIdx !== null) {
        const r = PRICE_RANGES[priceIdx];
        if (p.price < r.min || p.price >= r.max) return false;
      }
      return true;
    });

    out = [...out].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating || b.reviews - a.reviews;
        default:
          return Number(b.featured) - Number(a.featured);
      }
    });
    return out;
  }, [categories, brands, availability, priceIdx, sort]);

  const activeCount =
    categories.length + brands.length + availability.length + (priceIdx !== null ? 1 : 0);

  const clearAll = () => {
    setCategories([]);
    setBrands([]);
    setAvailability([]);
    setPriceIdx(null);
  };

  const FilterGroup = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-line py-6">
      <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
        {title}
      </h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  );

  const CheckRow = ({
    checked,
    label,
    onClick,
  }: {
    checked: boolean;
    label: string;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-3 text-left text-sm text-body/75 transition-colors hover:text-ink"
    >
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border transition-colors",
          checked ? "border-ink bg-ink text-cream" : "border-line bg-card"
        )}
      >
        {checked && <Check size={11} strokeWidth={3} />}
      </span>
      {label}
    </button>
  );

  const Filters = () => (
    <>
      <FilterGroup title="Category">
        {CATEGORY_OPTIONS.map((c) => (
          <CheckRow
            key={c}
            label={c}
            checked={categories.includes(c)}
            onClick={() => toggle(categories, setCategories, c)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Brand">
        {BRANDS.map((b) => (
          <CheckRow
            key={b.name}
            label={b.name}
            checked={brands.includes(b.name)}
            onClick={() => toggle(brands, setBrands, b.name)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_RANGES.map((r, i) => (
          <CheckRow
            key={r.label}
            label={r.label}
            checked={priceIdx === i}
            onClick={() => setPriceIdx(priceIdx === i ? null : i)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Availability">
        {AVAILABILITY.map((a) => (
          <CheckRow
            key={a}
            label={a}
            checked={availability.includes(a)}
            onClick={() => toggle(availability, setAvailability, a)}
          />
        ))}
      </FilterGroup>
    </>
  );

  return (
    <div className="container-luxe py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl text-ink">Filters</h2>
              {activeCount > 0 && (
                <button
                  onClick={clearAll}
                  className="text-[12px] font-medium text-gold-dark hover:underline"
                >
                  Clear ({activeCount})
                </button>
              )}
            </div>
            <div className="mt-2">
              <Filters />
            </div>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-body/60">
              <span className="font-semibold text-ink">{filtered.length}</span>{" "}
              products
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFilters(true)}
                className="flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2.5 text-[13px] font-medium text-ink lg:hidden"
              >
                <SlidersHorizontal size={15} />
                Filters {activeCount > 0 && `(${activeCount})`}
              </button>
              <div className="flex items-center gap-2">
                <label className="hidden text-[12px] uppercase tracking-[0.12em] text-body/50 sm:block">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortValue)}
                  className="rounded-full border border-line bg-card px-4 py-2.5 text-[13px] font-medium text-ink outline-none focus:border-gold"
                >
                  {SORTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-16 flex flex-col items-center gap-4 text-center">
              <p className="font-display text-2xl text-ink">No products found</p>
              <p className="max-w-sm text-sm text-body/60">
                Try adjusting or clearing your filters to see more of our
                authentic imports.
              </p>
              <button onClick={clearAll} className="btn-outline mt-2">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  onQuickView={setQuick}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFilters(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-cream p-6">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-display text-2xl text-ink">Filters</h2>
              <button
                aria-label="Close filters"
                onClick={() => setMobileFilters(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-sand"
              >
                <X size={20} />
              </button>
            </div>
            <Filters />
            <div className="sticky bottom-0 flex gap-3 bg-cream pt-4">
              <button onClick={clearAll} className="btn-outline flex-1">
                Clear
              </button>
              <button
                onClick={() => setMobileFilters(false)}
                className="btn-primary flex-1"
              >
                Show {filtered.length}
              </button>
            </div>
          </div>
        </div>
      )}

      <QuickView product={quick} onClose={() => setQuick(null)} />
    </div>
  );
}
