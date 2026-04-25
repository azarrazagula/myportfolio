import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const BADGES = ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind'];

const TIMELINE = [
  {
    year: '2026 – Present',
    title: 'MERN Full-Stack Developer',
    desc: 'Building scalable web applications with React, Node, Express & MongoDB.',
  },
  {
    year: '2025',
    title: 'Frontend Focus',
    desc: 'I started learing html css and javascript from scratch. I started building a small portfolio website and it was a great experience.',
  },
  {
    year: '2024',
    title: 'I was a salesExecutive',
    desc: 'I worked as a Sales Executive in a company at an entry-level position, which was not growth-oriented. As a Sales Executive, my primary responsibility was to interact with customers, understand their needs, and promote our products and services.',
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-[calc(100vh-68px)] py-20 px-6 animate-page-in">
      <div className="max-w-4xl mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-az-pink tracking-[0.15em] uppercase mb-3">Who I Am</p>
          <h1 className="font-grotesk text-4xl md:text-5xl font-extrabold text-slate-100 leading-tight mb-4">
            About Me
          </h1>
          <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
            A glimpse into my journey, skills, and what drives me as a developer.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Avatar side */}
          <div className="flex flex-col items-center gap-6 animate-fade-up">
            {/* Gradient ring */}
            <div
              className="w-[200px] h-[200px] rounded-full p-[4px] animate-pulse-ring"
              style={{ background: 'linear-gradient(135deg, #ff359b, #00d2ff)' }}
            >
              <div className="w-full h-full rounded-full bg-az-dark3 flex items-center justify-center text-[5rem]">
                👨‍💻
              </div>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 justify-center">
              {BADGES.map(b => (
                <span
                  key={b}
                  className="glass px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 tracking-wide"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="font-grotesk text-2xl font-extrabold text-slate-100 mb-6">
              Hi, I'm Azar —{' '}
              <span className="gradient-text-brand">MERN Full-Stack Developer</span>
            </h2>

            <div className="space-y-4 text-slate-400 leading-[1.85] text-[1rem]">
              <p>I'm a <strong className="text-slate-200 relative group cursor-pointer">MERN full-stack developer<span className="absolute ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">😊</span></strong> with a genuine passion for crafting web applications that are as beautiful as they are powerful. My journey into development started with curiosity — and quickly turned into a full-blown obsession.</p>
              <p>On the <strong className="text-slate-200 relative group cursor-pointer">frontend<span className="absolute ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">😊</span></strong>, I design responsive, pixel-perfect interfaces using React and Tailwind CSS, caring deeply about user experience and accessibility.</p>
              <p>On the <strong className="text-slate-200 relative group cursor-pointer">backend<span className="absolute ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">😊</span></strong>, I build secure, scalable REST APIs with Node.js and Express, backed by MongoDB databases designed for real-world complexity.</p>
              <p>I thrive in agile environments, love collaborating with teams, and am always keen to <strong className="text-slate-200 relative group cursor-pointer">learn, iterate, and ship<span className="absolute ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">😊</span></strong> products that make a real difference.</p>
              <p>Outside of code, I explore new tech trends, contribute to open-source, and constantly level up my craft in <strong className="text-slate-200 relative group cursor-pointer">modern web development<span className="absolute ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">😊</span></strong>.</p>
              <p>Looking for a developer with technical depth and creative energy?{' '}
                <a href="mailto:[EMAIL_ADDRESS]" className="text-az-pink font-semibold hover:underline">
                  Let's connect!
                </a>
              </p>
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              <Button onClick={() => navigate('/languages')}>View My Skills</Button>
              <Button variant="ghost" onClick={() => navigate('/contact')}>Get In Touch</Button>
            </div>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="mt-16 pt-14 border-t border-white/10">
          <h2 className="font-grotesk text-2xl font-bold text-slate-100 mb-10 text-center">
            My Journey
          </h2>
          <ul className="timeline-list">
            {TIMELINE.map(({ year, title, desc }, i) => (
              <li
                key={year}
                className="timeline-item animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <p className="text-xs font-bold text-az-blue tracking-[0.1em] uppercase mb-1">{year}</p>
                <p className="text-base font-bold text-slate-200 mb-1">{title}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </main>
  );
};

export default About;
