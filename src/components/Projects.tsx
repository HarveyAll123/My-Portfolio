
import { useProjectsAnimation } from './projects/useProjectsAnimation';
import { personalProjects, academicProjects, nonTechProjects } from './projects/projectsData';
import ProjectCard from './projects/ProjectCard';

const Projects = () => {
  const {
    titleRef,
    sectionRef,
    titleScale,
    showPersonalProjects,
    isScrollingUp
  } = useProjectsAnimation();

  // Merge all projects into one array
  const allProjects = [...personalProjects, ...academicProjects, ...nonTechProjects];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-b from-card/20 to-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 
            ref={titleRef}
            className="text-5xl font-bold text-center mb-4 transition-transform duration-300 ease-out"
            style={{ transform: `scale(${titleScale})` }}
          >
            My <span className="gradient-text">Projects</span>
          </h2>
          
          <div 
            className="w-24 h-1 bg-electric-500 mx-auto mb-16 transition-transform duration-300 ease-out" 
            style={{ transform: `scale(${titleScale})` }}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => {
              const animationIndex = isScrollingUp ? allProjects.length - 1 - index : index;
              
              return (
                <ProjectCard 
                  key={index} 
                  project={project} 
                  index={animationIndex}
                  isVisible={showPersonalProjects}
                  isScrollingUp={isScrollingUp}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
