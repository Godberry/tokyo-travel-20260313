import React from 'react';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function RetroButton({ children, className = '', variant = 'primary', ...props }: RetroButtonProps) {
  const baseStyles = 'px-6 py-3 font-press-start text-xs sm:text-sm uppercase transition-all duration-150 relative top-0 cursor-pointer active:top-1 active:shadow-[0_0_0_0] shadow-[4px_4px_0_0_#18181B] border-4 border-primary';
  
  const variants = {
    primary: 'bg-primary text-background hover:bg-secondary',
    secondary: 'bg-background text-primary hover:bg-gray-100',
    accent: 'bg-accent-pink text-white hover:brightness-110 shadow-[4px_4px_0_0_#A8326D]',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
