import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  cta,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  cta?: { label: string; href: string };
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center"
          ? "items-center text-center"
          : "sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-[15px] leading-relaxed text-body/70">
            {description}
          </p>
        )}
      </div>
      {cta && (
        <Link
          href={cta.href}
          className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink"
        >
          {cta.label}
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}
