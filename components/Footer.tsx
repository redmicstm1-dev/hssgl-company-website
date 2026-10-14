import Link from "next/link";
import Image from "next/image";
import { navItems, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark"><Image src="/logos.png" alt="" width={38} height={44}/></span>
            <span><strong>{site.shortName}</strong><small>Trust. Vigilance. Protection.</small></span>
          </Link>
          <p>Security service enquiries for businesses and organisations in Asaba, Delta State, and surrounding areas.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 4).map((item) => <Link key={item.title} href="/services">{item.title}</Link>)}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.address}</span>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>{site.registration} · {site.motto}</span>
      </div>
    </footer>
  );
}
