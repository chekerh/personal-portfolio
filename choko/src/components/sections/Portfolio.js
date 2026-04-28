import { salimovSlider } from "@/src/sliderProps";
import { featuredProjects } from "@/src/content/portfolioData";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section className="portfolio main-section flex-column-mobile" id="portfolio">
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Selected Projects
            </span>
          </span>
        </h3>
      </div>
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {featuredProjects.map((project) => (
          <SwiperSlide key={project.title} className="single-item swiper-slide">
            <div className="main-content">
              <img className="img-fluid" src={project.image} alt={project.title} />
            </div>
            <div className="details">
              <h4>{project.title}</h4>
              <p>{project.summary}</p>
              <div>
                <ul>
                  <li>
                    <span>
                      <i className="fa-regular fa-file-lines" /> Type :
                    </span>
                    <span>{project.type}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-layer-group" /> Product :
                    </span>
                    <span>{project.ecosystem}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-bullseye" /> Focus :
                    </span>
                    <span>{project.focus}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-code-branch" /> Stack :
                    </span>
                    <span>{project.stack}</span>
                  </li>
                </ul>
              </div>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="custom-btn">
                  <span>
                    view project <i className="fa-solid fa-arrow-up-right-from-square" />
                  </span>
                </a>
              ) : (
                <a href="mailto:chekerh@gmail.com" className="custom-btn">
                  <span>ask for walkthrough</span>
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
