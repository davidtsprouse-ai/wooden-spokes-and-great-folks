import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Stagecoach restoration, conservation, custom builds, maintenance, and consultation in Poway, CA.",
};

const services = [
  {
    title: "Full Restoration",
    summary:
      "Complete rebuilds for stagecoaches and related horse-drawn vehicles — structure, running gear, body, paint, and trim.",
    points: [
      "Frame and body repairs with period-appropriate joinery",
      "Ironwork, springs, and undercarriage renewal",
      "Authentic and durable finish systems",
      "Upholstery and leather appointments",
    ],
  },
  {
    title: "Conservation",
    summary:
      "Stabilize and preserve original fabric for museums, collectors, and display — intervening only as much as needed.",
    points: [
      "Condition reports and photo documentation",
      "Reversible treatments where practical",
      "Surface cleaning and protective coatings",
      "Display and storage recommendations",
    ],
  },
  {
    title: "Custom Builds & Replicas",
    summary:
      "New coaches and faithful replicas built from measured drawings, historic patterns, or your vision for parade and film.",
    points: [
      "Measured plans from originals or archives",
      "Traditional wheelwright and body work",
      "Show-ready or working finishes",
      "Branding and livery consultation",
    ],
  },
  {
    title: "Maintenance",
    summary:
      "Keep rolling stock parade-ready with seasonal checkups, spoke tightening, lubrication, and finish touch-ups.",
    points: [
      "Wheel and tire inspection",
      "Hardware and brake service",
      "Paint and varnish refresh",
      "Pre-event readiness packs",
    ],
  },
  {
    title: "Consultation",
    summary:
      "Independent advice before you buy, restore, or insure — clear eyes on condition, cost, and craftsmanship.",
    points: [
      "Purchase and collection assessments",
      "Scope and budget estimates",
      "Material and finish guidance",
      "Workshop visits by appointment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="wood-grain">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Craft for every mile of the journey."
          subtitle="Whether your coach needs a careful conservation or a complete rebirth, we tailor the work to the vehicle — and to the people who love it."
        />

        <div className="mt-12 space-y-8">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="grid gap-6 rounded-sm border border-wood-light/50 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_1.2fr]"
            >
              <div>
                <p className="font-serif text-4xl text-wood-light/80">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-bold text-ink">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {service.summary}
                </p>
              </div>
              <ul className="grid gap-2 self-center sm:grid-cols-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm text-ink-muted"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-sm border border-burgundy/20 bg-burgundy/5 p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-ink">
            Not sure which path fits?
          </h2>
          <p className="mt-2 max-w-2xl text-ink-muted">
            Send a few photos and we&apos;ll suggest a starting point — no
            pressure, just honest craft talk from the Poway bench.
          </p>
          <Link
            href="/contact"
            className="focus-ring mt-5 inline-flex rounded-sm bg-burgundy px-5 py-2.5 text-sm font-semibold text-white hover:bg-burgundy-dark"
          >
            Request a consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
