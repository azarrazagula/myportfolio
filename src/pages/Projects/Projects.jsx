import React, { memo } from 'react';
import ecommerceImg from '../../Assets/Projects/ecommerce.png';
import socialImg from '../../Assets/Projects/social.png';
import portfolioImg from '../../Assets/Projects/portfolio.png';

const PROJECTS = [
  {
    title: 'Quantum E-Commerce',
    description: 'A premium dashboard for managing online sales with real-time analytics and inventory tracking.',
    image: ecommerceImg,
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    link: '#',
  },
  {
    title: 'Lumia Social Network',
    description: 'A sleek social media platform with glassmorphic UI, real-time messaging, and media sharing.',
    image: socialImg,
    tags: ['React Native', 'Firebase', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Futuristic Portfolio',
    description: 'A high-end personal website with 3D elements and typography-focused design.',
    image: portfolioImg,
    tags: ['Next.js', 'Three.js', 'Framer Motion'],
    link: '#',
  },
];

const Projects = memo(() => (
  <main className="min-h-[calc(100vh-68px)] py-20 px-6 animate-page-in">
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-semibold text-az-pink tracking-[0.15em] uppercase mb-3">
          My Work
        </p>
        <h1 className="font-grotesk text-4xl md:text-5xl font-extrabold text-slate-100 leading-tight mb-4">
          Featured Projects
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
          A selection of recent projects that demonstrate my technical skills and design philosophy.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-az-pink/50 hover:-translate-y-2"
            style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
          >
            {/* Image Container */}
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-az-dark via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-grotesk text-xl font-bold text-slate-100 mb-2 group-hover:text-az-pink transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-az-pink hover:text-white transition-colors"
              >
                View Project <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
));

export default Projects;
