"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { formatBDT } from "@/lib/utils";

export default function CartDrawer() {
  const {
    cartOpen,
    setCartOpen,
    cartProducts,
    cartTotal,
    cartCount,
    setQty,
    removeFromCart,
  } = useStore();

  const shipping = cartTotal > 0 && cartTotal < 5000 ? 120 : 0;

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-card"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-ink" />
                <h2 className="font-display text-xl text-ink">
                  Your Bag{" "}
                  <span className="text-body/50">({cartCount})</span>
                </h2>
              </div>
              <button
                aria-label="Close cart"
                onClick={() => setCartOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-sand"
              >
                <X size={20} />
              </button>
            </div>

            {cartProducts.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sand text-ink/40">
                  <ShoppingBag size={26} />
                </span>
                <p className="font-display text-xl text-ink">Your bag is empty</p>
                <p className="max-w-xs text-sm text-body/60">
                  Discover authentic European beauty and start your collection.
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="btn-primary mt-2"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  {cartProducts.map(({ product, qty }) => (
                    <div
                      key={product.slug}
                      className="flex gap-4 border-b border-line/70 py-5"
                    >
                      <Link
                        href={`/product/${product.slug}`}
                        onClick={() => setCartOpen(false)}
                        className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl border border-line bg-sand"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </Link>
                      <div className="flex flex-1 flex-col">
                        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-gold-dark">
                          {product.brand}
                        </p>
                        <p className="font-display text-[15px] leading-tight text-ink">
                          {product.name}
                        </p>
                        <p className="mt-0.5 text-[12px] text-body/50">
                          {product.size}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-line">
                            <button
                              aria-label="Decrease"
                              onClick={() => setQty(product.slug, qty - 1)}
                              className="flex h-8 w-8 items-center justify-center text-ink hover:text-gold-dark"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-7 text-center text-sm font-medium">
                              {qty}
                            </span>
                            <button
                              aria-label="Increase"
                              onClick={() => setQty(product.slug, qty + 1)}
                              className="flex h-8 w-8 items-center justify-center text-ink hover:text-gold-dark"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <span className="text-sm font-semibold text-ink">
                            {formatBDT(product.price * qty)}
                          </span>
                        </div>
                      </div>
                      <button
                        aria-label="Remove"
                        onClick={() => removeFromCart(product.slug)}
                        className="self-start text-body/40 transition-colors hover:text-[#c0392b]"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-line bg-card px-6 py-5">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-body/70">
                      <span>Subtotal</span>
                      <span>{formatBDT(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between text-body/70">
                      <span>Delivery</span>
                      <span>{shipping === 0 ? "Free" : formatBDT(shipping)}</span>
                    </div>
                    <div className="flex justify-between border-t border-line pt-3 text-base font-semibold text-ink">
                      <span>Total</span>
                      <span>{formatBDT(cartTotal + shipping)}</span>
                    </div>
                  </div>
                  <button className="btn-primary mt-5 w-full">
                    Proceed to Checkout
                  </button>
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-body/50">
                    <ShieldCheck size={13} className="text-gold-dark" />
                    Secure checkout · 100% Authentic
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
