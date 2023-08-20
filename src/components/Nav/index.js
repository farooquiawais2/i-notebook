import { useEffect } from 'react';
import {
  Link, useLocation
} from "react-router-dom";
function Nav() {
  const location = useLocation();
  useEffect(() => {
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">iNoteBook</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/nothing-here' ? 'active' : ''}`} to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
