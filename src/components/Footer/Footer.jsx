import React from 'react';

const SOCIALS = [
  { icon: '𝕏', label: 'Twitter/X',  href: 'https://twitter.com'   },
  { icon: '💼', label: 'LinkedIn',   href: 'https://linkedin.com'  },
  { icon: '🐙', label: 'GitHub',     href: 'https://github.com'    },
  { icon: '📸', label: 'Instagram',  href: 'https://instagram.com' },
];

const Footer = () => (
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
      </div>
    </div>
  </footer>
);

export default Footer;
