import React, { memo } from 'react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Card from '../../components/Card/Card';

const SKILLS = [
  { name: 'React', level: 100, icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
  { name: 'Node.js', level: 100, icon: 'https://cdn.simpleicons.org/nodedotjs/339933', color: '#339933' },
  { name: 'JavaScript', level: 100, icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: '#F7DF1E' },
  { name: 'Tailwind CSS', level: 100, icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: '#06B6D4' },
  { name: 'MongoDB', level: 100, icon: 'https://cdn.simpleicons.org/mongodb/47A248', color: '#47A248' },
  { name: 'Express', level: 100, icon: 'https://cdn.simpleicons.org/express/000000', color: '#FFFFFF' },
  { name: 'HTML', level: 100, icon: 'https://cdn.simpleicons.org/html5/E34F26', color: '#E34F26' },
  { name: 'CSS', level: 100, icon: 'https://img.icons8.com/color/48/css3.png', color: '#1572B6' },
  { name: 'Git', level: 100, icon: 'https://cdn.simpleicons.org/git/F05032', color: '#F05032' },
  { name: 'GitHub', level: 100, icon: 'https://cdn.simpleicons.org/github/FFFFFF', color: '#FFFFFF' },
];

const Skills = memo(() => (
  <Card className="bg-[#0f172a] rounded-[3rem] mx-auto p-6 md:p-8 lg:p-10 border border-white/5 shadow-2xl w-[92%] max-w-[1400px]">
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-grotesk mb-4">
          My Skills
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto text-lg">
          Technologies and tools I work with to create amazing web experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SKILLS.map((skill, i) => (
          <ScrollReveal
            key={skill.name}
            animation="scale"
          >
            <Card className="bg-[#050914] p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 group shadow-2xl hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 p-2.5 group-hover:bg-white/10 transition-colors">
                  {typeof skill.icon === 'string' && (skill.icon.startsWith('http') || skill.icon.startsWith('/')) ? (
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-2xl">{skill.icon}</span>
                  )}
                </div>
                <span className="font-bold text-slate-100 text-lg group-hover:text-white transition-colors">{skill.name}</span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-[0.1em]">
                  <span>Proficiency</span>
                  <span style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden p-[2px]">
                  <div
                    className="h-full rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(255,122,0,0.2)]"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                      boxShadow: `0 0 12px ${skill.color}60`
                    }}
                  />
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </Card>
));

export default Skills;
