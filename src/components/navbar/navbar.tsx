import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router";
import "./navbar.css";


export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink className="link" to="/" end>
                {/* <img src = "./src/assets/logo_2.svg" className="logo"/> */}
                <div className="link">Home</div>
            </NavLink>

            <NavLink to="/create" end>
                <div className="icon"><div> <FaPlus size="21px" /></div></div>
            </NavLink>
            <NavLink className="link" to="/login" end>
                <div >Profile</div>
            </NavLink>
        </div>
    );
};
