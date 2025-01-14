import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";
import { NavLink } from "react-router";


export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/" end>
                <div className="Logo">Logo</div>
            </NavLink>
            <NavLink to="/login" end>
            <div className="login-icon">
                {/* <div className="login">Login</div> */}
                <div> <FaUserCircle color="white" size="1.5em" /></div>
            </div>
            </NavLink>
        </div>
    );
};
