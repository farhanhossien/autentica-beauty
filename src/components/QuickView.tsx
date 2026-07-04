"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag, Heart, Check } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Badge } from "@/components/ui/Badge";
import { Stars } from "@/components/ui/Stars";
import { formatBDT } from "@/lib/utils";
import type { Product } from "@/data/products";

export default function QuickView({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { addToCart, toggleWishlist, isWished } = useStore();

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-card shadow-card md:grid-cols-2"
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink backdrop-blur transition-colors hover:bg-white"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-square md:aspect-auto bg-sand">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col overflow-y-auto p-7">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {product.badges.map((b) => (
                  <Badge key={b} label={b} />
                ))}
              </div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-gold-dark">
                {product.brand}
              </p>
              <h3 className="mt-1 font-display text-2xl text-ink">
                {product.name}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <Stars rating={product.rating} />
                <span className="text-[11px] text-body/50">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-xl font-semibold text-ink">
                  {formatBDT(product.price)}
                </span>
                {product.compareAt && (
                  <span className="text-sm text-body/40 line-through">
                    {formatBDT(product.compareAt)}
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-body/75">
                {product.shortDescription}
              </p>

              <div className="mt-4 flex items-center gap-2 text-[13px] text-body/70">
                <Check size={15} className="text-gold-dark" />
                {product.availability} · {product.size}
              </div>

              <div className="mt-auto flex gap-2 pt-6">
                <button
                  onClick={() => {
                    addToCart(product.slug);
                    onClose();
                  }}
                  className="btn-primary flex-1"
                >
                  <ShoppingBag size={15} />
                  Add to Cart
                </button>
                <button
                  aria-label="Wishlist"
                  onClick={() => toggleWishlist(product.slug)}
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
                >
                  <Heart
                    size={18}
                    className={isWished(product.slug) ? "fill-[#c0392b] text-[#c0392b]" : ""}
                  />
                </button>
              </div>
              <Link
                href={`/product/${product.slug}`}
                onClick={onClose}
                className="mt-3 text-center text-[12px] font-medium uppercase tracking-[0.12em] text-body/60 underline-offset-4 hover:text-ink hover:underline"
              >
                View full details
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
