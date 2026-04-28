const FeaturedWork = () => {
  const projects = [
    {
      title: "MatelasFlow",
      label: "AI-Driven Warehouse Management Platform",
      valueProp: "An intelligent inventory and sales management system for warehouse operations.",
      why: "Business-facing tool with AI direction. Demonstrates entrepreneurial product thinking.",
      signals: "I understand business operations and build tools that drive decisions.",
      stack: ["Java", "Desktop Application", "Database Integration", "ML Direction"],
      ecosystem: "Operational Systems"
    },
    {
      title: "TuniCut-AI",
      label: "AI-Native Workflow Intelligence Tool",
      valueProp: "An AI-powered workflow platform for content analysis and productivity automation.",
      why: "Demonstrates AI-native product building—intelligence as core architecture.",
      signals: "I build with AI as first-class capability.",
      stack: ["Python", "AI/ML Frameworks", "Workflow Automation"],
      ecosystem: "AI-Native Tools"
    },
    {
      title: "Signlik",
      label: "Accessibility-Focused Sign Recognition System",
      valueProp: "A computer vision system for sign language gesture recognition.",
      why: "Social impact + technical depth. IEEE SIGHT involvement adds credibility.",
      signals: "I build for human impact.",
      stack: ["Python", "Computer Vision", "Machine Learning"],
      ecosystem: "Accessibility & Impact"
    },
    {
      title: "WayFinder",
      label: "Architecture-Oriented Booking Platform",
      valueProp: "A backend infrastructure for booking workflows with communication capabilities.",
      why: "Demonstrates backend system design and API architecture.",
      signals: "I design backend systems and service architecture.",
      stack: ["Backend Framework", "Database", "API Architecture"],
      ecosystem: "Infrastructure & Architecture"
    },
    {
      title: "BibaLuxe",
      label: "Modern E-Commerce Product Platform",
      valueProp: "A multilingual e-commerce experience with product visualization and AI-assisted features.",
      why: "Consumer product with modern frontend direction.",
      signals: "I can ship polished consumer products.",
      stack: ["Modern Web Framework", "Backend Service", "Database"],
      ecosystem: "Digital Products"
    },
    {
      title: "Système de Pointage (JoJo Pointage)",
      label: "RFID-Based Attendance Automation System",
      valueProp: "An end-to-end attendance system with hardware integration and automated reporting.",
      why: "Hardware-software integration plus operational software.",
      signals: "I bridge physical and digital systems.",
      stack: ["Python Web Framework", "Embedded Hardware", "Database"],
      ecosystem: "Operational Systems"
    },
    {
      title: "Promptly",
      label: "AI-Powered Prompt Engineering Workflow",
      valueProp: "An intelligent workflow tool for LLM prompt management.",
      why: "Part of AI-native builder toolkit.",
      signals: "I build my own tools to work smarter.",
      stack: ["Modern AI Stack", "Workflow Automation"],
      ecosystem: "AI-Native Tools"
    },
    {
      title: "pidev3a45",
      label: "Academic Full-Stack Engineering Project",
      valueProp: "A formal engineering project demonstrating structured team development.",
      why: "Shows academic rigor and ability to deliver within institutional frameworks.",
      signals: "I can deliver within formal engineering disciplines.",
      stack: ["Java/Spring", "Structured Methodology"],
      ecosystem: "Infrastructure & Architecture"
    }
  ];

  return (
    <section className="featured-work" id="featured">
      <div className="section-header">
        <span className="section-label">Featured Work</span>
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-subtitle">
          Eight products that demonstrate cross-stack execution from concept to working system
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-ecosystem">{project.ecosystem}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-label">{project.label}</p>
            <p className="project-value-prop">{project.valueProp}</p>
            <div className="project-details">
              <p className="project-why"><strong>Why it matters:</strong> {project.why}</p>
              <p className="project-signals"><strong>What it signals:</strong> {project.signals}</p>
            </div>
            <div className="project-stack">
              {project.stack.map((tech, techIndex) => (
                <span key={techIndex} className="stack-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
