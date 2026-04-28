const Education = () => {
  const academicJourney = [
    {
      year: "Year 1",
      focus: "2D platformer game",
      stack: "C, Linux/Arduino",
      highlight: "Game development fundamentals"
    },
    {
      year: "Year 2",
      focus: "Smart Farm Management + Job Recruitment Web App",
      stack: "Qt, RFID, LCD",
      highlight: "Hardware-software integration"
    },
    {
      year: "Year 3",
      focus: "EV Charging Management",
      stack: "Symfony → Java, MySQL",
      highlight: "Full-stack architecture evolution"
    },
    {
      year: "Year 4",
      focus: "Mobile specialization + AI integrations",
      stack: "Android/SwiftUI/Flutter",
      highlight: "Mobile-first + AI-native"
    }
  ];

  const ieeeInvolvement = [
    "IEEE WIE (Women in Engineering)",
    "IEEE RAS (Robotics & Automation)",
    "IEEE PES (Power & Energy Society)",
    "IEEE SIGHT (Special Interest Group on Humanitarian Technology)"
  ];

  return (
    <section className="education" id="education">
      <div className="section-header">
        <span className="section-label">Education & Credibility</span>
        <h2 className="section-title">Engineering Foundation</h2>
        <p className="section-subtitle">
          Formal education combined with initiative beyond coursework
        </p>
      </div>

      <div className="education-content">
        <div className="main-education">
          <div className="institution">
            <h3>ESPRIT – University of Engineering</h3>
            <p className="location">Tunisia</p>
            <p className="degree">Software Engineering (Expected 2026)</p>
          </div>

          <div className="academic-journey">
            <h4>Academic Journey</h4>
            <div className="journey-timeline">
              {academicJourney.map((item, index) => (
                <div key={index} className="journey-item">
                  <span className="journey-year">{item.year}</span>
                  <span className="journey-focus">{item.focus}</span>
                  <span className="journey-stack">{item.stack}</span>
                  <span className="journey-highlight">{item.highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ieee-section">
          <h4>IEEE Involvement</h4>
          <ul className="ieee-list">
            {ieeeInvolvement.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="ieee-note">
            Active participation in engineering communities demonstrates commitment to 
            professional development and humanitarian technology applications.
          </p>
        </div>

        <div className="education-summary">
          <p className="summary-text">
            While completing formal software engineering education, I have shipped multi-platform 
            ecosystems, AI-native tools, and operational automation systems. The academic foundation 
            provides structured discipline; the initiative beyond coursework demonstrates execution 
            capability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
