import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import heroImage from '../../Assets/hero_3d_avatar_male.png';

const SOCIAL_ICONS = [
  { name: 'instagram', icon: 'https://cdn.simpleicons.org/instagram/E4405F', url: '#' },
  { name: 'tiktok', icon: 'https://cdn.simpleicons.org/tiktok/000000', url: '#' },
  { name: 'github', icon: 'https://cdn.simpleicons.org/github/181717', url: '#' },
  { name: 'youtube', icon: 'https://cdn.simpleicons.org/youtube/FF0000', url: '#' },
];

const Home = () => {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      window.scrollTo(0, 0);
      isInitialMount.current = false;
    } else {
      let sectionId = pathname !== '/' ? pathname.replace('/', '') : 'home';
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <div id="home" className="flex flex-col w-full">
      <main className="min-h-screen flex flex-col justify-center items-center overflow-hidden">

        {/* ── Hero ── */}
        <ScrollReveal animation="fade" className="w-full max-w-7xl mx-auto px-6 py-20 md:py-32">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col items-start space-y-8 animate-page-in">
              
              {/* Social Icons */}
              <div className="flex space-x-4">
                {SOCIAL_ICONS.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 transition-transform">
                    <img src={social.icon} alt={social.name} className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h1 className="text-slate-100 font-grotesk font-extrabold leading-tight"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                  Hi, I'm <span className="gradient-text">AzarIbrahim</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error quasi est labore? 
                  Laborum hic commodi architecto ex eligendi quasi. Accusantium provident ipsa illum facilis.
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
            </div>

            {/* Right Side Image */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-az-pink/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative animate-float">
                <img 
                  src={heroImage} 
                  alt="3D Avatar" 
                  className="w-full max-w-[500px] h-auto drop-shadow-2xl"
                />
              </div>
            </div>

          </section>
        </ScrollReveal>
      </main>

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
