"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";

const INFO = [
  { icon: MapPin, label: "Visit Us", value: "Gulshan, Dhaka, Bangladesh" },
  { icon: Phone, label: "Call Us", value: "+880 1XXX-XXXXXX" },
  { icon: Mail, label: "Email Us", value: "hello@autentica.bd" },
  { icon: Clock, label: "Hours", value: "Sat–Thu · 10am – 8pm" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-cream">
      <section className="border-b border-line bg-sand/50">
        <div className="container-luxe py-16 text-center lg:py-20">
          <p className="eyebrow mb-3">We&apos;re Here to Help</p>
          <h1 className="heading-display text-4xl lg:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-body/70">
            Questions about authenticity, pre-orders or delivery? Our team
            responds quickly and personally.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-luxe grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div>
            <h2 className="font-display text-2xl text-ink">Get in touch</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-body/65">
              Reach out any way you like — we&apos;re always happy to help you
              find the right authentic product.
            </p>
            <div className="mt-8 space-y-5">
              {INFO.map((i) => (
                <div key={i.label} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-dark">
                    <i.icon size={19} />
                  </span>
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.12em] text-body/45">
                      {i.label}
                    </p>
                    <p className="mt-0.5 text-[15px] font-medium text-ink">
                      {i.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-line bg-card p-8 shadow-soft lg:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <Check size={28} />
                </span>
                <h3 className="font-display text-2xl text-ink">
                  Message sent!
                </h3>
                <p className="max-w-xs text-sm text-body/60">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24 hours.
                </p>
                <button onClick={() => setSent(false)} className="btn-outline mt-2">
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="Your name" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                  />
                </div>
                <Field label="Subject" name="subject" placeholder="How can we help?" />
                <div>
                  <label className="mb-2 block text-[12px] font-medium uppercase tracking-[0.1em] text-body/60">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your message…"
                    className="w-full resize-none rounded-2xl border border-line bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-medium uppercase tracking-[0.1em] text-body/60">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-full border border-line bg-cream px-5 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
