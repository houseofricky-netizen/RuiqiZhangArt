import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../ui";
import { photographySeries } from "./series";

export const metadata: Metadata = {
  title: "Photography",
  description: "Staged and observational photographic series by Ruiqi Zhang.",
};

export default function PhotographyPage() {
  return (
    <>
      <SiteHeader />
      <main className="photo-page page-shell">
        <section className="photo-intro">
          <p className="eyebrow">03 / Photography</p>
          <h1>Photographic<br />series</h1>
          <p>
            Seven distinct bodies of work move between staged portraiture and
            observed places. Select a collage to enter the complete series.
          </p>
        </section>

        <section className="photo-index-grid" aria-label="Photography series">
          {photographySeries.map((item, index) => (
            <Link
              className="series-card"
              href={`/photography/${item.slug}`}
              key={item.slug}
              aria-label={`View the complete ${item.name} series`}
            >
              <div className="photo-collage">
                {item.images.slice(0, 3).map((image, imageIndex) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${item.name} preview ${imageIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
              <div className="series-card-copy">
                <span>0{index + 1}</span>
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.subtitle}</p>
                </div>
                <p>{item.images.length} photographs ↗</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
