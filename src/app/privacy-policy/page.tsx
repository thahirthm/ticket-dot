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
                <h2 className="legal-section-title">Introduction</h2>
                <p>At TicketDot, your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use the TicketDot mobile application, website, and related services.</p>
                <p className="mt-4">By accessing or using TicketDot, you agree to the practices described in this Privacy Policy.</p>
              </section>

              <section>
                <h2 className="legal-section-title">1. Information We Collect</h2>
                <p>To provide a seamless bus ticket booking experience, we may collect the following information:</p>
                
                <h3 className="legal-subsection-title mt-6 font-semibold">Personal Information:</h3>
                <ul className="list-none mt-4 space-y-4">
                  <li>Full Name</li>
                  <li>Mobile Number</li>
                  <li>Email Address</li>
                  <li>Date of Birth (if required)</li>
                  <li>Profile Information</li>
                </ul>

                <h3 className="legal-subsection-title mt-8 font-semibold">Booking Information:</h3>
                <ul className="list-none mt-4 space-y-4">
                  <li>Bus operator</li>
                  <li>Boarding and dropping locations</li>
                  <li>Travel date and time</li>
                  <li>Seat selection</li>
                  <li>Ticket details</li>
                  <li>Booking history</li>
                </ul>

                <h3 className="legal-subsection-title mt-8 font-semibold">Payment Information</h3>
                <p className="mt-4">Payments are securely processed through trusted third-party payment gateways. TicketDot does not store your debit card, credit card, UPI PIN, or banking credentials.</p>

                <h3 className="legal-subsection-title mt-8 font-semibold">Device &amp; Technical Information</h3>
                <p className="mt-4">We may automatically collect:</p>
                <ul className="list-none mt-4 space-y-4">
                  <li>IP Address</li>
                  <li>Device model</li>
                  <li>Operating System</li>
                  <li>Browser type</li>
                  <li>App version</li>
                  <li>Device identifiers</li>
                  <li>Crash logs</li>
                  <li>Analytics data</li>
                </ul>

                <h3 className="legal-subsection-title mt-8 font-semibold">Location Information</h3>
                <p className="mt-4">With your permission, TicketDot may access your location to:</p>
                <ul className="list-none mt-4 space-y-4 text-[15px]">
                  <li>Show nearby boarding points</li>
                  <li>Improve route recommendations</li>
                  <li>Enhance your overall booking experience</li>
                </ul>
                <p className="mt-4">You can disable location access at any time through your device settings.</p>
              </section>

              <section>
                <h2 className="legal-section-title">2. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-none mt-4 space-y-4 text-[15px]">
                  <li>Create and manage your TicketDot account</li>
                  <li>Book and manage bus tickets</li>
                  <li>Process payments and refunds</li>
                  <li>Send booking confirmations and ticket details</li>
                  <li>Provide customer support</li>
                  <li>Improve app performance and user experience</li>
                  <li>Notify you about schedule changes, cancellations, or delays</li>
                  <li>Detect fraudulent or unauthorized activity</li>
                  <li>Comply with legal obligations</li>
                  <li>Send promotional offers and updates (only where permitted)</li>
                </ul>
              </section>

              <section>
                <h2 className="legal-section-title">3. Sharing Your Information</h2>
                <p>TicketDot does not sell your personal information.</p>
                <p className="mt-4">We may share your information only with:</p>
                
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Bus Operators</h4>
                    <p>To confirm and manage your ticket booking.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Payment Service Providers</h4>
                    <p>To securely process payments and refunds.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technology Partners</h4>
                    <p>Cloud hosting, analytics, SMS, email and notification providers that help us operate our services.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Legal Authorities</h4>
                    <p>When required by law, court order, or government request.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Business Transfers</h4>
                    <p>If TicketDot is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="legal-section-title">4. Data Security</h2>
                <p>We implement appropriate technical and organizational security measures to protect your information, including:</p>
                <ul className="list-none mt-4 space-y-4 text-[15px]">
                  <li>Encrypted data transmission (HTTPS/SSL)</li>
                  <li>Secure cloud infrastructure</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security monitoring</li>
                  <li>Industry-standard data protection practices</li>
                </ul>
                <p className="mt-4">While we strive to protect your data, no online system can guarantee 100% security.</p>
              </section>

              <section>
                <h2 className="legal-section-title">5. Data Retention</h2>
                <p>We retain your information only for as long as necessary to:</p>
                <ul className="list-none mt-4 space-y-4 text-[15px]">
                  <li>Provide our services</li>
                  <li>Maintain booking records</li>
                  <li>Meet legal and regulatory requirements</li>
                  <li>Resolve disputes</li>
                  <li>Prevent fraud</li>
                </ul>
                <p className="mt-4">When your data is no longer required, it will be securely deleted or anonymized.</p>
              </section>

              <section>
                <h2 className="legal-section-title">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-none mt-4 space-y-4 text-[15px]">
                  <li>Access your personal information</li>
                  <li>Update or correct your information</li>
                  <li>Request deletion of your account (subject to legal obligations)</li>
                  <li>Withdraw marketing communications</li>
                  <li>Request information about how your data is used</li>
                </ul>
                <p className="mt-4">To exercise these rights, please contact us using the details below.</p>
              </section>

              <section>
                <h2 className="legal-section-title">7. Cookies and Analytics</h2>
                <p>Our website and application may use cookies and similar technologies to:</p>
                <ul className="list-none mt-4 space-y-4 text-[15px]">
                  <li>Remember your preferences</li>
                  <li>Improve website performance</li>
                  <li>Analyze usage patterns</li>
                  <li>Personalize your experience</li>
                </ul>
                <p className="mt-4">You can manage cookie preferences through your browser settings.</p>
              </section>

              <section>
                <h2 className="legal-section-title">8. Third-Party Services</h2>
                <p>TicketDot may contain links to third-party websites or integrate services provided by third parties, including:</p>
                <ul className="list-none mt-4 space-y-4 text-[15px]">
                  <li>Payment gateways</li>
                  <li>Bus operator systems</li>
                  <li>Maps and location services</li>
                  <li>Analytics providers</li>
                </ul>
                <p className="mt-4">These services have their own privacy policies, and TicketDot is not responsible for their privacy practices.</p>
              </section>

              <section>
                <h2 className="legal-section-title">9. Children's Privacy</h2>
                <p>TicketDot is not intended for children under the age of 18 without parental or guardian supervision. We do not knowingly collect personal information from children.</p>
              </section>

              <section>
                <h2 className="legal-section-title">10. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time.</p>
                <p className="mt-4">Any significant changes will be communicated through our website, mobile application, or other appropriate channels. Continued use of TicketDot after changes become effective constitutes your acceptance of the revised Privacy Policy.</p>
              </section>

              <section>
                <h2 className="legal-section-title">11. Contact Us</h2>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
                <ul className="list-none mt-6 space-y-4 text-[15px]">
                  <li>TicketDot</li>
                  <li>Email: <a href="mailto:support@ticketdot.in" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>support@ticketdot.in</a></li>
                  <li>Website: <a href="https://www.ticketdot.in" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>www.ticketdot.in</a></li>
                  <li>Customer Support: Available through the TicketDot mobile application.</li>
                </ul>
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
