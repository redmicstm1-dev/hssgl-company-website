import Image from "next/image";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { industries } from "@/lib/site";

export const metadata = { title: "Industries", description: "Discuss security needs across business and facility environments with HSSGL in Asaba, Delta State." };

export default function Industries() { return <main>
  <PageHero eyebrow="INDUSTRIES" title="Security begins with understanding the environment." text="Different sites have different access patterns, people, assets and operating needs. These are the kinds of environments for which prospective clients may enquire about security support."/>
  <section className="section"><div className="container"><SectionTitle eyebrow="BUSINESS ENVIRONMENTS" title="A range of settings. Different considerations." text="Explore common environments where organisations may need to discuss security personnel or site support. Specific service availability is confirmed directly with HSSGL."/><div className="industry-detail-grid">{industries.map((industry)=><article className="card industry-detail-card" key={industry.title}><div className="industry-detail-image"><Image src={industry.image} alt={`${industry.title} setting`} fill sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"/></div><div className="industry-detail-body"><div className="icon-box"><Image src={industry.icon} alt="" width={26} height={26} aria-hidden="true"/></div><h3>{industry.title}</h3><p>{industry.text}</p></div></article>)}</div></div></section>
  <section className="section band"><div className="container two-col"><div><SectionTitle eyebrow="SITE-SPECIFIC THINKING" title="The right conversation starts with the details"/><p>Location, operating hours, visitor access, staff movement and the nature of a site all affect the type of security arrangement an organisation may need. Sharing these details helps make the initial conversation more useful.</p></div><div className="card"><h3>Planning a security enquiry?</h3><p>Include your location, the environment, the service you are considering and your expected start date if known.</p><a className="button button-primary industry-request-button" href="/request-security-services">Request Security Services <span aria-hidden="true">→</span></a></div></div></section>
  <CTA/>
</main>; }
