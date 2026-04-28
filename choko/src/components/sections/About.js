import { experience, infoPoints, profile, skills } from "@/src/content/portfolioData";

const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      <div className="info flex-column-mobile">
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/about.jpg" alt="Cheker Hassan portrait" />
            </div>
          </div>
        </div>
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                {profile.firstName}
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                {profile.lastName}
              </span>
            </span>
          </h2>
          <p className="animated-layer fade-in-up-animation fadeInUp wow">
            I do not position myself as someone who only sits alone writing code. My strongest
            work is taking ideas, structuring them into delivery systems, breaking them into
            boards and execution phases, supervising contributors, and making sure the product
            becomes coherent, technical, and launchable.
          </p>
          <div className="infos">
            <ul>
              {infoPoints.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <span>
                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      <span>{item.label} :</span>
                      <span>{item.value}</span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <ul>
              {infoPoints.slice(4).map((item) => (
                <li key={item.label}>
                  <span>
                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      <span>{item.label} :</span>
                      <span>{item.value}</span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="skills flex-column-mobile">
        <div className="custom-title">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                Core Skills
              </span>
            </span>
          </h3>
        </div>
        <div className="skills-content">
          {skills.map(([primary, secondary]) => (
            <div key={primary}>
              <div className="animated-layer fade-in-down-animation fadeInLeft wow">
                <span>
                  <i className="devicon-code-plain" />
                </span>
                <h4>{primary}</h4>
              </div>
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span>
                  <i className="devicon-code-plain" />
                </span>
                <h4>{secondary}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="resume flex-column-mobile">
        <div className="custom-title fadeInUp wow">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">Timeline</span>
            </span>
          </h3>
        </div>
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {experience.map((item, index) => (
              <li key={item.title}>
                <div
                  className={`animated-layer ${
                    index % 2 === 0 ? "fade-in-down-animation" : "fade-in-up-animation"
                  } fadeInUp wow`}
                >
                  <div className="experience">
                    <h4>{item.title}</h4>
                    <p>
                      <i className="fa-regular fa-clock" />
                      <span>{item.time}</span>
                    </p>
                    <p>
                      <i className="fa-regular fa-building" />
                      <span>{item.org}</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
