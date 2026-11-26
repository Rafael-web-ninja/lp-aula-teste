import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function LuxuryButton({
  children,
  onClick,
  href,
  variant = 'animated-border',
  size = 'md',
  icon = true,
  className = '',
  onCursorEnter,
  onCursorLeave
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-xs sm:text-sm'
  };

  const baseClasses = `inline-flex items-center justify-center gap-2.5 font-mono tracking-widest uppercase font-semibold rounded-sm select-none transition-all duration-300 ${sizeClasses[size] || sizeClasses.md} ${className}`;

  let variantStyle = '';
  if (variant === 'animated-border') {
    variantStyle = 'btn-animated-border text-aurea-cream hover:text-aurea-accent';
  } else if (variant === 'gold-shimmer') {
    variantStyle = 'btn-gold-shimmer';
  } else if (variant === 'outline') {
    variantStyle = 'border border-aurea-accent/40 bg-white/[0.02] text-aurea-cream hover:border-aurea-accent hover:bg-aurea-accent/10 hover:shadow-[0_0_25px_rgba(197,168,128,0.25)]';
  } else {
    variantStyle = 'text-aurea-cream hover:text-aurea-accent underline-offset-8 hover:underline';
  }

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const handleMouseEnter = () => {
    if (onCursorEnter) onCursorEnter('link');
  };

  const handleMouseLeave = () => {
    if (onCursorLeave) onCursorLeave();
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`group ${baseClasses} ${variantStyle}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group ${baseClasses} ${variantStyle}`}
    >
      {content}
    </button>
  );
}
