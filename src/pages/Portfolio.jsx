import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import SEO from '../components/SEO';
import './Portfolio.css';

const categories = ['All', 'Web Design', 'Web App', 'E-Commerce', 'Mobile'];

const projects = [
  { title: 'SaaS Analytics Platform', category: 'Web App', tags: ['React', 'Node.js', 'PostgreSQL'], desc: 'A full-featured SaaS dashboard with real-time analytics, team management, and automated billing integration.', gradient: 'linear-gradient(135deg, #6c63ff, #a855f7)', stat1: 'Web App', stat1Label: 'Category', stat2: '12 weeks', stat2Label: 'Delivery' },
  { title: 'Fashion Retail Store', category: 'E-Commerce', tags: ['Next.js', 'Shopify', 'Stripe'], desc: 'A stunning e-commerce experience with immersive product visuals, seamless checkout, and personalised recommendations.', gradient: 'linear-gradient(135deg, #ff6584, #f7b731)', stat1: 'E-Commerce', stat1Label: 'Category', stat2: '8 weeks', stat2Label: 'Delivery' },
  { title: 'Operations Dashboard', category: 'Web App', tags: ['React', 'TypeScript', 'D3.js'], desc: 'A data visualisation platform that transforms complex operational data into actionable insights in real time.', gradient: 'linear-gradient(135deg, #43e097, #45aaf2)', stat1: 'Web App', stat1Label: 'Category', stat2: '10 weeks', stat2Label: 'Delivery' },
  { title: 'Music Discovery App', category: 'Mobile', tags: ['React Native', 'Firebase'], desc: 'A social music discovery app where users share playlists, follow friends, and explore curated mood-based radio.', gradient: 'linear-gradient(135deg, #eb3b5a, #a55eea)', stat1: 'Mobile', stat1Label: 'Category', stat2: '14 weeks', stat2Label: 'Delivery' },
  { title: 'Sustainable Brand Website', category: 'Web Design', tags: ['Figma', 'Webflow', 'GSAP'], desc: 'Complete brand identity and website for a sustainable fashion startup — bold, earthy, and deeply human.', gradient: 'linear-gradient(135deg, #20bf6b, #26de81)', stat1: 'Web Design', stat1Label: 'Category', stat2: '6 weeks', stat2Label: 'Delivery' },
  { title: 'Fintech Mobile App', category: 'Mobile', tags: ['Flutter', 'Dart', 'Firebase'], desc: 'A fintech mobile application with biometric authentication, instant transfers, and smart savings goals.', gradient: 'linear-gradient(135deg, #45aaf2, #2d98da)', stat1: 'Mobile', stat1Label: 'Category', stat2: '16 weeks', stat2Label: 'Delivery' },
  { title: 'E-Learning Platform', category: 'Web App', tags: ['Next.js', 'GraphQL', 'AWS'], desc: 'An interactive learning platform with video streaming, progress tracking, certificates, and live coaching sessions.', gradient: 'linear-gradient(135deg, #f7b731, #fd9644)', stat1: 'Web App', stat1Label: 'Category', stat2: '20 weeks', stat2Label: 'Delivery' },
  { title: 'Interior Design Studio', category: 'Web Design', tags: ['React', 'Three.js', 'Framer Motion'], desc: 'A visually immersive portfolio website for a high-end interior design studio with 3D room previews.', gradient: 'linear-gradient(135deg, #a55eea, #6c63ff)', stat1: 'Web Design', stat1Label: 'Category', stat2: '8 weeks', stat2Label: 'Delivery' },
  { title: 'Grocery Delivery Platform', category: 'E-Commerce', tags: ['React', 'Node.js', 'MongoDB'], desc: 'A hyperlocal grocery delivery platform with live inventory, driver tracking, and subscription meal boxes.', gradient: 'linear-gradient(135deg, #26de81, #43e097)', stat1: 'E-Commerce', stat1Label: 'Category', stat2: '18 weeks', stat2Label: 'Delivery' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="portfolio-page">
      <SEO
        title="Portfolio"
        description="Browse LT Studio's portfolio of web design, web apps, mobile apps, and e-commerce projects — showcasing our approach, craft, and capabilities."
        keywords="web design portfolio, web development portfolio, UI UX portfolio, mobile app projects, e-commerce portfolio, React projects"
        canonical="/portfolio"
      />
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <StaggerContainer staggerDelay={0.12}>
            <StaggerItem><div className="section-tag">Our Work</div></StaggerItem>
            <StaggerItem>
              <h1 className="section-title">Projects That Define<br /><span>Our Craft</span></h1>
            </StaggerItem>
            <StaggerItem>
              <p className="section-subtitle">A curated selection of projects where design, technology, and strategy come together to deliver outstanding results.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="container">
          <motion.div
            className="filter-tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map(cat => (
              <motion.button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-current={activeCategory === cat ? 'true' : undefined}
                whileTap={{ scale: 0.94 }}
                whileHover={{ y: -2 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          <LayoutGroup>
            <motion.div className="projects-grid" layout>
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <motion.div
                    key={p.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="project-card"
                    whileHover={{ y: -8 }}
                  >
                    <div className="project-visual" style={{ background: p.gradient }}>
                      <div className="project-mockup">
                        <div className="mockup-bar" />
                        <div className="mockup-bar short" />
                        <div className="mockup-block" />
                        <div className="mockup-row">
                          <div className="mockup-block small" />
                          <div className="mockup-block small" />
                        </div>
                      </div>
                      <div className="project-overlay" aria-hidden="true" />
                      <div className="project-actions">
                        <motion.button
                          className="project-btn"
                          aria-label="View live"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.92 }}
                        >
                          <ExternalLink size={16} />
                        </motion.button>
                        <motion.button
                          className="project-btn"
                          aria-label="View code"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.92 }}
                        >
                          <GitBranch size={16} />
                        </motion.button>
                      </div>
                    </div>
                    <div className="project-info">
                      <div className="project-meta">
                        <span className="project-category">{p.category}</span>
                        <div className="project-tags">
                          {p.tags.map((t, j) => <span key={j} className="project-tag">{t}</span>)}
                        </div>
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                      <div className="project-stats">
                        <div className="project-stat">
                          <span className="stat-val">{p.stat1}</span>
                          <span className="stat-lbl">{p.stat1Label}</span>
                        </div>
                        <div className="project-stat">
                          <span className="stat-val">{p.stat2}</span>
                          <span className="stat-lbl">{p.stat2Label}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="cta-glow" />
            <div className="cta-content">
              <h2>Have a Project in <span>Mind?</span></h2>
              <p>Let's turn your idea into a digital product that makes an impact.</p>
              <Link to="/contact" className="btn-primary">
                Let's Talk <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
