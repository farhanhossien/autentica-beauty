import Image from "next/image";
import { Instagram } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const IMAGES = [
  "/products/dior-sauvage-elixir.jpg",
  "/products/jpg-le-male-duo.jpg",
  "/products/kiko-glossy-lip-set.jpg",
  "/products/zara-immortal-vanilla.jpg",
  "/products/kiko-makeup-collection.jpg",
  "/products/dior-sauvage-edp.jpg",
];

export default function InstagramGallery() {
  return (
    <section className="bg-sand/60 py-20 lg:py-28">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="@autentica.bd"
          title="Follow the Ritual"
          description="Join our community of beauty lovers on Instagram for launches, tips and offers."
          align="center"
          className="reveal"
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {IMAGES.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative aspect-square overflow-hidden rounded-xl border border-line bg-sand"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Image
                src={src}
                alt="Autêntica on Instagram"
                fill
                sizes="(max-width:768px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram size={24} className="text-cream" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
