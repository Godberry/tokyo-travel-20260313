import React from 'react';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function PixelCard({ children, className = '', onClick }: PixelCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-background border-4 border-primary shadow-[6px_6px_0_0_#18181B] 
        p-4 sm:p-6 transition-transform duration-200
        ${onClick ? 'cursor-pointer hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#18181B] active:translate-y-1 active:shadow-[2px_2px_0_0_#18181B]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
