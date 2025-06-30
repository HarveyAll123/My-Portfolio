
import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [bounceComplete, setBounceComplete] = useState(false);
  const [isPixelated, setIsPixelated] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up' | null>(null);
  
  const textOptions = [
    "AI Developer & IT Professional",
    "Software Engineer & Tech Enthusiast",
    "Full-Stack Developer & Innovator",
    "Tech Student & Future Leader"
  ];
  
  useEffect(() => {
    // Detect if device supports touch
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let currentTextIndex = 0;
    
    const typeEffect = () => {
      const currentText = textOptions[currentTextIndex];
      
      if (!isDeleting) {
        setText(currentText.slice(0, index));
        index++;
        
        if (index > currentText.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000); // Pause before deleting
        }
      } else {
        setText(currentText.slice(0, index));
        index--;
        
        if (index < 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % textOptions.length;
          index = 0;
        }
      }
    };
    
    const timer = setInterval(typeEffect, isDeleting ? 50 : 100);
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroElement = document.getElementById('hero');
      const aboutElement = document.getElementById('about');
      
      if (heroElement && aboutElement) {
        const heroRect = heroElement.getBoundingClientRect();
        const aboutRect = aboutElement.getBoundingClientRect();
        
        // Determine scroll direction
        const currentDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        if (currentDirection !== scrollDirection) {
          setScrollDirection(currentDirection);
        }
        lastScrollY = currentScrollY;
        
        // Hide scroll indicator when hero section is mostly out of view
        setShowScrollIndicator(heroRect.bottom > window.innerHeight * 0.3);
        
        // Check if about section is in view
        const aboutInView = aboutRect.top < window.innerHeight && aboutRect.bottom > 0;
        const heroInView = heroRect.top < window.innerHeight && heroRect.bottom > 0;
        
        // Pixelate when about section is visible, crisp when hero is primarily visible
        if (aboutInView && !heroInView) {
          setIsPixelated(true);
        } else if (heroInView) {
          setIsPixelated(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBounceComplete(true);
    }, 1500); // Match the bounce-in animation duration
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPixelationClass = () => {
    if (isPixelated && scrollDirection === 'down') {
      return 'animate-scroll-pixelate-slow';
    } else if (!isPixelated && scrollDirection === 'up') {
      return 'animate-scroll-crisp-medium';
    } else if (isPixelated) {
      return 'animate-scroll-pixelate';
    } else {
      return 'animate-scroll-crisp';
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-16 lg:pt-0">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r from-electric-600 to-electric-400 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-1000 group-hover:duration-200 ${
                bounceComplete ? 'animate-glow' : 'opacity-0'
              }`}></div>
              <div className="relative">
                <img 
                  src="/preuni-image.jpg" 
                  alt="Hasan Abdulloh"
                  className={`w-80 h-80 rounded-full object-cover object-[center_20%] border-4 border-electric-500/20 hover:border-electric-500/40 transition-all duration-500 hover:scale-105 animate-bounce-in animate-pixelate-to-crisp-fast ${getPixelationClass()}`}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in order-1 lg:order-2">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hasan <span className="gradient-text">Abdulloh</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
              {text}
              <span className="animate-pulse">|</span>
            </div>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              Energetic Information Technology student with an unrelenting passion for Artificial Intelligence, 
              software engineering, and human-centred design. Ready to drive cutting-edge projects 
              that shape the future and improve everyday life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-electric-500 hover:bg-electric-600 text-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-glow"
              >
                Get In Touch
              </button>
              
              <a 
                href="#about" 
                className="px-8 py-4 border border-electric-500 text-electric-400 hover:bg-electric-500 hover:text-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Only show on non-touch devices and when hero section is visible */}
      {!isTouchDevice && (
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-500 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-6 h-10 border-2 border-electric-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-electric-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
