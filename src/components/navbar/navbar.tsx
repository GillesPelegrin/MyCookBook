import { FaHome, FaPlus, FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router";
import "./navbar.css";


export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/" end>
                {/* <img src = "./src/assets/logo_2.svg" className="logo"/> */}
                <div className="icon" > <FaHome size="1.7rem" /> </div>
            </NavLink>

            <NavLink to="/create" end>
                <div className="icon"><div> <FaPlus size="1.7rem" /></div></div>
            </NavLink>
            <NavLink to="/login" end>
                <div className="icon">
                    {/* <div className="login">Login</div> */}
                    <div> <FaUserCircle size="1.7rem" /></div>
                </div>
            </NavLink>
        </div>
    );
};
