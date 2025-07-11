
import { useState, useEffect, useRef } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (nameRef.current && isHovering) {
        const rect = nameRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePos({
          x: e.clientX - centerX,
          y: e.clientY - centerY
        });
      }
    };

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getProximityScale = () => {
    if (!isHovering) return 1;
    
    const distance = Math.sqrt(mousePos.x * mousePos.x + mousePos.y * mousePos.y);
    const maxDistance = 100;
    const minScale = 1;
    const maxScale = 1.2;
    
    if (distance > maxDistance) return minScale;
    
    const scale = minScale + (maxScale - minScale) * (1 - distance / maxDistance);
    return scale;
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div 
            ref={nameRef}
            className="text-2xl font-bold cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.9)] transform-gpu" 
            style={{
              animation: 'color-shift 8s ease-in-out infinite',
              transform: `scale(${getProximityScale()})`,
              transformOrigin: 'center'
            }}
            onClick={() => scrollToSection('hero')}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setMousePos({ x: 0, y: 0 });
            }}
          >
            Hasan Abdulloh
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-electric-400'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-foreground hover:text-electric-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
