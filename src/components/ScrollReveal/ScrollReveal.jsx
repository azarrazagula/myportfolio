import React, { useRef, useEffect, useState } from 'react';

const ScrollReveal = ({ children, animation = 'bottom-to-top', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Toggle visibility based on intersection status
        setIsVisible(entry.isIntersecting);
      });
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px' // Offset to ensure it triggers nicely
    });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'bottom-to-top':
        return isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0';
      case 'right-to-left':
        return isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0';
      case 'scale':
        return isVisible ? 'scale-100 opacity-100' : 'scale-[0.8] opacity-0';
      case 'scale-left':
        return isVisible ? 'scale-100 translate-x-0 opacity-100' : 'scale-[0.8] -translate-x-32 opacity-0';
      case 'scale-right':
        return isVisible ? 'scale-100 translate-x-0 opacity-100' : 'scale-[0.8] translate-x-32 opacity-0';
      default:
        return isVisible ? 'opacity-100' : 'opacity-0';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[2000ms] ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
