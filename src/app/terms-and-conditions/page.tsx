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
                <h2 className="legal-section-title">Introduction</h2>
                <p>Welcome to TicketDot. These Terms &amp; Conditions ("Terms") govern your access to and use of the TicketDot website, mobile application, and related services.</p>
                <p className="mt-2">By creating an account, booking a ticket, or using TicketDot, you agree to these Terms. If you do not agree with any part of these Terms, please do not use our services.</p>
              </section>

              <section>
                <h2 className="legal-section-title">1. About TicketDot</h2>
                <p>TicketDot is a digital platform that enables users to search, book, manage, and pay for bus tickets offered by participating private bus operators. TicketDot facilitates bookings but does not own or operate the buses unless explicitly stated.</p>
              </section>

              <section>
                <h2 className="legal-section-title">2. User Eligibility</h2>
                <p>To use TicketDot, you must:</p>
                <ul className="list-none mt-2 space-y-4">
                  <li>Be at least 18 years of age or use the service under the supervision of a parent or legal guardian.</li>
                  <li>Provide accurate and complete registration information.</li>
                  <li>Maintain the confidentiality of your account credentials.</li>
                  <li>Be responsible for all activities performed through your account.</li>
                </ul>
              </section>

              <section>
                <h2 className="legal-section-title">3. Account Registration</h2>
                <p>When creating an account, you agree to:</p>
                <ul className="list-none mt-2 space-y-4">
                  <li>Provide accurate and up-to-date information.</li>
                  <li>Keep your login credentials secure.</li>
                  <li>Notify TicketDot immediately if you suspect unauthorized access to your account.</li>
                  <li>Update your information whenever necessary.</li>
                </ul>
                <p className="mt-2">TicketDot reserves the right to suspend or terminate accounts containing false or misleading information.</p>
              </section>

              <section>
                <h2 className="legal-section-title">4. Ticket Booking</h2>
                <p>When booking a ticket, you agree that:</p>
                <ul className="list-none mt-2 space-y-4">
                  <li>All booking information provided is accurate.</li>
                  <li>Seat availability is subject to confirmation.</li>
                  <li>Ticket prices may change without prior notice until the booking is successfully completed.</li>
                  <li>A booking is confirmed only after successful payment and receipt of a booking confirmation.</li>
                  <li>Users are responsible for verifying all travel details before confirming a booking.</li>
                </ul>
              </section>

              <section>
                <h2 className="legal-section-title">5. Payments</h2>
                <p>TicketDot accepts payments through secure third-party payment providers. By making a payment, you agree that:</p>
                <ul className="list-none mt-2 space-y-4">
                  <li>You are authorized to use the selected payment method.</li>
                  <li>Payment information is accurate.</li>
                  <li>Applicable service charges and taxes may be included during checkout.</li>
                  <li>TicketDot does not store your debit card, credit card, or banking credentials.</li>
                </ul>
              </section>

              <section>
                <h2 className="legal-section-title">6. Ticket Cancellation and Refunds</h2>
                <p>Cancellation and refund eligibility depend on:</p>
                <ul className="list-none mt-2 space-y-4">
                  <li>The cancellation policy of the respective bus operator.</li>
                  <li>The time remaining before departure.</li>
                  <li>Applicable service fees.</li>
                </ul>
                <p className="mt-2">Refunds, when approved, will be processed to the original payment method within the applicable processing period.</p>
                <p className="mt-2">Certain booking fees or convenience charges may be non-refundable.</p>
              </section>

              <section>
                <h2 className="legal-section-title">7. Boarding Requirements</h2>
                <p>Passengers are responsible for:</p>
                <ul className="list-none mt-2 space-y-4">
                  <li>Arriving at the boarding point before the scheduled departure time.</li>
                  <li>Carrying a valid ticket or digital booking confirmation.</li>
                  <li>Presenting a valid government-issued identification if requested by the bus operator.</li>
                </ul>
                <p className="mt-2">Failure to arrive on time may result in the ticket being treated as a no-show.</p>
              </section>

              <section>
                <h2 className="legal-section-title">8. Bus Operator Responsibilities</h2>
                <p>Bus operators are solely responsible for:</p>
                <ul className="list-none mt-2 space-y-4">
                  <li>Bus schedules</li>
                  <li>Route changes</li>
                  <li>Boarding procedures</li>
                  <li>Passenger safety</li>
                  <li>Driver conduct</li>
                  <li>Delays and cancellations</li>
                  <li>Luggage handling</li>
                </ul>
                <p className="mt-2">TicketDot acts only as a booking platform and is not liable for operational issues caused by the bus operator.</p>
              </section>

              <section>
                <h2 className="legal-section-title">9. User Responsibilities</h2>
                <p>Users agree not to:</p>
                <ul className="list-none mt-2 space-y-4">
                  <li>Use TicketDot for unlawful purposes.</li>
                  <li>Attempt unauthorized access to our systems.</li>
                  <li>Provide false or fraudulent information.</li>
                  <li>Interfere with the operation of the platform.</li>
                  <li>Copy, modify, or distribute TicketDot content without permission.</li>
                </ul>
                <p className="mt-2">Violation of these Terms may result in suspension or permanent termination of your account.</p>
              </section>

              <section>
                <h2 className="legal-section-title">10. Intellectual Property</h2>
                <p>All content available on TicketDot, including:</p>
                <ul className="list-none mt-2 space-y-4">
                  <li>Logo</li>
                  <li>Branding</li>
                  <li>Design</li>
                  <li>User interface</li>
                  <li>Graphics</li>
                  <li>Text</li>
                  <li>Software</li>
                  <li>Icons</li>
                </ul>
                <p className="mt-2">is the property of TicketDot or its licensors and is protected under applicable intellectual property laws.</p>
                <p className="mt-2">No content may be reproduced without prior written permission.</p>
              </section>

              <section>
                <h2 className="legal-section-title">11. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, TicketDot shall not be liable for:</p>
                <ul className="list-none mt-2 space-y-4">
                  <li>Bus delays or cancellations</li>
                  <li>Missed connections</li>
                  <li>Traffic conditions</li>
                  <li>Weather-related disruptions</li>
                  <li>Operator negligence</li>
                  <li>Loss or damage to luggage</li>
                  <li>Personal injury occurring during travel</li>
                  <li>Technical interruptions beyond our reasonable control</li>
                </ul>
                <p className="mt-2">Our liability is limited to the amount paid for the affected booking, where required by applicable law.</p>
              </section>

              <section>
                <h2 className="legal-section-title">12. Privacy</h2>
                <p>Your use of TicketDot is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.</p>
              </section>

              <section>
                <h2 className="legal-section-title">13. Changes to These Terms</h2>
                <p>TicketDot reserves the right to modify these Terms &amp; Conditions at any time.</p>
                <p className="mt-2">Updated versions will be published on our website and mobile application. Continued use of TicketDot after changes become effective constitutes acceptance of the revised Terms.</p>
              </section>

              <section>
                <h2 className="legal-section-title">14. Governing Law</h2>
                <p>These Terms &amp; Conditions shall be governed by and interpreted in accordance with the laws of India.</p>
                <p className="mt-2">Any disputes arising from the use of TicketDot shall be subject to the exclusive jurisdiction of the competent courts in Kerala, India.</p>
              </section>

              <section>
                <h2 className="legal-section-title">15. Contact Us</h2>
                <p>If you have any questions regarding these Terms &amp; Conditions, please contact us:</p>
                <ul className="list-none mt-4 space-y-2">
                  <li><strong>TicketDot</strong></li>
                  <li><strong>Email:</strong> <a href="mailto:support@ticketdot.in" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>support@ticketdot.in</a></li>
                  <li><strong>Website:</strong> <a href="https://www.ticketdot.in" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>www.ticketdot.in</a></li>
                  <li><strong>Customer Support:</strong> Available through the TicketDot mobile application.</li>
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
