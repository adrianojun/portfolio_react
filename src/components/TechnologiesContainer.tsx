import {
  DiHtml5,
  DiCss3,
  DiPython ,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description:"Conhecimentos intermediários em HTML" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description:"Conhecimentos intermediários em CSS" },
  { id: "python", name: "Python", icon: <DiPython />, description:"Conhecimentos intermeiários em python" },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />,description:"Conhecimentos básicos em node" },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, description:"Conhecimentos básicos em  MySQL" },
  { id: "react", name: "React", icon: <DiReact />, description:"Conhecimentos básicos em React" },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
