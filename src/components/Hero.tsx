"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const ASSURANCES = [
  "100% Authentic",
  "Imported from Portugal",
  "Secure Checkout",
  "Fast Delivery",
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* ambient warm glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-gold/25 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-sand to-transparent blur-3xl" />

      <div className="container-luxe relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Left */}
        <div className="relative z-10 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-5"
          >
            Authentic Beauty · Imported from Portugal
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
            Luxury skincare, premium makeup and iconic perfumes — carefully
            selected authentic European beauty, delivered from Portugal to
            Bangladesh.
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
            className="mt-10 grid max-w-md grid-cols-2 gap-x-6 gap-y-3"
          >
            {ASSURANCES.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[13px] text-body/80">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <Check size={12} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: product composition */}
        <div className="relative h-[440px] sm:h-[520px] lg:h-[600px]">
          {/* Hero product — Dior Sauvage */}
          <Podium
            className="absolute left-1/2 top-6 z-20 w-[58%] -translate-x-1/2"
            delay={0.2}
            float
          >
            <Image
              src="/products/dior-sauvage-edp.jpg"
              alt="Dior Sauvage Eau de Parfum"
              width={520}
              height={720}
              priority
              className="h-auto w-full rounded-[1.4rem] object-cover shadow-card"
            />
          </Podium>

          {/* Left product — Le Male Elixir */}
          <Podium
            className="absolute bottom-10 left-0 z-30 w-[42%]"
            delay={0.45}
            float
            floatDelay={0.8}
          >
            <Image
              src="/products/jpg-le-male-elixir.jpg"
              alt="Jean Paul Gaultier Le Male Elixir"
              width={400}
              height={500}
              className="h-auto w-full rounded-[1.2rem] object-cover shadow-card"
            />
          </Podium>

          {/* Right product — The Ordinary */}
          <Podium
            className="absolute bottom-16 right-0 z-30 w-[38%]"
            delay={0.6}
            float
            floatDelay={1.4}
          >
            <Image
              src="/products/kiko-unlimited-foundation.jpg"
              alt="KIKO Milano Unlimited Foundation"
              width={360}
              height={480}
              className="h-auto w-full rounded-[1.2rem] object-cover shadow-card"
            />
          </Podium>

          {/* floating authenticity chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease }}
            className="absolute right-2 top-4 z-40 flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-glass backdrop-blur"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-ink">
              <Check size={13} strokeWidth={3} />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
              100% Authentic
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Podium({
  children,
  className,
  delay = 0,
  float = false,
  floatDelay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  float?: boolean;
  floatDelay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
    >
      <motion.div
        animate={float ? { y: [0, -14, 0] } : undefined}
        transition={
          float
            ? { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: floatDelay }
            : undefined
        }
      >
        {children}
        {/* stone podium */}
        <div className="relative mx-auto -mt-4 h-6 w-[86%]">
          <div className="absolute inset-x-0 top-1 mx-auto h-4 w-full rounded-[50%] bg-gradient-to-b from-[#e5ddd0] to-[#cbc0ad] shadow-[0_18px_30px_-12px_rgba(17,17,17,0.35)]" />
          <div className="absolute inset-x-6 top-3 mx-auto h-3 rounded-[50%] bg-ink/10 blur-md" />
        </div>
      </motion.div>
    </motion.div>
  );
}
