
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import NonTechExpertise from './NonTechExpertise';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      title: "B.Sc. in Computer Science (Information Technology)",
      institution: "President University", 
      location: "Jababeka, Cikarang",
      date: "2023 - Present",
      description: "Currently pursuing a Bachelor's degree with focus on Programming Concepts, Web Development, Database Management, and Artificial Intelligence.",
      icon: <FaGraduationCap />
    },
    {
      title: "Senior High School - Social Studies & Science",
      institution: "SMAN 12 Bekasi",
      location: "Bekasi, Indonesia",
      date: "2020 - 2023", 
      description: "Best Student Academic Achievement. Top student in Social Studies (IPS) while consistently excelling in the Science track (IPA).",
      icon: <FaGraduationCap />
    }
  ];

  const experiences = [
    {
      title: "IT Student",
      company: "President University",
      location: "Cikarang, Indonesia",
      date: "2023 - Present",
      description: "Developing AI-powered solutions including computer vision, NLP, and multi-LLM integration projects. Leading various academic and personal tech initiatives.",
      icon: <FaBriefcase />
    },
    {
      title: "Technology & Communication Division Head",
      company: "High School Student Council (OSIS)",
      location: "Bekasi, Indonesia",
      date: "2021 - 2023",
      description: "Led digital-learning roll-outs and technology initiatives. Managed communication strategies and civic engagement programs.",
      icon: <FaBriefcase />
    }
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const currentScrollY = window.scrollY;
          const isScrollingDown = currentScrollY > lastScrollY;
          
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            // Animate based on scroll direction
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          } else {
            // Reset animation based on scroll direction
            element.style.opacity = '0';
            if (isScrollingDown) {
              // Coming from top, animate from bottom
              element.style.transform = 'translateY(30px)';
            } else {
              // Coming from bottom, animate from top
              element.style.transform = 'translateY(-30px)';
            }
          }
          
          lastScrollY = currentScrollY;
        });
      },
      {
        threshold: [0, 0.1, 0.3],
        rootMargin: '-80px 0px -20px 0px' // Account for navbar height
      }
    );

    const timer = setTimeout(() => {
      const elements = sectionRef.current?.querySelectorAll('[data-animate]');
      elements?.forEach(element => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        htmlElement.style.opacity = '0';
        htmlElement.style.transform = 'translateY(30px)';
        observer.observe(htmlElement);
      });

      const timelineElements = document.querySelectorAll('[data-timeline-element]');
      timelineElements.forEach(element => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        htmlElement.style.opacity = '0';
        htmlElement.style.transform = 'translateY(30px)';
        observer.observe(htmlElement);
      });

      // Add custom CSS to move date labels more to the right
      const style = document.createElement('style');
      style.textContent = `
        .vertical-timeline-element-date {
          margin-right: -60px !important;
        }
        @media (max-width: 1170px) {
          .vertical-timeline-element-date {
            margin-right: 0 !important;
          }
        }
      `;
      document.head.appendChild(style);
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div data-animate>
            <h2 className="text-7xl font-bold text-center mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="w-24 h-1 bg-electric-500 mx-auto mb-16" />
          </div>
          
          <p className="text-xl text-white leading-relaxed mb-8 text-center" data-animate>
            I am an Information Technology student at President University, passionate about AI, software engineering, and human-centered design.
            I have experience in developing AI-powered solutions, mobile applications, and web development.
            I am eager to contribute my skills and knowledge to innovative projects that make a positive impact.
          </p>
          
          {/* Education */}
          <div data-animate>
            <h3 className="text-5xl font-semibold mb-8 text-electric-400 text-center">
              Education
            </h3>
          </div>
          
          <div>
            <VerticalTimeline>
              {education.map((item, index) => (
                <div
                  key={index}
                  data-timeline-element
                >
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date={item.date}
                    dateClassName="text-2xl font-bold text-white"
                    iconStyle={{ background: 'rgb(59, 130, 246)', color: '#fff' }}
                    icon={item.icon}
                    contentStyle={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      color: '#fff',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
                  >
                    <h3 className="vertical-timeline-element-title text-white font-semibold text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 break-words">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle text-electric-400 font-medium text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-5 break-words">{item.institution}, {item.location}</h4>
                    <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed break-words">
                      {item.description}
                    </p>
                  </VerticalTimelineElement>
                </div>
              ))}
            </VerticalTimeline>
          </div>
          
          {/* Experience */}
          <div data-animate>
            <h3 className="text-5xl font-semibold mb-8 text-electric-400 text-center mt-16">
              Experience
            </h3>
          </div>
          
          <VerticalTimeline>
            {experiences.map((item, index) => (
              <div
                key={index}
                data-timeline-element
              >
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={item.date}
                    dateClassName="text-2xl font-bold text-white"
                    iconStyle={{ background: 'rgb(59, 130, 246)', color: '#fff' }}
                    icon={item.icon}
                    contentStyle={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      color: '#fff',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
                  >
                    <h3 className="vertical-timeline-element-title text-white font-semibold text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 break-words">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle text-electric-400 font-medium text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-5 break-words">{item.company}, {item.location}</h4>
                    <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed break-words">
                      {item.description}
                    </p>
                  </VerticalTimelineElement>
              </div>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      
      {/* Add Non-Tech Expertise section */}
      <NonTechExpertise />
    </section>
  );
};

export default About;
