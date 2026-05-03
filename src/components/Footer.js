import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <h3 className="footer-logo">Memoir</h3>
          <p className="footer-tagline">
            Capture and share your moments.
          </p>
        </div>

        <div className="footer-right">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="mailto:your@email.com">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Memoir. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;