const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">Cheker Hassan</h1>
          <p className="hero-subtitle">
            Mobile-First Product Engineer, Full-Stack Builder, AI Integration
          </p>
          <p className="hero-tagline">
            Mobile-first. AI-native. Product-obsessed.
          </p>
          <p className="hero-description">
            I build full-stack ecosystems that bridge software and real-world impact. 
            From multi-platform health products to AI-driven workflow tools and operational 
            automation systems, I architect products—not just code.
          </p>
          <div className="hero-cta">
            <a href="#featured" className="cta-primary">View My Work</a>
            <a href="#contact" className="cta-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">Repositories</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8</span>
            <span className="stat-label">Featured Products</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Years Building</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
