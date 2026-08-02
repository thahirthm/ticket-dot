import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function AccessibilityStatement() {
  return (
    <main className="legal-page-main">
      <Header />
      
      <div className="legal-header">
        <h1 className="legal-title">Accessibility Statement</h1>
        <p className="legal-subtitle">
          Welcome to TicketDot Technologies. We are committed to providing an accessible experience on the TicketDot website and mobile applications.
        </p>
      </div>

      <div className="legal-content-wrapper">
        <div className="container legal-container">
            <div className="legal-sections">
              <section>
                <p>TicketDot Technologies Private Limited is committed to providing an accessible experience on the TicketDot website and mobile applications.</p>
              </section>

              <section>
                <h2 className="legal-section-title">Commitment</h2>
                <p>We strive to follow WCAG 2.2 Level AA where reasonably practicable.</p>
              </section>

              <section>
                <h2 className="legal-section-title">Accessibility Features</h2>
                <p>Keyboard navigation, screen reader support, scalable text, sufficient color contrast, descriptive labels, accessible forms and error messages.</p>
              </section>

              <section>
                <h2 className="legal-section-title">Mobile Apps</h2>
                <p>Support for VoiceOver (iOS), TalkBack (Android), Dynamic Type and platform accessibility features where applicable.</p>
              </section>

              <section>
                <h2 className="legal-section-title">Third-Party Services</h2>
                <p>Some embedded third-party services, including payment gateways and maps, may have accessibility limitations outside our control.</p>
              </section>

              <section>
                <h2 className="legal-section-title">Feedback</h2>
                <p>Email accessibility issues to <a href="mailto:hello@ticketdot.in" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>hello@ticketdot.in</a> with details of your device and assistive technology.</p>
              </section>

              <section>
                <h2 className="legal-section-title">Continuous Improvement</h2>
                <p>Accessibility is reviewed regularly and improvements are incorporated into future releases.</p>
              </section>
            </div>
            

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
