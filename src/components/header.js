import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <>
    <header className="hide-when-mobile m7md">
          <h1>
            <Link to="/">My Website</Link>
          </h1>
          <ul className="flex m7md">
            <li className="main-list">
              <NavLink className="main-link" to="/html">HTML</NavLink>
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="/css">CSS</NavLink>
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="/js">JavaScript</NavLink>              
            </li>
            <li className="main-list">
              <NavLink className="main-link" to="/hi">حلو الموقع؟؟</NavLink>
            </li>
          </ul>
        </header>
        
    </>
  );
}

export default Header