import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-sections">
      <div className="footer-top-card">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col-main">
              <Link href="/" className="logo" style={{ marginBottom: '1rem' }}>
                <Image
                  src="/ticketdot-main-logo.svg"
                  alt="ticketdot logo"
                  width={150}
                  height={47}
                />
              </Link>
              <p className="footer-slogan">Making Every Journey Effortless.</p>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">What at Ticketdot</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#about">About</Link></li>
                <li><Link href="/#how-it-works">How it works</Link></li>
                <li><Link href="/#features">App features</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Information</h4>
              <ul className="footer-links">
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                <li><Link href="/refund-and-cancellation-policy">Refund & Cancellation Policy</Link></li>
                <li><Link href="/accessibility-statement">Accessibility Statement</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Address</h4>
              <address className="footer-address">
                Ground Floor, Kerala Startup Mission,<br />
                Cyberpark Calicut,<br />
                673016
              </address>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Contact</h4>
              <div className="footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <a href="tel:08075709009" style={{ color: '#2a2a2a' }}>080 757 09009</a>
                <a href="mailto:hello@ticketdot.in" style={{ color: '#2a2a2a' }}>hello@ticketdot.in</a>
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
            <p className="copyright">© TicketDot Technologies Private Limited 2026. All Rights Reserved. | CIN: U62099KL2025PTC097889</p>
            <div className="social-links">
              <a href="#" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 2C6.496 2 2 6.497 2 12.034c0 1.93.501 3.82 1.455 5.485L2 22l4.63-1.213C8.243 21.688 10.126 22.2 12.03 22.2c5.534 0 10.033-4.498 10.033-10.034C22.063 6.497 17.564 2 12.031 2zm5.405 14.51c-.22.62-1.282 1.185-1.785 1.25-.395.053-.9.13-2.915-.705-2.433-1.008-3.98-3.486-4.1-3.646-.118-.16-1.003-1.336-1.003-2.545 0-1.21.618-1.804.838-2.043.22-.24.475-.3.633-.3.158 0 .317.001.454.008.145.007.34-.055.532.408.204.493.7 1.708.763 1.833.063.125.105.27.026.43-.079.16-.118.26-.237.399-.118.14-.249.307-.355.407-.12.115-.246.241-.11.474.135.234.6 1.002 1.298 1.625.903.805 1.663 1.054 1.897 1.168.234.115.37.096.508-.063.138-.16.592-.693.75-932.158-.24.316-.24.552-.336.533-.095.736.216 1.012.336.195.085.341.344.341.74z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2h8.5A5.757 5.757 0 0 1 22 7.75v8.5A5.757 5.757 0 0 1 16.25 22h-8.5A5.757 5.757 0 0 1 2 16.25v-8.5A5.757 5.757 0 0 1 7.75 2zm8.5 1.5h-8.5A4.255 4.255 0 0 0 3.5 7.75v8.5A4.255 4.255 0 0 0 7.75 20.5h8.5A4.255 4.255 0 0 0 20.5 16.25v-8.5A4.255 4.255 0 0 0 16.25 3.5zm-4.25 4a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5-2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12.06c0-5.52-4.48-10-10-10S2 6.54 2 12.06c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54V12.06h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.93h2.77l-.44 2.89h-2.33v6.99C18.34 21.18 22 17.05 22 12.06z" />
                </svg>
              </a>
              <a href="#" aria-label="X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
