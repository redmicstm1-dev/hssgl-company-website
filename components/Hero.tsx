import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./icons";
import { site } from "@/lib/site";

export function Hero() {
  return <section className="hero">
    <Image src="/images/hero-security.png" alt="Professional security personnel outside a modern corporate facility" fill priority sizes="100vw" className="hero-image" />
    <div className="hero-overlay" />
    <div className="container hero-content">
      <span className="eyebrow">PROFESSIONAL SECURITY SOLUTIONS</span>
      <h1>Security you can trust. Protection you can rely on.</h1>
      <p>Security service enquiries for businesses, facilities and organisations in Asaba and surrounding areas.</p>
      <div className="hero-actions">
        <Link className="button button-primary" href="/request-security-services">Request Security Services <ArrowIcon /></Link>
        <a className="button button-outline-light" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      </div>
    </div>
  </section>;
}
