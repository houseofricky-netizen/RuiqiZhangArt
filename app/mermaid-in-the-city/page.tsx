import type { Metadata } from "next";
import { ProjectIntro, SiteFooter, SiteHeader } from "../ui";

export const metadata: Metadata = {
  title: "Mermaid in the City",
  description: "Mermaid in the City, a single-channel video work by Ruiqi Zhang.",
};

export default function MermaidPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ProjectIntro
          number="02"
          title="Mermaid in the City"
          meta="2019–2020 / 2023–2024 · Single-channel video · 6 min 24 sec"
          image="/images/mermaid-poster.jpg"
          alt="Mermaid in the City exhibition poster"
        />

        <section className="project-text page-shell">
          <div>
            <p className="eyebrow">Synopsis</p>
            <h2>A body dreams of another body.</h2>
          </div>
          <div className="project-prose">
            <p>
              <em>Mermaid in the City</em> unfolds through a loosely structured
              chapter form. Fragments of bodies, toys, animals, food and water
              become a stream of bodily consciousness.
            </p>
            <p>
              Moving between Boston and Chongqing, the work traces the unstable
              boundary between transformation, freedom and captivity — a body
              imagining how it might leave even when it remains in place.
            </p>
          </div>
        </section>

        <section className="video-section page-shell">
          <p className="eyebrow">Watch</p>
          <div className="video-placeholder">
            <img src="/images/mermaid-01.jpg" alt="Mermaid in the City video still" />
            <a className="watch-button" href="https://youtu.be/2W6cgRbbUMM?is=A404jq_LsvD5IZ8k" target="_blank" rel="noreferrer">
              Open video page ↗
            </a>
          </div>
        </section>

        <section className="stills-grid page-shell" aria-label="Mermaid in the City stills">
          <img src="/images/mermaid-01.jpg" alt="Mermaid in the City film still 1" />
          <img src="/images/mermaid-02.jpg" alt="Mermaid in the City film still 2" />
          <img src="/images/mermaid-03.jpg" alt="Mermaid in the City film still 3" />
        </section>

        <section className="project-text page-shell">
          <div>
            <p className="eyebrow">Artist statement</p>
            <h2>Transformation as desire, myth and survival.</h2>
          </div>
          <div className="project-prose">
            <p>
              The mermaid is not presented as fantasy decoration, but as an
              unstable identity: seductive, displaced and never fully able to
              belong to land or water.
            </p>
            <p>
              Collage, domestic objects and aquatic imagery allow the work to
              move between intimacy and estrangement, asking what remains of a
              self while it is being continuously remade.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
