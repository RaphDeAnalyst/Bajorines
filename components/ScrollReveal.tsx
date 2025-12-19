
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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }} // Trigger almost immediately upon entering viewport
      transition={{ 
        duration: 0.5, // Snappier animation
        delay, 
        ease: [0.16, 1, 0.3, 1] // High-performance cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
