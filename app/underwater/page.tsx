import type { Metadata } from "next";
import { ProjectIntro, SiteFooter, SiteHeader } from "../ui";

export const metadata: Metadata = {
  title: "Underwater",
  description: "Underwater, a 2025 magical realist moving image work by Ruiqi Zhang.",
};

export default function UnderwaterPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ProjectIntro
          number="01"
          title="Underwater"
          meta="2025 · Short film / moving image · 20 min · Mandarin with English subtitles"
          image="/images/underwater-hero.jpg"
          alt="A blurred woman seen through aquarium glass in Underwater"
        />

        <section className="project-text page-shell">
          <div>
            <p className="eyebrow">Synopsis</p>
            <h2>Water offers escape, then becomes another enclosure.</h2>
          </div>
          <div className="project-prose">
            <p>
              <em>Underwater</em> is a magical realist moving image work that
              uses aquaphobia, mermaid mythology and female embodiment to
              explore the paradox of survival within social structures that
              appear protective but become suffocating.
            </p>
            <p>
              Through a stylised cinematic language, the film examines how the
              promise of freedom can become another form of constraint.
            </p>
            <a className="watch-button" href="https://youtu.be/x86eDx3GieU?is=0zIyyxxjdNwFcThe" target="_blank" rel="noreferrer">
              Watch film ↗
            </a>
          </div>
        </section>

        <section className="stills-grid page-shell" aria-label="Underwater film stills">
          <img src="/images/underwater-01.jpg" alt="Underwater film still 1" />
          <img src="/images/underwater-02.jpg" alt="Underwater film still 2" />
          <img src="/images/underwater-03.jpg" alt="Underwater film still 3" />
        </section>

        <section className="project-text page-shell">
          <div>
            <p className="eyebrow">Artist statement</p>
            <h2>A body shaped by every path offered to it.</h2>
          </div>
          <div className="project-prose">
            <p>
              Water is both life-giving and suffocating. I use this contradiction
              as a metaphor for the invisible pressures placed on women: the
              demand to adapt, to appear graceful, and to accept a version of
              freedom already shaped by others.
            </p>
            <p>
              May&apos;s journey toward the water is not simply an escape, but a
              tragic transformation. The film asks whether freedom can still
              exist when every available path has already been defined.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
