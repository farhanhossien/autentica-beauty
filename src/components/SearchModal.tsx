"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { products } from "@/data/products";
import { formatBDT } from "@/lib/utils";

const SUGGESTIONS = ["Dior Sauvage", "Le Male", "KIKO", "Niacinamide", "Perfume"];

export default function SearchModal() {
  const { searchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSearchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.categories.some((c) => c.toLowerCase().includes(q))
      )
      .slice(0, 6);
  }, [query]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex justify-center px-4 pt-[10vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 h-fit w-full max-w-2xl overflow-hidden rounded-2xl bg-cream shadow-card"
          >
            <div className="flex items-center gap-3 border-b border-line px-5 py-4">
              <Search size={20} className="text-body/50" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search perfumes, skincare, brands…"
                className="flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-body/40"
              />
              <button
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-ink hover:bg-sand"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto p-4">
              {!query && (
                <div>
                  <p className="px-2 pb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-body/45">
                    Popular searches
                  </p>
                  <div className="flex flex-wrap gap-2 px-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => setQuery(s)}
                        className="rounded-full border border-line bg-card px-4 py-2 text-[13px] text-body transition-colors hover:border-gold hover:text-ink"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {query && results.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-body/55">
                  No results for “{query}”. Try another search.
                </p>
              )}

              {results.map((p) => (
                <Link
                  key={p.slug}
                  href={`/product/${p.slug}`}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-sand"
                >
                  <div className="relative h-14 w-12 shrink-0 overflow-hidden rounded-lg border border-line bg-sand">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-gold-dark">
                      {p.brand}
                    </p>
                    <p className="font-display text-[15px] text-ink">{p.name}</p>
                  </div>
                  <span className="text-sm font-semibold text-ink">
                    {formatBDT(p.price)}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
