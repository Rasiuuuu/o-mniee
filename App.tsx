import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown, Users, Linkedin } from 'lucide-react';
import { TEXT_CONTENT, PERSONALITY_TRAITS, VALUES, CONTACT_DETAILS, IMAGES } from './constants';
import { Section, Container } from './components/Layout';
import { Blob, IllustrationPlaceholder, ProfileImage, SafeImage } from './components/Decorations';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="font-sans antialiased text-warm-900 selection:bg-warm-300 selection:text-warm-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-50/80 backdrop-blur-md border-b border-warm-200/50 py-4">
        <Container className="flex justify-between items-center">
          <span className="text-xl font-serif font-bold tracking-tight text-warm-900">Witaj.</span>
          <a 
            href="#contact" 
            className="px-6 py-2 bg-warm-900 text-warm-50 rounded-full text-sm font-medium hover:bg-warm-400 transition-colors duration-300"
          >
            Kontakt
          </a>
        </Container>
      </nav>

      {/* SEKCJA 1 — HERO */}
      <Section id="home" className="pt-40 pb-32 min-h-screen flex items-center">
        <Blob className="bg-warm-300 top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2" />
        <Blob className="bg-warm-200 bottom-0 right-0 w-[500px] h-[500px] translate-x-1/4 translate-y-1/4" />
        
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-warm-900">
                {TEXT_CONTENT.hero.headline}
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-warm-800 leading-relaxed font-light">
                {TEXT_CONTENT.hero.subheadline}
              </motion.p>
              <motion.div variants={fadeIn}>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-warm-400 text-white rounded-full text-lg font-medium hover:bg-warm-500 transition-all duration-300 shadow-lg shadow-warm-400/30 transform hover:-translate-y-1"
                >
                  {TEXT_CONTENT.hero.cta} <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
               {/* 
                 ZDJĘCIE PROFILOWE (HERO)
                 Zmienisz je w pliku constants.tsx lub dodając plik /public/assets/hero.jpg
               */}
               <ProfileImage src={IMAGES.profile.main} />
            </motion.div>
          </div>
        </Container>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
          <ChevronDown className="w-8 h-8 text-warm-800" />
        </div>
      </Section>

      {/* SEKCJA 2 — O MNIE */}
      <Section id="about" dark>
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-