import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Plane, Truck, Lock, Sparkles } from "lucide-react";

export const metadata = {
  title: "About — Autêntica",
  description:
    "Autêntica imports 100% authentic European beauty from Portugal to Bangladesh.",
};

const VALUES = [
  { icon: Plane, title: "Imported from Portugal", text: "Sourced directly from Portugal and Europe — never local counterfeits." },
  { icon: ShieldCheck, title: "100% Authentic", text: "Every batch verified genuine from official European retailers." },
  { icon: Truck, title: "Delivered with Care", text: "Fast, tracked, beautifully packaged delivery across Bangladesh." },
  { icon: Lock, title: "Secure & Trusted", text: "Safe payments with bKash, cards and cash on delivery." },
];

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="border-b border-line bg-sand/50">
        <div className="container-luxe grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow mb-4">Our Story</p>
            <h1 className="heading-display text-4xl lg:text-6xl">
              Authentic Beauty,
              <span className="block text-gold">imported with love.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-body/75">
              Autêntica was born from a simple belief: everyone in Bangladesh
              deserves access to genuine, world-class European beauty — without
              the fear of fakes. We hand-select every product from Portugal and
              across Europe, so you can shop with total confidence.
            </p>
            <Link href="/shop" className="btn-primary mt-8">
              Explore the Collection
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-card">
            <Image
              src="/products/dior-sauvage-edp.jpg"
              alt="Autêntica authentic imports"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">What We Stand For</p>
            <h2 className="heading-display text-3xl lg:text-4xl">
              A promise of authenticity
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-line bg-card p-8 shadow-soft"
              >
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold-dark">
                  <v.icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-xl text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body/60">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-ink py-16 text-cream">
        <div className="container-luxe grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {[
            { n: "6+", l: "European Houses" },
            { n: "100%", l: "Authentic Guarantee" },
            { n: "64", l: "Districts Delivered" },
            { n: "5★", l: "Customer Rating" },
          ].map((s) => (
            <div key={s.l}>
              <p className="heading-display text-4xl text-gold lg:text-5xl">
                {s.n}
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-cream/60">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center lg:py-28">
        <div className="container-luxe">
          <Sparkles size={28} className="mx-auto text-gold" />
          <h2 className="heading-display mx-auto mt-4 max-w-2xl text-3xl lg:text-4xl">
            Ready to discover your new signature?
          </h2>
          <Link href="/shop" className="btn-primary mt-8">
            Shop Autêntica
          </Link>
        </div>
      </section>
    </div>
  );
}
