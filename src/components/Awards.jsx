import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { awardsData } from '../data/projects';

export default function Awards() {
  const accoladesList = [
    "ARCHDAILY OBRA DO ANO 2025",
    "•",
    "AWWWARDS SITE OF THE DAY",
    "•",
    "WAF WORLD ARCHITECTURE FESTIVAL",
    "•",
    "MIES CROWN HALL NOMINEE",
    "•",
    "LEED PLATINUM CERTIFIED",
    "•",
    "AD ARCHITECTURAL DIGEST TOP 50",
    "•"
  ];

  return (
    <section className="relative w-full py-20 bg-[#09090b] border-y border-white/[0.06] overflow-hidden">
      {/* Infinite Horizontal Running Marquee */}
      <div className="w-full overflow-hidden whitespace-nowrap flex select-none py-4 border-b border-white/[0.04]">
        <div className="inline-flex animate-marquee items-center gap-8 text-xs font-mono tracking-[0.3em] text-aurea-muted uppercase">
          {[...accoladesList, ...accoladesList, ...accoladesList].map((item, idx) => (
            <span
              key={idx}
              className={item === '•' ? 'text-aurea-accent' : 'text-aurea-sand/70 hover:text-aurea-cream transition-colors'}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Accolades Table Showcase */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-14">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-aurea-accent uppercase">
            <Trophy className="w-4 h-4 text-aurea-accent" />
            <span>Reconhecimento Internacional</span>
          </div>
          <span className="text-xs font-mono text-aurea-muted hidden sm:block">
            CRÍTICA ESPECIALIZADA & PREMIAÇÕES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awardsData.map((award, i) => (
            <div
              key={i}
              className="p-5 bg-white/[0.02] border border-white/5 rounded-sm flex items-start justify-between gap-4"
            >
              <div>
                <span className="text-[10px] font-mono text-aurea-accent block mb-1">
                  {award.year}
                </span>
                <h4 className="font-display text-sm uppercase text-aurea-cream font-medium">
                  {award.title}
                </h4>
                <p className="text-xs text-aurea-muted font-mono mt-1">
                  Obra: {award.project}
                </p>
              </div>
              <Award className="w-4 h-4 text-aurea-accent/60 flex-shrink-0 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
