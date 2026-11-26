import React, { useState } from 'react';
import { ArrowDown, Compass, Award, Sparkles, Play, Shield, Maximize2 } from 'lucide-react';
import LuxuryButton from './LuxuryButton';

export default function Hero({ onCursorEnter, onCursorLeave }) {
  const [activeBackdrop, setActiveBackdrop] = useState(0);

  const heroBackdrops = [
    {
      title: "Villa Monolith",
      location: "Serra Gaúcha",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2600&auto=format&fit=crop",
      specs: "1.450 m² • Concreto & Luz"
    },
    {
      title: "Casa Terra & Vento",
      location: "Trancoso, Bahia",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2600&auto=format&fit=crop",
      specs: "980 m² • Biofilia & Mar"
    },
    {
      title: "Pavilhão da Serra",
      location: "Campos do Jordão",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2600&auto=format&fit=crop",
      specs: "820 m² • Pedra Moledo & Aço"
    }
  ];

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlans = () => {
    const el = document.getElementById('plans');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-aurea-black pt-28 pb-10 px-6 sm:px-12">
      {/* Background Cinematographic Slider with Soft Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroBackdrops.map((backdrop, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-out ${
              activeBackdrop === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url('${backdrop.image}')`,
              filter: 'brightness(0.5) contrast(1.18)',
            }}
          />
        ))}

        {/* Ambient Radial Spotlight and Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/30 to-[#070709]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/70 via-transparent to-[#070709]/70" />
        <div className="spotlight-top" />
      </div>

      {/* Top Meta Bar: Coordinates & Pritzker / Architecture Accolades */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between text-[11px] font-mono tracking-[0.25em] text-aurea-muted border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-aurea-accent animate-spin-slow" />
          <span className="text-aurea-sand/90">COORD. 23° 33' S, 46° 40' W</span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="text-aurea-accent hidden sm:inline">ALT. 760M</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 mt-2 sm:mt-0">
          <span className="text-[10px] text-aurea-cream/80 uppercase">Ateliê Autoral</span>
          <span className="w-1.5 h-1.5 rounded-full bg-aurea-accent animate-ping" />
          <span className="text-aurea-accent font-semibold">MMVII — MMXXVI</span>
        </div>
      </div>

      {/* Hero Centerpiece: Monumental Typography with Depth */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 sm:py-16">
        <div className="max-w-5xl">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/50 border border-aurea-accent/40 backdrop-blur-md text-[10px] sm:text-xs font-mono tracking-widest text-aurea-accent uppercase mb-6 glow-gold-subtle">
            <Sparkles className="w-3 h-3 text-aurea-accent" />
            <span>Arquitetura de Vanguarda & Pátina Nobre</span>
          </div>

          {/* Monumental Hero Headline */}
          <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-[6.8rem] font-light uppercase tracking-tight text-aurea-cream leading-[0.98]">
            ÁUREA
            <br />
            <span className="font-editorial italic font-normal text-aurea-accent lowercase tracking-normal pl-2 sm:pl-4 text-glow-gold">
              architecture
            </span>
          </h1>

          {/* Editorial Subtitle with Asymmetry */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 sm:mt-10 items-end">
            <p className="md:col-span-7 text-sm sm:text-lg text-aurea-sand/90 font-light leading-relaxed">
              Esculpidas em concreto maciço, madeira certificada e luz natural. Criamos residências e pavilhões atemporais que dialogam com a paisagem e desafiam a efemeridade das tendências.
            </p>

            {/* CTAs with Animated Border & Golden Shimmer */}
            <div className="md:col-span-5 flex flex-wrap items-center gap-4 sm:justify-end">
              <LuxuryButton
                onClick={scrollToContact}
                variant="gold-shimmer"
                size="lg"
                onCursorEnter={onCursorEnter}
                onCursorLeave={onCursorLeave}
              >
                Iniciar Projeto
              </LuxuryButton>

              <LuxuryButton
                onClick={scrollToPlans}
                variant="animated-border"
                size="lg"
                onCursorEnter={onCursorEnter}
                onCursorLeave={onCursorLeave}
              >
                Ver Modalidades
              </LuxuryButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hero Bar: Project Switcher Thumbnails & Scroll Prompt */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/[0.08]">
        {/* Project Reel Switcher */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-aurea-muted mr-1 hidden sm:block">
            Cenários em Foco:
          </span>
          <div className="flex gap-2">
            {heroBackdrops.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveBackdrop(idx)}
                onMouseEnter={() => onCursorEnter('link')}
                onMouseLeave={onCursorLeave}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-sm border text-[11px] font-mono transition-all duration-300 ${
                  activeBackdrop === idx
                    ? 'bg-aurea-accent/20 border-aurea-accent text-aurea-cream shadow-[0_0_15px_rgba(197,168,128,0.3)]'
                    : 'bg-black/40 border-white/10 text-aurea-muted hover:border-white/30'
                }`}
              >
                <span className="text-aurea-accent font-semibold">0{idx + 1}</span>
                <span className="hidden md:inline">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator with Micro-Interaction */}
        <button
          onClick={scrollToPortfolio}
          onMouseEnter={() => onCursorEnter('link')}
          onMouseLeave={onCursorLeave}
          className="group flex items-center gap-3 text-xs font-mono tracking-widest text-aurea-muted hover:text-aurea-accent uppercase transition-colors"
        >
          <span className="text-[10px] text-aurea-sand/70">Descer para Obras</span>
          <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-aurea-accent flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 text-aurea-cream group-hover:text-aurea-accent group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
}
