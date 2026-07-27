import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="legal-page-main">
      <Header />
      
      <div className="legal-header">
        <h1 className="legal-title">Terms & Conditions</h1>
        <p className="legal-subtitle">
          Welcome to TicketDot Technologies. These Terms and Conditions govern your use of our website, mobile application, and related services. By accessing or using TicketDot, you agree to be bound by these Terms.
        </p>
      </div>

      <div className="legal-content-wrapper">
        <div className="container legal-container">
            <div className="legal-sections">
              <section>
                <h2 className="legal-section-title">1. Acceptance</h2>
                <p>By using TicketDot you agree to these Terms.</p>
              </section>

              <section>
                <h2 className="legal-section-title">2. Eligibility</h2>
                <p>Users must provide accurate information and comply with applicable laws.</p>
              </section>

              <section>
                <h2 className="legal-section-title">3. Accounts</h2>
                <p>OTP authentication is required for registered features. Users are responsible for safeguarding access.</p>
              </section>

              <section>
                <h2 className="legal-section-title">4. Ticket Purchase</h2>
                <p>Tickets are generated only after successful payment confirmation.</p>
              </section>

              <section>
                <h2 className="legal-section-title">5. QR Ticket Validation</h2>
                <p>QR tickets are unique, time-bound and may be verified by authorised personnel.</p>
              </section>

              <section>
                <h2 className="legal-section-title">6. Passenger Responsibilities</h2>
                <p>Provide accurate boarding and destination details, follow operator rules and present valid tickets.</p>
              </section>

              <section>
                <h2 className="legal-section-title">7. Prohibited Conduct</h2>
                <p>Fraud, reverse engineering, duplicate QR usage, automated abuse and unlawful activity are prohibited.</p>
              </section>

              <section>
                <h2 className="legal-section-title">8. Payments</h2>
                <p>Payments are processed through authorised payment partners. TicketDot does not store sensitive banking credentials.</p>
              </section>

              <section>
                <h2 className="legal-section-title">9. Intellectual Property</h2>
                <p>All trademarks, software and content belong to TicketDot or licensors.</p>
              </section>

              <section>
                <h2 className="legal-section-title">10. Disclaimer</h2>
                <p>Transport operations remain the responsibility of participating operators.</p>
              </section>

              <section>
                <h2 className="legal-section-title">11. Limitation of Liability</h2>
                <p>Liability is limited to the maximum extent permitted by law.</p>
              </section>

              <section>
                <h2 className="legal-section-title">12. Governing Law</h2>
                <p>Governed by the laws of India. Courts having jurisdiction at the company's registered office shall have jurisdiction unless otherwise required by law.</p>
              </section>
            </div>
            
            <div className="legal-warning">
              IMPORTANT: This document is a professionally structured draft and should be reviewed by legal counsel before publication.
            </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
