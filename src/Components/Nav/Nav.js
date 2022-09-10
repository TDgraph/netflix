import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-4 px-md- mb-3 bg-dark border-bottom shadow-bd">
      <h2 className="my-0 mr-md-auto text-light font-weight-heavy">
        NETFLIX ORIGINALS
      </h2>
      <nav className="my-2 my-md-0 mr-md-3">
        <NavLink to="/" className="p-3 text-light">
          Home
        </NavLink>

        <NavLink to="/collection" className="p-3 text-light">
          Collections
        </NavLink>
      </nav>
      <Link to="" className="btn btn-outline-primary" href="#">
        Register
      </Link>
      

    </div>
  );
}
