import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="main-container">
        <nav className="breadcrumbs">
          <a
            href="/"
            style={{ textDecoration: "none", color: "inherit", opacity: "0.7" }}
          >
            Home
          </a>
          &nbsp;/&nbsp;
          <span>Contact</span>
        </nav>
        <div className="content-wrap">
          <aside className="contact-info-card">
            <div className="info-section">
              <div className="section-header">
                <div className="icon-circle">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h3 className="section-title">Call To Us</h3>
              </div>
              <p className="info-text">We are available 24/7, 7 days a week.</p>
              <p className="info-text">Phone: +8801611112222</p>
            </div>
            <hr className="divider" />
            <div className="info-section">
              <div className="section-header">
                <div className="icon-circle">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h3 className="section-title">Write To Us</h3>
              </div>
              <p className="info-text">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="info-text">Emails: customer@exclusive.com</p>
              <p className="info-text">Emails: support@exclusive.com</p>
            </div>
          </aside>
          <main className="contact-form-card">
            <form>
              <div className="inputs-grid">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  required
                  className="form-input"
                />
                <input
                  type="tel"
                  placeholder="Your Phone *"
                  required
                  className="form-input"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="form-textarea"
              ></textarea>
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Contact;
