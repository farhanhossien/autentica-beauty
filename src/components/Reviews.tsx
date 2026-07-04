import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stars } from "@/components/ui/Stars";

const REVIEWS = [
  {
    name: "Tasnia Rahman",
    location: "Gulshan, Dhaka",
    text: "My Dior Sauvage Elixir arrived sealed and completely authentic. The batch code checked out perfectly. This is now my only trusted source for imported perfume.",
    product: "Dior Sauvage Elixir",
  },
  {
    name: "Rafiul Islam",
    location: "Chattogram",
    text: "Ordered the Le Male Elixir and it's the real deal — the gold bottle is stunning and longevity is insane. Delivery was faster than I expected.",
    product: "JPG Le Male Elixir",
  },
  {
    name: "Nusrat Jahan",
    location: "Banani, Dhaka",
    text: "The KIKO foundation and lip set are exactly like the ones I bought in Europe. Beautiful packaging and genuinely authentic. Highly recommend Autêntica.",
    product: "KIKO Milano Set",
  },
];

export default function Reviews() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Trusted by Beauty Lovers"
          title="Customer Reviews"
          description="Real words from customers across Bangladesh who trust us with the authentic originals."
          align="center"
          className="reveal"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <figure
              key={review.name}
              className="reveal relative flex flex-col rounded-2xl border border-line bg-card p-8 shadow-soft"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <Quote size={34} className="text-gold/30" />
              <Stars rating={5} className="mt-4" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-body/80">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand font-display text-lg text-ink">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="text-[12px] text-body/55">
                    {review.location} · {review.product}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
