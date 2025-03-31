import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import "./styles.scss";
import { MdWork } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      
      <PageHeaderContent
        headerText={
          <a 
            href="https://drive.google.com/file/d/1bFR-MCAUdu8X5lG2GLGBRjk92VYINzar/view?usp=sharing"
            style={{ color: 'inherit', textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        }
      />

      <div className="resume__container">
        
        {/* Left Side - Education */}
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  border: '1.5px solid'
                }}
                date={item.date}
                icon={<MdWork />}
                iconStyle={{
                  background: '#181818',
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Right Side - Certificates */}
        <div className="timeline__certificates">
          <h3 className="timeline__education__header-text">Certificates</h3>
          <VerticalTimeline
            layout={"1-column"}
          >
            {data.certificates.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  border: '1.5px solid '
                }}
                date={item.date}
                icon={<FaCertificate />}
                iconStyle={{
                  background: '#181818',
                }}
              >
                <h3>{item.issuer}</h3>
                <div className="vertical-timeline-element-title-wrapper">
                
                
                  <h3>{item.title}</h3>
                  
                  
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{textDecoration: "underline" }}
                    >
                      View Certificate
                    </a>
                  )}
                  
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__certificates">
          <h3 className="timeline__education__header-text">miscellaneous</h3>
          <VerticalTimeline
            layout={"1-column"}
          >
            {data.miscellaneous.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  border: '1.5px solid '
                }}
                date={item.date}
                icon={<FaCertificate />}
                iconStyle={{
                  background: '#181818',
                }}
              >
                <h3>{item.title}</h3>
                <div className="vertical-timeline-element-title-wrapper">
                
                
                  <h3>{item.description}</h3>
                  
                
                  
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

      </div>
    </section>
  );
};

export default Resume;
