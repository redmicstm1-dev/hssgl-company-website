// Centralised HSSGL brand and contact configuration. Update this file when the client confirms new details.
export const site = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Haliden Security Services and Guard Limited",
  shortName: process.env.NEXT_PUBLIC_COMPANY_SHORT_NAME || "HALIDEN",
  registration: process.env.NEXT_PUBLIC_COMPANY_REGISTRATION || "RC 9779559",
  motto: process.env.NEXT_PUBLIC_COMPANY_MOTTO || "Trust. Vigilance. Protection.",
  description: "Security services and personnel support for businesses, facilities and organisations in Asaba, Delta State, and surrounding areas.",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "08051851908",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348051851908",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "oscog2005@gmail.com",
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "No. 7 DGideons Street, Akwuöse, Asaba, Delta State, Nigeria",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  formEndpoint: "https://api.web3forms.com/submit",
  formAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
] as const;

// These service categories reflect the requested scope; confirm regulatory requirements and launch readiness with the client before publishing service-specific claims.
export const services = [
  { title: "Manned Security Personnel", text: "Security personnel support for organisations seeking a visible, professional presence at their premises. Service arrangements are discussed around the site, operating hours and client requirements.", icon: "/icons/guard.svg", image: "/images/service-manpower.webp" },
  { title: "Corporate Office Security", text: "Security support for offices and business premises, with attention to access points, visitors and the day-to-day needs of the workplace.", icon: "/icons/building.svg", image: "/images/service-corporate-offices.webp" },
  { title: "Residential Estate Security", text: "Security personnel support for residential estates and managed properties, tailored to the layout and requirements of the community.", icon: "/icons/estate.svg", image: "/images/service-residential-estates.webp" },
  { title: "Event Security Support", text: "Security arrangements for events and venues, discussed in line with the event format, expected attendance and venue requirements.", icon: "/icons/event.svg", image: "/images/service-event-security.webp" },
  { title: "Facility and Site Security", text: "Security support for facilities and sites that need a considered approach to access, activity and the protection of their operating environment.", icon: "/icons/building.svg", image: "/images/service-facility-security.webp" },
  { title: "Personal Protection Enquiries", text: "Enquiries about individual protection needs can be discussed to establish the nature of the requirement and whether an appropriate service can be arranged.", icon: "/icons/shield-check.svg", image: "/images/service-close-protection.webp" },
] as const;

export const industries = [
  { title: "Banking and Financial Services", image: "/images/industry-banking.webp", icon: "/icons/bank.svg", text: "Security considerations for customer-facing premises, staff areas and controlled access points." },
  { title: "Hotels and Hospitality", image: "/images/industry-hospitality.webp", icon: "/icons/hotel.svg", text: "A professional security presence that takes account of guests, staff and the movement through a hospitality venue." },
  { title: "Corporate Offices", image: "/images/industry-corporate.webp", icon: "/icons/building.svg", text: "Support for office environments, reception areas and everyday business operations." },
  { title: "Construction Sites", image: "/images/industry-construction.webp", icon: "/icons/construction.svg", text: "Security requirements for active sites, equipment areas and authorised site access." },
  { title: "Residential Estates", image: "/images/industry-residential.webp", icon: "/icons/house.svg", text: "Security arrangements shaped around residential access points and community needs." },
  { title: "Retail and Commercial Spaces", image: "/images/industry-retail.webp", icon: "/icons/shopping.svg", text: "Support for public-facing premises, staff areas and customer movement." },
  { title: "Industrial Facilities", image: "/images/industry-industrial.webp", icon: "/icons/industrial.svg", text: "Site-specific security considerations for industrial premises and operational areas." },
  { title: "Public and Institutional Facilities", image: "/images/industry-government.webp", icon: "/icons/government.svg", text: "Security needs discussed according to the facility, access arrangements and client requirements." },
  { title: "Logistics and Warehousing", image: "/images/industry-logistics.webp", icon: "/icons/truck.svg", text: "Security considerations for vehicle access, loading areas and the movement of goods." },
] as const;
