import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import Logo from "../img/Logo5.png";
import './styles/NavbarNew.css';

const NavbarNew = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  
  const RenderMenu = () => {
    if (user == null) {
      return (
        <div className="Navbar-Section-section">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/events">
                About
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                LogIn
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="Navbar-Section-section">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {(user.type === 'client') ?
              <li className="nav-item">
                <NavLink className="nav-link" to="/events">
                  Add Event
                </NavLink>
              </li>
              : null
            }
            <li className="nav-item">
              <NavLink className="nav-link" to="/browse">
                BrowseContest
              </NavLink>
            </li>
            {(user.type === 'client' )? 
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                CreateContest
              </NavLink>
            </li> : null
            }
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutme">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </li>   
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="Navbar-Section-section">
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="#">
          <img src={Logo} alt="" className="my-logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <RenderMenu />
          </ul>
        </div>
      </nav>
      <div className="black-line"></div>
    </div>
  );
};
export default NavbarNew;
