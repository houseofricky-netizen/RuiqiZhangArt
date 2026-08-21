import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../ui";
import { getPhotographySeries, photographySeries } from "../series";

type SeriesPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return photographySeries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: SeriesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const series = getPhotographySeries(slug);

  if (!series) return {};

  return {
    title: `${series.name} — Photography`,
    description: series.copy,
  };
}

export default async function SeriesPage({ params }: SeriesPageProps) {
  const { slug } = await params;
  const series = getPhotographySeries(slug);

  if (!series) notFound();

  return (
    <>
      <SiteHeader />
      <main className="series-detail page-shell">
        <section className="series-detail-hero">
          <Link className="series-back" href="/photography">← All photography</Link>
          <p className="eyebrow">Photography series</p>
          <h1>{series.name}</h1>
          <div className="series-detail-meta">
            <p>{series.subtitle}</p>
            <p>{series.copy}</p>
            <span>{series.images.length} photographs</span>
          </div>
        </section>

        <section className="series-detail-grid" aria-label={`${series.name} complete series`}>
          {series.images.map((image, index) => (
            <figure key={image}>
              <img
                src={image}
                alt={`${series.name} series photograph ${index + 1}`}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
              />
            </figure>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
