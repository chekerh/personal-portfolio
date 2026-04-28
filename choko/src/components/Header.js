import { profile } from "@/src/content/portfolioData";

const Header = () => {
  return (
    <header>
      <div className="header-inner hide-mobile">
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className="active" id="home-link" role="button" tabIndex={0}>
                  Home
                </span>
              </li>
              <li>
                <span id="about-link" role="button" tabIndex={0}>
                  About
                </span>
              </li>
              <li>
                <span id="portfolio-link" role="button" tabIndex={0}>
                  Work
                </span>
              </li>
              <li>
                <span id="contact-link" role="button" tabIndex={0}>
                  Connect
                </span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mail">
          <p>
            Resume :
            <span>
              {" "}
              <a href={profile.resumePath} target="_blank" rel="noreferrer">
                CV-3.pdf
              </a>
            </span>
          </p>
        </div>
      </div>
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>Work</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Connect</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
