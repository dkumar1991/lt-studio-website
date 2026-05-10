import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Palette, Code2, Smartphone, ShoppingCart, Rocket, BarChart3,
  Globe, Shield, Database, ArrowRight, CheckCircle2
} from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import './Services.css';

const services = [
  { icon: <Palette size={32} />, title: 'UI/UX Design', desc: 'User-centered design that balances aesthetics with functionality. We create design systems, wireframes, interactive prototypes, and pixel-perfect visual designs.', features: ['User Research & Personas', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing', 'Brand Identity'], color: '#6c63ff', price: 'From $2,500' },
  { icon: <Code2 size={32} />, title: 'Web Development', desc: 'Full-stack web development with modern technologies. We build blazing-fast, scalable applications that are maintainable and ready to grow with your business.', features: ['React / Next.js', 'Node.js / Express', 'REST & GraphQL APIs', 'Database Architecture', 'CI/CD Pipelines'], color: '#ff6584', price: 'From $5,000' },
  { icon: <Smartphone size={32} />, title: 'Mobile Apps', desc: 'Cross-platform mobile experiences that feel native. From ideation to App Store launch, we handle every step of the mobile development journey.', features: ['React Native / Flutter', 'iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Optimization'], color: '#43e097', price: 'From $8,000' },
  { icon: <ShoppingCart size={32} />, title: 'E-Commerce', desc: 'Revenue-generating online stores built for scale. We integrate seamlessly with payment gateways, inventory systems, and marketing platforms.', features: ['Shopify / WooCommerce', 'Custom Storefronts', 'Payment Integration', 'Inventory Management', 'Conversion Optimization'], color: '#f7b731', price: 'From $4,000' },
  { icon: <Rocket size={32} />, title: 'Performance & SEO', desc: 'Speed and search visibility that drive organic growth. We audit, optimize, and monitor your digital properties to ensure peak performance.', features: ['Core Web Vitals', 'Technical SEO', 'Performance Audits', 'Image Optimization', 'CDN & Caching'], color: '#45aaf2', price: 'From $1,500' },
  { icon: <Globe size={32} />, title: 'CMS & Headless', desc: 'Flexible content management powered by modern headless CMS platforms. Empower your team to publish without needing a developer.', features: ['Contentful / Sanity', 'Custom CMS Builds', 'Content Modeling', 'Editor Training', 'API Integrations'], color: '#a55eea', price: 'From $3,000' },
  { icon: <Shield size={32} />, title: 'Security & Compliance', desc: 'Robust security practices and compliance support to protect your users and your business from modern threats.', features: ['Security Audits', 'GDPR / CCPA', 'SSL & HTTPS', 'Penetration Testing', 'Vulnerability Patching'], color: '#eb3b5a', price: 'From $2,000' },
  { icon: <Database size={32} />, title: 'Cloud & DevOps', desc: 'Scalable cloud infrastructure and automated deployment pipelines that let your team ship fast and confidently.', features: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring & Alerts', 'Cost Optimization'], color: '#20bf6b', price: 'From $3,500' },
  { icon: <BarChart3 size={32} />, title: 'Analytics & Strategy', desc: 'Data-driven insights and growth strategies that help you understand your users and make smarter product decisions.', features: ['GA4 / Mixpanel', 'Conversion Funnels', 'A/B Testing', 'Heatmaps', 'Monthly Reports'], color: '#fd9644', price: 'From $1,200' },
];


export default function Services() {
  return (
    <div className="services-page">
      <SEO
        title="Services"
        description="Explore our full range of digital services — UI/UX design, web development, mobile apps, e-commerce, SEO, cloud, and digital strategy. Custom solutions for every budget."
        keywords="web design services, web development services, UI UX design, mobile app development, e-commerce development, SEO services, digital strategy"
        canonical="/services"
      />
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <StaggerContainer staggerDelay={0.12}>
            <StaggerItem><div className="section-tag">Our Services</div></StaggerItem>
            <StaggerItem>
              <h1 className="section-title">Everything You Need to<br /><span>Succeed Online</span></h1>
            </StaggerItem>
            <StaggerItem>
              <p className="section-subtitle">From concept to deployment and beyond — end-to-end digital solutions that drive real business results.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="all-services">
        <div className="container">
          <StaggerContainer className="all-services-grid" staggerDelay={0.07}>
            {services.map((s, i) => (
              <StaggerItem key={i} variant="fadeUp">
                <motion.div
                  className="service-detail-card"
                  style={{ '--accent-color': s.color }}
                  whileHover={{ y: -6, borderColor: `${s.color}40` }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  <div className="service-detail-header">
                    <div className="service-detail-icon" style={{ background: `${s.color}18`, color: s.color }}>{s.icon}</div>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="service-features">
                    {s.features.map((f, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.06 }}
                      >
                        <CheckCircle2 size={15} style={{ color: s.color }} />
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                  <Link to="/contact" className="service-cta-link">
                    Get a Quote <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner
        subtitle="Let's discuss your project and find the right service to take your business to the next level."
      />
    </div>
  );
}
