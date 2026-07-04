import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CATEGORIES } from "@/data/products";

export default function ShopByCategory() {
  return (
    <section className="bg-sand/60 py-20 lg:py-28">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Explore the Edit"
          title="Shop by Category"
          description="From iconic perfumes to barrier-loving skincare, find your ritual."
          className="reveal"
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.name}
              href={`/shop?category=${encodeURIComponent(cat.name)}`}
              className={`reveal group relative overflow-hidden rounded-2xl border border-line shadow-soft card-lift hover:shadow-card ${
                i === 0 ? "col-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2" : ""
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className={`relative ${
                  i === 0 ? "aspect-[4/3] lg:aspect-[4/5]" : "aspect-square"
                } overflow-hidden bg-sand`}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <h3 className="font-display text-xl text-cream sm:text-2xl">
                    {cat.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.12em] text-cream/70">
                    {cat.blurb}
                  </p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
