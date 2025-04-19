import React, { useEffect, useRef } from 'react';

const AnimatedElement = ({ 
  children, 
  animation = 'fade-in', 
  threshold = 0.1, 
  delay = 0,
  ...props 
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(animation);
            // Ensure element stays visible
            entry.target.style.opacity = 1;
            // Keep the animation state at the end
            entry.target.style.animationFillMode = 'forwards';
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, threshold, delay]);
  
  return (
    <div 
      ref={elementRef} 
      className={`animated-element ${props.className || ''}`} 
      style={{
        opacity: 0,
        willChange: 'opacity, transform',
        animationFillMode: 'forwards'
      }} 
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
