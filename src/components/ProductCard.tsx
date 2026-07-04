"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Badge } from "@/components/ui/Badge";
import { Stars } from "@/components/ui/Stars";
import { formatBDT, cn } from "@/lib/utils";
import type { Product } from "@/data/products";

export default function ProductCard({
  product,
  onQuickView,
  className,
}: {
  product: Product;
  onQuickView?: (p: Product) => void;
  className?: string;
}) {
  const { addToCart, toggleWishlist, isWished } = useStore();
  const wished = isWished(product.slug);
  const topBadge = product.badges.find((b) =>
    ["Best Seller", "Trending", "New Arrival", "Limited Stock"].includes(b)
  );

  return (
    <div className={cn("group flex flex-col", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-card shadow-soft card-lift group-hover:-translate-y-1.5 group-hover:shadow-card">
        {/* top badge + wishlist */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between p-3.5">
          {topBadge ? <Badge label={topBadge} /> : <span />}
          <button
            aria-label="Add to wishlist"
            onClick={() => toggleWishlist(product.slug)}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur transition-all hover:bg-white",
              wished ? "text-[#c0392b]" : "text-ink"
            )}
          >
            <Heart size={16} className={wished ? "fill-current" : ""} />
          </button>
        </div>

        {/* image */}
        <Link href={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width:768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
          </div>
        </Link>

        {/* hover actions */}
        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-4 p-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <button
              onClick={() => addToCart(product.slug)}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-gold-dark"
            >
              <ShoppingBag size={14} />
              Add to Cart
            </button>
            {onQuickView && (
              <button
                aria-label="Quick view"
                onClick={() => onQuickView(product)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-soft transition-colors hover:bg-sand"
              >
                <Eye size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* meta */}
      <div className="flex flex-1 flex-col px-1 pt-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-gold-dark">
          {product.brand}
        </p>
        <Link
          href={`/product/${product.slug}`}
          className="mt-1 font-display text-[17px] leading-snug text-ink transition-colors hover:text-gold-dark"
        >
          {product.name}
        </Link>
        <div className="mt-1.5 flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-[11px] text-body/50">({product.reviews})</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-[15px] font-semibold text-ink">
            {formatBDT(product.price)}
          </span>
          {product.compareAt && (
            <span className="text-[13px] text-body/40 line-through">
              {formatBDT(product.compareAt)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
