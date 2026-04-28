const Header = () => {
  return (
    <header className="site-header">
      {/* Desktop Menu */}
      <div className="header-inner hide-mobile">
        <div className="header-logo">
          <a href="#home">CH</a>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#ecosystem">Ecosystem</a>
            </li>
            <li>
              <a href="#featured">Work</a>
            </li>
            <li>
              <a href="#capabilities">Capabilities</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header-cta">
          <a href="https://github.com/chekerh" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className="mobile-menu">
        <div className="mobile-header">
          <a href="#home" className="mobile-logo">CH</a>
          <div id="menuToggle">
            <input type="checkbox" id="checkboxmenu" />
            <span />
            <span />
            <span />
            <ul className="mobile-nav-list" id="menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#ecosystem">Ecosystem</a>
              </li>
              <li>
                <a href="#featured">Work</a>
              </li>
              <li>
                <a href="#capabilities">Capabilities</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="https://github.com/chekerh" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
