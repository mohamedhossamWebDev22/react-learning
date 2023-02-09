const Header = () => {
  return (
    <>
    <header className="hide-when-mobile">
          <h1>My Website</h1>
          <ul className="flex">
            <li className="main-list">
              <a className="main-link" href="/html">HTML</a>              
            </li>
            <li className="main-list">
              <a className="main-link" href="/css">CSS</a>              
            </li>
            <li className="main-list">
              <a className="main-link" href="/js">JavaScript</a>              
            </li>
          </ul>
        </header>
        
    </>
  );
}

export default Header