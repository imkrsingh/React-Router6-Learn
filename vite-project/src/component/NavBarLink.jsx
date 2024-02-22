import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="navbar">
                <li>
                    <NavLink className="nav-bar-link" to="/about">About Page</NavLink>
                </li>
                <li>
                    <NavLink className="nav-bar-link" to="/">Home Page</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
