// components/Footer.jsx
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer-left">© 2026 Memoir</span>
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy policy</Link>
        <span className="footer-divider">·</span>
        <Link to="/terms">Terms of service</Link>
        <span className="footer-divider">·</span>
        <a href="www.linkedin.com/in/orapeleng-mathebula-5ba891190" target="_blank" rel="noreferrer">LinkedIn</a>
        <span className="footer-divider">·</span>
        <a href="mailto:your@email.com">orapalengdev23@gmail.com</a>
      </div>
    </footer>
  );
}

export default Footer;