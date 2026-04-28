import { profile } from "@/src/content/portfolioData";

const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Cheker Hassan</span>
        <span>Built and curated for software engineering applications.</span>
        <ul>
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
    </section>
  );
};
export default Copyright;
