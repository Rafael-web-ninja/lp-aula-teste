import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import LuxuryButton from './LuxuryButton';

export default function Header({ onCursorEnter, onCursorLeave }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Manifesto', id: 'about' },
    { label: 'Obras', id: 'portfolio' },
    { label: 'Serviços', id: 'services' },
    { label: 'Filosofia', id: 'differentials' },
    { label: 'Planos', id: 'plans' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#070709]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 sm:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onMouseEnter={() => onCursorEnter('link')}
            onMouseLeave={onCursorLeave}
          >
            <div className="w-8 h-8 rounded-full border border-aurea-accent/60 flex items-center justify-center text-aurea-accent transition-all duration-500 group-hover:bg-aurea-accent group-hover:text-aurea-black group-hover:shadow-[0_0_20px_rgba(197,168,128,0.5)]">
              <span className="font-display text-sm tracking-wider font-bold">Á</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm sm:text-base tracking-[0.25em] font-semibold text-aurea-cream transition-colors group-hover:text-aurea-accent">
                ÁUREA
              </span>
              <span className="font-mono text-[9px] tracking-[0.35em] text-aurea-muted -mt-1 uppercase">
                Architecture
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                onMouseEnter={() => onCursorEnter('link')}
                onMouseLeave={onCursorLeave}
                className="relative py-1 text-xs font-mono uppercase tracking-[0.2em] text-aurea-sand/80 hover:text-aurea-accent transition-colors duration-300 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-aurea-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Header Action: Animated Border Button */}
          <div className="hidden sm:flex items-center gap-4">
            <LuxuryButton
              onClick={() => scrollTo('contact')}
              variant="animated-border"
              size="sm"
              onCursorEnter={onCursorEnter}
              onCursorLeave={onCursorLeave}
            >
              Iniciar Projeto
            </LuxuryButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            onMouseEnter={() => onCursorEnter('link')}
            onMouseLeave={onCursorLeave}
            className="lg:hidden p-2 text-aurea-cream hover:text-aurea-accent border border-white/10 rounded"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Full-screen Staggered Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070709]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-fadeIn">
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-mono tracking-widest uppercase text-aurea-accent">
              Menu de Navegação
            </span>
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="flex items-center justify-between text-2xl font-display uppercase tracking-tight text-aurea-cream hover:text-aurea-accent text-left py-2 border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-aurea-muted">0{idx + 1}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <LuxuryButton
              onClick={() => scrollTo('contact')}
              variant="gold-shimmer"
              size="lg"
              className="w-full"
            >
              Iniciar Projeto
            </LuxuryButton>
            <p className="text-[11px] font-mono text-aurea-muted text-center">
              São Paulo • Lisboa • Genebra
            </p>
          </div>
        </div>
      )}
    </>
  );
}
