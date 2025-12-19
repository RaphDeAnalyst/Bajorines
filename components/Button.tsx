import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative px-8 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 group overflow-hidden";
  
  const variants = {
    primary: "bg-bajorines-red text-white hover:bg-red-700 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(176,0,32,0.4)]",
    outline: "border-2 border-white text-white hover:bg-white hover:text-bajorines-red hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    ghost: "text-bajorines-dark hover:text-bajorines-red hover:bg-bajorines-pink/50",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};