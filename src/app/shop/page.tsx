import { Suspense } from "react";
import ShopClient from "@/components/ShopClient";

export const metadata = {
  title: "Shop All — Autêntica",
  description:
    "Browse authentic imported perfume, skincare and makeup. Filter by brand, category, price and availability.",
};

export default function ShopPage({
  searchParams,
}: {
  searchParams: { category?: string; brand?: string };
}) {
  return (
    <div className="bg-cream">
      <div className="border-b border-line bg-sand/50">
        <div className="container-luxe py-12 text-center lg:py-16">
          <p className="eyebrow mb-3">The Full Collection</p>
          <h1 className="heading-display text-4xl lg:text-5xl">Shop All</h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-body/70">
            100% authentic European beauty, imported from Portugal to Bangladesh.
            Most items available on pre-order.
          </p>
        </div>
      </div>

      <Suspense>
        <ShopClient
          initialCategory={searchParams.category}
          initialBrand={searchParams.brand}
        />
      </Suspense>
    </div>
  );
}
