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

    if (element) {
      const isMobile = window.innerWidth < 768;
      const navbarOffset = 0; // Sections should start at the top
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarOffset;

      if (isInitialMount.current) {
        if (pathname === '/') {
          window.scrollTo(0, 0);
        } else {
          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'auto'
            });
          }, 100);
        }
        isInitialMount.current = false;
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [pathname]);

  return (
    <div id="home" className="flex flex-col w-full overflow-x-hidden">
      {/* ── Hero Section ── */}
      <section id="hero" className="min-h-screen w-full flex flex-col justify-center items-center pt-24 md:pt-32 pb-12 px-4 box-border scroll-mt-0">
        <Card className="bg-[#0f172a] rounded-[2rem] md:rounded-[3rem] mx-auto p-6 md:p-12 lg:p-16 xl:p-20 border border-white/5 shadow-2xl w-full max-w-[1400px]">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
            <ScrollReveal animation="bottom-to-top" className="flex flex-col items-center lg:items-start space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 className="text-slate-100 font-grotesk font-extrabold leading-tight tracking-tight" style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)' }}>
                  Hi, I'm <span className="gradient-text">AzarIbrahim</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed mx-auto lg:mx-0">
                  I am a passionate MERN Stack Developer dedicated to building high-performance, scalable web applications.
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Button size="lg" className="bg-[#FF7A00] hover:bg-[#E66D00] text-white border-none shadow-[0_4px_14px_0_rgba(255,122,0,0.39)] px-8 py-6 text-lg">
                  <span>📥 Download CV</span>
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <span>✉️ Contact Me</span>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scale" className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-az-pink/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative animate-float max-w-[320px] md:max-w-[450px] xl:max-w-[500px]">
                <img src={heroImage} alt="3D Avatar" className="w-full h-auto drop-shadow-2xl rounded-3xl" />
              </div>
            </ScrollReveal>
          </div>
        </Card>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="min-h-screen w-full flex flex-col justify-center items-center pt-24 md:pt-32 pb-24 box-border scroll-mt-0">
        <About />
      </section>

      {/* ── Skills Section ── */}
      <section id="skills" className="min-h-screen w-full flex flex-col justify-center items-center pt-24 md:pt-32 pb-24 box-border scroll-mt-0">
        <Skills />
      </section>

      {/* ── Projects Section ── */}
      <section id="projects" className="min-h-screen w-full flex flex-col justify-center items-center pt-24 md:pt-32 pb-24 box-border scroll-mt-0">
        <Projects />
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="min-h-fit w-full flex flex-col justify-start items-center pt-20 md:pt-32 pb-60 box-border scroll-mt-0">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
