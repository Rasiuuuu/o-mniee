import React from 'react';

export const Container: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 ${className}`}>
    {children}
  </div>
);

export const Section: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
  dark?: boolean;
}> = ({ children, className = "", id, dark = false }) => (
  <section 
    id={id} 
    className={`py-20 md:py-32 relative overflow-hidden transition-colors duration-500 ${dark ? 'bg-warm-100' : 'bg-warm-50'} ${className}`}
  >
    {children}
  </section>
);