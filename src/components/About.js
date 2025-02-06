import { Github, Linkedin, Mail, MapPin, Cpu } from "lucide-react";
import "./About.css";
import profileImage from "../nami.jpg";

// Replace with your own Google Drive or other file hosting link
const CV_VIEW_LINK = 'https://drive.google.com/file/d/1xOw_JMgdFPAOESzAyR21XPtJDFKvWe68/view';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="text-content">
            <div className="intro-text">
              <span className="greeting">👋 Hello, I'm</span>
              <h1>Namita Bhatta</h1>
              <h2>Computer Engineering Undergraduate</h2>
            </div>

            <div className="info-badges">
              <span className="badge">
                <Cpu size={16} />
                AI/ML Enthusiast
              </span>
              <span className="badge">
                <MapPin size={16} />
                Nepal
              </span>
            </div>

            <p>
              A final year computer engineering undergraduate at IOE, Thapathali Campus. With a mind ever drawn to both logic and imagination, I am passionate about exploring creative tech and making ideas come to life. Beyond screens and codes, you'll find me traveling, lost in books, or vibing to music.
            </p>

            <div className="action-links">
              <div className="social-links">
                <a href="https://github.com/NamitaBhatta" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/namita-bhatta-084b58229/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:namitabhatta073@gmail.com" title="Email">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <a href={CV_VIEW_LINK} target="_blank" rel="noopener noreferrer" className="view-resume">
              <button className="download-btn">
                View My Resume
              </button>
            </a>
          </div>

          <div className="profile-image">
            <img src={profileImage} alt="Namita Bhatta" />
            <div className="background-shape"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
