"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ProductCard";
import QuickView from "@/components/QuickView";
import { products, type Product } from "@/data/products";

export default function BestSellers() {
  const scroller = useRef<HTMLDivElement>(null);
  const [quick, setQuick] = useState<Product | null>(null);
  const best = products.filter((p) => p.bestSeller);

  const scroll = (dir: "left" | "right") => {
    const el = scroller.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-sand/60 py-20 lg:py-28">
      <div className="container-luxe">
        <div className="flex items-end justify-between gap-4">
          <SectionHeader
            eyebrow="Loved by Many"
            title="Best Sellers"
            description="The icons our customers reorder — perfumes, foundations and cult skincare."
            className="reveal"
          />
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              aria-label="Previous"
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next"
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {best.map((product) => (
            <div
              key={product.slug}
              className="w-[70%] shrink-0 snap-start sm:w-[45%] lg:w-[calc((100%-3.75rem)/4)]"
            >
              <ProductCard product={product} onQuickView={setQuick} />
            </div>
          ))}
        </div>
      </div>

      <QuickView product={quick} onClose={() => setQuick(null)} />
    </section>
  );
}
