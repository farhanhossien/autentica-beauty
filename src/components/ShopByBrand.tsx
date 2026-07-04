import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BRANDS } from "@/data/products";

export default function ShopByBrand() {
  return (
    <section id="brands" className="bg-cream py-20 lg:py-28">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Curated Houses"
          title="Shop by Brand"
          description="Authentic labels from across Europe — from clinical skincare to couture fragrance."
          cta={{ label: "All Brands", href: "/shop" }}
          className="reveal"
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {BRANDS.map((brand, i) => (
            <Link
              key={brand.name}
              href={`/shop?brand=${encodeURIComponent(brand.name)}`}
              className="reveal group flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-line bg-card px-4 text-center shadow-soft card-lift hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-display text-lg leading-tight text-ink transition-colors group-hover:text-gold-dark sm:text-xl">
                {brand.name}
              </span>
              <span className="mt-2 text-[10px] uppercase tracking-[0.14em] text-body/50">
                {brand.tagline}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
