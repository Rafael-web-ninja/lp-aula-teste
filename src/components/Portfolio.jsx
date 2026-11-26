import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function Portfolio({ onSelectProject, onCursorEnter, onCursorLeave }) {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', 'Residencial', 'Hospitalidade', 'Pavilhões', 'Comercial'];

  const filteredProjects = selectedCategory === 'Todas'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative w-full py-28 sm:py-36 px-6 sm:px-12 bg-aurea-black text-aurea-cream border-t border-white/[0.08] overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-radial-gradient from-aurea-accent/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-radial-gradient from-aurea-accent/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-aurea-accent uppercase mb-4">
              <span className="w-8 h-[1px] bg-aurea-accent" />
              <span>Obras Selecionadas</span>
              <span className="text-aurea-muted font-normal">/ 02</span>
            </div>
            <h2 className="font-display font-light text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight">
              Portfólio
              <span className="font-editorial italic lowercase text-aurea-accent pl-3 text-glow-gold">
                monolítico
              </span>
            </h2>
          </div>

          {/* Filter Pills with Glowing Hover */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                onMouseEnter={() => onCursorEnter('link')}
                onMouseLeave={onCursorLeave}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-aurea-accent text-aurea-black font-semibold shadow-[0_0_20px_rgba(197,168,128,0.4)]'
                    : 'bg-white/[0.03] text-aurea-cream/70 hover:text-aurea-cream hover:bg-white/[0.08] border border-white/10 hover:border-aurea-accent/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Masonry Portfolio Grid with Glow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
          {filteredProjects.map((project, index) => {
            const isWide = index % 3 === 0;
            const colSpan = isWide ? 'md:col-span-12' : index % 3 === 1 ? 'md:col-span-7' : 'md:col-span-5';
            const aspectClass = isWide ? 'aspect-[21/9]' : index % 3 === 1 ? 'aspect-[16/11]' : 'aspect-[4/5]';

            return (
              <div
                key={project.id}
                className={`${colSpan} group cursor-pointer relative`}
                onClick={() => onSelectProject(project)}
                onMouseEnter={() => onCursorEnter('project', 'VER PROJETO')}
                onMouseLeave={onCursorLeave}
              >
                {/* Image Container with Shimmer Border & Hover Glow */}
                <div className={`relative w-full ${aspectClass} overflow-hidden rounded-sm bg-[#121217] border border-white/10 group-hover:border-aurea-accent/60 group-hover:shadow-[0_0_40px_-5px_rgba(197,168,128,0.3)] transition-all duration-700`}>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md rounded border border-white/15 text-[10px] font-mono tracking-widest text-aurea-cream uppercase">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md rounded border border-aurea-accent/30 text-[10px] font-mono tracking-widest text-aurea-accent uppercase">
                      {project.year}
                    </span>
                  </div>

                  {/* Quick Action Icon with Glow on Hover */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-aurea-cream group-hover:bg-aurea-accent group-hover:text-aurea-black group-hover:border-aurea-accent group-hover:shadow-[0_0_20px_rgba(197,168,128,0.5)] transition-all duration-500 transform group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-mono text-aurea-sand/80 tracking-widest uppercase block mb-1">
                        {project.location} — {project.area}
                      </span>
                      <h3 className="font-display text-2xl sm:text-4xl uppercase tracking-tight text-aurea-cream group-hover:text-aurea-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-aurea-accent/90 tracking-wider">
                      <span>VER DETALHES</span>
                      <span>+</span>
                    </div>
                  </div>
                </div>

                {/* Subtitle Underneath for High-Editorial Sophistication */}
                <div className="mt-4 flex items-center justify-between text-xs font-mono text-aurea-muted border-b border-white/5 pb-2">
                  <p className="font-light text-aurea-cream/80 truncate pr-4">
                    {project.subtitle}
                  </p>
                  <span className="text-[10px] uppercase text-aurea-accent font-medium flex-shrink-0">
                    {project.materials[0]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
