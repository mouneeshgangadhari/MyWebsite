import { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import "./styles.scss";
import { MdSchool, MdWork, MdMenuBook } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";

const Resume = () => {
  const [active, setActive] = useState("education"); // 'education' | 'certificates' | 'experience' | 'miscellaneous'

  const renderEducation = () => {


    return (
      <div className="timeline__education">
        <h3 className="timeline__education__header-text">Education</h3>
        <VerticalTimeline layout={"1-column"}>
          {data.education.map((item, i) => (
            <VerticalTimelineElement
              key={`edu-${i}`}
              className="timeline__experience__vertical-timeline-element"
              contentStyle={{
                border: "1.5px solid var(--theme-border-color)",
              }}
              date={item.date}
              icon={<MdSchool />}
              iconStyle={{
                background: "var(--theme-primary-color)",
              }}
            >
              <div className="vertical-timeline-element-title-wrapper">
                <h3>{item.title}</h3>
                <h4>{item.subTitle}</h4>
                <h5>{item.score}</h5>
              </div>
              <p className="vertical-timeline-element-title-wrapper-description">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  };

  const renderCertificates = () => (
    <div className="timeline__certificates">
      <h3 className="timeline__education__header-text">Certificates</h3>
      <VerticalTimeline layout={"1-column"}>
        {data.certificates.map((item, i) => (
          <VerticalTimelineElement
            key={`cert-${i}`}
            className="timeline__experience__vertical-timeline-element"
            contentStyle={{
              background: "none",
              border: "1.5px solid var(--theme-border-color)",
            }}
            date={item.date}
            icon={<FaCertificate />}
            iconStyle={{
              background: "var(--theme-primary-color)",
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
                  style={{ textDecoration: "underline" }}
                >
                  View Certificate
                </a>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );

  const renderMiscellaneous = () => (
    <div className="timeline__miscellaneous">
      <h3 className="timeline__education__header-text">Miscellaneous</h3>
      <VerticalTimeline layout={"1-column"}>
        {data.miscellaneous.map((item, i) => (
          <VerticalTimelineElement
            key={`misc-${i}`}
            className="timeline__experience__vertical-timeline-element"
            contentStyle={{
              background: "none",
              border: "1.5px solid var(--theme-border-color)",
            }}
            date={item.date}
            icon={<MdMenuBook />}
            iconStyle={{
              background: "var(--theme-primary-color)",
            }}
          >
            <h3>{item.title}</h3>
            <div className="vertical-timeline-element-title-wrapper">
              <p>{item.description}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );

  const renderExperience = () => {
    if (data.experience && data.experience.length) {
      return (
        <div className="timeline__experience">
          <h3 className="timeline__education__header-text">Experience</h3>
          <VerticalTimeline layout={"1-column"}>
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={`exp-${i}`}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  border: "1.5px solid var(--theme-border-color)",
                }}
                date={item.date}
                icon={<MdWork />}
                iconStyle={{
                  background: "var(--theme-primary-color)",
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
      );
    }
    return <p style={{ padding: "1rem 0" }}>No experience available.</p>;
  };

  return (
    <section id="resume" className="resume">
      {/* <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={30} />}
      /> */}
      <div className="resume__content">


        {/* Tabs / Buttons */}
        <div
          className="resume__tabs"
          style={{
            margin: "2rem 0",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            paddingTop: "25px",
            top: 0,
            background: "var(--theme-background)",
            zIndex: 10,

          }}
        >
          <button
            onClick={() => setActive("education")}
            className={`tab-btn ${active === "education" ? "active" : ""}`}
            style={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              transition: "background 0.3s ease",
              background: active === "education" ? "var(--theme-primary-color)" : "transparent",
              color: active === "education" ? "white" : "inherit",
              borderRadius: "4px",
            }}
          >
            Education
          </button>
          <button
            onClick={() => setActive("certificates")}
            className={`tab-btn ${active === "certificates" ? "active" : ""}`}
            style={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              transition: "background 0.3s ease",
              background: active === "certificates" ? "var(--theme-primary-color)" : "transparent",
              color: active === "certificates" ? "white" : "inherit",
              borderRadius: "4px",
            }}
          >
            Certificates
          </button>
          <button
            onClick={() => setActive("experience")}
            className={`tab-btn ${active === "experience" ? "active" : ""}`}
            style={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              transition: "background 0.3s ease",
              background: active === "experience" ? "var(--theme-primary-color)" : "transparent",
              color: active === "experience" ? "white" : "inherit",
              borderRadius: "4px",
            }}
          >
            Experience
          </button>
          <button
            onClick={() => setActive("miscellaneous")}
            className={`tab-btn ${active === "miscellaneous" ? "active" : ""}`}
            style={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              transition: "background 0.3s ease",
              background: active === "miscellaneous" ? "var(--theme-primary-color)" : "transparent",
              color: active === "miscellaneous" ? "white" : "inherit",
              borderRadius: "4px",
            }}
          >
            Miscellaneous
          </button>
          <a
            href="https://drive.google.com/file/d/17MhjnpDEaZY8yv-jIkfpj-AUwX9uCGGc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.5rem 1.2rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              background: "transparent",
              border: "1.5px solid var(--theme-primary-color)",
              color: "var(--theme-primary-color)",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
            className="tab-btn resume-download-btn"
          >
            Download / View Resume 📄
          </a>
        </div>

        <div className="resume__container">
          {active === "education" && renderEducation()}

          {active === "certificates" && renderCertificates()}

          {active === "experience" && renderExperience()}

          {active === "miscellaneous" && renderMiscellaneous()}
        </div>
      </div>
    </section>
  );
};

export default Resume;
