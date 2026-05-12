import React from 'react';

/**
 * Reusable Card — used for Skills and other grid items
 * @param {string}  icon        URL or emoji
 * @param {string}  name        title
 * @param {number}  level       0-100 proficiency
 * @param {string}  color       hex color for progress bar
 */
const Card = ({
  icon,
  name,
  level = 100,
  color = '#FF7A00',
}) => {
  const isImageUrl = typeof icon === 'string' && (icon.startsWith('http') || icon.startsWith('/'));

  return (
    <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 group">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 p-2">
          {isImageUrl ? (
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          ) : (
            <span className="text-xl">{icon}</span>
          )}
        </div>
        <span className="font-bold text-slate-200 text-lg">{name}</span>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span>Proficiency</span>
          <span style={{ color }}>{level}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-1000"
            style={{ 
              width: `${level}%`, 
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}80`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
