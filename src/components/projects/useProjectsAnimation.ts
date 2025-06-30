import { useEffect, useRef, useState, useCallback } from 'react';

export const useProjectsAnimation = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [titleScale, setTitleScale] = useState(1);
  const [showSectionTitles, setShowSectionTitles] = useState(false);
  const [showPersonalProjects, setShowPersonalProjects] = useState(false);
  const [showAcademicProjects, setShowAcademicProjects] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  
  // Use refs to track timeouts and prevent conflicts
  const timeoutRefs = useRef<{
    personalProjects?: NodeJS.Timeout;
    academicProjects?: NodeJS.Timeout;
  }>({});

  const clearTimeouts = useCallback(() => {
    if (timeoutRefs.current.personalProjects) {
      clearTimeout(timeoutRefs.current.personalProjects);
      timeoutRefs.current.personalProjects = undefined;
    }
    if (timeoutRefs.current.academicProjects) {
      clearTimeout(timeoutRefs.current.academicProjects);
      timeoutRefs.current.academicProjects = undefined;
    }
  }, []);

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
          
          // Clear any existing timeouts to prevent conflicts
          clearTimeouts();
          
          if (hasScrolledPast) {
            // User scrolled past - hide everything with reverse animation
            setShowAcademicProjects(false);
            setShowPersonalProjects(false);
            setShowSectionTitles(false);
            setTitleScale(0.8);
          } else {
            // Normal animation sequence when in view
            if (scrollProgress < 0.2) {
              // Zoom in phase (reduced from 0.3)
              const zoomScale = 1 + (scrollProgress / 0.2) * 0.3; // Reduced zoom effect
              setTitleScale(zoomScale);
              setShowSectionTitles(false);
              setShowPersonalProjects(false);
              setShowAcademicProjects(false);
            } else if (scrollProgress < 0.4) {
              // Zoom out phase (reduced from 0.6)
              const zoomOutProgress = (scrollProgress - 0.2) / 0.2;
              const zoomScale = 1.3 - zoomOutProgress * 0.3; // Scale back down to 1x
              setTitleScale(zoomScale);
              setShowSectionTitles(false);
              setShowPersonalProjects(false);
              setShowAcademicProjects(false);
            } else {
              // Final state - show section titles and projects with slightly more delay
              setTitleScale(1);
              setShowSectionTitles(true);
              
              if (isScrollingUpNow) {
                // When scrolling up from Skills section, show academic projects first
                setShowAcademicProjects(true);
                timeoutRefs.current.personalProjects = setTimeout(() => setShowPersonalProjects(true), 120);
              } else {
                // Normal flow - show personal projects first
                setShowPersonalProjects(true);
                timeoutRefs.current.academicProjects = setTimeout(() => setShowAcademicProjects(true), 120);
              }
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
      clearTimeouts();
    };
  }, [clearTimeouts]);

  return {
    titleRef,
    sectionRef,
    titleScale,
    showSectionTitles,
    showPersonalProjects,
    showAcademicProjects,
    isScrollingUp
  };
};
