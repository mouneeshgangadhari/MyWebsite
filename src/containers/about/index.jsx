import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { FaDatabase } from 'react-icons/fa';
import { DiJava, DiPython} from 'react-icons/di';
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
  {
    label: "Name",
    value: "Mouneesh Gangadhari",
  },
  {
    label: "Age",
    value: calculateAge("2003-06-08"),
  },
  {
    label: "Address",
    value: "Hyderabad, Telangana, India",
  },
  {
    label: "Email",
    value: "gangadharimouneesh@gmail.com",
  },
  {
    label: "Contact No",
    value: "8523051130",
  },
];


const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
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
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
             
             
              <div>
                <SiJavascript size={60} />
              </div>
              <div>
                <DiJava size={60}  />
              </div>
              <div>
                <DiPython size={60}  />
              </div>
              <div>
                <FaDatabase size={60} />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
