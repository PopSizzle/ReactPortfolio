import React from 'react';

function ProjectCard(props){

  return(
    <div className="card" style="width: 18rem;" id={props.id}>
     <img className="card-img-top" src="..." alt="Card image cap"></img>
      <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      {props.}
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  );
}

export default ProjectCard;