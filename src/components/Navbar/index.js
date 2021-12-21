import React from 'react';
import "./nav.css";
import {Link, useLocation} from 'react-router-dom';

function Navbar() {
  
  const location = useLocation();

  return(
    <div>
      <ul className="nav nav-tabs justify-content-end">
        
        <li className="nav-item">
          <Link to="/home" className={location.pathname === "/home" ? "nav-link-active" : "nav-link"}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/projects" className={location.pathname === "/projects" ? "nav-link-active" : "nav-link"}>
            Projects
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contact" className={location.pathname === "/contact" ? "nav-link-active" : "nav-link"}>
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/resume" className={location.pathname === "/resume" ? "nav-link-active" : "nav-link"}>
            Resume
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default Navbar;