import { Github, Linkedin, Mail, Facebook } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="connect-text">Let's Connect!</p>
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100006155778122" target="_blank" rel="noopener noreferrer">
          <Facebook size={24} />
        </a>
        <a href="https://www.linkedin.com/in/namita-bhatta-084b58229/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
        <a href="mailto:namitabhatta073@gmail.com">
          <Mail size={24} />
        </a>
        <a href="https://github.com/NamitaBhatta" target="_blank" rel="noopener noreferrer">
          <Github size={24} />
        </a>
      </div>
      <p>&copy; 2025 Namita Bhatta All rights reserved.</p>
    </footer>
  );
}

export default Footer;
