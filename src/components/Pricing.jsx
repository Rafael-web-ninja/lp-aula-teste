import React, { useState } from 'react';
import { Check, Sparkles, Shield, ArrowRight, Layers, Crown } from 'lucide-react';
import LuxuryButton from './LuxuryButton';

export default function Pricing({ onCursorEnter, onCursorLeave, onSelectPlan }) {
  const [activeTier, setActiveTier] = useState('full');

  const plans = [
    {
      id: 'concept',
      code: 'PL-01',
      badge: 'Viabilidade & Concepção',
      title: 'Master Concept',
      subtitle: 'Estudo Preliminar & Concepção Volumétrica',
      description: 'Ideal para proprietários e investidores que necessitam validar a vocação do terreno, insolação e estética volumétrica antes do desenvolvimento executivo.',
      highlight: false,
      deliverables: [
        'Análise topográfica e bioclimática minuciosa',
        'Estudo volumétrico em modelagem 3D imersiva',
        'Renders fotorrealistas de ambiência e fachada',
        'Plantas de layout esquemático e fluxos',
        'Estimativa paramétrica de investimento em obra',
        'Apresentação presencial ou em conferência privada'
      ],
      leadTime: '6 a 8 semanas',
      scope: 'Ideal para terrenos em aquisição ou loteamentos'
    },
    {
      id: 'full',
      code: 'PL-02',
      badge: 'Modelo Mais Procurado',
      title: 'Dossiê Integral Áurea',
      subtitle: 'Projeto Arquitetônico Executivo + BIM LOD 400',
      description: 'O padrão de excelência internacional. Da concepção artística ao detalhamento executivo milimétrico com compatibilização multidisciplinar completa.',
      highlight: true,
      deliverables: [
        'Tudo do Master Concept incluído',
        'Projeto Executivo completo em BIM (LOD 400)',
        'Compatibilização total com projetos complementares',
        'Projeto Luminotécnico integrado (cenografia de luz)',
        'Especificação e memorial de matérias-primas nobres',
        'Detalhamento milimétrico de caixilhos, pedras e juntas',
        'Acompanhamento técnico presencial em etapas estruturais'
      ],
      leadTime: '16 a 24 semanas',
      scope: 'Residências unifamiliares de 600m² a 3.000m²'
    },
    {
      id: 'prive',
      code: 'PL-03',
      badge: 'White-Glove Exclusivo',
      title: 'Ateliê Privé Turnkey',
      subtitle: 'Arquitetura + Design de Interiores + Curadoria de Arte',
      description: 'A experiência máxima de sofisticação. Imersão completa onde nossa equipe assina a arquitetura, interiores, marcenarias e curadoria de arte até a chave na mão.',
      highlight: false,
      deliverables: [
        'Dossiê Integral de Arquitetura completo',
        'Design de Interiores total com marcenarias autorais',
        'Desenho exclusivo de mobiliário e peças em rocha',
        'Curadoria e assessoria na aquisição de obras de arte',
        'Projeto de Paisagismo biofílico integrado',
        'Supervisão estética contínua e rigor de acabamento',
        'Dedicação direta dos dois sócios-diretores titulares'
      ],
      leadTime: 'Conforme cronograma de obra',
      scope: 'Limitado a 4 novos clientes por ano'
    }
  ];

  return (
    <section id="plans" className="relative w-full py-28 sm:py-36 px-6 sm:px-12 bg-[#09090c] text-aurea-cream border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background gold glow spot */}
      <div className="spotlight-top opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-aurea-accent uppercase mb-4">
              <span className="w-8 h-[1px] bg-aurea-accent" />
              <span>Modalidades de Contratação</span>
              <span className="text-aurea-muted font-normal">/ 05</span>
            </div>
            <h2 className="font-display font-light text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight">
              Planos de
              <span className="font-editorial italic lowercase text-aurea-accent pl-3 text-glow-gold">
                engajamento
              </span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-aurea-muted font-light leading-relaxed">
            Transparência e rigor desde o primeiro contato. Nossas modalidades de contratação se adaptam à complexidade e escala da sua futura residência ou empreendimento.
          </p>
        </div>

        {/* Pricing Cards Grid with Glow & Animated Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isFeatured = plan.highlight;

            return (
              <div
                key={plan.id}
                onMouseEnter={() => onCursorEnter('link')}
                onMouseLeave={onCursorLeave}
                className={`relative rounded-sm transition-all duration-500 flex flex-col justify-between p-8 sm:p-10 ${
                  isFeatured
                    ? 'bg-[#121217] border-2 border-aurea-accent shadow-[0_0_50px_-10px_rgba(197,168,128,0.35)] lg:-translate-y-2'
                    : 'luxury-card bg-[#0e0e12]'
                }`}
              >
                {/* Glow aura inside the card */}
                {isFeatured && (
                  <div className="absolute inset-0 bg-radial-gradient from-aurea-accent/10 via-transparent to-transparent pointer-events-none rounded-sm" />
                )}

                <div>
                  {/* Top Badge & Code */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] text-aurea-accent tracking-widest uppercase">
                      {plan.code}
                    </span>
                    <span
                      className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${
                        isFeatured
                          ? 'bg-aurea-accent text-aurea-black font-semibold border-aurea-accent'
                          : 'bg-white/[0.04] text-aurea-sand/70 border-white/10'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  {/* Plan Title & Subtitle */}
                  <h3 className="font-display text-2xl sm:text-3xl text-aurea-cream uppercase tracking-tight">
                    {plan.title}
                  </h3>
                  <p className="font-editorial italic text-base sm:text-lg text-aurea-accent mt-1 mb-4">
                    {plan.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-aurea-muted font-light leading-relaxed pb-6 border-b border-white/[0.08]">
                    {plan.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="py-6 space-y-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-aurea-sand/60 block mb-2">
                      Entregáveis Contemplados:
                    </span>
                    {plan.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs font-mono text-aurea-cream/80 leading-snug">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isFeatured ? 'bg-aurea-accent/20 text-aurea-accent' : 'bg-white/5 text-aurea-muted'
                        }`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Meta & CTA */}
                <div className="pt-6 border-t border-white/[0.08] space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-aurea-muted">
                    <span>Prazo Médio:</span>
                    <span className="text-aurea-cream font-medium">{plan.leadTime}</span>
                  </div>
                  <div className="text-[10px] font-mono text-aurea-sand/60 italic">
                    {plan.scope}
                  </div>

                  <LuxuryButton
                    onClick={() => onSelectPlan(plan.title)}
                    variant={isFeatured ? 'gold-shimmer' : 'animated-border'}
                    size="md"
                    className="w-full"
                    onCursorEnter={onCursorEnter}
                    onCursorLeave={onCursorLeave}
                  >
                    Selecionar Modalidade
                  </LuxuryButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Confidentiality Banner */}
        <div className="mt-16 p-6 bg-white/[0.02] border border-white/5 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-aurea-muted">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-aurea-accent flex-shrink-0" />
            <span>Todos os contratos incluem cláusula de sigilo confidencial (NDA) para patrimônios privados.</span>
          </div>
          <span className="text-aurea-accent tracking-widest uppercase text-[10px] flex-shrink-0">
            COMPROMISSO ÉTICO ÁUREA
          </span>
        </div>
      </div>
    </section>
  );
}
