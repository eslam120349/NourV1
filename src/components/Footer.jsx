import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="navbar-logo">
            <span className="reg-mark" />
            <span className="navbar-logo-text">
              EASY<strong>GROUP</strong>
            </span>
          </Link>
          <p className="text-mist footer-desc">
            A full-service creative production house — printing, branding, advertising and
            exhibition solutions that turn ideas into visual experiences.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Navigate</span>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Services</span>
          <span>Printing Solutions</span>
          <span>Branding &amp; Identity</span>
          <span>Advertising &amp; Outdoor</span>
          <span>Exhibition &amp; Events</span>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Contact</span>
          <a href="tel:+20100000000">+20 10 000 0000</a>
          <a href="mailto:hello@easygroup.com">hello@easygroup.com</a>
          <span>Cairo, Egypt</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Easy Group. All Rights Reserved.</span>
        <span className="footer-spec">PRINT · BRAND · ADVERTISE · EXHIBIT</span>
      </div>
    </footer>
  )
}
