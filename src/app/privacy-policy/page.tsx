import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="legal-page-main">
      <Header />
      
      <div className="legal-header">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-subtitle">
          Welcome to TicketDot Technologies. We are committed to protecting your privacy and the security of your personal information. This privacy policy explains how we collect, use, store, and share your personal information.
        </p>
      </div>

      <div className="legal-content-wrapper">
        <div className="container legal-container">
            <div className="legal-sections">
              <section>
                <h2 className="legal-section-title">1. Introduction</h2>
                <p>This Privacy Policy explains how TicketDot collects, uses, stores, shares and protects personal information when users access the TicketDot website and mobile applications.</p>
              </section>

              <section>
                <h2 className="legal-section-title">2. Definitions</h2>
                <p>'User', 'Personal Data', 'Operator', 'Ticket', 'Service', 'Applicable Law', and 'Payment Partner' shall have their ordinary meanings in the context of the Service.</p>
              </section>

              <section>
                <h2 className="legal-section-title">3. Information We Collect</h2>
                <p>Account information (mobile number, name, email, gender, date of birth), device information, IP address, location data (with permission), ticket history, payment metadata, support communications and analytics.</p>
              </section>

              <section>
                <h2 className="legal-section-title">4. How We Use Information</h2>
                <p>Authentication, ticket booking, fare calculation, fraud prevention, customer support, notifications, legal compliance, service improvements and analytics.</p>
              </section>

              <section>
                <h2 className="legal-section-title">5. Sharing of Information</h2>
                <p>With transport operators, payment partners such as Juspay, cloud providers, analytics providers and authorities where required by law.</p>
              </section>

              <section>
                <h2 className="legal-section-title">6. Location Data</h2>
                <p>Location is used to identify nearby buses, improve route suggestions and support ticketing features. Users may revoke permission, though some functionality may be affected.</p>
              </section>

              <section>
                <h2 className="legal-section-title">7. Data Security</h2>
                <p>TicketDot implements reasonable technical and organisational safeguards including encryption in transit, access controls, logging and monitoring.</p>
              </section>

              <section>
                <h2 className="legal-section-title">8. Data Retention</h2>
                <p>Data is retained only as long as necessary for legal, contractual and operational purposes.</p>
              </section>

              <section>
                <h2 className="legal-section-title">9. User Rights</h2>
                <p>Users may access, update or request deletion of eligible personal information through the app or by contacting support.</p>
              </section>

              <section>
                <h2 className="legal-section-title">10. Children's Privacy</h2>
                <p>The Service is not intended for children where prohibited by applicable law without appropriate consent.</p>
              </section>

              <section>
                <h2 className="legal-section-title">11. Changes</h2>
                <p>Policies may be updated from time to time. Continued use constitutes acceptance.</p>
              </section>

              <section>
                <h2 className="legal-section-title">12. Contact</h2>
                <p>Email: <a href="mailto:hello@ticketdot.in" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>hello@ticketdot.in</a></p>
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
