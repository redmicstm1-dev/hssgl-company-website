import { site } from "@/lib/site";

// Persistent direct-contact shortcut, kept independent from the enquiry form.
export function WhatsAppFloat() {
  return <a className="whatsapp-float" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with HSSGL on WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.4 12.4 0 0 0 5.4 22l-1.5 5.5 5.7-1.5A12.4 12.4 0 1 0 16 3.2Zm0 22.5c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.4.9.9-3.3-.3-.5A10 10 0 1 1 16 25.7Zm5.5-7.5c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.3 8.3 0 0 1-2.5-1.5 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.4a11.7 11.7 0 0 0 4.5 4c.6.3 1.1.4 1.5.6.6.2 1.2.2 1.7.1.5-.1 1.8-.7 2-1.4s.3-1.3.2-1.4-.3-.2-.6-.4Z" fill="currentColor"/></svg></a>;
}
