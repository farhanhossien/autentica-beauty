"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#eee3d1]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 12% 0%, rgba(255, 251, 238, 0.92) 0%, rgba(255, 248, 232, 0.54) 30%, rgba(238, 227, 209, 0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-45"
        style={{
          background:
            "linear-gradient(118deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 24%, rgba(255,255,255,0) 48%)",
        }}
      />

      <div className="container-luxe relative grid items-center gap-8 py-14 lg:grid-cols-[42%_58%] lg:gap-0 lg:py-20">
        <div className="relative z-10 max-w-xl lg:pr-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-5"
          >
            Imported with Care / Chosen for You
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="heading-display text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[3.9rem]"
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
            Luxury skincare, premium makeup and iconic perfumes, carefully
            selected authentic European beauty, delivered from Portugal to
            Bangladesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link href="/shop" className="btn-primary">
              Shop Now
            </Link>
            <Link href="/#brands" className="btn-outline">
              Explore Brands
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[12px] font-medium uppercase tracking-[0.14em] text-ink/55"
          >
            <span>100% Authentic</span>
            <span>Portugal Imported</span>
            <span>Fast Delivery</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.18 }}
          className="relative min-h-[420px] overflow-visible sm:min-h-[560px] lg:min-h-[650px]"
        >
          <Image
            src="/hero/luxury-products-hero.png"
            alt="Luxury perfume, skincare serum and makeup products on beige marble podiums"
            width={1500}
            height={1100}
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="absolute left-1/2 top-1/2 h-auto w-[112%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:w-[104%] lg:left-[52%] lg:w-[108%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
