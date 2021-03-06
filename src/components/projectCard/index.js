import React from 'react';
import './style.css';

function ProjectCard(props){

  let technologies = props.technologies

  return(
    <div className="card" style={{width: '30rem'}, {float: 'left'}} id={props.id}>
     <img className="card-img-top" style={{float:'left'}} src={props.image} alt="project example"></img>
      <div className="card-body">
      <h4 className="card-title">{props.title}</h4>
      <a href={props.link}>GitHub Repository</a>
      <p className="card-text">{props.description}</p>
      {technologies.map((tech,index) => (
        <a key={index} className="btn btn-primary">{tech}</a>
      ))}
    </div>
  </div>
  );
}

export default ProjectCard;