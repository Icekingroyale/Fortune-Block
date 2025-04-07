import { motion } from 'framer-motion';

const scrollFadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.25 }, // Trigger animation when 25% of the element is in view
};

const scrollFadeDown = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.25 },
};

const scrollScaleUp = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.25 },
};

const ScrollAnimation = ({ children, className = '', animationType = 'fadeUp' }) => {
  const animations = {
    fadeUp: scrollFadeUp,
    fadeDown: scrollFadeDown,
    scaleUp: scrollScaleUp,
  };

  return (
    <motion.div
      className={className}
      initial={animations[animationType].initial}
      whileInView={animations[animationType].whileInView}
      transition={animations[animationType].transition}
      viewport={animations[animationType].viewport}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
