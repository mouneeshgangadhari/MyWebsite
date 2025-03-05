import React, { useState, useMemo, useCallback } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";

const portfolioData = [
  {
    id: 1,
    name: "Chat APP",
    image: "https://github.com/mouneeshgangadhari/portfolio/blob/main/digital-connection-technology-social-media_53876-124327.jpg?raw=true",
    link: "https://github.com/mouneeshgangadhari/chatApp",
    category: "Development",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io","JWT"]
  },
  {
    id: 2,
    name: "Todo App",
    image: "https://raw.githubusercontent.com/mouneeshgangadhari/portfolio/main/image2.jpg",
    link: "https://github.com/mouneeshgangadhari/ToDo",
    category: "Development",
    techStack: ["Django", "SQLite", "HTML", "CSS"]
  },
  {
    id: 3,
    name: "Crop-Damage Estimation",
    image: "https://github.com/mouneeshgangadhari/portfolio/blob/main/image3.png?raw=true",
    link: "https://github.com/mouneeshgangadhari/Crop-Damage-Estimation-Using-Satellite-Image-and-Transformer-model",
    category: "Deep-learning",
    techStack: ["Python", "Transformers", "Satellite Images","CNN-Transformer Network"]
  },
  {
    id: 4,
    name: "Key-Logger",
    image: "https://raw.githubusercontent.com/mouneeshgangadhari/portfolio/main/image1.png",
    link: "https://github.com/mouneeshgangadhari/KeyLogger",
    category: "CyberSecurity",
    techStack: ["Python", "Security", "Keylogging"]
  },
  {
    id: 5,
    name: "EtherVote E-Voting System",
    image: "https://raw.githubusercontent.com/mouneeshgangadhari/portfolio/refs/heads/main/image4.webp",
    link: "https://github.com/mouneeshgangadhari/EtherVote-E-Voting-System-using-Blockchain-Technology",
    category: "BlockChain",
    techStack: ["React", "Solidity", "Truffle", "MetaMask"]
  }
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "CyberSecurity" },
  { filterId: 3, label: "Development" },
  { filterId: 4, label: "Deep-learning" },
  { filterId: 5, label: "BlockChain" }
];

const Projects = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredItems = useMemo(() => (
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter(item => item.category === filterData.find(f => f.filterId === filteredValue)?.label)
  ), [filteredValue]);

  const handleFilterClick = useCallback((filterId) => {
    setFilteredValue(filterId);
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent headerText="My Projects" icon={<BsInfoCircleFill size={40} />} />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map(({ filterId, label }) => (
            <li key={filterId} className={filterId === filteredValue ? "active" : ""} onClick={() => handleFilterClick(filterId)}>
              {label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map(({ id, name, image, link, techStack }, index) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__content__cards__item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <img alt={name} src={image} />
              </div>
              {index === hoveredIndex && (
                <div className="overlay">
                  <div className="overlay-content">
                    <p className="project-name">{name}</p>
                    <p className="tech-stack">{techStack.join(" | ")}</p>
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
  
};

export default Projects;
