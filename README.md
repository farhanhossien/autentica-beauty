# Autêntica — Luxury Beauty E-commerce

**Authentic Beauty. Imported from Portugal.**

A world-class, production-ready luxury beauty storefront built for Autêntica —
importing 100% authentic European skincare, makeup and perfume to Bangladesh.
Designed in the spirit of Sephora, Cult Beauty, Notino and Zara Beauty.

## Tech Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** — custom luxury design tokens (cream / ink / gold palette)
- **Framer Motion** — hero, quick-view and drawer animations
- **Lucide Icons**
- Playfair Display (headings) + Inter (body) via `next/font`

## Getting Started

```bash
npm install

# Development
npm run dev          # http://localhost:3000

# Production (recommended on low-memory machines)
npm run build
npm run start
```

> **Low on RAM?** `next.config.js` limits build workers (`cpus: 1`) to avoid
> out-of-memory errors. If `npm run dev` struggles, run the production build and
> `npm run start` instead — it is much lighter.

## Features

- **Home** — sticky glass header, split hero with floating products on stone
  podiums, Shop by Brand, Shop by Category, Featured Products, Why Choose Us,
  Best Sellers carousel, Reviews, Instagram grid, Newsletter, dark footer.
- **Shop** — live filtering by category, brand, price and availability, plus
  sorting. Deep-links via `?category=` / `?brand=`.
- **Product page** — image gallery with hover-zoom, thumbnails, tabs
  (Description / Ingredients / Benefits / How to Use / Shipping), sticky
  add-to-cart, related products.
- **Cart & Wishlist** — slide-in cart drawer and wishlist, persisted to
  `localStorage`.
- **Search** — instant modal search across name, brand and category.
- Fully responsive (mobile / tablet / desktop) with luxury micro-animations.

## Product Images

All 13 uploaded product photos live in `public/products/` and are wired
throughout the site (hero, categories, cards, product pages, gallery). To add or
swap products, edit `src/data/products.ts` — each entry references an image path
under `/products/`.

Brands represented: **Dior**, **Jean Paul Gaultier**, **KIKO Milano**,
**CeraVe**, **The Ordinary**, **ZARA**.

## Project Structure

```
src/
  app/            # routes: /, /shop, /product/[slug], /about, /contact, /wishlist, /account
  components/     # Header, Hero, ProductCard, CartDrawer, SearchModal, sections…
    ui/           # Badge, Stars, SectionHeader
  context/        # StoreContext — cart + wishlist state
  data/           # products.ts — catalogue, brands, categories
  lib/            # utils (cn, formatBDT)
public/products/  # authentic product photography
```
