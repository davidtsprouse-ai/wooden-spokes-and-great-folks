import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Craftsmanship imagery from stagecoach restoration — wheels, woodwork, and heritage vehicles. Placeholder stock photography.",
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1500595046743-cd271d666eaa?auto=format&fit=crop&w=1000&q=80",
    alt: "Historic wooden wagon in a pastoral landscape",
    caption: "Heritage vehicles · stock photography",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80",
    alt: "Hand tools arranged on a wooden workbench",
    caption: "Bench craft",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    alt: "Warm wood grain texture close-up",
    caption: "Timber & grain",
  },
  {
    src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
    alt: "Craftsperson working with wood in a workshop",
    caption: "Hands at the bench",
  },
  {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    alt: "Leatherworking tools and materials",
    caption: "Leather & trim",
  },
  {
    src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    alt: "Sunlit forest path suggesting an old trail",
    caption: "The old road",
    span: "md:col-span-2",
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A glimpse of the craft."
          subtitle="These images are tasteful stock photographs used as placeholders — not client project photos. Real workshop galleries grow one careful restoration at a time."
        />

        <div className="mt-10 rounded-sm border border-wood-light/50 bg-parchment/60 px-4 py-3 text-sm text-ink-muted">
          <strong className="font-semibold text-ink">Note:</strong> Imagery
          below is illustrative (Unsplash). We do not present it as completed
          customer work.
        </div>

        <div className="mt-8 grid auto-rows-[220px] gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img) => (
            <figure
              key={img.src + img.caption}
              className={`group relative overflow-hidden rounded-sm border border-wood-light/40 bg-wood-dark shadow-sm ${img.span || ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 pb-3 pt-10 text-sm text-white">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* SVG craft illustration strip */}
        <div className="mt-12 rounded-sm border border-wood-light/50 bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-ink">
            The wheel, in spirit
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted">
            Our mark — eight wooden spokes around a working hub — is a quiet nod
            to the wheelwright&apos;s craft that still anchors every coach we
            touch.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-8">
            <Image
              src="/logo.svg"
              alt="Wooden Spokes logo mark"
              width={140}
              height={140}
              className="h-28 w-28 sm:h-36 sm:w-36"
            />
            <div className="max-w-md text-sm leading-relaxed text-ink-muted">
              <p>
                Felloe, spoke, and hub — fitted tight, painted warm, and set to
                roll. That geometry shows up in our logo and in every wheel that
                leaves the Poway shop.
              </p>
              <Link
                href="/contact"
                className="focus-ring mt-4 inline-flex text-sm font-semibold text-burgundy underline decoration-burgundy/30 underline-offset-4"
              >
                Commission a restoration →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
