import './Header.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#" className="footer-link">
            mybestbot.com
          </a>
          <span className="footer-separator">•</span>
          <a href="#" className="footer-link">
            Support
          </a>
          <span className="footer-separator">•</span>
          <a href="#" className="footer-link">
            Integrations
          </a>
          <span className="footer-separator">•</span>
          <a href="#" className="footer-link">
            Pricing
          </a>
          <span className="footer-separator">•</span>
          <a href="#" className="footer-link">
            Terms
          </a>
          <span className="footer-separator">•</span>
          <a href="#" className="footer-link">
            Privacy
          </a>
        </div>
        <p className="footer-copyright">
          © 2025 bestbot Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
