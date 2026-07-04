import { cn } from "@/lib/utils";
import type { Badge as BadgeType } from "@/data/products";

const STYLES: Record<string, string> = {
  "Best Seller": "bg-ink text-cream",
  Trending: "bg-gold text-ink",
  "New Arrival": "bg-white text-ink border border-line",
  "Pre-order": "bg-sand text-body border border-line",
  "Limited Stock": "bg-[#8a2f2f] text-cream",
  Authentic: "bg-white/90 text-ink border border-gold/40",
  Portugal: "bg-white/90 text-ink border border-line",
};

const LABELS: Partial<Record<BadgeType, string>> = {
  Authentic: "100% Authentic",
  Portugal: "🇵🇹 Portugal",
};

export function Badge({
  label,
  className,
}: {
  label: BadgeType;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]",
        STYLES[label] ?? "bg-sand text-body",
        className
      )}
    >
      {LABELS[label] ?? label}
    </span>
  );
}
