import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/about">About Page</Link>
        </li>
        <li>
          <Link to="/">Home Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
