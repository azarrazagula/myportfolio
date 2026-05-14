import React from 'react';
import Tag from "../Button/Button.jsx"
const SOCIALS = [
  { icon: <img src="https://cdn.simpleicons.org/x/1DA1F2" alt="Twitter/X" className="w-[1.2em] h-[1.2em] inline-block" />, label: 'Twitter/X', href: '#' },
  { icon: <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" className="w-[1.2em] h-[1.2em] inline-block" />, label: 'LinkedIn', href: '#' },
  { icon: <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" className="w-[1.2em] h-[1.2em] inline-block" />, label: 'GitHub', href: '#' },
  { icon: <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="w-[1.2em] h-[1.2em] inline-block" />, label: 'Instagram', href: '#' },
];

const Footer = (props) => (
  <footer className="bg-[#050914] border-t border-white/5 py-6 md:py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

      {/* LEFT – name */}
      <div className="flex flex-col items-center md:items-start gap-2">
        <span className="gradient-text-brand font-grotesk font-bold text-2xl">
          AzarIbrahim
        </span>
        <p className="text-sm text-slate-500">
          Full Stack MERN Developer
        </p>
      </div>

      {/* CENTER – year */}
      <div className="order-3 md:order-2">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} — All Rights Reserved
        </p>
      </div>

      {/* RIGHT – social icons */}
      <div className="flex flex-col items-center md:items-end gap-4 order-2 md:order-3">
        <div className="flex gap-4">
          {SOCIALS.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="social-btn"
            >
              {icon}
            </a>
          ))}
        </div>
        <Tag variant="primary" size="sm" className="bg-[#FF7A00] hover:bg-[#E66D00] border-none px-6 py-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Work Together
        </Tag>
      </div>
    </div>
  </footer>
);

export default Footer;
