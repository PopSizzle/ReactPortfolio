import React from 'react';
import './style.css';

function ProjectCard(props){

  let technologies = props.technologies

  return(
    <div className="card" style={{width: '30rem'}} id={props.id}>
     <img className="card-img-top" src={props.image} alt="project example"></img>
      <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      {technologies.map((tech,index) => (
        <a key={index} className="btn btn-primary">{tech}</a>
      ))}
    </div>
  </div>
  );
}

export default ProjectCard;