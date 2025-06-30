
import { useProjectsAnimation } from './projects/useProjectsAnimation';
import { personalProjects, academicProjects } from './projects/projectsData';
import ProjectSection from './projects/ProjectSection';

const Projects = () => {
  const {
    titleRef,
    sectionRef,
    titleScale,
    showSectionTitles,
    showPersonalProjects,
    showAcademicProjects,
    isScrollingUp
  } = useProjectsAnimation();

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
          
          <ProjectSection
            title="Personal Projects"
            projects={personalProjects}
            isPersonal={true}
            showSectionTitles={showSectionTitles}
            showProjects={showPersonalProjects}
            isScrollingUp={isScrollingUp}
          />
          
          <ProjectSection
            title="Academic Projects"
            projects={academicProjects}
            isPersonal={false}
            showSectionTitles={showSectionTitles}
            showProjects={showAcademicProjects}
            isScrollingUp={isScrollingUp}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
