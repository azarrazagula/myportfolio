import React from 'react';
import Tag from "../Button/Button.jsx"
const SOCIALS = [
  { icon: <img src="https://cdn.simpleicons.org/twitter/1DA1F2" alt="Twitter/X" className="w-[1.2em] h-[1.2em] inline-block" />, label: 'Twitter/X', href: '#' },
  { icon: <img src="https://cdn.simpleicons.org/linkedin/0A66C2" alt="LinkedIn" className="w-[1.2em] h-[1.2em] inline-block" />, label: 'LinkedIn', href: '#' },
  { icon: <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" className="w-[1.2em] h-[1.2em] inline-block" />, label: 'GitHub', href: '#' },
  { icon: <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="w-[1.2em] h-[1.2em] inline-block" />, label: 'Instagram', href: '#' },
];

const Footer = (props) => (
  <footer className="bg-az-dark2 border-t border-white/10 py-7 px-8">
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">

      {/* LEFT – name */}
      <span className="gradient-text-brand font-grotesk font-bold text-base text-center sm:text-left">
        AzarIbrahim
      </span>

      {/* CENTER – year */}
      <p className="text-xs text-slate-500 text-center">
        © 2026 — All Rights Reserved
      </p>

      {/* RIGHT – social icons */}
      <div className="flex justify-center sm:justify-end gap-3">
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
        <Tag variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Get in Touch
        </Tag>
      </div>
    </div>
  </footer>
);

export default Footer;
