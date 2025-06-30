
import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "PHP", level: 80 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "Dart", level: 70 },
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "YOLOv11/YOLOv5", level: 90 },
        { name: "RoBERTa/NLP", level: 85 },
        { name: "OpenCV", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "GPT Integration", level: 85 },
      ]
    },
    {
      title: "Web & Mobile Development",
      skills: [
        { name: "Flutter", level: 85 },
        { name: "LAMP Stack", level: 80 },
        { name: "React", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "RESTful APIs", level: 80 },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Google Cloud", level: 70 },
      ]
    }
  ];

  const tools = [
    "Git", "Docker", "Firebase", "Google Cloud", "Roboflow", 
    "OpenCV", "VS Code", "NetBeans", "Android Emulator", "PyQt"
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
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div data-animate>
            <h2 className="text-5xl font-bold text-center mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            
            <div className="w-24 h-1 bg-electric-500 mx-auto mb-16" />
          </div>
          
          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl" data-animate style={{ animationDelay: `${index * 0.2}s` }}>
                <h3 className="text-2xl font-semibold mb-6 text-electric-400">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-electric-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="h-2 bg-gradient-to-r from-electric-500 to-electric-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Tools & Technologies */}
          <div className="text-center" data-animate>
            <h3 className="text-3xl font-semibold mb-8 text-electric-400">
              Tools & Technologies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="px-6 py-3 glass-effect rounded-full hover:bg-electric-500/20 transition-all duration-300 hover:scale-105 hover:border-electric-500/50"
                  data-animate
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-muted-foreground font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="mt-16 text-center" data-animate>
            <h3 className="text-3xl font-semibold mb-8 text-electric-400">
              Soft Skills
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {["Communication", "Leadership", "Critical Thinking", "Creativity"].map((skill, index) => (
                <div key={index} className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300" data-animate style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="w-12 h-12 bg-electric-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-electric-500 rounded-full" />
                  </div>
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
