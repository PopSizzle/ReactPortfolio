import React from "react";
import ProjectCard from '../components/projectCard';
import projects from '../Assets/projects.json';

function Project() {
  return(
    <div>
      {projects.map(project => {
        <ProjectCard/>
      })}
    </div>

  )
}

export default Project;