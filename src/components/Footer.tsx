import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const LINKS = {
  Shop: [
    { label: "All Products", href: "/shop" },
    { label: "Perfume", href: "/shop?category=Perfume" },
    { label: "Skincare", href: "/shop?category=Skincare" },
    { label: "Makeup", href: "/shop?category=Makeup" },
    { label: "Gift Sets", href: "/shop?category=Gift Sets" },
  ],
  "Customer Service": [
    { label: "Track Order", href: "/account" },
    { label: "Shipping & Delivery", href: "/contact" },
    { label: "Returns & Refunds", href: "/contact" },
    { label: "Authenticity Guarantee", href: "/about" },
    { label: "FAQ", href: "/contact" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Brands", href: "/#brands" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/about" },
    { label: "Terms of Service", href: "/about" },
  ],
};

const PAYMENTS = ["VISA", "Mastercard", "bKash", "Cash on Delivery"];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-luxe py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <span className="heading-display text-3xl text-cream">Autêntica</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
              Authentic Beauty. Imported from Portugal. We bring 100% genuine
              European skincare, makeup and perfume to Bangladesh.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-cream/60">
              <p className="flex items-center gap-2.5">
                <MapPin size={15} className="text-gold" /> Dhaka, Bangladesh
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={15} className="text-gold" /> +880 1XXX-XXXXXX
              </p>
              <p className="flex items-center gap-2.5">
                <Mail size={15} className="text-gold" /> hello@autentica.bd
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                {title}
              </h4>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payments */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[12px] uppercase tracking-[0.14em] text-cream/45">
              We Accept
            </span>
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-cream/80"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[12px] text-cream/45">
            <span className="rounded-full border border-gold/40 px-3 py-1 text-gold">
              🇵🇹 Imported from Portugal
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-2 py-6 text-[12px] text-cream/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Autêntica. All rights reserved.</p>
          <p>Crafted with care · 100% Authentic European Beauty</p>
        </div>
      </div>
    </footer>
  );
}
