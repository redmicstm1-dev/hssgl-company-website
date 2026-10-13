import { PageHero } from "@/components/PageHero";
import { RequestForm } from "@/components/RequestForm";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata = { title: "Request Security Services", description: "Submit your organisation’s security requirements for review and follow-up." };

export default function RequestPage() { return <main>
  <PageHero eyebrow="REQUEST SECURITY SERVICES" title="Tell us what your organisation needs." text="Provide your requirements and the team can review them and follow up with the appropriate next steps."/>
  <section className="section"><div className="container request-layout"><RequestForm/><aside className="contact-card"><h3>Other ways to reach us</h3><div className="contact-item"><strong>WhatsApp</strong><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">Chat with the team</a></div><div className="contact-item"><strong>Call</strong><a href={`tel:${site.phone.replace(/\s/g,"")}`}>{site.phone}</a></div><div className="contact-item"><strong>Email</strong><a href={`mailto:${site.email}`}>{site.email}</a></div><div className="contact-item"><strong>Office</strong><span>{site.address}</span></div><div className="contact-item"><strong>Location</strong><span>Asaba, Delta State, Nigeria</span></div><div className="request-location-note"><strong>Before you submit</strong><p>Share the service location, operating needs and expected start date if known. The team can then review the details and follow up.</p></div><h3>What happens next?</h3><div className="request-steps"><div><span className="step-icon" aria-hidden="true">01</span><span>Request received</span></div><div><span className="step-icon" aria-hidden="true">02</span><span>Consultation</span></div><div><span className="step-icon" aria-hidden="true">03</span><span>Proposal</span></div><div><span className="step-icon" aria-hidden="true">04</span><span>Deployment</span></div></div></aside></div></section>
  <FAQ/><CTA/>
</main>; }
