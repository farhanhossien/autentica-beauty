"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-luxe">
        <div className="reveal relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center sm:px-16 lg:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative mx-auto max-w-xl">
            <p className="eyebrow mb-4">Join the List</p>
            <h2 className="heading-display text-3xl text-cream sm:text-5xl">
              Stay Beautiful.
              <span className="block text-gold">Stay Updated.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-cream/60">
              Be first to know about new arrivals, restocks and members-only
              offers on authentic European beauty.
            </p>

            <form
              onSubmit={submit}
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 rounded-full border border-white/15 bg-white/[0.06] px-6 py-4 text-sm text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-gold"
              />
              <button type="submit" className="btn-gold group shrink-0">
                {sent ? (
                  <>
                    <Check size={16} /> Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
            <p className="mt-4 text-[12px] text-cream/40">
              No spam, only beauty. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
