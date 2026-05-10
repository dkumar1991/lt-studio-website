import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Target, Lightbulb, Users, Award, Globe, Star } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import SEO from '../components/SEO';
import './About.css';

const team = [
  { name: 'Alex Rivera', role: 'Founder & Creative Director', bio: '15+ years crafting digital experiences across startups and enterprises. Passionate about the intersection of art and technology.', avatar: 'AR', gradient: 'linear-gradient(135deg, #6c63ff, #a855f7)' },
  { name: 'Mia Thompson', role: 'Head of Engineering', bio: 'Full-stack architect with a decade of experience building high-traffic web platforms. Advocate for clean code and great developer experience.', avatar: 'MT', gradient: 'linear-gradient(135deg, #ff6584, #f7b731)' },
  { name: 'Jordan Kim', role: 'Lead UX Researcher', bio: 'Human-centered design champion who brings deep empathy and rigorous research to every project. Specialises in HCI and interaction design.', avatar: 'JK', gradient: 'linear-gradient(135deg, #43e097, #45aaf2)' },
  { name: 'Sam Okafor', role: 'Mobile Lead', bio: 'Cross-platform mobile specialist with 20+ published apps across iOS and Android. Active contributor to the open-source mobile community.', avatar: 'SO', gradient: 'linear-gradient(135deg, #f7b731, #fd9644)' },
  { name: 'Leila Hassan', role: 'Strategy & Growth', bio: 'Digital strategist with a background in business consulting. Helped 40+ companies align their digital presence with growth objectives.', avatar: 'LH', gradient: 'linear-gradient(135deg, #45aaf2, #2d98da)' },
  { name: 'Chris Nakamura', role: 'DevOps & Cloud', bio: 'Cloud infrastructure architect certified across major cloud providers. Believes that great software deserves rock-solid infrastructure.', avatar: 'CN', gradient: 'linear-gradient(135deg, #a55eea, #6c63ff)' },
];

const values = [
  { icon: <Heart size={24} />, title: 'Craft Over Speed', desc: "We take the time to do things right. Quality is non-negotiable, and we never cut corners to hit a deadline." },
  { icon: <Target size={24} />, title: 'Results-Driven', desc: "Beautiful design that doesn't convert is decoration. Every decision we make ties back to your business goals." },
  { icon: <Lightbulb size={24} />, title: 'Radical Transparency', desc: "No black boxes. We share our thinking, our timelines, and our challenges so you're always in the loop." },
  { icon: <Users size={24} />, title: 'True Partnership', desc: "We embed into your team, not just deliver deliverables. Your success is our success — full stop." },
];

const milestones = [
  { year: '2013', event: 'Founded with 3 people, a shared vision, and a commitment to great digital craft.' },
  { year: '2015', event: 'Landed our first enterprise client. Delivered 20 projects in 12 months.' },
  { year: '2017', event: 'Grew to a team of 15. Expanded our capabilities to serve larger brands.' },
  { year: '2019', event: 'Reached our 100th project milestone. Recognised as a top-rated agency by clients.' },
  { year: '2021', event: 'Launched our mobile division. Added React Native & Flutter to our expertise.' },
  { year: '2023', event: 'Crossed 200 happy clients. Continued to grow our international presence.' },
  { year: '2026', event: 'Leading the next era — AI-augmented design & development.' },
];


export default function About() {
  return (
    <div className="about-page">
      <SEO
        title="About Us"
        description="Learn about LT Studio — a passionate team of designers, engineers, and strategists dedicated to building exceptional digital products for clients worldwide."
        keywords="web design agency about, digital agency team, web development company, LT Studio, San Francisco web agency"
        canonical="/about"
      />
      <section className="page-hero about-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <StaggerContainer staggerDelay={0.12}>
            <StaggerItem><div className="section-tag">Our Story</div></StaggerItem>
            <StaggerItem>
              <h1 className="section-title">We're Not Just an Agency —<br /><span>We're Your Team</span></h1>
            </StaggerItem>
            <StaggerItem>
              <p className="section-subtitle">Since 2013, LT Studio has been at the forefront of digital innovation, partnering with ambitious brands to build experiences that matter.</p>
            </StaggerItem>
            <StaggerItem>
              <div className="about-stats">
                {[
                  { icon: <Award size={20} />, value: '12+', label: 'Years in Business' },
                  { icon: <Users size={20} />, value: '25+', label: 'Team Members' },
                  { icon: <Globe size={20} />, value: '30+', label: 'Countries Served' },
                  { icon: <Star size={20} />, value: '4.9/5', label: 'Client Rating' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    className="about-stat"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="about-stat-icon">{s.icon}</div>
                    <div className="about-stat-value">{s.value}</div>
                    <div className="about-stat-label">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <StaggerContainer staggerDelay={0.12}>
              <StaggerItem variant="fadeLeft">
                <div className="section-tag">Our Mission</div>
              </StaggerItem>
              <StaggerItem variant="fadeLeft">
                <h2 className="section-title">Digital Excellence<br /><span>By Design</span></h2>
              </StaggerItem>
              <StaggerItem variant="fadeLeft">
                <p>We started LT Studio because we believed the web deserved better — better design, better code, and better collaboration between agencies and the clients they serve.</p>
              </StaggerItem>
              <StaggerItem variant="fadeLeft">
                <p>Every project we take on is an opportunity to raise the bar. We combine strategic thinking with technical excellence and genuine creative passion to build digital products that stand the test of time.</p>
              </StaggerItem>
              <StaggerItem variant="fadeLeft">
                <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', marginTop: '8px' }}>
                  Work With Us <ArrowRight size={18} />
                </Link>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer className="mission-visual" staggerDelay={0.15}>
              {[
                { label: 'Project Health', metric: '98%', sub: 'on-time delivery rate', color: '#43e097', fill: '98%', fillGrad: 'linear-gradient(90deg, #43e097, #45aaf2)' },
                { label: 'Client Satisfaction', metric: '4.9/5', sub: 'average client rating', color: '#6c63ff', fill: '97%', fillGrad: 'linear-gradient(90deg, #6c63ff, #a855f7)' },
                { label: 'Client Retention', metric: '87%', sub: 'clients return for more', color: '#ff6584', fill: '87%', fillGrad: 'linear-gradient(90deg, #ff6584, #f7b731)' },
              ].map((m, i) => (
                <StaggerItem key={i} variant="fadeRight">
                  <motion.div
                    className="mission-card"
                    whileHover={{ y: -4, borderColor: `${m.color}40` }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <div className="mission-card-header">
                      <div className="mcir" style={{ background: `${m.color}20` }} aria-hidden="true">
                        <Target size={18} style={{ color: m.color }} />
                      </div>
                      <span>{m.label}</span>
                    </div>
                    <div className="mission-metric" aria-hidden="true">{m.metric}</div>
                    <div className="mission-metric-label">{m.sub}</div>
                    <div
                      className="mission-bar"
                      role="progressbar"
                      aria-valuenow={parseFloat(m.fill)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${m.label}: ${m.fill}`}
                    >
                      <motion.div
                        className="mission-bar-fill"
                        style={{ background: m.fillGrad }}
                        initial={{ width: 0 }}
                        whileInView={{ width: m.fill }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.15, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <StaggerContainer className="section-header centered">
            <StaggerItem><div className="section-tag">Our Values</div></StaggerItem>
            <StaggerItem><h2 className="section-title">How We <span>Work</span></h2></StaggerItem>
          </StaggerContainer>
          <StaggerContainer className="values-grid" staggerDelay={0.1}>
            {values.map((v, i) => (
              <StaggerItem key={i} variant="scaleUp">
                <motion.div
                  className="value-card"
                  whileHover={{ y: -6, borderColor: 'rgba(108,99,255,0.35)' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  <div className="value-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <StaggerContainer className="section-header centered">
            <StaggerItem><div className="section-tag">The Team</div></StaggerItem>
            <StaggerItem><h2 className="section-title">Meet the <span>Makers</span></h2></StaggerItem>
            <StaggerItem><p className="section-subtitle">A diverse team of designers, engineers, and strategists united by a love of craft.</p></StaggerItem>
          </StaggerContainer>
          <StaggerContainer className="team-grid" staggerDelay={0.1}>
            {team.map((m, i) => (
              <StaggerItem key={i} variant="fadeUp">
                <motion.div
                  className="team-card"
                  aria-label={`${m.name}, ${m.role}`}
                  whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.12)' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  <motion.div
                    className="team-avatar"
                    aria-hidden="true"
                    style={{ background: m.gradient }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {m.avatar}
                  </motion.div>
                  <h3>{m.name}</h3>
                  <div className="team-role">{m.role}</div>
                  <p>{m.bio}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <StaggerContainer className="section-header centered">
            <StaggerItem><div className="section-tag">Our Journey</div></StaggerItem>
            <StaggerItem><h2 className="section-title">12 Years of <span>Growth</span></h2></StaggerItem>
          </StaggerContainer>
          <ol className="timeline" aria-label="Company milestones">
            {milestones.map((m, i) => (
              <motion.li
                key={i}
                className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="timeline-year" aria-hidden="true">{m.year}</div>
                <motion.div
                  className="timeline-dot"
                  aria-hidden="true"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 + 0.2, type: 'spring' }}
                />
                <div className="timeline-event">
                  <span className="sr-only">{m.year}: </span>{m.event}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
