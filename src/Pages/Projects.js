import React from "react";
import ProjectCard from '../components/projectCard';
import YumYum from '../Assets/images/YumYum.gif';
import batman from '../Assets/images/batman.gif';
import teamProfile from '../Assets/images/teamProfile.png';
import googleBooks from '../Assets/images/googleBooks.gif';
import memoryGame from '../Assets/images/memoryGame.png';
import employeeTracker from '../Assets/images/employeeTracker.png';

let projects = [
  {
    "id":1,
    "name": "Yum&Yum",
    "image": YumYum,
    "link": "https://github.com/PopSizzle/Yum-Yum",
    "description":"Yum&Yum is a MERN (MySQL-Express-React-Node) application designed and built by a three person team. This recipe database allows users to submit recipes and search by ingredient for new recipes. User authentication tracks their recipes and favorites using global state and hooks in React.",
    "technologies": ["Bootstrap", "CSS", "Express", "Git", "Heroku", "HTML", "GitHub", "JavaScript", "jQuery", "MySQL", "node.js", "axios", "React", "bcrypt.js", "firebase"]
  },
  {
    "id":2,
    "name": "Bay Area Trails Mapping and Networking",
    "image": batman,
    "link": "https://github.com/davisbradleyj/ucb-batman",
    "description":"Bay Area Trails Mapping and Networking (BATMaN) is a community hub and a toolset for outdoor enthusiasts. It utilizes passport.js to authenticate users and allow them to access the application. Users reviews and comments are stored in tables in a MySQL database.",
    "technologies": ["Bootstrap", "CSS", "Express", "Git", "Heroku", "HTML", "GitHub", "JavaScript", "jQuery", "MySQL", "Node", "Passport", "Unirest"]
  },
  {
    "id":3,
    "name": "Team Profile Generator",
    "image": teamProfile,
    "link": "https://github.com/PopSizzle/TeamProfileGenerator",
    "description":"This command line app will prompt users for input data about their software engineering team. From that data the app will generate a clean and nicely styled team profile as an html page that the user can access and use.",
    "technologies": ["Git", "Heroku", "HTML", "GitHub", "JavaScript", "jQuery", "Node"]
  },
  {
    "id":4,
    "name": "Google Books Project",
    "image": googleBooks,
    "link": "https://github.com/PopSizzle/GoogleBooks",
    "description": "Google Books allows a user to search books from the Google API and view more details about the books that match their search criteria. Users can save them to their favorites list or delete them from their favorites with a simple user-friendly interface.",
    "technologies": ["Git", "Heroku", "GitHub", "Bootstrap", "CSS", "HTML", "MongoDB", "Node", "Express", "React"]
  },
  {
    "id":5,
    "name": "Memory Game",
    "image": memoryGame,
    "link": "https://github.com/PopSizzle/Memory-Game",
    "description": "This simple react app demonstrates the use of UseState and UseEffect in React components It reloads the component each time a user clicks the screen with a modified state that is stored locally.",
    "technologies": ["Git", "GitHub", "Bootstrap", "CSS", "HTML", "React"]
  },
  {
    "id":6,
    "name": "Employee Tracker",
    "image": employeeTracker,
    "link": "https://github.com/PopSizzle/Employee-Tracker",
    "description": "This command line app utiilizes node to track employees. Following the prompts a user can enter information and create tables for their own records. They can also edit and delete previous records their a simple user-friendly interface.",
    "technologies": ["Git", "GitHub", "SQL", "Node"]
  }
];

function Project() {
  return(
    <div className="conatiner">
      {projects.map(project => (
        <ProjectCard className="col-sm" key={project.id} id={project.id} title={project.name} link={project.link} image={project.image} description={project.description} technologies={project.technologies}/>
      ))}
    </div>

  )
}

export default Project;