import React from 'react';
import Card from '../../components/Card/Card';

const SKILLS = [
  {
    icon: '🌐', title: 'HTML',
    description: 'Semantic, accessible markup with modern HTML5 standards.',
    level: 92, accentColor: '#e44d26',
  },
  {
    icon: '🎨', title: 'CSS',
    description: 'Responsive layouts, animations, and modern design systems.',
    level: 88, accentColor: '#264de4',
  },
  {
    icon: '⚡', title: 'JavaScript',
    description: 'ES6+, async/await, DOM manipulation, and modern JS patterns.',
    level: 85, accentColor: '#f7df1e',
  },
  {
    icon: '💨', title: 'Tailwind CSS',
    description: 'Utility-first CSS for rapid, consistent UI development.',
    level: 82, accentColor: '#38bdf8',
  },
  {
    icon: '🟢', title: 'Node.js',
    description: 'Server-side JavaScript, REST APIs, and backend services.',
    level: 80, accentColor: '#68a063',
  },
  {
    icon: '🍃', title: 'MongoDB',
    description: 'NoSQL databases, Mongoose ODM, and data modelling.',
    level: 78, accentColor: '#4db33d',
  },
  {
    icon: '⚛️', title: 'React',
    description: 'Component-based UI, hooks, context API, and single-page applications.',
    level: 90, accentColor: '#61dafb',
  },
  {
    icon: '🚂', title: 'Express.js',
    description: 'Fast, unopinionated backend framework for building RESTful APIs.',
    level: 85, accentColor: '#ffffff',
  },
];

const Languages = () => (
  <main className="min-h-[calc(100vh-68px)] py-20 px-6 animate-page-in">
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs font-semibold text-az-pink tracking-[0.15em] uppercase mb-3">
          Tech Stack
        </p>
        <h1 className="font-grotesk text-4xl md:text-5xl font-extrabold text-slate-100 leading-tight mb-4">
          Languages &amp; Tools
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
          A curated set of technologies I use daily to design, develop, and deploy
          production-grade web applications.
        </p>
      </div>

      {/* Skill cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, i) => (
          <div
            key={skill.title}
            className="animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
          >
            <Card {...skill} />
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default Languages;
