import React from "react";
import ProjectCard from '../components/projectCard';
import projects from '../Assets/projects.json';

function Project() {
  return(
    <div>
      {projects.map(project => (
        <ProjectCard id={project.id} title={project.name} description={project.description} technologies={project.technologies}/>
      ))}
    </div>

  )
}

export default Project;