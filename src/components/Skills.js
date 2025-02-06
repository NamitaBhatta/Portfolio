import { Cpu, FileCode, Database } from "lucide-react"
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa"
import { SiCplusplus, SiDjango, SiPytorch, SiScikitlearn, SiPandas, SiNumpy } from "react-icons/si"
import { BsRobot } from "react-icons/bs"
import "./Skills.css"

function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <FileCode size={40} />,
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "C/C++", icon: <SiCplusplus /> },
        { name: "MySQL", icon: <FaDatabase /> },
      ],
    },
    {
      name: "AI/ML",
      icon: <Cpu size={40} />,
      skills: [
        { name: "Machine Learning", icon: <BsRobot /> },
        { name: "NLP", icon: <Cpu /> },
      ],
    },
    {
      name: "Web Development",
      icon: <FileCode size={40} />,
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Django", icon: <SiDjango /> },
      ],
    },
    {
      name: "Libraries & Frameworks",
      icon: <Database size={40} />,
      skills: [
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
      ],
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-icon">{category.icon}</div>
            <h3>{category.name}</h3>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
