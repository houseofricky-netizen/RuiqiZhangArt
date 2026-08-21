import Link from "next/link";
import { SiteFooter, SiteHeader } from "./ui";

const works = [
  {
    href: "/mermaid-in-the-city",
    title: "Mermaid in the City",
    meta: "2024 · Single-channel video · 6 min 24 sec",
    image: "/images/mermaid-poster.jpg",
    alt: "Mermaid in the City film poster",
    className: "portrait",
  },
  {
    href: "/photography",
    title: "Photography",
    meta: "Seven photographic series · 60 photographs",
    image: "/images/persona-01.jpg",
    alt: "Persona photography series by Ruiqi Zhang",
    className: "landscape",
  },
  {
    href: "/underwater",
    title: "Underwater",
    meta: "2025 · Moving image · 20 min",
    image:
      "https://freight.cargo.site/t/original/i/A3024198599181329672269583648765/Poster3.1.jpg",
    alt: "Underwater film poster",
    className: "portrait",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero page-shell">
          <p className="eyebrow">London · Visual artist</p>
          <h1>Ruiqi<br />Zhang</h1>
          <div className="hero-bottom">
            <p>
              Moving image, staged photography and installation exploring female
              embodiment, myth, desire and the unstable boundary between
              freedom and captivity.
            </p>
            <span aria-hidden="true">↓</span>
          </div>
        </section>

        <section className="works page-shell" id="works">
          <div className="section-heading">
            <p className="eyebrow">01 / Selected work</p>
            <h2>Moving image<br />and photography</h2>
          </div>
          <div className="work-list">
            {works.map((work, index) => (
              <Link className="work-row" href={work.href} key={work.title}>
                <div className={`work-image ${work.className}`}>
                  <img src={work.image} alt={work.alt} />
                </div>
                <div className="work-copy">
                  <span className="work-index">0{index + 1}</span>
                  <h3>{work.title}</h3>
                  <p>{work.meta}</p>
                  <span className="arrow">View project ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="installation-teaser page-shell">
          <div>
            <p className="eyebrow">02 / Installation</p>
            <h2>Oxygen</h2>
            <p>2023 · Installation / production design</p>
          </div>
          <img src="/images/oxygen-01.jpg" alt="Oxygen installation by Ruiqi Zhang" />
        </section>

        <section className="about-teaser page-shell">
          <p className="eyebrow">03 / About</p>
          <p className="statement">
            I use the moving image as a porous body — one that can hold water,
            memory, fantasy and pressure at the same time.
          </p>
          <Link className="text-link" href="/about">Biography & recognition ↗</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
