import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../Button/Button';

const NAV_LINKS = [
  { to: '/', label: 'Home', id: 'home' },
  { to: '/about', label: 'About', id: 'about' },
  { to: '/skills', label: 'Skills', id: 'skills' },
  { to: '/projects', label: 'Project', id: 'projects' },
  { to: '/contact', label: 'Contact', id: 'contact' },
];

const pathToId = (pathname) => {
  if (pathname === '/') return 'home';
  const match = NAV_LINKS.find(link => link.to === pathname);
  return match ? match.id : 'home';
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  // Sync active section when route changes (e.g. clicking a nav link)
  useEffect(() => {
    setActiveSection(pathToId(location.pathname));
    // Reset scroll spy after navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Scroll spy: update active as user scrolls through sections
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 130;
      let currentId = pathToId(location.pathname);

      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) {
          currentId = id;
        }
      });

      setActiveSection(currentId);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  // Handle background blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on desktop resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (to) => {
    setMenuOpen(false);
    navigate(to);
  };

  const handleContact = () => {
    setMenuOpen(false);
    navigate('/contact');
  };


  return (
    <>
      {/* ── Sticky navbar ── */}
      <nav
        className={`
          fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 
          h-[58px] md:h-[80px] flex items-center px-4 md:px-8
          w-[90%] md:w-[92%] lg:w-[60%] rounded-2xl md:rounded-[2rem]
          bg-az-dark/70 backdrop-blur-[20px] md:backdrop-blur-[24px] border border-white/10
          transition-all duration-300 font-inter
          ${scrolled ? 'shadow-[0_12px_40px_rgba(0,0,0,0.6)] bg-az-dark/90' : ''}
        `}
      >
        <div className="w-full flex justify-center gap-6 md:gap-12 lg:gap-20 items-center">

          {/* LEFT – brand */}
          <div className="flex justify-start">
            <button
              onClick={() => handleNavClick('/', 'home')}
              className="gradient-text-brand font-grotesk text-2xl md:text-2xl lg:text-4xl font-bold tracking-tight no-underline bg-transparent border-none cursor-pointer"
            >
              Portfolio
            </button>
          </div>

          {/* CENTER – nav links (hidden on mobile & ipad) */}
          <ul className="hidden lg:flex items-center justify-center gap-3 lg:gap-6 list-none m-0 p-0 shadow-none">
            {NAV_LINKS.map(({ to, label, id }) => (
              <li key={to}>
                <button
                  onClick={() => handleNavClick(to)}
                  className={`nav-link bg-transparent border-none cursor-pointer ${activeSection === id ? 'active' : ''}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* RIGHT – avatar + hamburger */}
          <div className="flex justify-end items-center gap-3">

            {/* Contact button – desktop */}
            <Button
              onClick={handleContact}
              size="md"
              className={`hidden lg:flex shadow-none ${activeSection === 'contact' ? 'ring-2 ring-az-pink' : ''}`}
            >
              Get in Touch
            </Button>

            {/* Hamburger – mobile & ipad */}
            <button
              className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-1"
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
          fixed top-[74px] md:top-[110px] left-1/2 -translate-x-1/2 z-40
          w-[92%] lg:w-[65%] rounded-2xl
          bg-[rgba(10,10,15,0.95)] backdrop-blur-xl border border-white/10
          px-6 py-4 flex flex-col gap-1
          transition-all duration-300
          ${menuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-4 opacity-0 pointer-events-none'
          }
        `}
      >
        {NAV_LINKS.map(({ to, label, id }) => (
          <button
            key={to}
            onClick={() => handleNavClick(to)}
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
