import { Sun, Moon } from "lucide-react";
import "./Header.css";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <div className="logo"></div>
      <nav>
        <ul>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button onClick={toggleDarkMode} className="theme-toggle">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
