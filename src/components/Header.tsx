"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Perfume", href: "/shop?category=Perfume" },
  { label: "Skincare", href: "/shop?category=Skincare" },
  { label: "Makeup", href: "/shop?category=Makeup" },
  { label: "Brands", href: "/#brands" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const { cartCount, wishlist, setCartOpen, setSearchOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-500",
        scrolled
          ? "glass border-b border-line/70 shadow-glass"
          : "bg-cream border-b border-transparent"
      )}
    >
      <div className="container-luxe flex h-[72px] items-center justify-between">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden -ml-1 p-2 text-ink"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>
          <Link href="/" className="group flex flex-col leading-none">
            <span className="heading-display text-2xl tracking-tight">
              Autêntica
            </span>
            <span className="hidden sm:block text-[9px] uppercase tracking-[0.3em] text-gold mt-0.5">
              Imported from Portugal
            </span>
          </Link>
        </div>

        {/* Center: nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative text-[13px] font-medium text-body transition-colors hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="p-2.5 text-ink transition-colors hover:text-gold-dark"
          >
            <Search size={19} />
          </button>
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative p-2.5 text-ink transition-colors hover:text-gold-dark"
          >
            <Heart size={19} />
            {wishlist.length > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-ink">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link
            href="/account"
            aria-label="Account"
            className="hidden sm:block p-2.5 text-ink transition-colors hover:text-gold-dark"
          >
            <User size={19} />
          </Link>
          <button
            aria-label="Cart"
            onClick={() => setCartOpen(true)}
            className="relative p-2.5 text-ink transition-colors hover:text-gold-dark"
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <span className="absolute right-0.5 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[9px] font-bold text-cream">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-[82%] max-w-sm bg-cream shadow-card transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <span className="heading-display text-xl">Autêntica</span>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-line/60 py-4 font-display text-lg text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pt-4">
            <p className="eyebrow mb-2">Imported from Portugal</p>
            <p className="text-sm text-body/70">
              100% authentic European beauty, delivered across Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
