import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">RZ</Link>
      <nav aria-label="Primary navigation">
        <Link href="/#works">Work</Link>
        <Link href="/photography">Photography</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer page-shell">
      <p>Ruiqi Zhang</p>
      <div>
        <a href="mailto:houseofricky@gmail.com">Email</a>
        <a href="https://www.instagram.com/houseofricky" target="_blank" rel="noreferrer">Instagram</a>
      </div>
      <p>London, United Kingdom</p>
    </footer>
  );
}

export function ProjectIntro({
  number,
  title,
  meta,
  image,
  alt,
}: {
  number: string;
  title: string;
  meta: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="project-hero page-shell">
      <p className="eyebrow">{number} / Moving image</p>
      <h1>{title}</h1>
      <p className="project-meta">{meta}</p>
      <img className="project-lead" src={image} alt={alt} />
    </section>
  );
}
