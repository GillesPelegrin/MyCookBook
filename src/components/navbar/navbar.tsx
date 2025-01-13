import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="Logo">Logo</div>
            <div className="login-icon">
                {/* <div className="login">Login</div> */}
                <div> <FaUserCircle color="white" size="1.5em" /></div>
            </div>
        </div>
    );
};
