import { stats } from "@/src/content/portfolioData";

const Facts = () => {
  return (
    <section className="facts">
      <div className="flex-column-mobile">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`animated-layer fade-in-right-animation ${
              index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
            } wow`}
            data-wow-offset={200}
          >
            <div>
              <div>
                <h3>{item.value}</h3>
                <p>
                  {item.label}
                  <span>{item.sublabel}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Facts;
