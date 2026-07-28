import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

export default function RefundAndCancellationPolicy() {
  return (
    <main className="legal-page-main">
      <Header />
      
      <div className="legal-header">
        <h1 className="legal-title">Refund & Cancellation Policy</h1>
        <p className="legal-subtitle">
          Welcome to TicketDot Technologies. This policy outlines our guidelines and procedures regarding refunds and cancellations for tickets purchased through our platform.
        </p>
      </div>

      <div className="legal-content-wrapper">
        <div className="container legal-container">
            <div className="legal-sections">
              <section>
                <h2 className="legal-section-title">Introduction</h2>
                <p>Refund eligibility depends on the cancellation policy of the respective bus operator and the circumstances of the booking.</p>
                <p className="mt-2">You may be eligible for a refund if:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>You cancel your ticket within the cancellation period specified by the bus operator.</li>
                  <li>The bus operator cancels the trip.</li>
                  <li>The bus service is not operated.</li>
                  <li>Duplicate payment has been successfully charged for the same booking.</li>
                  <li>Payment is deducted, but the booking is not confirmed.</li>
                </ul>
                <p className="mt-2">Refund requests outside the operator's cancellation policy may not be approved.</p>
              </section>

              <section>
                <h2 className="legal-section-title">2. Ticket Cancellation</h2>
                <p>Passengers can cancel eligible bookings through the TicketDot application or website before the scheduled departure time.</p>
                <p className="mt-2">The refund amount will be determined based on:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>The cancellation policy of the bus operator.</li>
                  <li>The time remaining before departure.</li>
                  <li>Applicable cancellation charges.</li>
                  <li>Applicable service or convenience fees.</li>
                </ul>
                <p className="mt-2">Some tickets may be non-refundable depending on the operator's policy.</p>
              </section>

              <section>
                <h2 className="legal-section-title">3. Refund Processing Time</h2>
                <p>Once a refund is approved:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>UPI payments are generally refunded within 3–7 business days.</li>
                  <li>Debit and credit card payments are generally refunded within 5–10 business days.</li>
                  <li>Net banking refunds are generally processed within 5–10 business days.</li>
                  <li>Wallet or other digital payment methods are processed according to the respective payment provider's timelines.</li>
                </ul>
                <p className="mt-2">Actual processing times may vary depending on your bank or payment service provider.</p>
              </section>

              <section>
                <h2 className="legal-section-title">4. Bus Cancellation by the Operator</h2>
                <p>If a bus operator cancels a scheduled trip:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Eligible passengers will receive a refund according to the operator's cancellation policy.</li>
                  <li>TicketDot will initiate the refund after confirmation from the operator.</li>
                  <li>Alternative travel options may be offered where available.</li>
                </ul>
              </section>

              <section>
                <h2 className="legal-section-title">5. Failed or Unsuccessful Transactions</h2>
                <p>If payment is successfully debited but your booking is not confirmed:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>The amount is generally refunded automatically.</li>
                  <li>If the refund is not received within the expected timeframe, please contact TicketDot Customer Support with your booking or transaction details.</li>
                </ul>
              </section>

              <section>
                <h2 className="legal-section-title">6. Duplicate Payments</h2>
                <p>If you are charged more than once for the same booking:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>The duplicate transaction will be reviewed.</li>
                  <li>Once verified, the additional amount will be refunded to the original payment method.</li>
                </ul>
              </section>

              <section>
                <h2 className="legal-section-title">7. Non-Refundable Charges</h2>
                <p>Unless otherwise required by law or stated by the bus operator, the following may not be refundable:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Convenience fees</li>
                  <li>Platform or service charges</li>
                  <li>Payment gateway charges</li>
                  <li>Promotional or discount-related adjustments</li>
                </ul>
              </section>

              <section>
                <h2 className="legal-section-title">8. No-Show Policy</h2>
                <p>Passengers who:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Fail to arrive at the boarding point before departure,</li>
                  <li>Miss the bus,</li>
                  <li>Provide incorrect travel details, or</li>
                  <li>Are denied boarding due to failure to meet operator requirements,</li>
                </ul>
                <p className="mt-2">may not be eligible for a refund unless permitted under the bus operator's cancellation policy.</p>
              </section>

              <section>
                <h2 className="legal-section-title">9. How to Request a Refund</h2>
                <p>You can request a refund by:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Cancelling your booking through the TicketDot app or website (where eligible), or</li>
                  <li>Contacting TicketDot Customer Support with:
                    <ul className="list-circle pl-5 mt-1 space-y-1">
                      <li>Booking ID</li>
                      <li>Registered mobile number</li>
                      <li>Transaction details</li>
                      <li>Reason for the refund request</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-2">Additional verification may be required before processing certain refund requests.</p>
              </section>

              <section>
                <h2 className="legal-section-title">10. Refund Method</h2>
                <p>Approved refunds will be credited to the original payment method used during booking.</p>
                <p className="mt-2">TicketDot cannot transfer refunds to a different bank account, card, UPI ID, or payment method.</p>
              </section>

              <section>
                <h2 className="legal-section-title">11. Changes to This Policy</h2>
                <p>TicketDot reserves the right to modify this Refund Policy at any time. Any updates will be published on our website and mobile application, with the revised effective date.</p>
                <p className="mt-2">Continued use of TicketDot after changes become effective constitutes acceptance of the updated Refund Policy.</p>
              </section>

              <section>
                <h2 className="legal-section-title">12. Contact Us</h2>
                <p>If you have any questions regarding this Refund Policy or the status of a refund, please contact us:</p>
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
