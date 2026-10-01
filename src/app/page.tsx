import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Full Restoration",
    body: "From frame to finish — structural rebuilds, paint, trim, and road-ready detailing.",
  },
  {
    title: "Wheelwright Craft",
    body: "Spokes, felloes, and hubs shaped by hand. True wooden wheels that roll true.",
  },
  {
    title: "Museum Care",
    body: "Conservation-minded methods for historic coaches destined for display or parade.",
  },
];

const steps = [
  {
    n: "01",
    title: "Listen & Assess",
    body: "We walk the vehicle with you, document condition, and map a respectful path forward.",
  },
  {
    n: "02",
    title: "Plan the Craft",
    body: "Materials, joinery, finishes, and timeline — all agreed before the chisels come out.",
  },
  {
    n: "03",
    title: "Restore & Deliver",
    body: "Steady workshop progress with photos along the way, then a proud handoff in Poway.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500595046743-cd271d666eaa?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-wood-light">
            Stagecoach Restoration · Poway, CA
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Where wooden spokes meet great folks.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-parchment/90">
            We restore stagecoaches and historic horse-drawn vehicles with the
            patience of the old road — honest joinery, warm finishes, and a
            workshop that still smells like oak and linseed oil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="focus-ring rounded-sm bg-burgundy px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-burgundy-dark"
            >
              Start a Project
            </Link>
            <Link
              href="/gallery"
              className="focus-ring rounded-sm border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Story strip */}
      <section className="wood-grain border-b border-wood-light/30 bg-parchment">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-burgundy">
              Our story
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl">
              A Poway workshop built on trust and timber.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Wooden Spokes and Great Folks began with a stubborn love of the
              Concord coach and the people who keep that heritage rolling.
              Today our bench holds stagecoaches, surreys, farm wagons, and the
              occasional mystery chassis somebody hauled out of a barn.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              We measure twice, steam once, and always leave room for coffee and
              conversation. Craftsmanship is the product — great folks are the
              point.
            </p>
            <Link
              href="/about"
              className="focus-ring mt-6 inline-flex text-sm font-semibold text-burgundy underline decoration-burgundy/30 underline-offset-4 hover:decoration-burgundy"
            >
              Meet the workshop →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-wood-light/40 shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80"
              alt="Woodworking tools and craftsmanship in a workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-burgundy">
              What we do
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl">
              Heritage vehicles, restored with modern care.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-wood-light/40 bg-white p-6 shadow-sm transition hover:border-wood/40 hover:shadow-md"
              >
                <div
                  className="mb-4 h-1 w-10 rounded-full bg-burgundy"
                  aria-hidden="true"
                />
                <h3 className="font-serif text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="focus-ring inline-flex rounded-sm border border-wood px-5 py-2.5 text-sm font-semibold text-wood-dark transition hover:bg-parchment"
            >
              Explore all services
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-wood-light/30 bg-forest text-parchment">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wood-light">
            How it works
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            From first handshake to final varnish.
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n}>
                <p className="font-serif text-3xl text-wood-light">{step.n}</p>
                <h3 className="mt-2 font-serif text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-parchment/80">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-parchment">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
              Got a coach in the barn?
            </h2>
            <p className="mt-3 max-w-xl text-ink-muted">
              Bring photos, stories, or just a hunch. We&apos;ll help you
              understand what&apos;s possible — and what&apos;s worth doing
              right.
            </p>
          </div>
          <Link
            href="/contact"
            className="focus-ring shrink-0 rounded-sm bg-burgundy px-6 py-3 text-sm font-semibold text-white transition hover:bg-burgundy-dark"
          >
            Talk with us
          </Link>
        </div>
      </section>
    </>
  );
}
