import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
    <div>
<>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <a className="navbar-brand mt-2 mt-lg-1 ms-5  " href="#">
          <img
            src="http://clipartmag.com/image/free-drawing-tool-29.jpg"
            height={30}
            alt="MDB Logo"
            loading="lazy"
            style={{borderRadius:"50%"}}
          />
        </a>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
            <NavLink className="nav-link " to="/">
             Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
             Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        
        </ul>
        {/* Left links */}
      </div>
     
     
    </div>
   
  </nav>
  {/* Navbar */}
</>

    </div>
    )
}


export default Navbar