import { salimovSlider } from "@/src/sliderProps";
import { positioningCards } from "@/src/content/portfolioData";
import { Swiper, SwiperSlide } from "swiper/react";

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>What My Role Actually Looks Like</h3>
        <Swiper
          {...salimovSlider.clients}
          className="swiper swiper-clients fadeInUp wow"
        >
          {positioningCards.map((card) => (
            <SwiperSlide key={card.label} className="swiper-slide">
              <div>
                <span className="ecosystem-label">{card.label}</span>
                <p className="ecosystem-desc">{card.value}</p>
              </div>
              <div>
                <span className="ecosystem-label">Execution</span>
                <p className="ecosystem-desc">From idea, structure, and supervision to launch</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Clients;
