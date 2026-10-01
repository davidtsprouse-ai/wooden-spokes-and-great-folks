import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Wooden Spokes and Great Folks in Poway, CA to start a stagecoach restoration project.",
};

export default function ContactPage() {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your coach."
          subtitle="Share a few details and we'll follow up from the workshop. Visits in Poway are by appointment — we save the good coffee for people with interesting wheels."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <aside className="space-y-6">
            <div className="rounded-sm border border-wood-light/50 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-ink">
                Workshop location
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                <strong className="text-ink">Wooden Spokes and Great Folks</strong>
                <br />
                Poway, California
                <br />
                North San Diego County
              </p>
              <p className="mt-3 text-sm text-ink-muted">
                Exact street address shared when we schedule your visit. Parking
                for trailers available by arrangement.
              </p>
            </div>

            <div className="rounded-sm border border-wood-light/50 bg-parchment p-6">
              <h2 className="font-serif text-xl font-bold text-ink">
                Direct lines
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                <li>
                  Email:{" "}
                  <a
                    className="font-medium text-burgundy underline underline-offset-2"
                    href="mailto:hello@woodenspokes.com"
                  >
                    hello@woodenspokes.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    className="font-medium text-burgundy underline underline-offset-2"
                    href="tel:+18585550184"
                  >
                    (858) 555-0184
                  </a>
                </li>
                <li>Hours: Tue–Sat, by appointment</li>
              </ul>
            </div>

            <div className="rounded-sm border border-burgundy/20 bg-burgundy/5 p-6 text-sm text-ink-muted">
              <p className="font-serif text-lg font-bold text-ink">
                Helpful to include
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Photos of the vehicle (all sides + undercarriage)</li>
                <li>Known history or maker marks</li>
                <li>Goals: display, parade, working use</li>
                <li>Preferred timeline</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
