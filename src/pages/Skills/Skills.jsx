import React, { memo } from 'react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';

const SKILLS = [
  { name: 'React', level: 90, icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
  { name: 'Node.js', level: 85, icon: 'https://cdn.simpleicons.org/nodedotjs/339933', color: '#339933' },
  { name: 'JavaScript', level: 92, icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: '#F7DF1E' },
  { name: 'Tailwind CSS', level: 88, icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: '#06B6D4' },
  { name: 'MongoDB', level: 80, icon: 'https://cdn.simpleicons.org/mongodb/47A248', color: '#47A248' },
  { name: 'Express', level: 82, icon: 'https://cdn.simpleicons.org/express/000000', color: '#FFFFFF' },
  { name: 'HTML', level: 95, icon: 'https://cdn.simpleicons.org/html5/E34F26', color: '#E34F26' },
  { name: 'CSS', level: 88, icon: 'https://img.icons8.com/color/48/css3.png', color: '#1572B6' },
  { name: 'TypeScript', level: 78, icon: 'https://cdn.simpleicons.org/typescript/3178C6', color: '#3178C6' },
];

const Skills = memo(() => (
  <section id="skills" className="py-24 px-6 bg-az-dark">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, i) => (
          <ScrollReveal 
            key={skill.name} 
            animation="fade" 
            className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 p-2">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-slate-200 text-lg">{skill.name}</span>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span>Proficiency</span>
                <span style={{ color: skill.color }}>{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${skill.level}%`, 
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}80`
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
));

export default Skills;
