const ITEMS = [
  "🇵🇹  Imported from Portugal",
  "✓  100% Authentic Products",
  "🚚  Fast Delivery Across Bangladesh",
  "✦  Pre-order Genuine European Beauty",
];

export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-cream/90">
      {/* Desktop: static, evenly spaced */}
      <div className="container-luxe hidden md:flex items-center justify-center gap-10 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em]">
        {ITEMS.slice(0, 3).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      {/* Mobile: marquee */}
      <div className="md:hidden overflow-hidden py-2.5">
        <div className="flex w-max animate-marquee whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em]">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="mx-6">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
