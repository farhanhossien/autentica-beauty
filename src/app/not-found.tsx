import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="heading-display text-5xl lg:text-7xl">Page not found</h1>
      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-body/70">
        The page you&apos;re looking for has moved or no longer exists. Let&apos;s
        get you back to something beautiful.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-primary">
          Back Home
        </Link>
        <Link href="/shop" className="btn-outline">
          Shop All
        </Link>
      </div>
    </div>
  );
}
