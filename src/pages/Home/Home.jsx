import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Card from '../../components/Card/Card';
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
      {/* ── Hero Section ── */}
      <section id="hero" className="min-h-full w-full flex flex-col justify-start items-center pt-[150px] pb-[60px] box-border">
        <Card className="bg-[#0f172a] rounded-[3rem] mx-auto p-6 md:p-16 lg:p-20 border border-white/5 shadow-2xl w-[92%] max-w-[1400px]">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-center text-center xl:text-left">
            <ScrollReveal animation="bottom-to-top" className="flex flex-col items-center xl:items-start space-y-8">
              <div className="space-y-4">
                <h1 className="text-slate-100 font-grotesk font-extrabold leading-tight" style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}>
                  Hi, I'm <span className="gradient-text">AzarIbrahim</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed">
                  I am a passionate MERN Stack Developer dedicated to building high-performance, scalable web applications.
                </p>
              </div>
              <div className="flex flex-wrap justify-center xl:justify-start gap-4 pt-4">
                <Button size="lg" className="bg-[#FF7A00] hover:bg-[#E66D00] text-white border-none shadow-[0_4px_14px_0_rgba(255,122,0,0.39)]">
                  <span>📥 Download CV</span>
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <span>✉️ Contact Me</span>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scale" className="relative flex justify-center xl:justify-end">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-az-pink/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative animate-float">
                <img src={heroImage} alt="3D Avatar" className="w-full max-w-[500px] h-auto drop-shadow-2xl rounded-3xl" />
              </div>
            </ScrollReveal>
          </div>
        </Card>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="min-h-fit w-full flex flex-col justify-start items-center pt-[89px] pb-[70px] box-border">
        <About />
      </section>

      {/* ── Skills Section ── */}
      <section id="skills" className="min-h-screen w-full flex flex-col justify-start items-center pt-[71px] pb-[60px] box-border">
        <Skills />
      </section>

      {/* ── Projects Section ── */}
      <section id="projects" className="min-h-screen w-full flex flex-col justify-start items-center pt-[50px] pb-[60px] box-border">
        <Projects />
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="min-h-fit w-full flex flex-col justify-start items-center pt-[100px] pb-[60px] box-border">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
