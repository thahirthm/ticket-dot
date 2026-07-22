import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function RefundAndCancellationPolicy() {
  return (
    <main className="legal-page-main">
      <Header />
      
      <div className="legal-content-wrapper">
        <div className="container">
          <div className="legal-card">
            <h1 className="legal-title">Refund & Cancellation Policy</h1>
            <p className="legal-meta">
              For: TicketDot Technologies Private Limited<br/>
              Version: 1.0 (Draft)
            </p>

            <div className="legal-sections">
              <section>
                <h2 className="legal-section-title">1. Eligible Refunds</h2>
                <p>Payment successful but ticket not generated; duplicate payments; eligible operator-approved cancellations or bus breakdowns.</p>
              </section>

              <section>
                <h2 className="legal-section-title">2. Non-Refundable Cases</h2>
                <p>Used tickets, user errors in destination selection, missed buses unless required by law or operator policy.</p>
              </section>

              <section>
                <h2 className="legal-section-title">3. Refund Process</h2>
                <p>Users should contact support through the app or email with transaction details.</p>
              </section>

              <section>
                <h2 className="legal-section-title">4. Refund Timeline</h2>
                <p>Approved refunds are generally initiated within 5-10 business days, subject to banking timelines.</p>
              </section>

              <section>
                <h2 className="legal-section-title">5. Support</h2>
                <p>Email: <a href="mailto:hello@ticketdot.in" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>hello@ticketdot.in</a></p>
              </section>
            </div>
            
            <div className="legal-warning">
              IMPORTANT: This document is a professionally structured draft and should be reviewed by legal counsel before publication.
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
