
import { Project } from './projectsData';

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  isScrollingUp?: boolean;
}

const ProjectCard = ({ project, index, isVisible, isScrollingUp = false }: ProjectCardProps) => (
  <div 
    className={`glass-effect p-6 rounded-xl transition-all duration-700 group transform ${
      isVisible 
        ? 'translate-y-0 opacity-100 scale-100 hover:bg-foreground/5 hover:scale-105' 
        : 'translate-y-20 opacity-0 scale-90'
    }`}
    style={{
      transitionDelay: isVisible 
        ? `${index * 100}ms` 
        : isScrollingUp 
          ? `${index * 60}ms`
          : `${(2 - index) * 60}ms`,
      transitionProperty: 'transform, opacity, background-color, box-shadow, scale',
      transitionTimingFunction: isVisible 
        ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' 
        : 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }}
  >
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-electric-500 rounded-full" />
        <span className="text-electric-500 dark:text-electric-400 text-xl font-medium">{project.category}</span>
      </div>
    </div>
    
    <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-electric-500 dark:group-hover:text-electric-400 transition-colors">
      {project.title}
    </h3>
    
    <p className="text-white mb-4 leading-relaxed text-xl">
      {project.description}
    </p>
    
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech: string, techIndex: number) => (
        <span 
          key={techIndex}
          className="px-3 py-1 bg-electric-500/20 text-electric-600 dark:text-electric-300 text-lg rounded-full border border-electric-500/30"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
