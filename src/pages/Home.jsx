import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from 'framer-motion';
import {
  ArrowRight, Star, Users, Award, Globe,
  Code2, Palette, Smartphone, ShoppingCart, Rocket, BarChart3,
  ChevronRight, Quote
} from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import './Home.css';

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'LT Studio — Web Design & Development Agency',
  description: 'A web design & development studio crafting high-performance digital products for startups and enterprises worldwide.',
  url: 'https://ltstudio.io',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ltstudio.io' }] },
};

/* ─ Typing effect ─ */
const TYPING_WORDS = ['Products', 'Experiences', 'Websites', 'Brands', 'Solutions'];

function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 150);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 80);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <span className="typing-word">
      {displayed}
      <span className="typing-cursor" />
    </span>
  );
}

/* ─ Animated counter ─ */
function Counter({ target, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target);
    const duration = 1800;
    const step = 16;
    const increment = num / (duration / step);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(parseFloat(current.toFixed(1)));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{Number.isInteger(parseFloat(target)) ? Math.round(count) : count}{suffix}</span>;
}

/* ─ Magnetic button ─ */
function MagneticBtn({ children, className, to }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.12);
    y.set(dy * 0.12);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={onLeave} className="magnetic-wrap">
      <Link to={to} className={className}>{children}</Link>
    </motion.div>
  );
}

/* ─ Tilt card ─ */
function TiltCard({ children, className, style = {} }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [8, -8]);
  const rotateY = useTransform(x, [-60, 60], [-8, 8]);
  const sx = useSpring(rotateX, { stiffness: 260, damping: 30 });
  const sy = useSpring(rotateY, { stiffness: 260, damping: 30 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: sx, rotateY: sy, transformPerspective: 800, ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { icon: <Users size={22} />, value: '200', suffix: '+', label: 'Happy Clients' },
  { icon: <Award size={22} />, value: '13', suffix: '+', label: 'Years Experience' },
  { icon: <Globe size={22} />, value: '350', suffix: '+', label: 'Projects Delivered' },
  { icon: <Star size={22} />, value: '4.9', suffix: '', label: 'Average Rating' },
];

const services = [
  { icon: <Palette size={28} />, title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces that delight users and drive engagement through thoughtful design systems.', color: '#6c63ff' },
  { icon: <Code2 size={28} />, title: 'Web Development', desc: 'High-performance web applications built with modern stacks — React, Next.js, Node.js, and more.', color: '#ff6584' },
  { icon: <Smartphone size={28} />, title: 'Mobile Apps', desc: 'Cross-platform mobile experiences using React Native and Flutter that feel native on every device.', color: '#43e097' },
  { icon: <ShoppingCart size={28} />, title: 'E-Commerce', desc: 'Conversion-optimized online stores with seamless payment integration and robust backend systems.', color: '#f7b731' },
  { icon: <Rocket size={28} />, title: 'Performance Optimization', desc: 'Speed, SEO, and Core Web Vitals improvements that boost rankings and reduce bounce rates.', color: '#45aaf2' },
  { icon: <BarChart3 size={28} />, title: 'Digital Strategy', desc: 'Data-driven strategies that align your digital presence with your business growth objectives.', color: '#a55eea' },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We dive deep into your goals, audience, and competitive landscape to define the right strategy.' },
  { step: '02', title: 'Design', desc: 'Wireframes, prototypes, and stunning visual designs crafted to capture your brand essence.' },
  { step: '03', title: 'Develop', desc: 'Clean, scalable code built with best practices, tested rigorously across all devices.' },
  { step: '04', title: 'Deploy & Grow', desc: 'Launch support, analytics setup, and ongoing optimization to maximize your ROI.' },
];

const testimonials = [
  { name: 'Sarah C.', text: 'LT Studio transformed our entire digital presence. The quality of work and attention to detail truly exceeded our expectations. Absolutely exceptional.', avatar: 'SC', gradient: 'linear-gradient(135deg, #6c63ff, #a855f7)' },
  { name: 'Marcus J.', text: "The team's technical expertise and collaborative approach is unmatched. They delivered on time, within budget, and the results speak for themselves. Worth every penny.", avatar: 'MJ', gradient: 'linear-gradient(135deg, #ff6584, #f7b731)' },
  { name: 'Priya P.', text: 'From concept to launch the experience was seamless. They truly understand what modern users need and translate that into beautifully crafted digital products.', avatar: 'PP', gradient: 'linear-gradient(135deg, #43e097, #45aaf2)' },
];

const techStack = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'AWS', 'Figma', 'Flutter', 'GraphQL'];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -20 },
    visible: (i) => ({
      opacity: 1, y: 0, rotateX: 0,
      transition: { delay: i * 0.07, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }
    }),
  };

  const titleWords = ['We Build Experiences', 'That Drive Growth'];

  return (
    <div className="home">
      <SEO
        description="A web design & development studio crafting high-performance digital products for startups and enterprises worldwide. UI/UX, React, mobile apps, e-commerce."
        keywords="web design agency, web development, UI UX design, React development, Next.js, mobile apps, e-commerce, digital agency"
        canonical="/"
        structuredData={homeStructuredData}
      />
      {/* ── Hero ── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <motion.div className="hero-blob blob-1" style={{ y: blob1Y }} />
          <motion.div className="hero-blob blob-2" style={{ y: blob2Y }} />
          <div className="hero-grid" />
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="hero-particle"
              style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ y: [-12, 12, -12], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
            />
          ))}
        </div>

        <motion.div className="container hero-content" style={{ y: heroY, opacity: heroOpacity }}>
          <h1 className="hero-title" style={{ perspective: 800 }}>
            {titleWords.map((line, li) => (
              <span key={li} className="title-line">
                {line.split(' ').map((word, wi) => (
                  word === 'Experiences'
                    ? (
                      <motion.span
                        key={wi}
                        custom={li * 3 + wi}
                        variants={wordVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'inline-block', marginRight: '0.25em' }}
                      >
                        <TypingText />
                      </motion.span>
                    ) : (
                      <motion.span
                        key={wi}
                        custom={li * 3 + wi}
                        variants={wordVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'inline-block', marginRight: '0.25em' }}
                      >
                        {word}
                      </motion.span>
                    )
                ))}
                <br />
              </span>
            ))}
          </h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            A web design & development studio crafting high-performance digital products for startups and enterprises worldwide.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <MagneticBtn to="/contact" className="btn-primary">
              Start Your Project <ArrowRight size={18} />
            </MagneticBtn>
            <MagneticBtn to="/portfolio" className="btn-ghost">
              View Our Work
            </MagneticBtn>
          </motion.div>

        </motion.div>

        <div className="hero-scroll">
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section">
        <div className="container">
          <StaggerContainer className="stats-grid" staggerDelay={0.1}>
            {stats.map((stat, i) => (
              <StaggerItem key={i} variant="scaleUp">
                <TiltCard className="stat-card">
                  <div className="stat-icon" aria-hidden="true">{stat.icon}</div>
                  <div className="stat-value" aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="stat-label" aria-hidden="true">{stat.label}</div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services-section" id="services">
        <div className="container">
          <StaggerContainer className="section-header">
            <StaggerItem><div className="section-tag">What We Do</div></StaggerItem>
            <StaggerItem>
              <h2 className="section-title">Services That Move<br /><span>Businesses Forward</span></h2>
            </StaggerItem>
            <StaggerItem>
              <p className="section-subtitle">From strategy to launch and beyond — end-to-end digital solutions tailored to your unique goals.</p>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="services-grid" staggerDelay={0.09}>
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <TiltCard className="service-card" style={{ '--accent-color': s.color }}>
                  <div className="service-card-inner" style={{ '--accent-color': s.color }}>
                    <div className="service-icon" style={{ background: `${s.color}18`, color: s.color }}>{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <div className="service-link">Learn more <ChevronRight size={16} /></div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <motion.div
            className="section-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/services" className="btn-outline">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="process-section">
        <div className="container">
          <StaggerContainer className="section-header centered">
            <StaggerItem><div className="section-tag">How We Work</div></StaggerItem>
            <StaggerItem><h2 className="section-title">Our Proven <span>Process</span></h2></StaggerItem>
            <StaggerItem><p className="section-subtitle">A clear, collaborative workflow built to deliver exceptional results on time and within budget.</p></StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="process-grid" staggerDelay={0.12}>
            {process.map((p, i) => (
              <StaggerItem key={i} variant="fadeUp">
                <motion.div
                  className="process-card"
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.25)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <div className="process-step">{p.step}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  {i < process.length - 1 && <div className="process-arrow"><ChevronRight size={20} /></div>}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Tech ── */}
      <section className="tech-section">
        <div className="container">
          <StaggerContainer className="section-header centered">
            <StaggerItem><div className="section-tag">Tech Stack</div></StaggerItem>
            <StaggerItem><h2 className="section-title">Built With <span>Modern Tech</span></h2></StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="tech-grid" staggerDelay={0.05} containerDelay={0.1} as="ul" aria-label="Technologies we use">
            {techStack.map((tech, i) => (
              <StaggerItem key={i} variant="scaleUp" as="li" className="tech-badge">
                {tech}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials-section">
        <div className="container">
          <StaggerContainer className="section-header centered">
            <StaggerItem><div className="section-tag">Client Love</div></StaggerItem>
            <StaggerItem><h2 className="section-title">What Our <span>Clients Say</span></h2></StaggerItem>
            <StaggerItem><p className="section-subtitle">Real results, real feedback from the businesses we've helped grow.</p></StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="testimonials-grid" staggerDelay={0.14}>
            {testimonials.map((t, i) => (
              <StaggerItem key={i} variant="fadeUp">
                <motion.div
                  className="testimonial-card"
                  whileHover={{ y: -6, borderColor: 'rgba(108,99,255,0.3)' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  <div className="quote-icon" aria-hidden="true"><Quote size={24} /></div>
                  <blockquote className="testimonial-text">{t.text}</blockquote>
                  <div className="testimonial-author">
                    <div className="author-avatar" style={{ background: t.gradient }} aria-label={`${t.name}'s avatar`}>{t.avatar}</div>
                    <div className="author-name">{t.name}</div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
