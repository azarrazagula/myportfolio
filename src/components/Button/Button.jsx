import React from 'react';

const VARIANTS = {
  primary: [
    'text-white',
    'bg-gradient-to-r from-az-pink to-[#c4007a]',
    'shadow-[0_4px_20px_rgba(255,53,155,0.4)]',
    'hover:shadow-[0_6px_28px_rgba(255,53,155,0.6)]',
    'hover:-translate-y-0.5',
  ].join(' '),

  outline: [
    'bg-transparent text-az-pink',
    'border-2 border-az-pink',
    'hover:bg-az-pink hover:text-white',
    'hover:-translate-y-0.5',
  ].join(' '),

  ghost: [
    'bg-white/5 text-slate-200',
    'border border-white/10 backdrop-blur-lg',
    'hover:bg-white/10 hover:-translate-y-0.5',
  ].join(' '),
};

const SIZES = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-2.5 text-[0.95rem]',
  lg: 'px-9 py-3.5 text-[1.05rem]',
};

/**
 * Reusable Button component
 * @param {'primary'|'outline'|'ghost'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {'button'|'a'} as
 */
const Button = ({
  children,
  variant   = 'primary',
  size      = 'md',
  as: Tag   = 'button',
  className = '',
  ...rest
}) => (
  <Tag
    className={`
      inline-flex items-center justify-center gap-2
      rounded-full font-semibold font-inter cursor-pointer
      border-none outline-none relative overflow-hidden
      transition-all duration-300 active:scale-95
      ${VARIANTS[variant]}
      ${SIZES[size]}
      ${className}
    `.replace(/\s+/g, ' ').trim()}
    {...rest}
  >
    {children}
  </Tag>
);

export default Button;
