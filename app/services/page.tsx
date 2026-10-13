import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionTitle } from "@/components/SectionTitle";
import { services } from "@/lib/site";

export const metadata = { title: "Security Services", description: "Explore security personnel and service categories for business environments in Asaba and surrounding areas." };

const steps = [
  { title: "Share your requirement", text: "Tell us about the site, operating hours, location and the type of security support you are considering." },
  { title: "Discuss the details", text: "We review the information provided and clarify the requirements needed to assess the enquiry." },
  { title: "Agree on the arrangement", text: "Where the service is suitable and available, the scope, terms and next steps can be discussed." },
  { title: "Plan the next steps", text: "Any deployment or commencement is subject to the agreed terms and required authorisations." },
];
export default function Services() { return <main>
  <PageHero eyebrow="OUR SERVICES" title="Security support shaped around your environment." text="Explore the types of security support you can enquire about. The appropriate arrangement depends on the site, scope and requirements discussed with HSSGL."/>
  <section className="section"><div className="container"><SectionTitle eyebrow="SERVICE AREAS" title="Start with the security need" text="Tell us what you are looking to protect and the kind of support you need. We can discuss the details and clarify the next steps."/><div className="card-grid">{services.map((s)=><ServiceCard key={s.title} {...s}/>)}</div><p className="service-disclaimer">Service scope, availability and any required licences or authorisations are confirmed during the enquiry process. Submitting a request does not constitute a service contract.</p></div></section>
  <section className="section band"><div className="container"><SectionTitle eyebrow="WHAT TO EXPECT" title="A clear process from enquiry to agreement" text="We aim to keep initial discussions straightforward and focused on the practical details of your requirement."/><div className="process">{steps.map((step,i)=><article className="process-step" key={step.title}><div className="step-number">{i+1}</div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
  <CTA/>
</main>; }
