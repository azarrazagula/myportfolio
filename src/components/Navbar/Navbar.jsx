import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#languages', label: 'Languages' },
  { href: '#about', label: 'About' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleContact = () => { 
    setMenuOpen(false); 
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); 
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
            <NavLink
              to="/"
              className="gradient-text-brand font-grotesk text-2xl font-bold tracking-tight no-underline"
            >
              PortFolio
            </NavLink>
          </div>

          {/* CENTER – nav links (hidden on mobile) */}
          <ul className="hidden md:flex flex-[2] items-center justify-center gap-1 list-none m-0 p-0 shadow-none">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav-link"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT – avatar + hamburger */}
          <div className="flex justify-end items-center gap-3 md:flex-1">

            {/* Contact button – desktop */}
            <Button
              onClick={handleContact}
              size="sm"
              className="hidden md:flex shadow-none"
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
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <div className="mt-2 pt-4 border-t border-white/10">
          <Button
            onClick={handleContact}
            className="w-full text-lg py-3.5"
          >
            ✉️ Get in Touch
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
