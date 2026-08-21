import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../ui";

export const metadata: Metadata = {
  title: "About",
  description: "Biography, education and selected recognition for Ruiqi Zhang.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="about-page page-shell">
        <section className="about-intro">
          <p className="eyebrow">04 / About</p>
          <h1>Ruiqi Zhang is a Chinese visual artist based in London, working across image, body and imagined worlds.</h1>
        </section>

        <section className="about-grid">
          <div>
            <p className="eyebrow">Practice</p>
          </div>
          <div className="about-copy">
            <p>
              Her practice moves across staged photography, moving image and
              installation, tracing how bodies carry myth, desire, memory and
              social pressure. Water, domestic objects and artificial
              landscapes recur as unstable thresholds between intimacy and
              spectacle, freedom and captivity, tenderness and control.
            </p>
            <p>
              Drawing from feminine mythologies and embodied experience, Zhang
              constructs dreamlike situations in which reality slips toward
              fantasy. The camera is not simply a tool for storytelling, but a
              porous surface through which a body can drift, fracture,
              disappear or become otherwise.
            </p>
          </div>
        </section>

        <section className="about-grid recognition">
          <div><p className="eyebrow">Selected recognition</p></div>
          <ul>
            <li><span>2025</span><p><em>Underwater</em>, ASVOFF17 China Curation</p></li>
            <li><span>2025</span><p><em>Underwater</em>, London Film School Graduate Showcase, BFI Southbank</p></li>
            <li><span>2025</span><p><em>Underwater</em>, “10 Arresting Short Films”, Director&apos;s Notes</p></li>
            <li><span>2025</span><p>Featured in Forbes, “Women Filmmakers From China in the Spotlight”</p></li>
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
