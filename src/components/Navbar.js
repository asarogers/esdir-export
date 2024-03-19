import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="body" className="navbar">
      <Link to="/" className="nav-items">
        HOME
      </Link>

      <Link to="/About" className="nav-items">
        About
      </Link>

      <Link to="/CartPage" className="nav-items">
        Cart Page
      </Link>

      <Link to="/AdminPage" className="nav-items">
        Admin
      </Link>

      <Link to="/Registration" className="nav-items">
        Registration
      </Link>

      <Link to="/Login" className="nav-items">
        Login
      </Link>
    </div>
  );
}
