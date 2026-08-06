import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa'; // الحل الأول

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" draggable="false" className="navbar-logo">
            <img src="/images/WhatsApp.png" draggable="false" alt="Easy Group" className="h-[40px] brightness-0 invert" />
          </Link>
          <p className="text-mist footer-desc">
            A full-service creative production house — printing, branding, advertising and
            exhibition solutions that turn ideas into visual experiences.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/easygroupads/" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://www.tiktok.com/@easy.group4" aria-label="tiktok">  <FaTiktok size={18} /></a>
            <a href="https://www.facebook.com/easygroupads/" aria-label="Facebook"><Facebook size={18} /></a>
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
          <a href="tel:+201013287002">+201013287002</a>
          <a href="tel:+201090311995">+201090311995 </a>
          <a href="mailto:easygroupads@gmail.com">easygroupads@</a>
          <span>7964,street 9 beside ezz el din pharmacy el mokattam Cairo Egypt</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Easy Group. All Rights Reserved.</span>
        <span className="footer-spec">PRINT · BRAND · ADVERTISE · EXHIBIT</span>
      </div>
    </footer>
  )
}
