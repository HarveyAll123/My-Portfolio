
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
      title: "AI Developer & IT Student",
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const timer = setTimeout(() => {
      const animatedElements = sectionRef.current?.querySelectorAll('[data-animate]');
      animatedElements?.forEach(element => {
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
            <h2 className="text-5xl font-bold text-center mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="w-24 h-1 bg-electric-500 mx-auto mb-16" />
          </div>
          
          <p className="text-lg text-foreground leading-relaxed mb-8 text-center" data-animate>
            I am an Information Technology student at President University, passionate about AI, software engineering, and human-centered design.
            I have experience in developing AI-powered solutions, mobile applications, and web development.
            I am eager to contribute my skills and knowledge to innovative projects that make a positive impact.
          </p>
          
          {/* Education */}
          <div data-animate>
            <h3 className="text-3xl font-semibold mb-8 text-electric-400 text-center">
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
                    iconStyle={{ background: 'rgb(59, 130, 246)', color: '#fff' }}
                    icon={item.icon}
                    contentStyle={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      color: '#fff'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
                  >
                    <h3 className="vertical-timeline-element-title text-foreground font-semibold text-lg">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle text-electric-400 font-medium">{item.institution}, {item.location}</h4>
                    <p className="text-muted-foreground mt-2">
                      {item.description}
                    </p>
                  </VerticalTimelineElement>
                </div>
              ))}
            </VerticalTimeline>
          </div>
          
          {/* Experience */}
          <div data-animate>
            <h3 className="text-3xl font-semibold mb-8 text-electric-400 text-center mt-16">
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
                  iconStyle={{ background: 'rgb(59, 130, 246)', color: '#fff' }}
                  icon={item.icon}
                  contentStyle={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    color: '#fff'
                  }}
                  contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
                >
                  <h3 className="vertical-timeline-element-title text-foreground font-semibold text-lg">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle text-electric-400 font-medium">{item.company}, {item.location}</h4>
                  <p className="text-muted-foreground mt-2">
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
