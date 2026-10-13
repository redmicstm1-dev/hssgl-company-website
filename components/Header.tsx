"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { navItems, site } from "@/lib/site";
import { ArrowIcon, MenuIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label={`${site.name} home`}>
          <span className="brand-mark"><Image src="/hssgl-shield.svg" alt="" width={42} height={48} priority /></span>
          <span className="brand-copy"><strong>{site.shortName}</strong><small>SECURITY SERVICES &amp; GUARD LIMITED</small></span>
        </Link>
        <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link className="mobile-nav-cta" href="/request-security-services" onClick={() => setOpen(false)}>Request Security Services <ArrowIcon /></Link>
        </nav>
        <div className="header-actions">
          <Link className="button button-primary button-small desktop-cta" href="/request-security-services">Request Security Services <ArrowIcon /></Link>
          <button className="menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}><MenuIcon /></button>
        </div>
      </div>
    </header>
  );
}
