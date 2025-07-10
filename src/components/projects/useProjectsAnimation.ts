
import { useEffect, useRef, useState } from 'react';

export const useProjectsAnimation = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [titleScale, setTitleScale] = useState(1);
  const [showPersonalProjects, setShowPersonalProjects] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!titleRef.current || !sectionRef.current) {
            ticking = false;
            return;
          }

          const currentScrollY = window.scrollY;
          const isScrollingUpNow = currentScrollY < lastScrollY;
          setIsScrollingUp(isScrollingUpNow);
          lastScrollY = currentScrollY;

          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate scroll progress for the section
          const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
          
          // Check if user has scrolled past the projects section
          const hasScrolledPast = rect.bottom < windowHeight * 0.3;
          
          if (hasScrolledPast) {
            // User scrolled past - hide everything
            setShowPersonalProjects(false);
            setTitleScale(0.8);
          } else {
            // Normal animation sequence when in view
            if (scrollProgress < 0.2) {
              // Zoom in phase
              const zoomScale = 1 + (scrollProgress / 0.2) * 0.3;
              setTitleScale(zoomScale);
              setShowPersonalProjects(false);
            } else if (scrollProgress < 0.4) {
              // Zoom out phase
              const zoomOutProgress = (scrollProgress - 0.2) / 0.2;
              const zoomScale = 1.3 - zoomOutProgress * 0.3;
              setTitleScale(zoomScale);
              setShowPersonalProjects(false);
            } else {
              // Final state - show projects
              setTitleScale(1);
              setShowPersonalProjects(true);
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    titleRef,
    sectionRef,
    titleScale,
    showPersonalProjects,
    isScrollingUp
  };
};
