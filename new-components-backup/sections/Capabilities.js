const Capabilities = () => {
  const capabilities = [
    {
      title: "Mobile Engineering",
      description: "Native and cross-platform mobile development for iOS and Android ecosystems.",
      delivers: [
        "iOS Development",
        "Android Development",
        "Cross-platform Architecture",
        "Mobile-first Product Thinking"
      ]
    },
    {
      title: "AI Integration",
      description: "AI-native product building with machine learning workflows and intelligent automation.",
      delivers: [
        "AI Workflow Design",
        "Machine Learning Integration",
        "Intelligent Automation",
        "Local AI Experimentation"
      ]
    },
    {
      title: "Full-Stack Systems",
      description: "End-to-end architecture from frontend interfaces to backend infrastructure.",
      delivers: [
        "Frontend Architecture",
        "Backend System Design",
        "API Development",
        "Database Architecture"
      ]
    },
    {
      title: "Operational Tools",
      description: "Business-facing automation systems that reduce manual work and improve efficiency.",
      delivers: [
        "Process Automation",
        "Workflow Optimization",
        "Hardware-Software Integration",
        "Operational Dashboards"
      ]
    }
  ];

  return (
    <section className="capabilities" id="capabilities">
      <div className="section-header">
        <span className="section-label">Capabilities</span>
        <h2 className="section-title">What I Deliver</h2>
        <p className="section-subtitle">
          Cross-stack execution combining mobile engineering, AI integration, and systems architecture
        </p>
      </div>

      <div className="capabilities-grid">
        {capabilities.map((capability, index) => (
          <div key={index} className="capability-card">
            <h3 className="capability-title">{capability.title}</h3>
            <p className="capability-description">{capability.description}</p>
            <ul className="capability-delivers">
              {capability.delivers.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="value-prop-summary">
        <h3>Cross-Stack Execution</h3>
        <p>From concept to working system—mobile apps, AI workflows, operational platforms, and full-stack architecture.</p>
      </div>
    </section>
  );
};

export default Capabilities;
