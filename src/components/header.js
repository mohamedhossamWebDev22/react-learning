import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <header className="hide-when-mobile">
          <h1>
            <Link to="/">My Website</Link>
          </h1>
          <ul className="flex">
            <li className="main-list">
              <NavLink className="main-link" to="/html">HTML</NavLink>
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="/css">CSS</NavLink>
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="/js">JavaScript</NavLink>              
            </li>
          </ul>
        </header>
        
    </>
  );
}

export default Header