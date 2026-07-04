import Link from "next/link";
import { User, Package, MapPin, Heart, LogIn } from "lucide-react";

export const metadata = { title: "Account — Autêntica" };

const CARDS = [
  { icon: Package, title: "Orders", text: "Track your pre-orders and view history.", href: "#" },
  { icon: Heart, title: "Wishlist", text: "Your saved authentic favourites.", href: "/wishlist" },
  { icon: MapPin, title: "Addresses", text: "Manage delivery addresses.", href: "#" },
  { icon: User, title: "Profile", text: "Update your personal details.", href: "#" },
];

export default function AccountPage() {
  return (
    <div className="bg-cream">
      <section className="border-b border-line bg-sand/50">
        <div className="container-luxe py-14 text-center lg:py-16">
          <p className="eyebrow mb-3">Welcome Back</p>
          <h1 className="heading-display text-4xl lg:text-5xl">My Account</h1>
        </div>
      </section>

      <div className="container-luxe grid gap-10 py-14 lg:grid-cols-[1fr_1.4fr] lg:py-16">
        {/* Sign in card */}
        <div className="rounded-3xl border border-line bg-card p-8 shadow-soft">
          <h2 className="font-display text-2xl text-ink">Sign in</h2>
          <p className="mt-2 text-sm text-body/60">
            Access your orders, wishlist and faster checkout.
          </p>
          <form className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-line bg-cream px-5 py-3 text-sm outline-none focus:border-gold"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-full border border-line bg-cream px-5 py-3 text-sm outline-none focus:border-gold"
            />
            <button type="button" className="btn-primary w-full">
              <LogIn size={16} />
              Sign In
            </button>
          </form>
          <p className="mt-4 text-center text-[13px] text-body/60">
            New here?{" "}
            <Link href="#" className="font-medium text-gold-dark hover:underline">
              Create an account
            </Link>
          </p>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-4">
          {CARDS.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-2xl border border-line bg-card p-6 shadow-soft card-lift hover:-translate-y-1 hover:shadow-card"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold-dark">
                <c.icon size={20} />
              </span>
              <h3 className="font-display text-lg text-ink">{c.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-body/60">
                {c.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
