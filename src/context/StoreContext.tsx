"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/data/products";

export interface CartItem {
  slug: string;
  qty: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  cartOpen: boolean;
  searchOpen: boolean;
  addToCart: (slug: string, qty?: number) => void;
  removeFromCart: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  toggleWishlist: (slug: string) => void;
  isWished: (slug: string) => boolean;
  setCartOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  cartCount: number;
  cartTotal: number;
  cartProducts: { product: Product; qty: number }[];
}

const StoreContext = createContext<StoreState | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem("autentica_cart");
      const w = localStorage.getItem("autentica_wishlist");
      if (c) setCart(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("autentica_cart", JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated)
      localStorage.setItem("autentica_wishlist", JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const addToCart = (slug: string, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.slug === slug);
      if (existing)
        return prev.map((i) =>
          i.slug === slug ? { ...i, qty: i.qty + qty } : i
        );
      return [...prev, { slug, qty }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (slug: string) =>
    setCart((prev) => prev.filter((i) => i.slug !== slug));

  const setQty = (slug: string, qty: number) =>
    setCart((prev) =>
      qty <= 0
        ? prev.filter((i) => i.slug !== slug)
        : prev.map((i) => (i.slug === slug ? { ...i, qty } : i))
    );

  const toggleWishlist = (slug: string) =>
    setWishlist((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );

  const isWished = (slug: string) => wishlist.includes(slug);

  const cartProducts = useMemo(
    () =>
      cart
        .map((item) => {
          const product = products.find((p) => p.slug === item.slug);
          return product ? { product, qty: item.qty } : null;
        })
        .filter(Boolean) as { product: Product; qty: number }[],
    [cart]
  );

  const cartCount = cart.reduce((n, i) => n + i.qty, 0);
  const cartTotal = cartProducts.reduce(
    (sum, { product, qty }) => sum + product.price * qty,
    0
  );

  const value: StoreState = {
    cart,
    wishlist,
    cartOpen,
    searchOpen,
    addToCart,
    removeFromCart,
    setQty,
    toggleWishlist,
    isWished,
    setCartOpen,
    setSearchOpen,
    cartCount,
    cartTotal,
    cartProducts,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
