import { Link } from 'react-router-dom';
import { Share2, GitBranch, Link2, Rss, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Logo size={32} showText={true} />
            </Link>
            <p className="footer-desc">
              We craft digital experiences that inspire, engage, and deliver measurable results for ambitious brands worldwide.
            </p>
            <div className="social-links">
              <a href="#!" aria-label="Twitter/X"><Share2 size={18} /></a>
              <a href="#!" aria-label="GitHub"><GitBranch size={18} /></a>
              <a href="#!" aria-label="LinkedIn"><Link2 size={18} /></a>
              <a href="#!" aria-label="Blog/RSS"><Rss size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Web Design</Link></li>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
              <li><Link to="/services">E-Commerce</Link></li>
              <li><Link to="/services">SEO & Performance</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Careers</Link></li>
              <li><Link to="/contact">Blog</Link></li>
              <li><Link to="/contact">Press Kit</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="contact-list">
              <li>
                <Mail size={15} />
                <span>hello@ltstudio.io</span>
              </li>
              <li>
                <Phone size={15} />
                <span>+1 (555) 234-5678</span>
              </li>
              <li>
                <MapPin size={15} />
                <span>San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 LT Studio. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#!">Privacy Policy</a>
            <a href="#!">Terms of Service</a>
            <a href="#!">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
