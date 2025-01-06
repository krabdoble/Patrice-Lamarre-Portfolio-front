import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../providers/AuthProvider";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(); // Cierra sesión
    navigate("/"); // Redirige a la ventana principal
  };
   return (
    <div className="bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/work">
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              
              
            </ul>
            <div className="d-flex align-items-center">
            <h4 className="text-light"><span style={{ color: "orangered", fontSize: "1.5rem", fontStyle:"italic"}}>Welcome,</span> {user?.displayName.split(" ")[0]}</h4>
            <button
                className="btn btn-outline-light ms-3"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
        
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;