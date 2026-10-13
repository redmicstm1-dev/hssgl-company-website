"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const initial = { company: "", contact: "", phone: "", email: "", industry: "", service: "", location: "", startDate: "", personnel: "", details: "", website: "" };

export function RequestForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  function update(key: keyof typeof initial, value: string) { setForm((current) => ({ ...current, [key]: value })); }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Silently discard likely bot submissions instead of displaying a false success message.
    if (form.website) return;
    if (!site.formAccessKey) { setStatus("error"); setMessage("The enquiry form is not configured yet. Please contact HSSGL by phone or WhatsApp."); return; }
    setStatus("loading"); setMessage("");
    try {
      // Web3Forms forwards submissions to the verified inbox; no custom backend is required.
      const response = await fetch(site.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ access_key: site.formAccessKey, subject: `HSSGL security request — ${form.company}`, from_name: "HSSGL Website — Security Request", replyto: form.email, botcheck: "", "Company / Organisation": form.company, "Contact Person": form.contact, "Phone Number": form.phone, email: form.email, "Industry / Sector": form.industry, "Security Service Required": form.service, "Location / Address": form.location, "Preferred Start Date": form.startDate || "Not specified", "Number of Personnel": form.personnel || "Not specified", "Additional Requirements": form.details, website: form.website }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success !== true) throw new Error("We couldn't send your request just now. Please try again or contact HSSGL directly by phone or WhatsApp.");
      setStatus("success"); setMessage("Thank you. Your request has been submitted. HSSGL will review your enquiry and respond using the contact details provided."); setForm(initial);
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "We couldn't send your request. Please contact HSSGL directly."); }
  }

  return <form className="request-form" onSubmit={submit}>
    <div className="form-intro"><span className="eyebrow">SECURITY ENQUIRY</span><h2>Tell us what you need</h2><p>Share a few details so the team can understand your request.</p></div>
    <div className="form-grid">
      <label>Company / Organisation Name *<input required maxLength={140} value={form.company} onChange={(e) => update("company", e.target.value)} autoComplete="organization" placeholder="Company or organisation" /></label>
      <label>Contact Person *<input required maxLength={100} value={form.contact} onChange={(e) => update("contact", e.target.value)} autoComplete="name" placeholder="Your full name" /></label>
      <label>Phone Number *<input required type="tel" maxLength={40} value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" placeholder="Phone number" /></label>
      <label>Email Address *<input required type="email" maxLength={254} value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" placeholder="name@company.com" /></label>
      <label>Industry / Sector *<select required value={form.industry} onChange={(e) => update("industry", e.target.value)}><option value="">Select industry</option><option>Banking / Financial Services</option><option>Hotel / Hospitality</option><option>Corporate Office</option><option>Commercial Facility</option><option>Residential Estate</option><option>Construction Site</option><option>Industrial Facility</option><option>Logistics / Warehousing</option><option>Other</option></select></label>
      <label>Security Service Required *<select required value={form.service} onChange={(e) => update("service", e.target.value)}><option value="">Select service</option><option>Manned Security Personnel</option><option>Corporate Office Security</option><option>Residential Estate Security</option><option>Event Security Support</option><option>Facility and Site Security</option><option>Personal Protection Enquiry</option><option>Not sure — please discuss with me</option></select></label>
      <label className="full">Location of Service *<input required maxLength={180} value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Town / city and site location" /></label>
      <label>Preferred Start Date<input type="date" value={form.startDate} onChange={(e) => update("startDate", e.target.value)} /></label>
      <label>Number of Personnel (if known)<input type="number" min="1" max="10000" inputMode="numeric" value={form.personnel} onChange={(e) => update("personnel", e.target.value)} placeholder="e.g. 4" /></label>
      <label className="full">Additional Requirements<textarea rows={5} maxLength={4000} value={form.details} onChange={(e) => update("details", e.target.value)} placeholder="Describe your site, working hours, or other requirements." /></label>
    </div>
    {/* Honeypot field: kept out of the visual layout to deter basic automated spam. */}
    <label className="honeypot" aria-hidden="true">Leave this field empty<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} /></label>
    <button className="button button-primary form-submit" disabled={status === "loading"}>{status === "loading" ? "Submitting…" : "Submit Security Enquiry →"}</button>
    {status !== "idle" && <p className={`form-message ${status}`} role="status" aria-live="polite">{message}</p>}
    <small className="form-note">Your details will be used to respond to this enquiry. Please do not include passwords or sensitive personal information.</small>
  </form>;
}
