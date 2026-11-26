import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { servicesData } from '../data/projects';

export default function Services({ onCursorEnter, onCursorLeave, onInquireService }) {
  const [hoveredService, setHoveredService] = useState(0);

  return (
    <section id="services" className="relative w-full py-28 sm:py-36 px-6 sm:px-12 bg-[#0c0c0e] text-aurea-cream border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-aurea-accent uppercase mb-4">
              <span className="w-8 h-[1px] bg-aurea-accent" />
              <span>Competências & Domínios</span>
              <span className="text-aurea-muted font-normal">/ 03</span>
            </div>
            <h2 className="font-display font-light text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight">
              Serviços
              <span className="font-editorial italic lowercase text-aurea-accent pl-3">
                especializados
              </span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-aurea-muted font-light leading-relaxed">
            Atuamos de ponta a ponta: do estudo de viabilidade e escolha do terreno até a entrega da chave em mãos com curadoria de arte e mobiliário exclusivo.
          </p>
        </div>

        {/* Services Split: Left Interactive List, Right Dynamic Architectural Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Services Accordion List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/[0.08]">
            {servicesData.map((service, index) => {
              const isSelected = hoveredService === index;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => {
                    setHoveredService(index);
                    onCursorEnter('link');
                  }}
                  onMouseLeave={onCursorLeave}
                  onClick={() => onInquireService(service.title)}
                  className={`py-8 cursor-pointer transition-all duration-300 group ${
                    isSelected ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-sm text-aurea-accent">
                        {service.id}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-aurea-sand/60 block mb-1">
                          {service.category}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl text-aurea-cream group-hover:text-aurea-accent transition-colors uppercase">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-aurea-cream group-hover:border-aurea-accent group-hover:text-aurea-accent transition-all duration-300 flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Expandable details */}
                  <div className={`mt-4 pl-8 sm:pl-12 transition-all duration-500 overflow-hidden ${
                    isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-sm text-aurea-sand/80 font-light leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/5">
                      {service.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-aurea-cream/70">
                          <Check className="w-3.5 h-3.5 text-aurea-accent flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Dynamic Visual Container */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-aurea-graphite border border-white/10 shadow-2xl">
              <img
                src={servicesData[hoveredService]?.image}
                alt={servicesData[hoveredService]?.title}
                className="w-full h-full object-cover transition-all duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-aurea-accent uppercase block">
                    Metodologia Áurea
                  </span>
                  <h4 className="font-display text-lg text-aurea-cream uppercase">
                    {servicesData[hoveredService]?.title}
                  </h4>
                </div>
                <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-[10px] font-mono text-aurea-cream">
                  0{hoveredService + 1} / 04
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
