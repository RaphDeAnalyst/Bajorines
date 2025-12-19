
import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; 
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Use a positive margin to trigger BEFORE it's visible. 
      // This ensures it's already animated in by the time the user's eye hits it.
      viewport={{ once: true, margin: "200px 0px", amount: 0 }}
      transition={{ 
        duration: 0.3, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
