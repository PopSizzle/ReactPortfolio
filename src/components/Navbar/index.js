import React from 'react';
import "./nav.css";
import {Link, useLocation} from 'react-router-dom';

function Navbar() {
  
  const location = useLocation();

  return(
    <div>
      <ul className="nav nav-tabs justify-content-end">
        
        <li className="nav-item">
          <Link to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/projects">
            Projects
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contact">
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/resume">
            Resume
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default Navbar;