import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import { FaJava, FaPython, FaReact, FaAws} from "react-icons/fa";
import { SiCsharp, SiJavascript, SiAngular, SiTypescript, SiDjango, SiDotnet, SiSpring, SiMysql, SiPostgresql, SiMicrosoftazure, SiKubernetes, SiDocker, SiTerraform, SiRabbitmq, SiPowerbi } from "react-icons/si";


const SkillIcon = ({ skillName }) => {
  // Define a mapping of skill names to corresponding icons
  const iconMap = {
    Java: <FaJava />,
    CSharp: <SiCsharp />,
    Python: <FaPython />,
    JavaScript: <SiJavascript />,
    Angular: <SiAngular />,
    React: <FaReact />,
    TypeScript: <SiTypescript />,
    Django: <SiDjango />,
    DotNET: <SiDotnet />,
    Spring: <SiSpring />,
    MySQL: <SiMysql />,
    Postgresql: <SiPostgresql />,
    Azure: <SiMicrosoftazure />,
    Powerbi: <SiPowerbi />,
    AWS: <FaAws />,
    Kubernetes: <SiKubernetes />,
    Docker: <SiDocker />,
    Terraform: <SiTerraform />,
    RabbitMQ: <SiRabbitmq />,
    // Add more mappings for other skills as needed
  };

  // Render the appropriate icon based on the skill name
  const icon = iconMap[skillName];

  return <>{icon}</>;
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skill}
              >
                <SkillIcon skillName={skill} />
                {/* <i>
                </i> */}
                
                <p>{skill}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
