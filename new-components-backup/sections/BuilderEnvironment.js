const BuilderEnvironment = () => {
  return (
    <section className="builder-environment" id="builder">
      <div className="section-header">
        <span className="section-label">Builder Environment</span>
        <h2 className="section-title">How I Work</h2>
        <p className="section-subtitle">
          Local-first mindset with the resources to iterate fast and own the stack
        </p>
      </div>

      <div className="builder-content">
        <div className="builder-description">
          <p className="builder-lead">
            I work with a local-first mindset, using a MacBook Pro M4 Pro with 128GB RAM to run AI experiments, 
            prototype fast, and build custom tooling without external dependencies.
          </p>
          <p className="builder-details">
            This setup lets me iterate on AI workflows and develop full-stack products on one machine. 
            I prefer building custom solutions over defaulting to paid subscriptions when I can own the stack.
          </p>
        </div>

        <div className="builder-pillars">
          <div className="builder-pillar">
            <h4>Local-First Experimentation</h4>
            <p>Run AI models locally, prototype without cloud gates, iterate rapidly</p>
          </div>
          <div className="builder-pillar">
            <h4>Custom Tooling</h4>
            <p>Build solutions instead of buying subscriptions when it makes sense</p>
          </div>
          <div className="builder-pillar">
            <h4>Full-Stack Ownership</h4>
            <p>Control the entire stack from embedded to interface</p>
          </div>
        </div>

        <div className="builder-specs">
          <h4>Environment</h4>
          <div className="spec-grid">
            <div className="spec-item">
              <span className="spec-label">Hardware</span>
              <span className="spec-value">MacBook Pro M4 Pro</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Memory</span>
              <span className="spec-value">128GB RAM</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Storage</span>
              <span className="spec-value">2TB</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Workflow</span>
              <span className="spec-value">Local AI & Self-Hosted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuilderEnvironment;
