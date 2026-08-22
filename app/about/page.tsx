import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../ui";

export const metadata: Metadata = {
  title: "About",
  description: "Biography, exhibitions and selected recognition for visual artist Ruiqi Zhang.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="about-page page-shell">
        <section className="about-intro">
          <p className="eyebrow">04 / About</p>
          <h1>Ruiqi Zhang is a Chinese visual artist based in London, working with the body as image, archive and imagined terrain.</h1>
        </section>

        <section className="about-grid">
          <div>
            <p className="eyebrow">Practice</p>
          </div>
          <div className="about-copy">
            <p>
              Moving across staged photography, moving image and installation,
              Zhang explores femininity, gendered visibility and the quiet
              systems that shape desire, behaviour and self-perception. Her
              images begin with embodied experience, then drift toward myth,
              psychological tension and transformation.
            </p>
            <p>
              Water, veils, domestic interiors and everyday objects become
              charged thresholds where intimacy meets spectacle and freedom
              folds back into containment. Rather than treating the camera as
              a recording device, she uses it to construct dreamlike spaces in
              which bodies blur, fragment or become otherwise—making room for
              identities that resist stable definition.
            </p>
          </div>
        </section>

        <section className="about-grid recognition">
          <div><p className="eyebrow">Selected exhibitions &amp; publishing</p></div>
          <ul>
            <li><span>2026</span><p><em>Focus / Expand</em>, Solas / Shadow International Photography Gallery — forthcoming online exhibition</p></li>
            <li><span>2026</span><p><em>Silenced</em>, Collect Art — international online exhibition</p></li>
            <li><span>2026</span><p><em>Under the Skin of Things</em>, CISTA Arts — online group exhibition</p></li>
            <li><span>2026</span><p><em>39th Community Art Exhibition in Virtual Reality</em>, Circular ArtSpace</p></li>
            <li><span>2026</span><p><em>Dreams, Hopes and Blessings</em>, Indian Ocean Contemporary</p></li>
            <li><span>2026</span><p>Selected artist feature, Black Box Gallery</p></li>
            <li><span>2026</span><p>Artist feature, <em>Suboart Magazine</em> — August issue</p></li>
            <li><span>2025</span><p><em>Underwater</em>, ASVOFF17 China Curation</p></li>
            <li><span>2025</span><p><em>Underwater</em>, London Film School Graduate Showcase, BFI Southbank</p></li>
          </ul>
        </section>

        <section className="about-grid recognition">
          <div><p className="eyebrow">Awards &amp; recognition</p></div>
          <ul>
            <li><span>2026</span><p>Ruby Award and Crystal Award, Gallery Ring <em>RED</em> International Online Art Competition</p></li>
            <li><span>2025</span><p><em>Underwater</em>, “10 Arresting Short Films”, Director&apos;s Notes</p></li>
            <li><span>2025</span><p>Featured in <em>Forbes</em>, “Chinese Women Filmmakers to Know from Diane Pernet&apos;s ASVOFF”</p></li>
            <li><span>2019</span><p><em>Trip</em>, Best Student Short nominee, California Independent Film Festival</p></li>
          </ul>
        </section>

        <section className="about-grid education">
          <div><p className="eyebrow">Education</p></div>
          <div>
            <p>MA Filmmaking · London Film School</p>
            <p>BA Media Arts Production · Emerson College</p>
          </div>
        </section>

        <section className="contact-block">
          <p className="eyebrow">Contact</p>
          <a href="mailto:houseofricky@gmail.com">houseofricky@gmail.com</a>
          <a href="https://www.instagram.com/houseofricky" target="_blank" rel="noreferrer">@houseofricky</a>
          <a href="/Ruiqi-Zhang-CV.docx" download>Download CV ↓</a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
