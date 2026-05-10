import { motion } from 'framer-motion';

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function AnimatedSection({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  as: Tag = 'div',
  stagger = false,
}) {
  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      variants={variants[variant]}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1, containerDelay = 0, as: Tag = 'div' }) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: containerDelay } },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ children, className = '', variant = 'fadeUp', as: Tag = 'div' }) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag className={className} variants={variants[variant]}>
      {children}
    </MotionTag>
  );
}
