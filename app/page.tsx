import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { CTA } from "@/components/CTA";
import { services, industries } from "@/lib/site";

export default function Home() {
  return <main>
    <Hero />
    <section className="section"><div className="container intro-grid"><div className="intro-image-wrap"><Image src="/images/security-team.webp" alt="Professional security personnel standing together outside a modern business facility" fill sizes="(max-width: 980px) 100vw, 50vw" className="intro-image" /></div><div><span className="eyebrow">ABOUT THE COMPANY</span><h2>Security designed around the way your organisation operates.</h2><p className="lead-copy">We provide professional security personnel and practical security services for organisations that need dependable protection around people, premises and daily operations.</p><Link className="button button-primary" href="/about">Learn About Us →</Link></div></div></section>
    <section className="section band"><div className="container"><SectionTitle eyebrow="OUR SERVICES" title="Security services for real business environments" text="Explore the types of security support you can enquire about, then share the details of your site and requirements."/><div className="card-grid">{services.map((service)=><ServiceCard key={service.title} {...service}/>)}</div></div></section>
    <section className="section"><div className="container"><SectionTitle eyebrow="INDUSTRIES" title="Security conversations for different business environments" text="Different premises bring different access, people and operational considerations."/><div className="industry-grid">{industries.map((industry)=><div className="industry-card" key={industry.title}><Image src={industry.image} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="industry-card-image" /><div className="industry-card-overlay" /><div className="industry-card-content">{industry.title}<span aria-hidden="true"> →</span></div></div>)}</div></div></section>
    <section className="section band"><div className="container"><SectionTitle eyebrow="WHY CHOOSE US" title="Trust, vigilance and protection in every conversation"/><div className="trust-strip">{["Professional personnel","Responsive support","Business-focused service","Clear communication"].map((item)=><div className="trust-item" key={item}><strong>{item}</strong><span>A professional and respectful approach to each enquiry.</span></div>)}</div></div></section>
    <section className="section"><div className="container"><SectionTitle eyebrow="HOW IT WORKS" title="From your first enquiry to a clearly agreed plan" text="A straightforward process helps both sides understand the site, the service being considered and what must be agreed before work begins."/><div className="process">{[
      { title: "1. Tell us about the site", text: "Submit the location, type of premises, security concerns, coverage hours, estimated staffing needs and preferred start date. Share what you know; you do not need every detail finalised." },
      { title: "2. We review and clarify", text: "HSSGL reviews the enquiry and may contact you to clarify access arrangements, site activity, risks, schedules and the scope of support being requested." },
      { title: "3. Discuss scope and terms", text: "If the request is suitable and can be supported, the proposed coverage, responsibilities, timing, pricing and relevant conditions can be discussed before you decide." },
      { title: "4. Confirm before commencement", text: "No deployment is confirmed by the form alone. Work proceeds only after both sides agree the arrangement and any required checks or authorisations are in place." }
    ].map((step,i)=><article className="process-step" key={step.title}><div className="step-number">{i+1}</div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
    <CTA />
  </main>;
}
