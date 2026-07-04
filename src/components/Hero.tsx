"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Plane, Truck, ArrowRight } from "lucide-react";

const ASSURANCES = [
  { icon: ShieldCheck, title: "100% Authentic", sub: "Original Products" },
  { icon: Plane, title: "Imported from Portugal", sub: "Trusted Source" },
  { icon: Truck, title: "Fast Delivery", sub: "Across Bangladesh" },
];

// Products standing together on the podium (matches the composed reference).
// height = relative bottle height, z = stacking, front = sits ahead of podium
const LINEUP = [
  { src: "/products/dior-sauvage-elixir.jpg", alt: "Dior Sauvage Elixir", w: 116, h: 200, z: 20, dy: 0, rot: -1 },
  { src: "/products/jpg-le-male-elixir.jpg", alt: "Jean Paul Gaultier Le Male Elixir", w: 120, h: 250, z: 10, dy: -26, rot: 0 },
  { src: "/products/zara-immortal-vanilla.jpg", alt: "ZARA Immortal Vanilla", w: 104, h: 232, z: 10, dy: -18, rot: 0 },
  { src: "/products/kiko-unlimited-foundation.jpg", alt: "KIKO Unlimited Foundation", w: 118, h: 210, z: 15, dy: -4, rot: 1 },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* ambient warm glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-gold/25 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-sand to-transparent blur-3xl" />

      <div className="container-luxe relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-10 lg:py-20">
        {/* Left */}
        <div className="relative z-10 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-5"
          >
            Imported with Care · Chosen for You
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="heading-display text-[2.6rem] leading-[1.06] sm:text-6xl lg:text-[4.1rem]"
          >
            Authentic European Beauty.
            <span className="mt-2 block text-gold">Imported from Portugal.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-body/75"
          >
            Discover original perfumes, skincare and makeup from the world&apos;s
            most trusted European houses — carefully selected and delivered from
            Portugal to Bangladesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link href="/shop" className="btn-primary group">
              Shop Now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link href="/#brands" className="btn-outline">
              Explore Brands
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4"
          >
            {ASSURANCES.map((item) => (
              <li key={item.title} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/12 text-gold-dark">
                  <item.icon size={17} strokeWidth={1.6} />
                </span>
                <span className="leading-tight">
                  <span className="block text-[13px] font-semibold text-ink">
                    {item.title}
                  </span>
                  <span className="block text-[11px] text-body/55">
                    {item.sub}
                  </span>
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: unified podium composition */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="relative overflow-hidden rounded-[2rem] border border-line/70 shadow-card"
            style={{
              background:
                "radial-gradient(120% 90% at 70% 15%, #f3ece1 0%, #e9ddca 45%, #ddccb2 100%)",
            }}
          >
            {/* soft window light */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-black/5" />
            <div className="pointer-events-none absolute -left-10 top-6 h-40 w-40 rounded-full bg-white/40 blur-3xl" />

            {/* authenticity chip */}
            <div className="absolute right-4 top-4 z-40 flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-glass backdrop-blur">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-ink">
                <ShieldCheck size={13} />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
                100% Authentic
              </span>
            </div>

            {/* stage */}
            <div className="relative flex h-[400px] items-end justify-center px-6 sm:h-[460px] lg:h-[520px]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex items-end justify-center gap-[-8px]"
              >
                {LINEUP.map((p, i) => (
                  <motion.div
                    key={p.src}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.3 + i * 0.12 }}
                    className="relative -mx-2"
                    style={{
                      width: p.w,
                      zIndex: p.z,
                      transform: `translateY(${p.dy}px) rotate(${p.rot}deg)`,
                    }}
                  >
                    <div
                      className="relative overflow-hidden rounded-[0.9rem] shadow-[0_24px_40px_-18px_rgba(17,17,17,0.5)] ring-1 ring-black/5"
                      style={{ height: p.h }}
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        width={p.w * 2}
                        height={p.h * 2}
                        priority={i < 2}
                        className="h-full w-full object-cover"
                      />
                      {/* warm veil to unify the tiles into one scene */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#c9b696]/35 via-transparent to-white/10 mix-blend-multiply" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent" />
                    </div>
                  </motion.div>
                ))}

                {/* The Ordinary serum — in front, centre */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.75 }}
                  className="absolute bottom-0 left-1/2 z-30 w-[86px] -translate-x-1/2"
                >
                  <div className="overflow-hidden rounded-[0.8rem] shadow-[0_22px_36px_-16px_rgba(17,17,17,0.55)] ring-1 ring-black/5">
                    <Image
                      src="/products/ordinary-niacinamide.jpg"
                      alt="The Ordinary Niacinamide"
                      width={180}
                      height={260}
                      className="h-[150px] w-full object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* stone podium */}
              <div className="absolute bottom-8 left-1/2 h-6 w-[78%] -translate-x-1/2">
                <div className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-[#e7dcc8] to-[#c9b696] shadow-[0_20px_36px_-14px_rgba(17,17,17,0.45)]" />
                <div className="absolute inset-x-10 top-2 h-4 rounded-[50%] bg-black/10 blur-md" />
              </div>
            </div>
          </motion.div>

          {/* caption strip like the reference */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[12px] text-body/60">
            <span className="h-px w-8 bg-line" />
            Dior · Jean Paul Gaultier · ZARA · KIKO · The Ordinary
            <span className="h-px w-8 bg-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
