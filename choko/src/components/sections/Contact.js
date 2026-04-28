import { profile } from "@/src/content/portfolioData";

const Contact = () => {
  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Get in touch
            </span>
          </span>
        </h3>
      </div>
      <div className="boxes">
        <div>
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa-brands fa-github" />
            <p>
              <span className="small-text">github</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/{profile.githubHandle}
              </a>
            </p>
          </div>
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">location</span>
              {profile.location}
            </p>
          </div>
        </div>
        <div>
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa-solid fa-envelope" />
            <p>
              <span className="small-text">email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </div>
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">connect</span>
            <ul className="social">
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github" />
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
              <li>
                <a href={profile.resumePath} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-file-arrow-down" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img alt="" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};
export default Contact;
