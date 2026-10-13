import Image from "next/image";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><Image src="/images/hero-security.webp" alt="Security personnel at a corporate facility" fill sizes="100vw" className="hero-image"/><div className="container page-hero-content"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}
