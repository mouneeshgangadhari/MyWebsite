import React, { useState, useMemo, useCallback } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";

import "./styles.scss";

const filterData = [
  { filterId: 0, label: "Languages" },
  { filterId: 1, label: "Frameworks & Libraries" },
  { filterId: 2, label: "Databases & Blockchain" },
  { filterId: 3, label: "Tools & Platforms" },
  { filterId: 4, label: "AI & ML" },
];

const Skills = () => {
  const [filteredValue, setFilteredValue] = useState(0);

  // Efficient filtering logic
  const filteredItems = useMemo(() => {
    return skillsData.filter((item) => item.label === filterData[filteredValue].label);
  }, [filteredValue]);

  const handleFilterClick = useCallback((filterId) => {
    setFilteredValue(filterId);
  }, []);

  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
      />

      {/* Filter buttons */}
      <div className="skills__filter">
        {filterData.map(({ filterId, label }) => (
          <button
            key={filterId}
            className={filterId === filteredValue ? "active" : ""}
            onClick={() => handleFilterClick(filterId)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Skills display */}
      <div className="skills__content">
        {filteredItems.map((item, i) => (
          <div key={i} className="skills__category">
            <h3 className="skills__category-title">{item.label}</h3>
            <div className="skills__progress-bars">
              {item.data.map((skillItem, j) => (
                <div key={j} className="skills__progress-bar">
                  <div className="skills__progress-bar-label">
                    {skillItem.image ? (
                      <img
                        src={skillItem.image}
                        alt={skillItem.skillName}
                        className="skills__icon-large"
                      />
                    ) : (
                      <span className="skills__icon-placeholder">N/A</span>
                    )}
                    <span className="skills__icon-name">{skillItem.skillName}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
