import {
  Link
} from "react-router-dom";
function Nav() {
  return (
    <>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
