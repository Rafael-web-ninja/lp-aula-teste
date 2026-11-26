import React, { useEffect, useState } from 'react';
import { ArrowUp, Compass } from 'lucide-react';

export default function Footer({ onCursorEnter, onCursorLeave }) {
  const [times, setTimes] = useState({
    sp: '',
    lisboa: '',
    geneva: ''
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        sp: now.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' }),
        lisboa: now.toLocaleTimeString('pt-PT', { timeZone: 'Europe/Lisbon', hour: '2-digit', minute: '2-digit' }),
        geneva: now.toLocaleTimeString('fr-CH', { timeZone: 'Europe/Zurich', hour: '2-digit', minute: '2-digit' })
      });
    };
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#070709] text-aurea-cream border-t border-white/[0.08] pt-20 pb-12 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top World Clocks & Studio Status */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-white/[0.08] text-xs font-mono">
          <div>
            <span className="text-[10px] uppercase text-aurea-muted tracking-wider block">SÃO PAULO</span>
            <div className="text-xl font-display text-aurea-cream mt-1">{times.sp || '13:30'} <span className="text-xs text-aurea-accent font-mono">BRT</span></div>
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Estúdio em atividade
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase text-aurea-muted tracking-wider block">LISBOA</span>
            <div className="text-xl font-display text-aurea-cream mt-1">{times.lisboa || '16:30'} <span className="text-xs text-aurea-accent font-mono">WET</span></div>
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Estúdio em atividade
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase text-aurea-muted tracking-wider block">GENÈVE</span>
            <div className="text-xl font-display text-aurea-cream mt-1">{times.geneva || '17:30'} <span className="text-xs text-aurea-accent font-mono">CET</span></div>
            <span className="text-[10px] text-aurea-sand/60 font-mono flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-aurea-sand/40" /> Plantão de projetos
            </span>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              onMouseEnter={() => onCursorEnter('link')}
              onMouseLeave={onCursorLeave}
              className="group flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-aurea-muted hover:text-aurea-accent transition-colors"
            >
              <span>Voltar ao Topo</span>
              <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-aurea-accent flex items-center justify-center transition-colors">
                <ArrowUp className="w-3.5 h-3.5 text-aurea-cream group-hover:text-aurea-accent group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
            <div className="text-[10px] text-aurea-sand/40 tracking-widest mt-2 md:mt-0">
              COORD. 23.5505° S, 46.6333° W
            </div>
          </div>
        </div>

        {/* Links Navigation Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-mono text-aurea-muted">
          <div className="space-y-3">
            <span className="text-aurea-cream text-[11px] tracking-widest uppercase block font-semibold">Navegação</span>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="hover:text-aurea-accent transition-colors">Portfólio de Obras</a></li>
              <li><a href="#about" className="hover:text-aurea-accent transition-colors">Manifesto Arquitetônico</a></li>
              <li><a href="#services" className="hover:text-aurea-accent transition-colors">Serviços & Domínios</a></li>
              <li><a href="#differentials" className="hover:text-aurea-accent transition-colors">O Rigor Construtivo</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-aurea-cream text-[11px] tracking-widest uppercase block font-semibold">Tipologias</span>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="hover:text-aurea-accent transition-colors">Residências Esculturais</a></li>
              <li><a href="#portfolio" className="hover:text-aurea-accent transition-colors">Hospitalidade & Eco-Lodges</a></li>
              <li><a href="#portfolio" className="hover:text-aurea-accent transition-colors">Pavilhões & Galerias</a></li>
              <li><a href="#portfolio" className="hover:text-aurea-accent transition-colors">Restauro Histórico</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-aurea-cream text-[11px] tracking-widest uppercase block font-semibold">Imprensa & Mídia</span>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-aurea-accent transition-colors">ArchDaily Monografia</a></li>
              <li><a href="#" className="hover:text-aurea-accent transition-colors">Architectural Digest Top 50</a></li>
              <li><a href="#" className="hover:text-aurea-accent transition-colors">Casas de Colecionador (Livro)</a></li>
              <li><a href="#" className="hover:text-aurea-accent transition-colors">Download Press Kit (PDF)</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-aurea-cream text-[11px] tracking-widest uppercase block font-semibold">Rede Social</span>
            <ul className="space-y-2">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-aurea-accent transition-colors">Instagram @aurea.arch</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-aurea-accent transition-colors">LinkedIn Studio</a></li>
              <li><a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-aurea-accent transition-colors">Behance Portfolio</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-aurea-accent transition-colors">Pinterest Moodboards</a></li>
            </ul>
          </div>
        </div>

        {/* Monolithic Sculptural Typography: ÁUREA */}
        <div className="pt-8 select-none">
          <div className="font-display font-black text-[14vw] leading-none tracking-tighter text-white/[0.04] text-center uppercase pointer-events-none">
            ÁUREA
          </div>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-aurea-muted/70 border-t border-white/[0.04] pt-8">
          <div>
            © {new Date().getFullYear()} Áurea Architecture Ltda. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacidade & Sigilo Contratual</span>
            <span>Termos de Uso</span>
            <span className="text-aurea-accent">Awwwards SOTD Concept</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
