"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>("what");

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className="footer-sections">
      <div className="footer-top-card">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col-main">
              <Link href="/" className="logo" style={{ marginBottom: "1rem" }}>
                <Image
                  src="/ticketdot-main-logo.svg"
                  alt="ticketdot logo"
                  width={150}
                  height={47}
                />
              </Link>
              <p className="footer-slogan">Making Every Journey Effortless.</p>
              <p className="footer-cin" style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>
                CIN : U62099KL2025PTC097889
              </p>
            </div>

            {/* What at Ticketdot */}
            <div className="footer-col footer-accordion-item">
              <button
                type="button"
                className="footer-col-title footer-accordion-header"
                onClick={() => toggleSection("what")}
                aria-expanded={openSection === "what"}
              >
                <span>What at Ticketdot</span>
                <span className="footer-accordion-icon mobile-only">
                  {openSection === "what" ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  )}
                </span>
              </button>
              <div className={`footer-accordion-body ${openSection === "what" ? "open" : ""}`}>
                <ul className="footer-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/#about">About</Link></li>
                  <li><Link href="/#how-it-works">How it works</Link></li>
                  <li><Link href="/#features">App features</Link></li>
                </ul>
              </div>
            </div>

            {/* Information */}
            <div className="footer-col footer-accordion-item">
              <button
                type="button"
                className="footer-col-title footer-accordion-header"
                onClick={() => toggleSection("info")}
                aria-expanded={openSection === "info"}
              >
                <span>Information</span>
                <span className="footer-accordion-icon mobile-only">
                  {openSection === "info" ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  )}
                </span>
              </button>
              <div className={`footer-accordion-body ${openSection === "info" ? "open" : ""}`}>
                <ul className="footer-links">
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                  <li><Link href="/refund-and-cancellation-policy">Refund & Cancellation Policy</Link></li>
                  <li><Link href="/accessibility-statement">Accessibility Statement</Link></li>
                </ul>
              </div>
            </div>

            {/* Address */}
            <div className="footer-col footer-accordion-item">
              <button
                type="button"
                className="footer-col-title footer-accordion-header"
                onClick={() => toggleSection("address")}
                aria-expanded={openSection === "address"}
              >
                <span>Address</span>
                <span className="footer-accordion-icon mobile-only">
                  {openSection === "address" ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  )}
                </span>
              </button>
              <div className={`footer-accordion-body ${openSection === "address" ? "open" : ""}`}>
                <address className="footer-address">
                  Ground Floor, Kerala Startup Mission,<br />
                  Cyberpark Calicut,<br />
                  673016
                </address>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-col footer-accordion-item">
              <button
                type="button"
                className="footer-col-title footer-accordion-header"
                onClick={() => toggleSection("contact")}
                aria-expanded={openSection === "contact"}
              >
                <span>Contact</span>
                <span className="footer-accordion-icon mobile-only">
                  {openSection === "contact" ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  )}
                </span>
              </button>
              <div className={`footer-accordion-body ${openSection === "contact" ? "open" : ""}`}>
                <div className="footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <a href="tel:08075709009" style={{ color: '#2a2a2a' }}>080 757 09009</a>
                  <a href="mailto:hello@ticketdot.in" style={{ color: '#2a2a2a' }}>hello@ticketdot.in</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-image">
            <Image
              src="/foot-log.png"
              alt="Ticketdot Footer Logo"
              width={1200}
              height={200}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">© TicketDot Technologies Pvt Ltd. 2026. All Rights Reserved.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2h8.5A5.757 5.757 0 0 1 22 7.75v8.5A5.757 5.757 0 0 1 16.25 22h-8.5A5.757 5.757 0 0 1 2 16.25v-8.5A5.757 5.757 0 0 1 7.75 2zm8.5 1.5h-8.5A4.255 4.255 0 0 0 3.5 7.75v8.5A4.255 4.255 0 0 0 7.75 20.5h8.5A4.255 4.255 0 0 0 20.5 16.25v-8.5A4.255 4.255 0 0 0 16.25 3.5zm-4.25 4a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5-2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
