import Link from "next/link";
import { ArrowIcon } from "./icons";
import { site } from "@/lib/site";

export function CTA() {
  return <section className="cta-band">
    <div className="container cta-inner">
      <div><span className="eyebrow">READY TO GET STARTED?</span><h2>Let’s discuss your security requirements.</h2><p>Share a few details about your organisation and the support you are looking for.</p></div>
      <div className="cta-actions">
        <Link className="button button-light" href="/request-security-services">Request Security Services <ArrowIcon /></Link>
        <a className="button button-outline-light" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      </div>
    </div>
  </section>;
}
