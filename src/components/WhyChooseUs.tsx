import { Plane, ShieldCheck, Truck, Lock } from "lucide-react";

const ITEMS = [
  {
    icon: Plane,
    title: "Imported from Portugal",
    text: "Every product is sourced directly from Portugal and Europe — no local counterfeits.",
  },
  {
    icon: ShieldCheck,
    title: "100% Authentic",
    text: "Guaranteed genuine. Batch-checked originals from official European retailers.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Reliable nationwide delivery across Bangladesh, carefully packaged with care.",
  },
  {
    icon: Lock,
    title: "Secure Payment",
    text: "Safe checkout with bKash, cards and cash on delivery. Your data stays protected.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ink py-20 text-cream lg:py-28">
      <div className="container-luxe">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">The Autêntica Promise</p>
          <h2 className="heading-display text-3xl text-cream sm:text-4xl lg:text-[2.75rem]">
            Why Choose Us
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-cream/60">
            A luxury standard of authenticity, service and trust — the way
            European beauty is meant to be experienced.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="reveal group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.06]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                <item.icon size={22} strokeWidth={1.5} />
              </span>
              <h3 className="font-display text-xl text-cream">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/55">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
