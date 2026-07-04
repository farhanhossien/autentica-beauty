"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  Check,
  Truck,
  ShieldCheck,
  RefreshCw,
  ChevronRight,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Badge } from "@/components/ui/Badge";
import { Stars } from "@/components/ui/Stars";
import ProductCard from "@/components/ProductCard";
import { formatBDT, cn } from "@/lib/utils";
import type { Product } from "@/data/products";

const TABS = ["Description", "Ingredients", "Benefits", "How to Use", "Shipping"] as const;
type Tab = (typeof TABS)[number];

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { addToCart, toggleWishlist, isWished } = useStore();
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<Tab>("Description");
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);
  const wished = isWished(product.slug);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setZoom({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className="bg-cream">
      {/* Breadcrumb */}
      <div className="container-luxe flex items-center gap-1.5 pt-8 text-[12px] text-body/55">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <ChevronRight size={13} />
        <Link href="/shop" className="hover:text-ink">
          Shop
        </Link>
        <ChevronRight size={13} />
        <Link
          href={`/shop?category=${encodeURIComponent(product.category)}`}
          className="hover:text-ink"
        >
          {product.category}
        </Link>
        <ChevronRight size={13} />
        <span className="text-ink">{product.name}</span>
      </div>

      <div className="container-luxe grid gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 sm:flex-row lg:sticky lg:top-28 lg:self-start">
          {product.gallery.length > 1 && (
            <div className="flex gap-3 sm:flex-col">
              {product.gallery.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "relative h-20 w-16 shrink-0 overflow-hidden rounded-xl border bg-sand transition-all",
                    activeImg === i
                      ? "border-ink"
                      : "border-line hover:border-gold/50"
                  )}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          <div
            className="relative aspect-[4/5] flex-1 cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-sand"
            onMouseMove={onMove}
            onMouseLeave={() => setZoom(null)}
          >
            <Image
              src={product.gallery[activeImg]}
              alt={product.name}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 45vw"
              className={cn(
                "object-cover transition-transform duration-200",
                zoom ? "scale-[1.8]" : "scale-100"
              )}
              style={
                zoom
                  ? { transformOrigin: `${zoom.x}% ${zoom.y}%` }
                  : undefined
              }
            />
            <div className="absolute left-4 top-4 flex flex-col gap-1.5">
              {product.badges.slice(0, 2).map((b) => (
                <Badge key={b} label={b} />
              ))}
            </div>
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-gold-dark">
            {product.brand}
          </p>
          <h1 className="mt-2 heading-display text-3xl lg:text-[2.5rem]">
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-3">
            <Stars rating={product.rating} size={16} />
            <span className="text-[13px] text-body/55">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-semibold text-ink">
              {formatBDT(product.price)}
            </span>
            {product.compareAt && (
              <>
                <span className="text-lg text-body/40 line-through">
                  {formatBDT(product.compareAt)}
                </span>
                <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-semibold text-gold-dark">
                  Save {formatBDT(product.compareAt - product.price)}
                </span>
              </>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-body/70">
            <span className="flex items-center gap-1.5">
              <Check size={15} className="text-gold-dark" />
              {product.availability}
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={15} className="text-gold-dark" />
              {product.size}
            </span>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-body/80">
            {product.shortDescription}
          </p>

          {/* Quantity + actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border border-line bg-card">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-12 w-12 items-center justify-center text-ink hover:text-gold-dark"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center font-medium">{qty}</span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="flex h-12 w-12 items-center justify-center text-ink hover:text-gold-dark"
              >
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={() => addToCart(product.slug, qty)}
              className="btn-primary flex-1 min-w-[200px]"
            >
              <ShoppingBag size={16} />
              Add to Cart · {formatBDT(product.price * qty)}
            </button>
            <button
              aria-label="Add to wishlist"
              onClick={() => toggleWishlist(product.slug)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
            >
              <Heart
                size={18}
                className={wished ? "fill-[#c0392b] text-[#c0392b]" : ""}
              />
            </button>
          </div>

          {/* Trust row */}
          <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl border border-line bg-card p-5">
            {[
              { icon: ShieldCheck, label: "100% Authentic" },
              { icon: Truck, label: "Fast Delivery" },
              { icon: RefreshCw, label: "Easy Returns" },
            ].map((t) => (
              <div
                key={t.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <t.icon size={20} className="text-gold-dark" />
                <span className="text-[11px] font-medium text-body/70">
                  {t.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-10">
            <div className="flex flex-wrap gap-1 border-b border-line">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={cn(
                    "relative px-4 py-3 text-[13px] font-medium transition-colors",
                    tab === t ? "text-ink" : "text-body/50 hover:text-ink"
                  )}
                >
                  {t}
                  {tab === t && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gold" />
                  )}
                </button>
              ))}
            </div>
            <div className="pt-6 text-[15px] leading-relaxed text-body/80">
              {tab === "Description" && <p>{product.description}</p>}
              {tab === "Ingredients" && (
                <p className="text-[14px] text-body/70">{product.ingredients}</p>
              )}
              {tab === "Benefits" && (
                <ul className="space-y-3">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {tab === "How to Use" && <p>{product.howToUse}</p>}
              {tab === "Shipping" && (
                <div className="space-y-3">
                  <p>
                    Most items are available on <strong>pre-order</strong> and
                    are sourced directly from Portugal and Europe. Typical
                    pre-order fulfilment is 7–14 days.
                  </p>
                  <p>
                    Fast, tracked delivery across Bangladesh. Free delivery on
                    orders over ৳5,000. Pay securely with bKash, card or cash on
                    delivery.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-line py-16 lg:py-20">
          <div className="container-luxe">
            <h2 className="heading-display text-3xl lg:text-4xl">
              You May Also Like
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sticky mobile add-to-cart */}
      <div className="glass fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-4 border-t border-line px-5 py-3 lg:hidden">
        <div>
          <p className="text-[11px] text-body/55">{product.brand}</p>
          <p className="text-base font-semibold text-ink">
            {formatBDT(product.price)}
          </p>
        </div>
        <button
          onClick={() => addToCart(product.slug, qty)}
          className="btn-primary flex-1"
        >
          <ShoppingBag size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
