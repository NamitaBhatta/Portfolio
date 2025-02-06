import { MapPin } from "lucide-react";
import "./Education.css";

function Education() {
  const educationData = [
    {
      school: "IOE, Thapathali Campus",
      degree: "Degree: Bachelor of Engineering in Computer Engineering",
      location: "Kathmandu, Nepal",
      date: "2021 - Present",
    },
    {
      school: "Liverpool International College",
      degree: "Degree: School Leaving Certificate (SLC)",
      location: "Kathmandu, Nepal",
      date: "2018 - 2020",
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.school}</h3>
            <p className="location">
              <MapPin size={16} />
              <span>{edu.location}</span>
            </p>
            <p className="degree">{edu.degree}</p>
            <p className="date">{edu.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
