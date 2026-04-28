import { profile, strengths } from "@/src/content/portfolioData";

const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <span className="home-kicker animated-layer">{profile.name}</span>
          <h1>
            <span>
              <span className="animated-layer">Builder</span>
            </span>
            <span>
              <span className="animated-layer">for serious product systems</span>
            </span>
          </h1>
          <div className="home-meta animated-layer fade-in-up-animation fadeInUp wow">
            <span className="intro">{profile.heroRole}</span>
            <span className="home-target">{profile.target}</span>
          </div>
          <p className="animated-layer fade-in-up-animation fadeInUp wow">
            {profile.headline}
          </p>
          <ul className="animated-layer fade-in-up-animation fadeInUp wow">
            {strengths.slice(0, 3).map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <a className="custom-btn" href={profile.resumePath} target="_blank" rel="noreferrer">
              <span>view resume</span>
            </a>
            <a className="custom-btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>linkedin</span>
            </a>
          </div>
        </div>
      </div>
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
    </section>
  );
};
export default Home;
