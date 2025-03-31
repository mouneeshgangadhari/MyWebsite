import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { FaDatabase } from 'react-icons/fa';
import { DiJava, DiPython } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import "./styles.scss";

const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
};

const personalDetails = [
  { label: "Name", value: "Mouneesh Gangadhari" },
  { label: "Age", value: calculateAge("2003-06-08") },
  { label: "Location", value: "Hyderabad, Telangana, India" },
  {label:"Roles",value:"Software developer"}
];

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
      />

      <div className="about__content">
        
        {/* Personal Information Section */}
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{ transform: "translateX(200px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3>Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        {/* Skills Section */}
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{ transform: "translateX(-200px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div><SiJavascript size={60} /></div>
              <div><DiJava size={60} /></div>
              <div><DiPython size={60} /></div>
              <div><FaDatabase size={60} /></div>
            </div>
          </Animate>
        </div>

      </div>
    </section>
  );
};

export default About;
