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
          >
            <Card {...skill} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
));

export default Skills;
