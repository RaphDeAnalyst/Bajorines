import React from 'react';

interface LiquidWaveProps {
  color?: string;
  position?: 'top' | 'bottom';
  className?: string;
}

export const LiquidWave: React.FC<LiquidWaveProps> = ({ 
  color = "fill-white", 
  position = 'bottom',
  className = "" 
}) => {
  return (
    <div className={`absolute left-0 w-full leading-[0] z-30 ${position === 'top' ? 'top-0 rotate-180' : 'bottom-0'} ${className}`}>
      <svg 
        viewBox="0 0 1440 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path 
          d="M0 120L48 110.8C96 101.7 192 83.3 288 80C384 76.7 480 88.3 576 96.7C672 105 768 110 864 100C960 90 1056 65 1152 50C1248 35 1344 30 1392 27.5L1440 25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
          className={color}
        />
      </svg>
    </div>
  );
};