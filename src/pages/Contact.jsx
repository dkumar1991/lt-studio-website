import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import SEO from '../components/SEO';
import './Contact.css';

const contactInfo = [
  { icon: <Mail size={22} />, label: 'Email Us', value: 'hello@ltstudio.io', sub: 'We reply within 24 hours', color: '#6c63ff' },
  { icon: <Phone size={22} />, label: 'Call Us', value: '+1 (555) 234-5678', sub: 'Mon–Fri, 9am–6pm PST', color: '#ff6584' },
  { icon: <MapPin size={22} />, label: 'Visit Us', value: 'San Francisco, CA', sub: 'Available for remote & on-site', color: '#43e097' },
];


const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Full name is required.';
  else if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

  if (!data.email.trim()) errors.email = 'Email address is required.';
  else if (!EMAIL_RE.test(data.email.trim())) errors.email = 'Please enter a valid email address.';

  if (!data.message.trim()) errors.message = 'Please tell us about your project.';
  else if (data.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';

  return errors;
}

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', budget: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...formData, [name]: value });
      setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const newErrors = validate(formData);
    setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSending(true);
    setSendError('');

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err) {
      setSendError('Something went wrong. Please try again or email us directly at hello@ltstudio.io');
    } finally {
      setSending(false);
    }
  };


  return (
    <div className="contact-page">
      <SEO
        title="Contact Us"
        description="Get in touch with LT Studio. Start your web design or development project today. Free consultation, response within 24 hours."
        keywords="contact web design agency, hire web developer, web design quote, digital agency consultation, LT Studio contact"
        canonical="/contact"
      />
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true" />
        <div className="container">
          <StaggerContainer staggerDelay={0.12}>
            <StaggerItem><div className="section-tag">Contact Us</div></StaggerItem>
            <StaggerItem><h1 className="section-title">Let's Build Something<br /><span>Together</span></h1></StaggerItem>
            <StaggerItem><p className="section-subtitle">Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.</p></StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="contact-section" aria-label="Contact form and information">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-form-wrap"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="contact-form-header" aria-hidden="true">
                <MessageSquare size={20} />
                <h2>Send Us a Message</h2>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="form-success"
                    role="alert"
                    aria-live="polite"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div className="success-icon" aria-hidden="true" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, type: 'spring', stiffness: 260 }}>
                      <CheckCircle2 size={52} />
                    </motion.div>
                    <h3>Message Received!</h3>
                    <p>Thank you for reaching out. We'll get back to you within 24 hours to discuss your project.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-outline">Send Another Message</button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="contact-form"
                    aria-label="Contact form"
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                        <input
                          id="name" type="text" name="name" value={formData.name}
                          onChange={handleChange} onBlur={handleBlur}
                          placeholder="John Smith" required aria-required="true"
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          className={errors.name ? 'input-error' : ''}
                          autoComplete="name"
                        />
                        {errors.name && <span id="name-error" className="field-error" role="alert">{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                        <input
                          id="email" type="email" name="email" value={formData.email}
                          onChange={handleChange} onBlur={handleBlur}
                          placeholder="john@company.com" required aria-required="true"
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={errors.email ? 'input-error' : ''}
                          autoComplete="email"
                        />
                        {errors.email && <span id="email-error" className="field-error" role="alert">{errors.email}</span>}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" autoComplete="organization" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="service">Service Interested In</label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange}>
                          <option value="">Select a service</option>
                          <option>Web Design</option>
                          <option>Web Development</option>
                          <option>Mobile App</option>
                          <option>E-Commerce</option>
                          <option>UI/UX Design</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Project Budget</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                        <option value="">Select a budget range</option>
                        <option>Under $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000 – $50,000</option>
                        <option>$50,000+</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Tell Us About Your Project <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                      <textarea
                        id="message" name="message" value={formData.message}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Describe your project, goals, timeline..." rows={5}
                        required aria-required="true"
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className={errors.message ? 'input-error' : ''}
                      />
                      {errors.message && <span id="message-error" className="field-error" role="alert">{errors.message}</span>}
                    </div>
                    {sendError && (
                      <div className="form-send-error" role="alert">
                        <AlertCircle size={16} aria-hidden="true" />
                        {sendError}
                      </div>
                    )}
                    <motion.button
                      type="submit"
                      className="btn-submit"
                      disabled={sending}
                      whileHover={{ scale: sending ? 1 : 1.02, y: sending ? 0 : -2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Send size={18} aria-hidden="true" />
                      {sending ? 'Sending…' : 'Send Message'}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="contact-sidebar"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="contact-info-block" role="list">
                {contactInfo.map((c, i) => (
                  <motion.div key={i} className="contact-info-item" role="listitem" whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                    <div className="contact-icon" style={{ background: `${c.color}18`, color: c.color }} aria-hidden="true">{c.icon}</div>
                    <div>
                      <div className="contact-info-label">{c.label}</div>
                      <div className="contact-info-value">{c.value}</div>
                      <div className="contact-info-sub">{c.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
