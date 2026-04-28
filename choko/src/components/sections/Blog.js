import { highlights } from "@/src/content/portfolioData";

const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Operating Model
            </span>
          </span>
        </h3>
      </div>
      <div className="latestposts flex-column-mobile">
        {highlights.map((item, index) => (
          <div key={item.title} className="animated-layer fade-in-right-animation fadeInUp wow">
            <a href={item.link} target="_blank" rel="noreferrer">
              <span className="img-holder">
                <img src={`assets/blog/blog-post-${index + 1}.jpg`} alt={item.title} />
              </span>
              <div className="content">
                <span className="category">{item.category}</span>
                <span className="title">{item.title}</span>
                <p>{item.description}</p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-diagram-project" />
                    <span>{item.meta}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Blog;
