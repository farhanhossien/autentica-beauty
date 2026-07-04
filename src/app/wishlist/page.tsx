"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const { wishlist } = useStore();
  const items = products.filter((p) => wishlist.includes(p.slug));

  return (
    <div className="bg-cream">
      <section className="border-b border-line bg-sand/50">
        <div className="container-luxe py-14 text-center lg:py-16">
          <p className="eyebrow mb-3">Saved for Later</p>
          <h1 className="heading-display text-4xl lg:text-5xl">Your Wishlist</h1>
        </div>
      </section>

      <div className="container-luxe py-14 lg:py-16">
        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sand text-ink/40">
              <Heart size={26} />
            </span>
            <h2 className="font-display text-2xl text-ink">
              Your wishlist is empty
            </h2>
            <p className="max-w-sm text-sm text-body/60">
              Tap the heart on any product to save it here for later.
            </p>
            <Link href="/shop" className="btn-primary mt-2">
              Discover Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
