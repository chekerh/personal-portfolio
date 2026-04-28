import { profile, strengths } from "@/src/content/portfolioData";

const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <span className="home-kicker animated-layer">{profile.name}</span>
          <h1>
            <span className="position-relative">
              <span className="animated-layer">Builder</span>
              <span className="intro animated-layer">{profile.heroRole}</span>
            </span>
            <span>
              <span className="animated-layer">for serious product systems</span>
            </span>
          </h1>
          <p className="home-target animated-layer fade-in-up-animation fadeInUp wow">
            {profile.target}
          </p>
          <p className="animated-layer fade-in-up-animation fadeInUp wow">
            {profile.headline}
          </p>
          <ul className="animated-layer fade-in-up-animation fadeInUp wow">
            {strengths.map((strength) => (
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
