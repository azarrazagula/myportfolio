import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const STATS = [
  { number: '1+',  label: 'Years Experience'  },
  { number: '10+', label: 'Projects Built'    },
  { number: '5+',  label: 'Technologies Used' },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-[calc(100vh-68px)] flex flex-col">

      {/* ── Hero ── */}
      <section className="flex-1 relative flex items-center justify-center px-6 py-24 overflow-hidden">

        {/* Decorative blobs */}
        <div className="absolute top-[-120px] left-[-100px] w-[500px] h-[500px] rounded-full blur-[80px] opacity-20 bg-az-pink animate-float pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] rounded-full blur-[80px] opacity-20 bg-az-blue animate-float-r pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px] opacity-15 bg-az-yellow animate-float-slow pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl w-full text-center animate-page-in">

          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-az-pink text-sm font-semibold tracking-[0.12em] uppercase mb-6">
            <span>👋</span> Hello, World! I'm
          </div>

          {/* Name */}
          <h1 className="gradient-text font-grotesk font-extrabold leading-none mb-5"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 6.5rem)' }}>
            Azar
          </h1>

          {/* Role */}
          <p className="text-slate-500 mb-8" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>
            <span className="text-az-blue font-semibold">MERN Full-Stack Developer</span>{' '}
            &amp; UI Enthusiast
          </p>

          {/* Article */}
          <p className="text-slate-400 leading-[1.9] max-w-2xl mx-auto mb-10 text-left text-[1.05rem]">
            I'm a passionate full-stack developer specialising in crafting{' '}
            <strong className="text-slate-200">modern, high-performance web applications</strong>{' '}
            from front-end pixel perfection to rock-solid back-end APIs. With deep expertise in{' '}
            <strong className="text-slate-200">React, Node.js, Express, and MongoDB</strong>,
            I turn complex problems into elegant, user-friendly solutions. I love writing clean,
            maintainable code and continuously pushing my skills forward — whether experimenting
            with new UI patterns or optimising backend performance. Every project is an opportunity
            to create something not just functional,{' '}
            <strong className="text-slate-200">but genuinely delightful to use.</strong>
          </p>

          {/* CTAs */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => navigate('/about')}>
              About Me →
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/languages')}>
              My Skills
            </Button>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
        {STATS.map(({ number, label }) => (
          <div
            key={label}
            className="py-8 text-center bg-az-dark2 transition-colors duration-300 hover:bg-az-dark3 group"
          >
            <div className="gradient-text-brand font-grotesk font-extrabold text-[2.5rem] transition-transform duration-300 group-hover:-translate-y-1">
              {number}
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
