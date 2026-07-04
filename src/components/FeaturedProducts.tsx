"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ProductCard";
import QuickView from "@/components/QuickView";
import { products, type Product } from "@/data/products";

export default function FeaturedProducts() {
  const [quick, setQuick] = useState<Product | null>(null);
  const featured = products.filter((p) => p.featured).slice(0, 8);

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Handpicked for You"
          title="Featured Products"
          description="A rotating edit of the season's most-loved authentic imports."
          cta={{ label: "View Shop", href: "/shop" }}
          className="reveal"
        />

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {featured.map((product, i) => (
            <div
              key={product.slug}
              className="reveal"
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
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
