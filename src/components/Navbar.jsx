import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { isAuthenticated } from "../utils/auth.utils";

function Navbar() {
  const isAuth = isAuthenticated();

  return (
    <nav>
      <div className="nav-brand">
        <img src={logo} alt="Company Logo" />
        <Link to="/">
          Dare Rentals
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isAuth && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          {isAuth && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/add-car">Add Car</Link>
              </li>
              <li>
                <Link to="/cars">Available Cars</Link>
              </li>
              <li>
                <Link to="/rent-car">Rent Car</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
