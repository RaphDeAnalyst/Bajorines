import React, { useEffect, useRef, useState } from 'react';

interface DrawTextProps {
  children: React.ReactNode;
  className?: string;
}

export const DrawUnderline: React.FC<DrawTextProps> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.5 });

    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg 
        ref={svgRef}
        className="absolute -bottom-2 left-0 w-full h-3 pointer-events-none" 
        viewBox="0 0 100 10" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0,5 Q25,0 50,5 T100,5" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round"
          className={`transition-all duration-[1500ms] ease-out ${isVisible ? 'stroke-dashoffset-0' : 'stroke-dashoffset-[100]'}`}
          style={{
            strokeDasharray: '100',
            strokeDashoffset: isVisible ? '0' : '100',
          }}
        />
      </svg>
    </span>
  );
};