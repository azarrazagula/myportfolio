import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const NAV_LINKS = [
  { to: '/', label: 'Home', id: 'home' },
  { to: '/languages', label: 'Languages', id: 'languages' },
  { to: '/about', label: 'About', id: 'about' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const ticking = useRef(false);

  // Handle background blur on scroll (Throttled with requestAnimationFrame)
  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll Spy: Update active link based on scroll position (Throttled)
  useEffect(() => {
    const handleScrollSpy = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const sections = NAV_LINKS.map(link => document.getElementById(link.id));
          const scrollPosition = window.scrollY + 100;

          let currentActive = 'home';
          sections.forEach((section, index) => {
            if (!section) return;
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (scrollPosition >= top && scrollPosition < bottom) {
              currentActive = NAV_LINKS[index].id;
            }
          });
          
          const contactSection = document.getElementById('contact');
          if (contactSection && scrollPosition >= contactSection.offsetTop) {
            currentActive = 'contact';
          }

          setActiveSection(prev => prev !== currentActive ? currentActive : prev);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (to, id) => {
    setMenuOpen(false);
    setActiveSection(id);
    navigate(to);
  };

  const handleContact = () => {
    setMenuOpen(false);
    setActiveSection('contact');
    navigate('/contact');
  };

  return (
    <>
      {/* ── Sticky navbar ── */}
      <nav
        className={`
          sticky top-0 z-50 h-[68px] flex items-center px-6 md:px-8
          bg-az-dark/80 backdrop-blur-[18px] border-b border-white/10
          transition-shadow duration-300 font-inter
          ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : ''}
        `}
      >
        <div className="w-full flex justify-between items-center">

          {/* LEFT – brand */}
          <div className="flex justify-start md:flex-1">
            <button
              onClick={() => handleNavClick('/', 'home')}
              className="gradient-text-brand font-grotesk text-2xl font-bold tracking-tight no-underline bg-transparent border-none cursor-pointer"
            >
              PortFolio
            </button>
          </div>

          {/* CENTER – nav links (hidden on mobile) */}
          <ul className="hidden md:flex flex-[2] items-center justify-center gap-1 list-none m-0 p-0 shadow-none">
            {NAV_LINKS.map(({ to, label, id }) => (
              <li key={to}>
                <button
                  onClick={() => handleNavClick(to, id)}
                  className={`nav-link bg-transparent border-none cursor-pointer ${activeSection === id ? 'active' : ''}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* RIGHT – avatar + hamburger */}
          <div className="flex justify-end items-center gap-3 md:flex-1">

            {/* Contact button – desktop */}
            <Button
              onClick={handleContact}
              size="sm"
              className={`hidden md:flex shadow-none ${activeSection === 'contact' ? 'ring-2 ring-az-pink' : ''}`}
            >
              Get in Touch
            </Button>

            {/* Hamburger – mobile */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-1"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span className={`block w-full h-0.5 bg-slate-200 rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-full h-0.5 bg-slate-200 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-slate-200 rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile slide-down menu ── */}
      <div
        className={`
          fixed top-[68px] left-0 right-0 z-40
          bg-[rgba(10,10,15,0.97)] backdrop-blur-xl border-b border-white/10
          px-6 py-4 flex flex-col gap-1
          transition-all duration-300
          ${menuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
          }
        `}
      >
        {NAV_LINKS.map(({ to, label, id }) => (
          <button
            key={to}
            onClick={() => handleNavClick(to, id)}
            className={`mobile-link text-left bg-transparent border-none cursor-pointer ${activeSection === id ? 'active text-az-pink' : ''}`}
          >
            {label}
          </button>
        ))}
        <div className="mt-2 pt-4 border-t border-white/10">
          <Button
            onClick={handleContact}
            className={`w-full text-lg py-3.5 ${activeSection === 'contact' ? 'ring-2 ring-az-pink' : ''}`}
          >
            ✉️ Get in Touch
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
