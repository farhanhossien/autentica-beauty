"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Plane, Truck, ArrowRight } from "lucide-react";

const ASSURANCES = [
  { icon: ShieldCheck, title: "100% Authentic", sub: "Original Products" },
  { icon: Plane, title: "Imported from Portugal", sub: "Trusted Source" },
  { icon: Truck, title: "Fast Delivery", sub: "Across Bangladesh" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(130% 120% at 18% 0%, #f8f2e8 0%, #f0e7d7 48%, #e7dbc6 100%)",
      }}
    >
      {/* soft sunlight from top-left */}
      <div className="pointer-events-none absolute -left-24 -top-32 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(255,252,244,0.9),rgba(255,252,244,0)_65%)] blur-2xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(200,169,106,0.12),transparent_70%)] blur-2xl" />

      <div className="container-luxe relative grid items-center gap-6 py-14 lg:grid-cols-[42%_58%] lg:gap-4 lg:py-20">
        {/* LEFT — text only (≈42%) */}
        <div className="relative z-10 max-w-xl lg:pr-6">
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
            className="mt-10 flex flex-wrap gap-x-7 gap-y-4"
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

        {/* RIGHT — product composition only (≈58%) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <HeroScene />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Luxury studio composition — vector, transparent, one light source  */
/* ------------------------------------------------------------------ */

function HeroScene() {
  return (
    <svg
      viewBox="0 0 760 680"
      className="h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Autêntica luxury fragrance and beauty composition on marble podiums"
    >
      <defs>
        {/* marble */}
        <linearGradient id="marbleTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7f0e3" />
          <stop offset="1" stopColor="#e6dac3" />
        </linearGradient>
        <linearGradient id="marbleSide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e3d7bf" />
          <stop offset="1" stopColor="#cbbb9d" />
        </linearGradient>
        {/* glass / liquids */}
        <linearGradient id="dior" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38425a" />
          <stop offset="0.5" stopColor="#141c2c" />
          <stop offset="1" stopColor="#080d16" />
        </linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f7e6a8" />
          <stop offset="0.42" stopColor="#e6c264" />
          <stop offset="0.72" stopColor="#c69a3c" />
          <stop offset="1" stopColor="#9c7325" />
        </linearGradient>
        <linearGradient id="amber" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8a4a26" />
          <stop offset="0.5" stopColor="#5a2c15" />
          <stop offset="1" stopColor="#33180c" />
        </linearGradient>
        <linearGradient id="frost" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3e8d8" />
          <stop offset="1" stopColor="#dcc9ae" />
        </linearGradient>
        <linearGradient id="serum" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1f3ef" />
          <stop offset="1" stopColor="#d2d8cf" />
        </linearGradient>
        <linearGradient id="silver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e7ebf0" />
          <stop offset="0.5" stopColor="#b9bfc8" />
          <stop offset="1" stopColor="#8b929c" />
        </linearGradient>
        <linearGradient id="capDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2f38" />
          <stop offset="0.5" stopColor="#14171d" />
          <stop offset="1" stopColor="#0a0c10" />
        </linearGradient>
        <linearGradient id="glassHi" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="contact" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#5b4a2c" stopOpacity="0.42" />
          <stop offset="1" stopColor="#5b4a2c" stopOpacity="0" />
        </radialGradient>
        <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id="softer" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      {/* ground grounding shadow for the whole cluster */}
      <ellipse cx="400" cy="575" rx="300" ry="46" fill="url(#contact)" filter="url(#softer)" />

      {/* ---------------- PODIUMS (back to front) ---------------- */}
      {/* center podium (tallest) */}
      <Podium cx={392} topY={452} rx={140} ry={30} baseY={562} />
      {/* right podium (medium) */}
      <Podium cx={606} topY={488} rx={92} ry={21} baseY={562} />
      {/* front-left podium (short) */}
      <Podium cx={228} topY={514} rx={116} ry={24} baseY={572} />

      {/* ---------------- BOTTLES (back to front) ---------------- */}
      {/* Dior Sauvage — dark, left of centre podium */}
      <g transform="translate(300 452)">
        <ellipse cx="0" cy="-3" rx="54" ry="10" fill="url(#contact)" filter="url(#soft)" />
        <rect x="-46" y="-176" width="92" height="176" rx="11" fill="url(#dior)" />
        <rect x="-40" y="-168" width="16" height="150" rx="7" fill="url(#glassHi)" opacity="0.5" />
        <rect x="-15" y="-192" width="30" height="18" rx="3" fill="#0c1119" />
        <rect x="-21" y="-214" width="42" height="24" rx="4" fill="url(#silver)" />
        <rect x="-21" y="-207" width="42" height="2.2" fill="#ffffff" opacity="0.5" />
        <rect x="-21" y="-200" width="42" height="1.8" fill="#000000" opacity="0.18" />
        <text x="0" y="-84" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" letterSpacing="2.5" fill="#e9edf3" opacity="0.85">SAUVAGE</text>
        <text x="0" y="-68" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" letterSpacing="3" fill="#c8cdd6" opacity="0.7">DIOR</text>
      </g>

      {/* Jean Paul Gaultier — gold torso, centre, tallest */}
      <g transform="translate(412 452)">
        <ellipse cx="0" cy="-3" rx="52" ry="10" fill="url(#contact)" filter="url(#soft)" />
        {/* torso body */}
        <path
          d="M -40 0
             C -46 -30 -40 -60 -30 -84
             C -22 -104 -20 -122 -26 -140
             C -32 -158 -30 -176 -18 -196
             C -12 -206 -8 -214 -7 -224
             L 7 -224
             C 8 -214 12 -206 18 -196
             C 30 -176 32 -158 26 -140
             C 20 -122 22 -104 30 -84
             C 40 -60 46 -30 40 0 Z"
          fill="url(#gold)"
        />
        {/* signature ribs */}
        <g stroke="#8a6320" strokeWidth="1.5" opacity="0.5">
          <line x1="-38" y1="-18" x2="38" y2="-18" />
          <line x1="-40" y1="-34" x2="40" y2="-34" />
          <line x1="-38" y1="-50" x2="38" y2="-50" />
          <line x1="-33" y1="-66" x2="33" y2="-66" />
          <line x1="-28" y1="-82" x2="28" y2="-82" />
          <line x1="-27" y1="-98" x2="27" y2="-98" />
          <line x1="-26" y1="-114" x2="26" y2="-114" />
          <line x1="-27" y1="-130" x2="27" y2="-130" />
          <line x1="-24" y1="-150" x2="24" y2="-150" />
          <line x1="-20" y1="-168" x2="20" y2="-168" />
        </g>
        {/* highlight */}
        <path d="M -18 -20 C -24 -70 -20 -120 -12 -180 L -4 -180 C -10 -120 -12 -70 -8 -20 Z" fill="#fff4cf" opacity="0.4" />
        {/* neck + spray cap + ring */}
        <rect x="-9" y="-238" width="18" height="16" rx="3" fill="url(#gold)" />
        <rect x="-13" y="-256" width="26" height="20" rx="4" fill="url(#gold)" />
        <rect x="-13" y="-250" width="26" height="2" fill="#fff4cf" opacity="0.7" />
        <circle cx="-20" cy="-244" r="8" fill="none" stroke="url(#gold)" strokeWidth="3.4" />
      </g>

      {/* ZARA Immortal Vanilla — amber tall, right podium */}
      <g transform="translate(606 488)">
        <ellipse cx="0" cy="-3" rx="44" ry="8" fill="url(#contact)" filter="url(#soft)" />
        <rect x="-38" y="-206" width="76" height="206" rx="12" fill="url(#amber)" />
        <rect x="-30" y="-196" width="13" height="180" rx="6" fill="url(#glassHi)" opacity="0.4" />
        <rect x="26" y="-190" width="7" height="170" rx="3" fill="#1c0d06" opacity="0.5" />
        <rect x="-9" y="-222" width="18" height="18" rx="2" fill="#c69a3c" />
        <rect x="-13" y="-236" width="26" height="16" rx="3" fill="url(#gold)" />
        <text x="0" y="-40" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" letterSpacing="3" fill="#e9c877" opacity="0.9">ZARA</text>
      </g>

      {/* KIKO foundation — frosted, front-left podium */}
      <g transform="translate(216 514)">
        <ellipse cx="0" cy="-3" rx="52" ry="9" fill="url(#contact)" filter="url(#soft)" />
        <rect x="-46" y="-150" width="92" height="150" rx="12" fill="url(#frost)" />
        <rect x="-40" y="-142" width="15" height="130" rx="7" fill="#ffffff" opacity="0.45" />
        {/* black pump */}
        <rect x="-11" y="-168" width="22" height="20" rx="3" fill="url(#capDark)" />
        <rect x="-20" y="-182" width="40" height="16" rx="4" fill="url(#capDark)" />
        <rect x="-30" y="-176" width="12" height="7" rx="2" fill="url(#capDark)" />
        <text x="0" y="-40" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" letterSpacing="2" fill="#5a4a34" opacity="0.85">KIKO</text>
        <text x="0" y="-28" textAnchor="middle" fontFamily="Georgia, serif" fontSize="6" letterSpacing="2.5" fill="#8a7a5c" opacity="0.7">MILANO</text>
      </g>

      {/* The Ordinary serum — small, front-most centre */}
      <g transform="translate(324 536)">
        <ellipse cx="0" cy="-2" rx="34" ry="7" fill="url(#contact)" filter="url(#soft)" />
        <rect x="-29" y="-112" width="58" height="112" rx="9" fill="url(#serum)" />
        <rect x="-24" y="-104" width="10" height="96" rx="5" fill="#ffffff" opacity="0.55" />
        {/* dropper collar + bulb */}
        <rect x="-15" y="-126" width="30" height="16" rx="3" fill="#f4f5f2" />
        <rect x="-15" y="-121" width="30" height="2" fill="#cfd4cb" />
        <rect x="-8" y="-150" width="16" height="26" rx="6" fill="#3a3f3a" />
        <text x="0" y="-46" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7.5" letterSpacing="0.5" fill="#5a5c56" opacity="0.85">The Ordinary</text>
      </g>
    </svg>
  );
}

function Podium({
  cx,
  topY,
  rx,
  ry,
  baseY,
}: {
  cx: number;
  topY: number;
  rx: number;
  ry: number;
  baseY: number;
}) {
  return (
    <g>
      {/* contact shadow on ground */}
      <ellipse cx={cx} cy={baseY + 6} rx={rx * 1.05} ry={ry * 0.7} fill="url(#contact)" filter="url(#soft)" />
      {/* cylinder side */}
      <path
        d={`M ${cx - rx} ${topY} A ${rx} ${ry} 0 0 0 ${cx + rx} ${topY} L ${cx + rx} ${baseY} A ${rx} ${ry} 0 0 1 ${cx - rx} ${baseY} Z`}
        fill="url(#marbleSide)"
      />
      {/* top surface */}
      <ellipse cx={cx} cy={topY} rx={rx} ry={ry} fill="url(#marbleTop)" />
      {/* rim highlight */}
      <ellipse cx={cx} cy={topY} rx={rx} ry={ry} fill="none" stroke="#fff8ec" strokeOpacity="0.6" strokeWidth="1.4" />
      {/* subtle marble veining */}
      <path
        d={`M ${cx - rx * 0.6} ${topY - ry * 0.2} Q ${cx - rx * 0.1} ${topY + ry * 0.3} ${cx + rx * 0.5} ${topY - ry * 0.1}`}
        fill="none"
        stroke="#c9b89a"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
    </g>
  );
}
