"use client";

import { FormEvent, useState } from "react";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { site } from "@/lib/site";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const formElement = e.currentTarget; const values = Object.fromEntries(new FormData(formElement).entries());
    // Silently discard likely bot submissions instead of displaying a false success message.
    if (String(values.website || "")) return;
    if (!site.formAccessKey) { setStatus("error"); setMessage("The contact form is not configured yet. Please contact HSSGL by phone or WhatsApp."); return; }
    setStatus("loading"); setMessage("");
    try {
      const response = await fetch(site.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ access_key: site.formAccessKey, subject: `HSSGL website contact — ${values.subject}`, from_name: "HSSGL Website — Contact Enquiry", replyto: values.email, botcheck: "", "Contact Name": values.name, email: values.email, "Phone Number": values.phone, Subject: values.subject, Message: values.message, website: values.website }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success !== true) throw new Error("We couldn't send your message. Please try again or contact HSSGL directly.");
      setStatus("success"); setMessage("Thank you. Your message has been submitted. The team can respond using the contact details you provided."); formElement.reset();
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "We couldn't send your message. Please contact HSSGL directly."); }
  }
  return <main>
    <PageHero eyebrow="CONTACT HSSGL" title="Let's discuss your security requirements." text="Contact Haliden Security Services and Guard Limited to discuss your organisation, facility, or service enquiry." />
    <section className="section"><div className="container contact-info-grid">
      <article className="contact-card"><span className="contact-symbol">☎</span><h3>Call our team</h3><a href={`tel:${site.phone}`}>{site.phone}</a><p>For service enquiries and follow-up.</p></article>
      <article className="contact-card"><span className="contact-symbol">✉</span><h3>Email</h3><a href={`mailto:${site.email}`}>{site.email}</a><p>Send a written enquiry at any time.</p></article>
      <article className="contact-card"><span className="contact-symbol">◉</span><h3>WhatsApp</h3><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat with HSSGL</a><p>Open a direct WhatsApp conversation.</p></article>
    </div></section>
    <section className="section band"><div className="container contact-layout">
      <form className="request-form" onSubmit={submit}><div className="form-intro"><span className="eyebrow">SEND AN ENQUIRY</span><h2>How can we help?</h2><p>Share your question or service requirements below.</p></div><div className="form-grid">
        <label>Full Name *<input required name="name" maxLength={100} autoComplete="name" /></label><label>Email Address *<input required type="email" name="email" maxLength={254} autoComplete="email" /></label><label>Phone Number *<input required type="tel" name="phone" maxLength={40} autoComplete="tel" /></label><label>Subject *<input required name="subject" maxLength={160} /></label><label className="full">Message *<textarea required rows={6} name="message" maxLength={4000} /></label>
      </div><label className="honeypot" aria-hidden="true">Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label><button className="button button-primary form-submit" disabled={status === "loading"}>{status === "loading" ? "Sending…" : "Send Message →"}</button>{status !== "idle" && <p className={`form-message ${status}`} role="status" aria-live="polite">{message}</p>}<small className="form-note">Your details are used to respond to your message.</small></form>
      <aside className="contact-card contact-address"><span className="eyebrow">FIND HSSGL</span><h2>Based in Asaba, Delta State</h2><p>{site.address}</p><p>Contact us before visiting so the team can confirm availability and directions.</p><a className="button button-outline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`} target="_blank" rel="noopener noreferrer">Open address in Maps ↗</a><div className="address-accent"><strong>{site.registration}</strong><span>Corporate registration details supplied by the company.</span></div></aside>
    </div></section><FAQ/><CTA/>
  </main>;
}
