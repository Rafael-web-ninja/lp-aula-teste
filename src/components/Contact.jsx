import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2, Sparkles, Shield, ArrowUpRight } from 'lucide-react';
import LuxuryButton from './LuxuryButton';

export default function Contact({ prefilledSubject, onCursorEnter, onCursorLeave }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    scope: prefilledSubject || 'Dossiê Integral Áurea',
    budget: 'R$ 5M — R$ 10M',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    'R$ 3M — R$ 5M',
    'R$ 5M — R$ 10M',
    'R$ 10M — R$ 25M',
    'Acima de R$ 25M / Privado'
  ];

  const typologyOptions = [
    'Dossiê Integral Áurea',
    'Master Concept',
    'Ateliê Privé Turnkey',
    'Residência Unifamiliar',
    'Hospitalidade & Resort',
    'Requalificação de Patrimônio'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full py-28 sm:py-36 px-6 sm:px-12 bg-[#070709] text-aurea-cream border-t border-white/[0.08] overflow-hidden">
      {/* Ambient Radial Spotlight and Bronze Aura */}
      <div className="spotlight-top opacity-70" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-radial-gradient from-aurea-accent/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Monumental Editorial CTA Banner */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-aurea-accent/40 backdrop-blur-md text-[10px] sm:text-xs font-mono tracking-widest text-aurea-accent uppercase glow-gold-subtle">
            <Sparkles className="w-3.5 h-3.5 text-aurea-accent" />
            <span>Consultoria Privativa & Iniciação de Obra</span>
          </div>

          <h2 className="font-display font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-aurea-cream leading-[0.98]">
            Pronto para
            <br />
            <span className="font-editorial italic font-normal text-aurea-accent lowercase tracking-normal text-glow-gold">
              esculpir seu legado?
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-aurea-sand/80 font-light leading-relaxed">
            Cada grande obra começa com um diálogo franco sobre aspirações, luz e matéria. Agende uma conversa confidencial diretamente com nossa diretoria executiva.
          </p>
        </div>

        {/* Contact Container: High-Fashion Glow Form on Left, Prestige Studios on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Inquiry Form with Card Glow & Shimmer */}
          <div className="lg:col-span-7 luxury-card p-8 sm:p-12 rounded-sm relative glow-gold-subtle">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-6 animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-aurea-accent/15 border border-aurea-accent mx-auto flex items-center justify-center text-aurea-accent shadow-[0_0_30px_rgba(197,168,128,0.4)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-3xl uppercase tracking-tight text-aurea-cream">
                  Solicitação Recebida com Rigor
                </h3>
                <p className="text-sm text-aurea-sand/90 font-light max-w-md mx-auto leading-relaxed">
                  Obrigado, <span className="text-aurea-accent font-semibold">{formData.name}</span>. O memorial prévio do seu projeto foi encaminhado à diretoria executiva. Retornaremos em até 24 horas úteis com a confirmação de agenda.
                </p>
                <div className="pt-4">
                  <LuxuryButton
                    onClick={() => setIsSubmitted(false)}
                    variant="animated-border"
                    size="sm"
                  >
                    Enviar Nova Mensagem
                  </LuxuryButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-aurea-sand/80 uppercase mb-2">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Gabriel Álvares"
                      className="w-full bg-black/60 border border-white/10 rounded px-4 py-3.5 text-sm text-aurea-cream placeholder:text-white/20 focus:border-aurea-accent focus:shadow-[0_0_15px_rgba(197,168,128,0.3)] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-aurea-sand/80 uppercase mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="gabriel@exemplo.com"
                      className="w-full bg-black/60 border border-white/10 rounded px-4 py-3.5 text-sm text-aurea-cream placeholder:text-white/20 focus:border-aurea-accent focus:shadow-[0_0_15px_rgba(197,168,128,0.3)] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-aurea-sand/80 uppercase mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+55 (11) 98765-4321"
                      className="w-full bg-black/60 border border-white/10 rounded px-4 py-3.5 text-sm text-aurea-cream placeholder:text-white/20 focus:border-aurea-accent focus:shadow-[0_0_15px_rgba(197,168,128,0.3)] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-aurea-sand/80 uppercase mb-2">
                      Local da Futura Obra
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Cidade / Estado ou País"
                      className="w-full bg-black/60 border border-white/10 rounded px-4 py-3.5 text-sm text-aurea-cream placeholder:text-white/20 focus:border-aurea-accent focus:shadow-[0_0_15px_rgba(197,168,128,0.3)] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Typology selection */}
                <div>
                  <label className="block text-xs font-mono tracking-wider text-aurea-sand/80 uppercase mb-3">
                    Modalidade / Tipologia Desejada
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {typologyOptions.map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setFormData({ ...formData, scope: item })}
                        className={`px-3 py-2 text-xs font-mono rounded border transition-all ${
                          formData.scope === item
                            ? 'bg-aurea-accent text-aurea-black border-aurea-accent font-semibold shadow-[0_0_15px_rgba(197,168,128,0.4)]'
                            : 'bg-black/40 border-white/10 text-aurea-cream/70 hover:border-white/30'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Investment Budget */}
                <div>
                  <label className="block text-xs font-mono tracking-wider text-aurea-sand/80 uppercase mb-3">
                    Previsão de Investimento Global Estimado
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, budget: opt })}
                        className={`p-3 text-xs font-mono text-left rounded border transition-all ${
                          formData.budget === opt
                            ? 'bg-aurea-accent/20 border-aurea-accent text-aurea-cream shadow-[0_0_15px_rgba(197,168,128,0.3)]'
                            : 'bg-black/30 border-white/10 text-aurea-muted hover:border-white/20'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono tracking-wider text-aurea-sand/80 uppercase mb-2">
                    Aspirações, Metragem e Programa de Necessidades
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva detalhes como características do terreno, topografia, estilo desejado..."
                    className="w-full bg-black/60 border border-white/10 rounded px-4 py-3 text-sm text-aurea-cream placeholder:text-white/20 focus:border-aurea-accent focus:shadow-[0_0_15px_rgba(197,168,128,0.3)] focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Big Final Action Button with Golden Shimmer */}
                <LuxuryButton
                  variant="gold-shimmer"
                  size="lg"
                  className="w-full py-4 text-sm"
                  onCursorEnter={onCursorEnter}
                  onCursorLeave={onCursorLeave}
                >
                  Solicitar Reunião Confidencial
                </LuxuryButton>
              </form>
            )}
          </div>

          {/* Right Column: Global Estúdios & Contact Direct Lines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-card p-8 rounded-sm space-y-6 glow-gold-subtle">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="font-display text-xl uppercase tracking-wider text-aurea-cream">
                  Estúdios Internacionais
                </h3>
                <span className="text-[10px] font-mono text-aurea-accent uppercase">
                  Sedes Físicas
                </span>
              </div>

              {/* São Paulo */}
              <div className="border-b border-white/5 pb-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-base text-aurea-accent uppercase font-medium">
                    São Paulo (Matriz)
                  </h4>
                  <span className="text-[10px] font-mono text-aurea-muted">GMT-3</span>
                </div>
                <p className="text-xs text-aurea-cream/80 font-mono mt-1">
                  Alameda Gabriel Monteiro da Silva, 1840 — Jardim América
                </p>
                <p className="text-xs text-aurea-muted font-mono mt-1">
                  +55 (11) 3089-2200 • sp@aurea.arch
                </p>
              </div>

              {/* Lisboa */}
              <div className="border-b border-white/5 pb-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-base text-aurea-accent uppercase font-medium">
                    Lisboa
                  </h4>
                  <span className="text-[10px] font-mono text-aurea-muted">GMT+0</span>
                </div>
                <p className="text-xs text-aurea-cream/80 font-mono mt-1">
                  Avenida da Liberdade, 245 — Chiado
                </p>
                <p className="text-xs text-aurea-muted font-mono mt-1">
                  +351 21 890 4120 • lisboa@aurea.arch
                </p>
              </div>

              {/* Genebra */}
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-base text-aurea-accent uppercase font-medium">
                    Genève (Suíça)
                  </h4>
                  <span className="text-[10px] font-mono text-aurea-muted">GMT+1</span>
                </div>
                <p className="text-xs text-aurea-cream/80 font-mono mt-1">
                  Rue du Rhône 42 — 1204 Genève
                </p>
                <p className="text-xs text-aurea-muted font-mono mt-1">
                  +41 22 731 8800 • geneve@aurea.arch
                </p>
              </div>
            </div>

            {/* Direct Line Badge with Glow */}
            <div className="p-6 border border-aurea-accent/40 bg-[#121217] rounded-sm flex items-start gap-4 glow-gold-subtle">
              <Phone className="w-5 h-5 text-aurea-accent flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-mono text-aurea-accent tracking-widest uppercase block">
                  Linha de Atendimento Exclusivo
                </span>
                <p className="text-base font-mono text-aurea-cream mt-1 font-semibold tracking-wide">
                  +55 (11) 99120-0080
                </p>
                <p className="text-[11px] text-aurea-muted font-mono mt-1">
                  Atendimento privativo para proprietários, fundos e investidores.
                </p>
              </div>
            </div>

            {/* Confidentiality Commitment */}
            <div className="p-5 border border-white/5 bg-white/[0.02] rounded-sm flex items-center gap-3 text-xs font-mono text-aurea-sand/70">
              <Shield className="w-4 h-4 text-aurea-accent flex-shrink-0" />
              <span>Garantia de sigilo contratual e confidencialidade irrestrita.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
