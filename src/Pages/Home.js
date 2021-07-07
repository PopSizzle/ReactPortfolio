import React from "react";
import profilePic from '../Assets/images/profilepic.jpg';

function Home() {
  return (
    <div>
      <div className="container">
        <div className="jumbotron">

        <img src={profilePic} alt="Sam Poppe"/>

          <h1 className="display-4">Welcome!</h1>
          <p>Hello and welcome to my site! My name is Sam and I am a full stack developer looking for a team where I can make an impact while continuing to learn and grow as a software engineer. As a graduate and teaching assistant of the UC-Berkeley Extension coding program, I am skilled in the use of Javascript, HTML, and CSS. I have experience creating projects which use React, Node, Express, Mongoose, MongoDB, and other technologies. </p>
          <hr className="my-4"></hr>
            <p>Have a look around and please feel free to contact me with any questions or comments!</p>
        </div>
        </div>

        
      </div>

  )
}

export default Home;