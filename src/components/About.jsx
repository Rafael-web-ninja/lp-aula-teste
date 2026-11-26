import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Award } from 'lucide-react';

export default function About({ onCursorEnter, onCursorLeave }) {
  return (
    <section id="manifesto" className="relative w-full py-32 sm:py-44 bg-[#0c0c0e] border-t border-white/[0.06] overflow-hidden">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-12 right-12 text-[14vw] font-display font-black text-white/[0.015] select-none pointer-events-none leading-none">
        ÁUREA
      </div>

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12">
        {/* Section Pre-title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-12 mb-16 border-b border-white/[0.08] gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-aurea-accent"></span>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-aurea-muted">
              01 / Manifesto & Essência
            </span>
          </div>
          <span className="font-mono text-xs tracking-widest text-aurea-muted">
            SÃO PAULO • LISBOA • GENEBRA
          </span>
        </div>

        {/* Big Editorial Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-aurea-cream font-light leading-[1.18] tracking-tight">
              Não projetamos apenas paredes ou volumes. Criamos <span className="italic text-aurea-accent font-normal">recortes de silêncio</span>, onde a luz natural revela a nobreza e a verdade tátil de cada matéria bruta.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 space-y-8">
            <p className="text-sm sm:text-base text-aurea-sand/80 font-light leading-relaxed">
              Fundada em 2007, a <strong className="text-aurea-cream font-medium">ÁUREA ARCHITECTURE</strong> opera na intersecção entre o rigor construtivo contemporâneo e o modernismo atemporal. Com apenas oito comissões autorais aceitas anualmente, garantimos imersão obsessiva em cada detalhe.
            </p>

            <div className="p-6 bg-[#141416] border border-white/[0.08] rounded-none">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] tracking-[0.25em] text-aurea-accent uppercase">
                  DIRETRIZ CURATORIAL
                </span>
                <span className="font-mono text-xs text-white/30">N° 8/ANO</span>
              </div>
              <p className="text-xs font-mono text-neutral-400 leading-relaxed">
                "A verdadeira sofisticação reside naquilo que não precisa gritar para se impor: a harmonia das proporções e o respeito absoluto ao entorno."
              </p>
            </div>
          </div>
        </div>

        {/* Asymmetrical 3-Column Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Visual Frame */}
          <div className="md:col-span-7 relative group">
            <div className="overflow-hidden bg-[#18181b] aspect-[16/10] relative">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85"
                alt="Detalhe arquitetônico de concreto aparente e luz zenital"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-aurea-accent block mb-1">
                    ESTUDO MATERIAL
                  </span>
                  <h4 className="font-display text-base tracking-wider text-white">
                    Equilíbrio Tátil: Rocha Moledo & Aço Escovado
                  </h4>
                </div>
                <span className="font-mono text-xs text-white/60">FIG. 01</span>
              </div>
            </div>
          </div>

          {/* Side Editorial Specs & Key Numbers */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-10">
            <div className="space-y-6">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-aurea-accent block">
                Nossos Pilares de Excelência
              </span>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg tracking-wide text-white">
                    Engenharia Sem Concessões
                  </h3>
                  <span className="font-mono text-xs text-aurea-accent">01</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  Cálculos estruturais complexos que permitem vãos monumentais de até 25 metros sem interferência de colunas, integrando o espaço interior à paisagem natural.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg tracking-wide text-white">
                    Biofilia & Ventilação Passiva
                  </h3>
                  <span className="font-mono text-xs text-aurea-accent">02</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  Orientação solar calculada para redução de até 45% no consumo energético, aproveitando correntes de vento térmicas e iluminação difusa natural.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg tracking-wide text-white">
                    Curadoria de Materiais Nobres
                  </h3>
                  <span className="font-mono text-xs text-aurea-accent">03</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  Mármores provenientes de jazidas históricas italianas, madeiras de reflorestamento com rastreamento digital e ferragens cinzeladas sob medida.
                </p>
              </div>
            </div>

            {/* Partners Signature block */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="font-display text-sm tracking-widest text-white">
                  ARQ. RAFAEL MOTA & SOFIA VALENÇA
                </p>
                <p className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                  Arquitetos Titulares & Sócios Fundadores
                </p>
              </div>
              <div className="w-16 h-10 border border-white/10 flex items-center justify-center font-serif italic text-sm text-aurea-accent">
                Áurea
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
