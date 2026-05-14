import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../Button/Button';

const NAV_LINKS = [
  { to: '/', label: 'Home', id: 'home' },
  { to: '/about', label: 'About', id: 'about' },
  { to: '/skills', label: 'Skills', id: 'skills' },
  { to: '/projects', label: 'Projects', id: 'projects' },
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
  }, [location.pathname]);

  // Scroll spy: update active as user scrolls through sections
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If at the very bottom of the page, force 'contact' to be active
      if (scrollY + windowHeight >= documentHeight - 50) {
        setActiveSection('contact');
        return;
      }

      let currentId = pathToId(location.pathname);
      const checkpoint = scrollY + 150; // threshold from top

      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (checkpoint >= offsetTop && checkpoint < offsetTop + offsetHeight) {
            currentId = id;
          }
        }
      });

      setActiveSection(currentId);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on mount to set initial state
    onScroll();
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
          fixed top-4 left-1/2 -translate-x-1/2 z-50 
          h-[60px] md:h-[70px] lg:h-[80px] flex items-center px-4 md:px-6 lg:px-8
          w-[92%] lg:w-[85%] xl:w-[75%] max-w-[1200px] rounded-2xl md:rounded-[2rem]
          bg-[#0f172a]/80 backdrop-blur-[20px] border border-white/10
          transition-all duration-300 font-inter
          ${scrolled ? 'shadow-[0_12px_40px_rgba(0,0,0,0.6)] bg-[#050914]/90 border-white/20' : ''}
        `}
      >
        <div className="w-full flex justify-between items-center">

          {/* LEFT – brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('/')}
              className="gradient-text-brand font-grotesk text-xl md:text-2xl lg:text-3xl font-bold tracking-tight no-underline bg-transparent border-none cursor-pointer"
            >
              PortFolio
            </button>
          </div>

          {/* CENTER – nav links (hidden on mobile & ipad) */}
          <ul className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 list-none m-0 p-0">
            {NAV_LINKS.map(({ to, label, id }) => (
              <li key={to}>
                <button
                  onClick={() => handleNavClick(to)}
                  className={`nav-link bg-transparent border-none cursor-pointer text-sm xl:text-base ${activeSection === id ? 'active' : ''}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* RIGHT – contact + hamburger */}
          <div className="flex items-center gap-3">
            <Button
              onClick={handleContact}
              size="md"
              className={`hidden md:flex shadow-none px-6 py-2.5 text-sm font-bold ${activeSection === 'contact' ? 'ring-2 ring-az-pink' : ''}`}
            >
              Hire Me
            </Button>

            {/* Hamburger – mobile & tablet < lg */}
            <button
              className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 cursor-pointer p-2.5 transition-colors"
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
          fixed top-[84px] md:top-[94px] left-1/2 -translate-x-1/2 z-40
          w-[92%] lg:w-[85%] max-w-[1200px] rounded-2xl
          bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10
          px-4 py-6 flex flex-col gap-2
          transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          ${menuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-8 opacity-0 pointer-events-none'
          }
        `}
      >
        <div className="grid grid-cols-2 gap-2">
          {NAV_LINKS.map(({ to, label, id }) => (
            <button
              key={to}
              onClick={() => handleNavClick(to)}
              className={`mobile-link text-center py-4 bg-white/5 rounded-xl border border-white/5 transition-all ${activeSection === id ? 'active text-[#FF7A00] bg-[#FF7A00]/10 border-[#FF7A00]/20' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-2 pt-4 border-t border-white/10">
          <Button
            onClick={handleContact}
            className={`w-full text-lg py-4 shadow-xl ${activeSection === 'contact' ? 'ring-2 ring-[#FF7A00]' : ''}`}
          >
            ✉️ Get in Touch
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
