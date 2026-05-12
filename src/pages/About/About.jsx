import React, { memo } from 'react';
import Button from '../../components/Button/Button';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import aboutAvatar from '../../Assets/about_avatar.png';

const STATS = [
  { label: 'Education', value: '5+', sub: 'Degrees/Certs' },
  { label: 'Years Experience', value: '10+', sub: 'In Industry' },
  { label: 'Projects Completed', value: '100+', sub: 'World Wide' },
];

const About = memo(() => {

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-az-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Avatar with Star Background */}
          <ScrollReveal animation="scale-left" className="relative flex justify-center items-center">
            {/* Star-like Background Shape (Decorative) */}
            <div className="absolute w-[120%] h-[120%] opacity-20 pointer-events-none animate-pulse-slow">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#FF7A00]">
                <path d="M100 0 L120 70 L195 70 L135 115 L155 185 L100 145 L45 185 L65 115 L5 70 L80 70 Z" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <img 
                src={aboutAvatar} 
                alt="About Me Avatar" 
                className="w-full max-w-[450px] h-auto drop-shadow-[0_20px_50px_rgba(255,122,0,0.3)]"
              />
            </div>
          </ScrollReveal>

          {/* Right Side: Content */}
          <ScrollReveal animation="scale-right" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white font-grotesk">
                About Me
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                I'm a passionate MERN full-stack developer with a genuine obsession for crafting 
                modern, high-performance web applications. I turn complex problems into elegant, 
                user-friendly solutions using the latest tech stacks.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                  <div className="text-3xl font-extrabold text-[#FF7A00] mb-1 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-200 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
});

export default About;
