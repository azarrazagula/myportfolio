import React from 'react';

/**
 * Generic Card Wrapper — design it from the outside using className
 */
const Card = ({ children, className = '' }) => {
  return (
    <div className={`transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
