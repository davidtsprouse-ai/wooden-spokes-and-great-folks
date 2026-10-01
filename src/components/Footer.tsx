import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-wood-dark/20 bg-wood-dark text-parchment">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 brightness-110"
            />
            <div>
              <p className="font-serif text-lg font-bold text-white">
                Wooden Spokes &amp; Great Folks
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-wood-light">
                Poway, California
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-parchment/80">
            Hand-crafted restoration of stagecoaches and historic horse-drawn
            vehicles — where wooden spokes meet great folks.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg text-white">Visit the Workshop</h2>
          <p className="mt-3 text-sm leading-relaxed text-parchment/80">
            Poway, CA
            <br />
            North San Diego County
            <br />
            By appointment
          </p>
          <p className="mt-3 text-sm text-parchment/80">
            <a
              className="underline decoration-wood-light/50 underline-offset-4 hover:text-white"
              href="mailto:hello@woodenspokes.com"
            >
              hello@woodenspokes.com
            </a>
            <br />
            <a
              className="underline decoration-wood-light/50 underline-offset-4 hover:text-white"
              href="tel:+18585550184"
            >
              (858) 555-0184
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg text-white">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["/", "Home"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/about", "About"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-parchment/80 underline-offset-4 hover:text-white hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-parchment/60">
        © {year} Wooden Spokes and Great Folks. Crafted with care in Poway, CA.
      </div>
    </footer>
  );
}
