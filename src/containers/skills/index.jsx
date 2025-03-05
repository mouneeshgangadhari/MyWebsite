import { Line } from "rc-progress";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            {/* Move category title into view */}
            <Animate
              play={true} // Ensure animation runs
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
                opacity: 0,
              }}
              end={{
                transform: "translateX(0px)",
                opacity: 1,
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
            </Animate>

            {/* Animate skill bars individually */}
            <div className="skills__content-wrapper__inner-content__progressbar-container">
              {item.data.map((skillItem, j) => (
                <AnimateKeyframes
                  key={j}
                  play={true} // Ensure animation runs
                  duration={1}
                  keyframes={["opacity: 0", "opacity: 1"]} // Fade-in effect
                  iterationCount={1}
                >
                  <div className="progressbar-wrapper">
                    <p>{skillItem.skillName}</p>
                    <Line
                      percent={skillItem.percentage}
                      strokeWidth="2"
                      strokeColor="var(--theme-primary-color)"
                      trailWidth="2"
                      strokeLinecap="square"
                    />
                  </div>
                </AnimateKeyframes>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
