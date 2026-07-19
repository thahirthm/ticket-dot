"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <Image
              src="/ticketdot-main-logo.svg"
              alt="ticketdot logo"
              width={150}
              height={47}
              priority
            />
          </Link>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link href="/#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="/#how-it-works" className="nav-link" onClick={() => setIsMenuOpen(false)}>How it works</Link>
            <Link href="/#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>App Features</Link>
            <Link href="/support" className="nav-link" onClick={() => setIsMenuOpen(false)}>Support</Link>
            <Link href="/#download" className="btn btn-primary" style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>Download</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
