import React from "react";
import ProjectCard from '../components/projectCard';
import YumYum from '../Assets/images/YumYum.gif';
import batman from '../Assets/images/batman.gif';
import teamProfile from '../Assets/images/teamProfile.png';

let projects = [
  {
    "id":1,
    "name": "Yum&Yum",
    "image": YumYum,
    "description":"Yum&Yum is a MERN (MySQL-Express-React-Node) application designed and built by a three person team. This recipe database allows users to submit recipes and search by ingredient for new recipes. User authentication tracks their recipes and favorites using global state and hooks in React.",
    "technologies": ["Bootstrap", "CSS", "Express", "Git", "Heroku", "HTML", "GitHub", "JavaScript", "jQuery", "MySQL", "node.js", "axios", "React", "bcrypt.js", "firebase"]
  },
  {
    "id":2,
    "name": "Bay Area Trails Mapping and Networking",
    "image": batman,
    "description":"Bay Area Trails Mapping and Networking (BATMaN) is a community hub and a toolset for outdoor enthusiasts. It utilizes passport.js to authenticate users and allow them to access the application. Users reviews and comments are stored in tables in a MySQL database.",
    "technologies": ["Bootstrap", "CSS", "Express", "Git", "Heroku", "HTML", "GitHub", "JavaScript", "jQuery", "MySQL", "node.js", "Passport", "Unirest"]
  },
  {
    "id":3,
    "name": "Tream Profile Generator",
    "image": teamProfile,
    "description":"This command line app will prompt users for input data about their software engineering team. From that data the app will generate a clean and nicely styled team profile as an html page that the user can access and use.",
    "technologies": ["Git", "Heroku", "HTML", "GitHub", "JavaScript", "jQuery", "node.js"]
  }
];

function Project() {
  return(
    <div>
      {projects.map(project => (
        <ProjectCard key={project.id} id={project.id} title={project.name} image={project.image} description={project.description} technologies={project.technologies}/>
      ))}
    </div>

  )
}

export default Project;