import React from 'react';
import { differentialsData } from '../data/projects';
import { Sparkles, Compass, ShieldCheck, Scale, Award } from 'lucide-react';

export default function Differentials({ onCursorEnter, onCursorLeave }) {
  const icons = [Compass, Scale, Sparkles, ShieldCheck];

  return (
    <section id="differentials" className="relative w-full py-28 sm:py-36 px-6 sm:px-12 bg-aurea-black text-aurea-cream border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-radial-gradient from-aurea-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-aurea-accent uppercase mb-4">
            <span className="w-8 h-[1px] bg-aurea-accent" />
            <span>O Método & Singularidade</span>
            <span className="text-aurea-muted font-normal">/ 04</span>
          </div>
          <h2 className="font-display font-light text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight">
            O Rigor do
            <span className="font-editorial italic lowercase text-aurea-accent pl-3 text-glow-gold">
              invisível
            </span>
          </h2>
          <p className="mt-6 text-sm sm:text-base text-aurea-sand/80 font-light leading-relaxed">
            A sofisticação autêntica reside na precisão cirúrgica dos encontros entre materiais, no silêncio acústico e na coreografia imutável das proporções áureas.
          </p>
        </div>

        {/* 4 Pillars Grid with Glowing Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentialsData.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.number}
                onMouseEnter={() => onCursorEnter('link')}
                onMouseLeave={onCursorLeave}
                className="luxury-card p-8 rounded-sm flex flex-col justify-between min-h-[360px] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-aurea-accent tracking-widest font-semibold">
                      /{item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-aurea-sand/70 group-hover:text-aurea-accent group-hover:border-aurea-accent/40 group-hover:shadow-[0_0_15px_rgba(197,168,128,0.3)] transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl uppercase tracking-wide text-aurea-cream group-hover:text-aurea-accent transition-colors mb-4">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-aurea-muted font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono tracking-widest text-aurea-sand/50 group-hover:text-aurea-accent transition-colors uppercase">
                  <span>Padrão Áurea</span>
                  <span className="text-aurea-accent">Verificado</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
