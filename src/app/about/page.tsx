import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Wooden Spokes and Great Folks — a Poway, CA workshop restoring stagecoaches with craft and community.",
};

const values = [
  {
    title: "Respect the original",
    body: "We read the scars before we sand them. Original timber, iron, and paint tell the story — our job is to keep that voice clear.",
  },
  {
    title: "Make it honest",
    body: "No shortcuts in the hubs. No mystery fillers in the spokes. If we replace a part, we say so and match the craft of the period.",
  },
  {
    title: "Welcome great folks",
    body: "Collectors, museums, ranch families, film crews — everyone gets the same coffee and the same careful ear. The name is a promise.",
  },
];

export default function AboutPage() {
  return (
    <div className="wood-grain">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Craftspeople with sawdust in their stories."
          subtitle="Wooden Spokes and Great Folks is a small restoration workshop in Poway, California — part old-road tradition, part modern shop discipline."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-wood-light/40 shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80"
              alt="Craftsperson shaping wood in a sunlit workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
              Born beside the inland trails of San Diego County
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Poway sits where chaparral meets quiet neighborhoods — close enough
              to the city, far enough to hear a plane saw singing through oak.
              Our workshop grew from weekend repairs into a full practice: Concord
              coaches, farm wagons, surreys, and the occasional circus cart that
              needed a second chance.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              The name sticks because it&apos;s true. Wooden spokes are the
              craft. Great folks are the reason we open the doors each morning —
              clients who care about history, neighbors who drop by with
              questions, apprentices who learn to feel when a spoke seats right.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
            What we stand on
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <article
                key={v.title}
                className="rounded-sm border border-wood-light/50 bg-white p-6 shadow-sm"
              >
                <h3 className="font-serif text-xl font-bold text-burgundy">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 rounded-sm border border-wood-light/50 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-ink">
              The Poway workshop feel
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              Expect racks of seasoned ash and hickory, a forge corner for
              stubborn iron, patterns pinned to the wall, and a radio that
              somehow always finds bluegrass by mid-afternoon. Tours are by
              appointment — bring curiosity, leave with sawdust on your boots.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              We work with private collectors, historical societies, ranches, and
              production companies across Southern California and beyond. If it
              rolled behind a horse and still has a story, we&apos;re interested.
            </p>
            <Link
              href="/contact"
              className="focus-ring mt-6 inline-flex rounded-sm bg-burgundy px-5 py-2.5 text-sm font-semibold text-white hover:bg-burgundy-dark"
            >
              Plan a visit
            </Link>
          </div>
          <aside className="rounded-sm bg-parchment p-5 text-sm text-ink-muted">
            <p className="font-serif text-lg font-bold text-ink">At a glance</p>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="font-semibold text-ink">Location:</span> Poway,
                CA (North San Diego County)
              </li>
              <li>
                <span className="font-semibold text-ink">Focus:</span> Stagecoaches
                &amp; historic horse-drawn vehicles
              </li>
              <li>
                <span className="font-semibold text-ink">Visits:</span> By
                appointment
              </li>
              <li>
                <span className="font-semibold text-ink">Contact:</span>{" "}
                hello@woodenspokes.com
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
