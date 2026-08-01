"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is the ONLY way to "send" an email directly from the browser
    // without using a backend or a 3rd-party service API key.
    // It will open the user's default email app (like Outlook or Apple Mail).
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:hello@ticketdot.in?subject=${subject}&body=${body}`;
    
    setStatus("success");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main>
      <Header />
      
      <section className="support-container">
        <div className="support-left">
          <h1 className="support-title">
            Talk To Our<br />
            Support <span className="text-blue">Team</span>
          </h1>
          <p className="support-desc">
            Experience fast, paperless, and secure travel with TicketDot your trusted companion for every journey.
          </p>
          
          <div className="support-info">
            <div className="support-info-item">
              <div className="support-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="support-info-text">
                hello@ticketdot.in
              </div>
            </div>

            <div className="support-info-item">
              <div className="support-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="support-info-text">
                Ground Floor, Kerala Startup Mission,<br />
                Cyberpark Calicut,<br />
                673016
              </div>
            </div>

            <div className="support-info-item">
              <div className="support-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="support-info-text">
                080 757 09009
              </div>
            </div>
          </div>
        </div>

        <div className="support-right">
          <form className="support-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name*</label>
              <input 
                type="text" 
                name="name"
                className="form-input" 
                placeholder="Enter Your Full Name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address*</label>
                <input 
                  type="email" 
                  name="email"
                  className="form-input" 
                  placeholder="Enter Your Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number*</label>
                <input 
                  type="tel" 
                  name="phone"
                  className="form-input" 
                  placeholder="Enter Your Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Message*</label>
              <textarea 
                name="message"
                className="form-input form-textarea" 
                placeholder="Write Your Message Here"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status === "success" && (
              <div className="text-green-600 mb-4 font-medium p-3 bg-green-50 rounded-md border border-green-200">
                Your message has been sent successfully! We will get back to you soon.
              </div>
            )}
            
            {status === "error" && (
              <div className="text-red-600 mb-4 font-medium p-3 bg-red-50 rounded-md border border-red-200">
                {errorMessage}
              </div>
            )}

            <button 
              type="submit" 
              className="btn-submit disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
