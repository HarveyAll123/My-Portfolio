
import ProjectCard from './ProjectCard';
import { Project } from './projectsData';

interface ProjectSectionProps {
  title: string;
  projects: Project[];
  isPersonal?: boolean;
  showSectionTitles: boolean;
  showProjects: boolean;
  isScrollingUp?: boolean;
}

const ProjectSection = ({ 
  title, 
  projects, 
  isPersonal = false, 
  showSectionTitles, 
  showProjects,
  isScrollingUp = false
}: ProjectSectionProps) => (
  <div className="mb-16">
    <h3 className={`text-3xl font-semibold mb-8 text-electric-400 transition-all duration-1000 ${
      showSectionTitles 
        ? 'translate-y-0 opacity-100 scale-100' 
        : 'translate-y-16 opacity-0 scale-90'
    }`}>
      {title}
    </h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => {
        // Reverse the animation order when scrolling up
        const animationIndex = isScrollingUp ? projects.length - 1 - index : index;
        
        return (
          <ProjectCard 
            key={index} 
            project={project} 
            isPersonal={isPersonal} 
            index={animationIndex}
            isVisible={showProjects}
            isScrollingUp={isScrollingUp}
          />
        );
      })}
    </div>
  </div>
);

export default ProjectSection;
