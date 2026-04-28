import { positioningCards } from "@/src/content/portfolioData";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {positioningCards.map((card) => (
          <div key={card.label} className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
            <div>
              <p>
                <span className="quote">{card.value}</span>
                <span className="person">{card.label}</span>
                <span className="job">How I create leverage across projects</span>
              </p>
              <img src="assets/testimonials/testimonial-1.jpg" alt={card.label} />
            </div>
          </div>
        ))}
      </div>
      <img alt="" className="z-1 hide-mobile opposite-separator" src="assets/separator-opposite.png" />
    </section>
  );
};

export default Testimonials;
