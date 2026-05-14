import React, { memo } from 'react';
import Button from '../../components/Button/Button';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Card from '../../components/Card/Card';
import aboutAvatar from '../../Assets/about_avatar.png';

const STATS = [
  { label: 'Professional Experience', value: '1+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Client Satisfaction', value: '100%' },
];

const About = memo(() => {

  return (
    <Card className="bg-[#0f172a] rounded-[2rem] md:rounded-[3rem] mx-auto p-6 md:p-12 lg:p-16 border border-white/5 shadow-2xl w-full max-w-[1400px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center text-center lg:text-left">

          {/* Left Side: Avatar with Star Background */}
          <ScrollReveal animation="scale-left" className="relative flex justify-center items-center">
            {/* Star-like Background Shape (Decorative) */}
            <div className="absolute w-[110%] h-[110%] opacity-10 pointer-events-none animate-pulse-slow">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#FF7A00]">
                <path d="M100 0 L120 70 L195 70 L135 115 L155 185 L100 145 L45 185 L65 115 L5 70 L80 70 Z" />
              </svg>
            </div>

            <div className="relative z-10 max-w-[320px] md:max-w-[400px] lg:max-w-[450px]">
              <img
                src={aboutAvatar}
                alt="About Me Avatar"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,122,0,0.3)] rounded-3xl"
              />
            </div>
          </ScrollReveal>

          {/* Right Side: Content */}
          <ScrollReveal animation="scale-right" className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white font-grotesk">
                About Me
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                I'm a passionate MERN full-stack developer with a genuine obsession for crafting
                modern, high-performance web applications. I turn complex problems into elegant,
                user-friendly solutions using the latest tech stacks.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 w-full">
              {STATS.map((stat) => (
                <Card key={stat.label} className="bg-white/5 p-4 md:p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                  <div className="text-2xl md:text-3xl font-extrabold text-[#FF7A00] mb-1 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-200 mb-1 uppercase tracking-wider">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="px-8 py-6 text-lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </Card>
  );
});

export default About;
