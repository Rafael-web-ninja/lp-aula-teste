import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Maximize2, Award, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose, onSelectNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl overflow-y-auto p-4 sm:p-8 animate-fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 sm:top-10 sm:right-10 z-[110] w-12 h-12 rounded-full border border-white/20 bg-neutral-900/80 flex items-center justify-center text-white hover:text-aurea-accent hover:border-aurea-accent transition-all duration-300"
        aria-label="Fechar Detalhes do Projeto"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Modal Container */}
      <div className="max-w-6xl w-full bg-[#111113] border border-white/10 my-auto text-aurea-cream overflow-hidden relative shadow-2xl">
        
        {/* Top Hero Image Banner */}
        <div className="relative w-full h-[45vh] sm:h-[60vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-black/60" />

          {/* Badges and Category */}
          <div className="absolute top-8 left-8 flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-aurea-accent font-mono text-[10px] tracking-widest uppercase">
              {project.category}
            </span>
            {project.award && (
              <span className="px-3 py-1 bg-aurea-accent/20 backdrop-blur-md border border-aurea-accent/40 text-aurea-accent font-mono text-[10px] tracking-widest uppercase flex items-center gap-1.5">
                <Award className="w-3 h-3" />
                {project.award}
              </span>
            )}
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-aurea-accent block mb-2">
              {project.location} • {project.year}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl tracking-tight uppercase text-white font-medium">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Project Content Body */}
        <div className="p-8 sm:p-14 space-y-12">
          
          {/* Quick Technical Specs Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/10 font-mono text-xs">
            <div>
              <span className="text-neutral-500 uppercase tracking-widest block text-[10px] mb-1">Localização</span>
              <span className="text-white flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-aurea-accent" />
                {project.location}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase tracking-widest block text-[10px] mb-1">Área Construída</span>
              <span className="text-white flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-aurea-accent" />
                {project.area}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase tracking-widest block text-[10px] mb-1">Ano de Conclusão</span>
              <span className="text-white flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-aurea-accent" />
                {project.year}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase tracking-widest block text-[10px] mb-1">Tipologia</span>
              <span className="text-aurea-accent">{project.category}</span>
            </div>
          </div>

          {/* Architectural Concept Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <h3 className="font-display text-xl uppercase tracking-wider text-white">
                Memorial Conceitual
              </h3>
              <p className="font-mono text-[11px] text-aurea-accent tracking-widest uppercase mt-1">
                Fundamentos Espaciais
              </p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="font-serif text-xl sm:text-2xl text-aurea-sand font-light leading-relaxed">
                "{project.subtitle}"
              </p>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {project.concept}
              </p>
            </div>
          </div>

          {/* Key Engineering Indicators */}
          {project.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#161619] p-6 border border-white/[0.06]">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 block">
                    {stat.label}
                  </span>
                  <p className="font-display text-lg sm:text-xl text-aurea-accent font-medium">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Materiality Palette */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-aurea-accent">
              <Layers className="w-4 h-4" />
              <span>Matéria & Textura Selecionadas</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 font-light bg-[#141416] p-5 border-l-2 border-aurea-accent">
              {project.materials}
            </p>
          </div>

          {/* Additional Curated High-Res Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {project.secondaryImage && (
              <div className="aspect-[4/3] overflow-hidden bg-neutral-900 group">
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} - Vista Secundária`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
            {project.interiorImage && (
              <div className="aspect-[4/3] overflow-hidden bg-neutral-900 group">
                <img
                  src={project.interiorImage}
                  alt={`${project.title} - Ambiente Interno`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
          </div>

          {/* Modal Action CTA */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
            >
              ← Voltar ao Portfólio
            </button>
            <button
              onClick={() => {
                onClose();
                const contact = document.getElementById('contato');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-aurea-accent text-neutral-950 font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors flex items-center gap-2"
            >
              <span>Comissionar Obra Deste Padrão</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
