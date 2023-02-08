const Home= () => {
  return(
    <>
        <header className="hide-when-mobile">
          <h1>c4a.dev #@$$@#%</h1>
          <ul className="flex">
            <li className="main-list">
              <p className="main-link">HTML</p>
              <ul className="sub-ul">
                <li>
                  <p>Full Course</p>
                </li>
                <li>
                  <p>Crash Course</p>
                </li>
                <li>
                  <p>learn in 1h</p>
                </li>
              </ul>
            </li>
            <li className="main-list">
              <p className="main-link">CSS</p>
              <ul className="sub-ul">
                <li>
                  <p>Full Course</p>
                </li>
                <li>
                  <p>CSS Examples</p>
                </li>
                <li className="mini-projects">
                  <p>mini projects&nbsp; + </p>
                  <ul className="sub-sub-ul">
                    <li>
                      <p>project 1</p>
                    </li>
                    <li>
                      <p>project 2</p>
                    </li>
                    <li>
                      <p>project 3</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="main-list">
              <p className="main-link">JavaScript</p>
              <ul className="sub-ul sub-of-js">
                <li>
                  <p>coming soon🔥</p>
                </li>
              </ul>
            </li>
          </ul>
        </header>
        <header className="show-when-mobile">
          <h1>c4a.dev #@$$@#%</h1>
          <label className="absolute" htmlFor="burger">
            <i className="fas fa-bars" />
          </label>
          <input id="burger" type="checkbox" />
          <div className="show-on-click">
            <div className="main-div">
              <label htmlFor="html">
                HTML <i className="fas fa-plus" />
              </label>
              <input id="html" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <p>Full Course</p>
                </li>
                <li>
                  <p>Crash Course</p>
                </li>
                <li>
                  <p>learn in 1h</p>
                </li>
              </ul>
            </div>
            <div className="main-div">
              <label htmlFor="css">
                CSS <i className="fas fa-plus" />
              </label>
              <input id="css" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <p>Full Course</p>
                </li>
                <li>
                  <p>CSS Examples</p>
                </li>
                <li>
                  <label className="mini-projects" htmlFor="mini">
                    mini projects <i className="fas fa-plus" />
                  </label>
                  <input id="mini" type="checkbox" />
                  <ul className="sub-sub-div">
                    <li>
                      <p>project 1</p>
                    </li>
                    <li>
                      <p>project 2</p>
                    </li>
                    <li>
                      <p>project 3</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="main-div">
              <label htmlFor="js">
                JavaScript <i className="fas fa-plus" />
              </label>
              <input id="js" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <p>coming soon🔥</p>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <main dir="rtl">
          صباح الفل!!
        </main>
        <footer>
          Deeesigned and developed by Courses4Arab.com
          <span>🧡</span>
        </footer>
    </>
  );
}

export default Home;