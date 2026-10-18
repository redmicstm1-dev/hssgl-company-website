'use client';

import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";

export function FounderCEO() {
  return (
    <section className="section founder-ceo-section" aria-labelledby="founder-ceo-title">
      <div className="container">
        <SectionTitle
          eyebrow="LEADERSHIP"
          title="Meet Our Founder & CEO"
          text="Leadership shaped by experience, responsibility and a commitment to safeguarding people, property and potential."
        />
        <div className="founder-ceo-card">
          <div className="founder-ceo-photo-wrap">
                <Image
                    src="/images/founder-ceo.jpg"
                    alt="Akpruko Gideon Eguriase, Founder and Chief Executive Officer of Haliden Security Services and Guard Limited"
                    fill
                    sizes="(max-width: 760px) 100vw, 360px"
                    className="founder-ceo-photo"
                    priority
                />
            </div>
          <div className="founder-ceo-content">
            <span className="eyebrow">FOUNDER &amp; CHIEF EXECUTIVE OFFICER</span>
            <h2 id="founder-ceo-title">Akpruko Gideon Eguriase</h2>
            <p className="founder-ceo-tagline">Securing Trust, Safeguarding Potential.</p>
            <p>
              Akpruko Gideon Eguriase brings more than two decades of experience across
              security, risk awareness and organisational protection. His professional
              background includes over 16 years with the Central Bank of Nigeria, where
              he progressed to the position of Deputy Manager (Security).
            </p>
            <p>
              His experience also includes work with Delta Boatyard Limited and Ebueh
              International Services, contributing to a practical understanding of
              security considerations across different working environments.
            </p>
            <p>
              At HSSGL, this experience informs a measured, client-focused approach:
              understanding each organisation’s premises, people, operating routines and
              concerns before discussing a suitable security personnel arrangement.
              The aim is to build professional relationships through clear communication,
              vigilance and responsible service planning.
            </p>
            <div className="founder-ceo-signoff">
              <span className="founder-ceo-rule" aria-hidden="true" />
              <p><strong>Our guiding commitment</strong><br />Trust. Vigilance. Protection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
