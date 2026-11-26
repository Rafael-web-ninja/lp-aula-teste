import React, { useEffect, useState } from 'react';

export default function CustomCursor({ cursorText, cursorVariant }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth trailing effect with lerp
    let animationFrameId;
    const updateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18
        };
      });
      animationFrameId = requestAnimationFrame(updateTrailing);
    };
    animationFrameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  const isProjectHover = cursorVariant === 'project';
  const isLinkHover = cursorVariant === 'link';

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer trailing circle */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-transform duration-100 ease-out flex items-center justify-center ${
          isProjectHover
            ? 'w-24 h-24 bg-aurea-accent/90 text-aurea-black backdrop-blur-sm -translate-x-12 -translate-y-12 shadow-2xl scale-100'
            : isLinkHover
            ? 'w-12 h-12 border border-aurea-accent bg-aurea-accent/10 -translate-x-6 -translate-y-6 scale-110'
            : 'w-8 h-8 border border-white/20 -translate-x-4 -translate-y-4'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {isProjectHover && (
          <span className="text-[10px] font-mono tracking-widest font-semibold uppercase">
            {cursorText || 'EXPLORAR'}
          </span>
        )}
      </div>

      {/* Center pinpoint dot */}
      <div
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none transition-opacity duration-200 ${
          isProjectHover ? 'opacity-0' : 'bg-aurea-accent opacity-90'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}
