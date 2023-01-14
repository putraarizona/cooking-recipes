import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/" className="brand">
          <h1>Cooking Recipe</h1>
        </NavLink>
        <Searchbar />
        <NavLink to="/create">Create Recipe</NavLink>
      </nav>
    </div>
  );
}
export default Navbar;
