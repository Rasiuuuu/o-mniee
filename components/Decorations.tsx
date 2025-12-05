import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageOff } from 'lucide-react';

export const Blob = ({ className }: { className: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 0.6, scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className={`absolute rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob ${className}`}
  />
);

export const IllustrationPlaceholder = ({ 
  alt, 
  icon: Icon 
}: { 
  alt: string, 
  icon?: React.ElementType 
}) => {
  return (
    <div className="w-full h-full bg-warm-200 rounded-[2rem] flex flex-col items-center justify-center p-8 text-warm-800 relative overflow-hidden group">
      <div className="absolute inset-0 bg-warm-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      {Icon && <Icon className="w-16 h-16 mb-4 text-warm-400" strokeWidth={1.5} />}
      <span className="text-center font-serif italic opacity-60 text-lg">{alt}</span>
      
      {/* Abstract illustrative shapes */}
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-warm-300 rounded-full opacity-50" />
      <div className="absolute top-12 -left-8 w-24 h-24 bg-white rounded-full opacity-40" />
    </div>
  );
};

/**
 * SafeImage - próbuje załadować obrazek z lokalnej ścieżki.
 * Jeśli plik nie istnieje (błąd ładowania), wyświetla placeholder z nazwą pliku.
 */
export const SafeImage = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`w-full h-full bg-warm-100 flex flex-col items-center justify-center text-warm-400 p-4 border-2 border-dashed border-warm-300 ${className}`}>
        <ImageOff className="w-8 h-8 mb-2 opacity-50" />
        <span className="text-xs text-center font-mono opacity-70">Brak pliku:</span>
        <span className="text-xs text-center font-bold break-all">{src}</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setError(true)}
    />
  );
};

export const ProfileImage = ({ src }: { src: string }) => (
    <div className="relative w-full aspect-square max-w-md mx-auto">
        <div className="absolute inset-0 bg-warm-300 rounded-[3rem] rotate-3 transform translate-y-4" />
        <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-white shadow-xl bg-warm-200">
             <SafeImage src={src} alt="Profile" className="w-full h-full object-cover grayscale-[0.2] sepia-[0.3]" />
        </div>
    </div>
);