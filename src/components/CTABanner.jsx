import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './CTABanner.css';

const checks = ['Free consultation', 'No commitment', 'Response in 24h'];

export default function CTABanner({
  title = 'Ready to Build Something',
  highlight = 'Extraordinary?',
  subtitle = "Let's discuss your project and see how we can help you achieve your digital goals.",
  primaryLabel = 'Start the Conversation',
  primaryTo = '/contact',
  secondaryLabel = 'See Our Work',
  secondaryTo = '/portfolio',
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-orb cta-orb-1" aria-hidden="true" />
          <div className="cta-orb cta-orb-2" aria-hidden="true" />
          <div className="cta-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {title} <span>{highlight}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {subtitle}
            </motion.p>
            <motion.div
              className="cta-checks"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {checks.map((c, i) => (
                <span key={i}><CheckCircle2 size={16} aria-hidden="true" /> {c}</span>
              ))}
            </motion.div>
            <motion.div
              className="cta-actions"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <Link to={primaryTo} className="btn-primary">
                {primaryLabel} <ArrowRight size={18} />
              </Link>
              <Link to={secondaryTo} className="btn-ghost">{secondaryLabel}</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
