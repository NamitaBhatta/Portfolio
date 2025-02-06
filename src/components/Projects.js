import "./Projects.css"
import resumateImage from './resumate.png';
import chitranImage from'./chitran.png'

function Projects() {
  const projects = [
    {
      title: "ResuMate: An Automated Resume Screening System",
      description:
        "An automated system to screen and rank LinkedIn resumes effectively using AI.",
      tech: ["NLP", "HTML", "CSS", "JavaScript", "Django"],
      image: resumateImage,
    },
    {
      title: "चित्रण- An Automated Festive Poster Generator with Wishes in Nepali Language",
      description:
        "An AI-based system to generate festive posters with Nepali-language wishes. ",
      tech: ["NLP", "GenAI","OpenCV", "Streamlit"],
      image: chitranImage,
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
