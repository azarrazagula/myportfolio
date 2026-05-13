import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import heroImage from '../../Assets/hero_3d_avatar_male.png';

const Home = () => {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    const sectionId = pathname !== '/' ? pathname.replace('/', '') : 'home';
    const element = document.getElementById(sectionId);

    if (isInitialMount.current) {
      if (pathname === '/') {
        window.scrollTo(0, 0);
      } else if (element) {
        // Instant scroll on refresh for specific sections
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'auto' });
        }, 100);
      }
      isInitialMount.current = false;
    } else {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return (
    <div id="home" className="flex flex-col w-full">
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* ── Hero ── */}
        <div className="w-full max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal animation="bottom-to-top" className="flex flex-col items-start space-y-8">
            {/* Title & Description */}
            <div className="space-y-4">
              <h1 className="text-slate-100 font-grotesk font-extrabold leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                Hi, I'm <span className="gradient-text">AzarIbrahim</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                I am a passionate MERN Stack Developer dedicated to building high-performance, scalable web applications that deliver
                exceptional user experiences. With a deep understanding of React, Node.js, Express, and MongoDB, I specialize in
                creating seamless full-stack solutions from concept to deployment. I thrive on solving complex problems, writing
                clean, maintainable code, and staying at the forefront of modern web technologies. My approach combines creative
                design with technical precision to ensure every project is both functional and visually stunning. I am committed
                to continuous learning and excellence, always striving to turn innovative ideas into impactful digital realities.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#FF7A00] hover:bg-[#E66D00] text-white border-none shadow-[0_4px_14px_0_rgba(255,122,0,0.39)]"
                onClick={() => window.open('#', '_blank')}
              >
                <span className="flex items-center gap-2">
                  📥 Download CV
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center gap-2">
                  ✉️ Contact Me
                </span>
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Side Image */}
          <ScrollReveal animation="scale" className="relative flex justify-center lg:justify-end">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-az-pink/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="3D Avatar"
                className="w-full max-w-[500px] h-auto drop-shadow-2xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="about" className="overflow-hidden">
        <About />
      </section>

      <section id="skills" className="overflow-hidden">
        <Skills />
      </section>

      <section id="projects" className="overflow-hidden">
        <Projects />
      </section>

      <section id="contact" className="overflow-hidden">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
