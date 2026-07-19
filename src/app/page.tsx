"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const banners = [
  "/banner-1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner4.png"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        {banners.map((src, index) => (
          <div
            key={src}
            className="hero-bg"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              fill
              priority={index === 0}
              quality={100}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
        <div className="hero-overlay"></div>

        <div className="banner-container">
          <div className="hero-content">
            <h1 className="hero-title">One Platform. Every Journey.</h1>
            <p className="hero-subtitle">
              From daily commutes to weekend escapes, TicketDot brings all your travel together in one seamless experience
            </p>

            <div className="hero-actions">
              <button className="btn btn-white">Features</button>
              <button className="btn btn-primary">Download</button>
            </div>

            <div className="hero-indicators">
              {banners.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section" id="about">
        <div className="container">
          <span className="feature-label">/ABOUT</span>
          <div className="feature-grid">
            <div>

              <h2 className="feature-title">
                <span className="text-primary">Smarter</span> Bus<br />
                Travel, One Tap Away
              </h2>
            </div>
            <div>
              <p className="feature-desc">
                TicketDot is a modern digital ticketing platform that makes bus travel fast, seamless, and eco-friendly. Book, manage, and validate your tickets instantly anytime, anywhere.
              </p>
              <button className="btn btn-primary">Get the app</button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="container">
          <span className="feature-label">/HOW IT WORKS</span>
          <div className="feature-grid" >
            <div>
              <h2 className="feature-title" style={{ marginBottom: 0 }}>
                Your <span className="text-primary">Journey</span><br />
                in Just a Few Taps
              </h2>
            </div>
            <div>
              <p className="feature-desc" style={{ marginBottom: 0 }}>
                Book your seat, pay securely, and receive your e-ticket instantly. Simply show your ticket and board with ease.
              </p>
            </div>
          </div>

          <div className="hiw-grid">
            <div className="hiw-card">
              <div className="hiw-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clipPath="url(#clip0_330_4147)">
                    <path d="M20 2.75C23.5804 2.75 27.0142 4.17236 29.5459 6.7041C32.0776 9.23584 33.5 12.6696 33.5 16.25C33.5 19.1015 32.3791 22.2834 30.1025 25.8018C27.8548 29.2755 24.4894 33.0611 20 37.1602C15.5106 33.0611 12.1452 29.2755 9.89746 25.8018C7.62089 22.2834 6.5 19.1015 6.5 16.25C6.5 12.6696 7.92236 9.23584 10.4541 6.7041C12.9858 4.17236 16.4196 2.75 20 2.75ZM20 4.75C16.95 4.75 14.0248 5.9615 11.8682 8.11816C9.7115 10.2748 8.5 13.2 8.5 16.25C8.5 18.6214 9.44805 21.3253 11.3291 24.3281C13.2114 27.3329 16.039 30.6546 19.8271 34.2666L20 34.4316L20.1729 34.2666C23.961 30.6527 26.7886 27.33 28.6709 24.3252C30.5519 21.3224 31.5 18.6195 31.5 16.25C31.5 13.2 30.2885 10.2748 28.1318 8.11816C25.9752 5.9615 23.05 4.75 20 4.75Z" fill="black" stroke="white" strokeWidth="0.5" />
                    <path d="M20 10.25C21.5913 10.25 23.117 10.8826 24.2422 12.0078C25.3674 13.133 26 14.6587 26 16.25C26 17.8413 25.3674 19.367 24.2422 20.4922C23.117 21.6174 21.5913 22.25 20 22.25C18.4087 22.25 16.883 21.6174 15.7578 20.4922C14.6326 19.367 14 17.8413 14 16.25C14 14.6587 14.6326 13.133 15.7578 12.0078C16.883 10.8826 18.4087 10.25 20 10.25ZM20 12.25C18.9391 12.25 17.922 12.6717 17.1719 13.4219C16.4217 14.172 16 15.1891 16 16.25C16 17.3109 16.4217 18.328 17.1719 19.0781C17.922 19.8283 18.9391 20.25 20 20.25C21.0609 20.25 22.078 19.8283 22.8281 19.0781C23.5783 18.328 24 17.3109 24 16.25C24 15.1891 23.5783 14.172 22.8281 13.4219C22.078 12.6717 21.0609 12.25 20 12.25Z" fill="black" stroke="white" strokeWidth="0.5" />
                  </g>
                  <defs>
                    <clipPath id="clip0_330_4147">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h3 className="hiw-card-title">Find Your Route</h3>
                <p className="hiw-card-desc">Browse available buses and select your boarding and destination points in seconds.</p>
              </div>
            </div>

            <div className="hiw-card">
              <div className="hiw-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="34" viewBox="0 0 25 34" fill="none">
                  <path d="M6.58333 15.2969C3.2025 16.3585 0.75 19.5177 0.75 23.2485C0.75 27.851 4.48083 31.5819 9.08333 31.5819C10.5466 31.583 11.9842 31.1984 13.2515 30.4669C14.5187 29.7354 15.5708 28.6828 16.3017 27.4152" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M24.0807 14.0859C20.7474 14.0859 17.8307 13.6693 12.4141 11.5859V21.5859H24.0807V33.2526" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.4193 7.41667C14.2602 7.41667 15.7526 5.92428 15.7526 4.08333C15.7526 2.24238 14.2602 0.75 12.4193 0.75C10.5783 0.75 9.08594 2.24238 9.08594 4.08333C9.08594 5.92428 10.5783 7.41667 12.4193 7.41667Z" stroke="black" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <h3 className="hiw-card-title">Choose Your Seat</h3>
                <p className="hiw-card-desc">View real-time seat availability and pick the seat that suits your journey.</p>
              </div>
            </div>

            <div className="hiw-card">
              <div className="hiw-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clipPath="url(#clip0_330_4163)">
                    <path d="M1.25 23.75V38.75M1.25 36.25H28.75C28.75 34.9239 28.2232 33.6521 27.2855 32.7145C26.3479 31.7768 25.0761 31.25 23.75 31.25H17.5M17.5 31.25C17.5 29.9239 16.9732 28.6521 16.0355 27.7145C15.0979 26.7768 13.8261 26.25 12.5 26.25H1.25M17.5 31.25H11.25M11.05 1.25H36.45C37.0659 1.25878 37.6534 1.51078 38.0843 1.95102C38.5152 2.39125 38.7545 2.98401 38.75 3.6V18.0667C38.7545 18.6827 38.5152 19.2754 38.0843 19.7157C37.6534 20.1559 37.0659 20.4079 36.45 20.4167H11.05C10.4341 20.4079 9.84658 20.1559 9.41571 19.7157C8.98484 19.2754 8.74554 18.6827 8.75 18.0667V3.6C8.74554 2.98401 8.98484 2.39125 9.41571 1.95102C9.84658 1.51078 10.4341 1.25878 11.05 1.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.332 6.66406H15.832M31.6654 14.9974H34.1654M19.9987 10.8307C19.9987 11.8253 20.3938 12.7791 21.097 13.4824C21.8003 14.1856 22.7541 14.5807 23.7487 14.5807C24.7433 14.5807 25.6971 14.1856 26.4003 13.4824C27.1036 12.7791 27.4987 11.8253 27.4987 10.8307C27.4987 9.83617 27.1036 8.88234 26.4003 8.17908C25.6971 7.47582 24.7433 7.08073 23.7487 7.08073C22.7541 7.08073 21.8003 7.47582 21.097 8.17908C20.3938 8.88234 19.9987 9.83617 19.9987 10.8307Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_330_4163">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h3 className="hiw-card-title">Pay Securely</h3>
                <p className="hiw-card-desc">Complete your booking instantly using UPI, cards, or other secure payment methods.</p>
              </div>
            </div>

            <div className="hiw-card">
              <div className="hiw-card-icon">



                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clipPath="url(#clip0_330_4172)">
                    <path d="M28.5976 11.4062C27.9476 10.756 27.5671 9.88448 27.532 8.96586C27.497 8.04724 27.81 7.14924 28.4085 6.45146C28.458 6.39343 28.4837 6.31883 28.4805 6.24262C28.4774 6.16641 28.4455 6.09422 28.3913 6.04052L24.9437 2.58896C24.8867 2.532 24.8094 2.5 24.7288 2.5C24.6482 2.5 24.571 2.532 24.514 2.58896L19.0187 8.08428C18.8158 8.28694 18.6631 8.53411 18.5726 8.80615C18.4823 9.07879 18.3297 9.32665 18.127 9.53006C17.9243 9.73348 17.6769 9.88685 17.4046 9.97803C17.1324 10.0687 16.885 10.2214 16.6819 10.4241L2.58896 24.514C2.532 24.571 2.5 24.6482 2.5 24.7288C2.5 24.8094 2.532 24.8867 2.58896 24.9437L6.03662 28.3913C6.09032 28.4455 6.1625 28.4774 6.23871 28.4805C6.31492 28.4837 6.38952 28.458 6.44756 28.4085C7.14519 27.8094 8.04338 27.4958 8.96232 27.5307C9.88125 27.5655 10.7531 27.9462 11.4034 28.5964C12.0536 29.2467 12.4343 30.1185 12.4691 31.0375C12.504 31.9564 12.1904 32.8546 11.5913 33.5522C11.5418 33.6103 11.5161 33.6849 11.5193 33.7611C11.5224 33.8373 11.5543 33.9095 11.6085 33.9632L15.0562 37.4108C15.1131 37.4678 15.1904 37.4998 15.271 37.4998C15.3516 37.4998 15.4288 37.4678 15.4858 37.4108L29.5796 23.3179C29.7823 23.1148 29.935 22.8674 30.0257 22.5952C30.1159 22.3226 30.2685 22.0747 30.4712 21.8713C30.674 21.6679 30.9213 21.5145 31.1937 21.4233C31.4657 21.3328 31.7129 21.18 31.9155 20.9772L37.4108 15.4819C37.4678 15.4249 37.4998 15.3477 37.4998 15.2671C37.4998 15.1865 37.4678 15.1092 37.4108 15.0522L33.9632 11.6046C33.9095 11.5504 33.8373 11.5185 33.7611 11.5154C33.6849 11.5122 33.6103 11.5379 33.5522 11.5874C32.8554 12.1869 31.958 12.5013 31.0394 12.4677C30.1208 12.4341 29.2487 12.055 28.5976 11.4062Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" />
                    <path d="M19.5711 10.9695L18.2812 9.67969M23.0102 14.4086L22.15 13.5492M26.4492 17.8484L25.5898 16.9883M30.3187 21.7172L29.0289 20.4273" stroke="black" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_330_4172">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h3 className="hiw-card-title">Get Your E-Ticket</h3>
                <p className="hiw-card-desc">Receive a digital ticket with a unique QR code for quick and paperless verification.</p>
              </div>
            </div>

            <div className="hiw-large-card">
              <div className="hiw-large-card-img-wrapper">
                <Image
                  src="/j.jpg"
                  alt="Boarding Bus"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="hiw-inner-card-wrapper">
                <div className="hiw-inner-card">
                  <div className="hiw-card-icon hiw-inner-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <g clipPath="url(#clip0_330_4180)">
                        <path d="M16.667 22.1162C19.6417 22.1163 22.4942 23.2989 24.5977 25.4023C26.7011 27.5058 27.8837 30.3583 27.8838 33.333C27.8838 33.6555 27.7553 33.9652 27.5273 34.1934C27.2993 34.4215 26.9896 34.5497 26.667 34.5498C26.3443 34.5498 26.0348 34.4215 25.8066 34.1934C25.5785 33.9652 25.4502 33.6557 25.4502 33.333C25.4501 31.0036 24.5241 28.7702 22.877 27.123C21.2298 25.4759 18.9964 24.5499 16.667 24.5498C14.3375 24.5498 12.1032 25.4759 10.4561 27.123C8.80904 28.7701 7.88388 31.0037 7.88379 33.333C7.88379 33.6555 7.75531 33.9652 7.52734 34.1934C7.29925 34.4215 6.98956 34.5497 6.66699 34.5498C6.34431 34.5498 6.03481 34.4215 5.80664 34.1934C5.57847 33.9652 5.4502 33.6557 5.4502 33.333C5.45028 30.3584 6.632 27.5058 8.73535 25.4023C10.8389 23.2988 13.6921 22.1162 16.667 22.1162ZM14.2881 5.92285C15.4239 5.4525 16.6741 5.3295 17.8799 5.56934C19.0856 5.80924 20.1932 6.40127 21.0625 7.27051C21.9319 8.13992 22.5238 9.24819 22.7637 10.4541C23.0035 11.66 22.8807 12.91 22.4102 14.0459C21.9396 15.1818 21.1424 16.1529 20.1201 16.8359C19.098 17.5188 17.8963 17.8837 16.667 17.8838C15.0182 17.8838 13.4364 17.2284 12.2705 16.0625C11.1048 14.8967 10.4503 13.3156 10.4502 11.667C10.4502 10.4375 10.815 9.23522 11.498 8.21289C12.1811 7.19064 13.1522 6.39335 14.2881 5.92285ZM16.667 7.88379C15.6636 7.88379 14.7007 8.2817 13.9912 8.99121C13.2817 9.70072 12.8838 10.6636 12.8838 11.667C12.8839 12.4151 13.1049 13.1465 13.5205 13.7686C13.9362 14.3907 14.5275 14.8758 15.2188 15.1621C15.9099 15.4484 16.6705 15.5228 17.4043 15.377C18.1382 15.231 18.8127 14.8709 19.3418 14.3418C19.8709 13.8127 20.231 13.1382 20.377 12.4043C20.5228 11.6705 20.4484 10.9099 20.1621 10.2188C19.8758 9.52746 19.3907 8.93622 18.7686 8.52051C18.1465 8.10494 17.4151 7.88385 16.667 7.88379ZM34.9229 7.12109C35.2042 7.10319 35.4818 7.18383 35.709 7.34668L35.8027 7.42188C36.0407 7.63641 36.1849 7.93586 36.2031 8.25586C36.2214 8.5773 36.1114 8.89324 35.8975 9.13379L35.8936 9.1377L31.5449 14.1367C31.4323 14.2648 31.2936 14.3683 31.1387 14.4395C30.9837 14.5106 30.815 14.5469 30.6445 14.5488C30.4735 14.5498 30.3041 14.5161 30.1475 14.4473C30.0295 14.3954 29.9207 14.3249 29.8252 14.2393L29.7344 14.1484L27.4189 11.5508C27.2048 11.3088 27.096 10.9915 27.1152 10.6689C27.1346 10.3458 27.2812 10.0429 27.5234 9.82812C27.7656 9.61345 28.0832 9.5041 28.4062 9.52344C28.7294 9.54285 29.0323 9.68942 29.2471 9.93164L30.2969 11.1152L30.6367 11.498L30.9727 11.1123L34.0869 7.53027L34.0879 7.53125C34.301 7.28951 34.6012 7.14162 34.9229 7.12109Z" fill="black" stroke="white" strokeWidth="0.9" />
                      </g>
                      <defs>
                        <clipPath id="clip0_330_4180">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <h3 className="hiw-card-title">Board & Travel</h3>
                    <p className="hiw-card-desc">Show your e-ticket when boarding and enjoy a smooth, hassle-free journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="feature-split-section" id="features">
        <div className="container">
          <div className="feature-split-grid">
            <div className="feature-split-content">
              <span className="feature-label">/APP FEATURES</span>
              <h2 className="feature-title" style={{ marginBottom: '3rem', fontSize: '3.5rem', fontWeight: 500, lineHeight: 1.2 }}>
                Smarter Features for a<br />
                <span className="text-primary">Smoother</span> Ride
              </h2>

              <div className="features-list-wrapper">
                <div className="feature-list-item active">
                  <div className="feature-list-number">01</div>
                  <div className="feature-list-text">
                    <h3 className="feature-list-title">Quick Booking</h3>
                    <p className="feature-list-desc">Find routes and reserve seats in just a few taps.</p>
                  </div>
                </div>

                <div className="feature-list-item">
                  <div className="feature-list-number">02</div>
                  <div className="feature-list-text">
                    <h3 className="feature-list-title">Secure Payments</h3>
                    <p className="feature-list-desc">Pay confidently through trusted and secure payment options.</p>
                  </div>
                </div>

                <div className="feature-list-item">
                  <div className="feature-list-number">03</div>
                  <div className="feature-list-text">
                    <h3 className="feature-list-title">Seamless Boarding</h3>
                    <p className="feature-list-desc">Show your digital ticket to the conductor and board without delays.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-split-image">
              <Image
                src="/feature.png"
                alt="App Features"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section" id="partners">
        <div className="container">
          <span className="feature-label">/OUR PARTNERS</span>
          <div className="feature-grid" style={{ marginBottom: '6rem', alignItems: 'center' }}>
            <div>
              <h2 className="feature-title" style={{ marginBottom: 0, fontSize: '3.5rem', fontWeight: 500, lineHeight: 1.2 }}>
                Grow <span className="text-primary">Together</span> with<br />
                TicketDot
              </h2>
            </div>
            <div>
              <p className="feature-desc" style={{ marginBottom: 0, paddingTop: 0 }}>
                Book your seat, pay securely, and receive your e-ticket instantly. Simply show your ticket and board with ease.
              </p>
            </div>
          </div>

          <div className="marquee-container">
            <div className="marquee-trackss">
              <div className="marquee-content">
                <div className="logo-item"><Image src="/c1.png" alt="Cyberpark" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
                <div className="logo-item"><Image src="/c2.png" alt="Kerala Startup Mission" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
                <div className="logo-item"><Image src="/c1.png" alt="Cyberpark" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
                <div className="logo-item"><Image src="/c2.png" alt="Kerala Startup Mission" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
                <div className="logo-item"><Image src="/c1.png" alt="Cyberpark" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
                <div className="logo-item"><Image src="/c2.png" alt="Kerala Startup Mission" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
              </div>
              <div className="marquee-content" aria-hidden="true">
                <div className="logo-item"><Image src="/c1.png" alt="Cyberpark" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
                <div className="logo-item"><Image src="/c2.png" alt="Kerala Startup Mission" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
                <div className="logo-item"><Image src="/c1.png" alt="Cyberpark" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
                <div className="logo-item"><Image src="/c2.png" alt="Kerala Startup Mission" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
                <div className="logo-item"><Image src="/c1.png" alt="Cyberpark" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
                <div className="logo-item"><Image src="/c2.png" alt="Kerala Startup Mission" width={150} height={50} style={{ objectFit: 'contain' }} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="download">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-image">
              <Image
                src="/dn.png"
                alt="TicketDot App"
                fill
              />
            </div>
            <div className="cta-content">
              <h2 className="cta-title">
                Your Next <span className="text-primary">Journey</span><br />
                Starts Here
              </h2>
              <p className="cta-desc">
                From daily commutes to weekend trips, TicketDot makes booking simple, paperless, and hassle-free. Join the future of bus travel.
              </p>
              
              <button className="cta-download-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download the TicketDot App
              </button>

              <div className="cta-available-text">Available on</div>
              
              <div className="cta-badges">
                <Link href="#" className="store-badge">
                  <svg viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  <div className="store-badge-text">
                    <span className="small">Download on the</span>
                    <span className="large">App Store</span>
                  </div>
                </Link>
                
                <Link href="#" className="store-badge">
                  <svg viewBox="0 0 512 512">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                  <div className="store-badge-text">
                    <span className="small">GET IT ON</span>
                    <span className="large">Google Play</span>
                  </div>
                </Link>
              </div>

              <div className="trusted-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                Trusted by the travelers across Kerala
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
