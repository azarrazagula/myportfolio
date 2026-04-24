import React from 'react';

/**
 * Reusable SkillCard — accent color-aware, glassmorphism
 * @param {string}  icon        emoji / symbol
 * @param {string}  title       skill name
 * @param {string}  description short description
 * @param {number}  level       0-100 proficiency
 * @param {string}  accentColor CSS hex color
 */
const Card = ({
  icon,
  title,
  description,
  level       = 80,
  accentColor = '#ff359b',
}) => (
  <div
    className="
      relative overflow-hidden rounded-[1.25rem] p-8
      glass skill-card-glow cursor-default
      flex flex-col items-center gap-4
      transition-all duration-300 group
      hover:-translate-y-2 hover:scale-[1.02]
    "
    style={{ '--accent': accentColor }}
    onMouseEnter={e => (e.currentTarget.style.borderColor = accentColor)}
    onMouseLeave={e => (e.currentTarget.style.borderColor  = '')}
  >
    {/* Icon */}
    <span
      className="text-5xl leading-none transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
      style={{ filter: `drop-shadow(0 0 12px ${accentColor})` }}
    >
      {icon}
    </span>

    {/* Title */}
    <h3 className="font-grotesk text-[1.15rem] font-bold text-slate-100">{title}</h3>

    {/* Description */}
    {description && (
      <p className="text-sm text-slate-400 text-center leading-relaxed">{description}</p>
    )}

    {/* Progress bar */}
    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000"
        style={{
          width: `${level}%`,
          background: `linear-gradient(90deg, ${accentColor}, rgba(255,255,255,0.55))`,
        }}
      />
    </div>
  </div>
);

export default Card;
