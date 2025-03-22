import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.scss";

const roles = [
  "Software Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Machine Learning Engineer",
];

const url =
  "https://portfolio-ten-black-91.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fharsha-10-portfolio.appspot.com%2Fo%2F41844.jpg%3Falt%3Dmedia&w=2048&q=75";

const wavingHandUrl =
  "https://portfolio-ten-black-91.vercel.app/_next/static/media/waving-hand.1da6fc7a.gif";

const Home = () => {
  const navigate = useNavigate();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__content">
        {/* Text Section */}
        <motion.div
          className="home__text-wrapper"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="home__title">
            <span>
              Hey{<img
                src={wavingHandUrl}
                alt="Waving Hand"
                className="waving-hand"
                style={{ width: "40px", height: "40px", verticalAlign: "middle" }}
              />}
              
            </span>
            <br />
            <motion.span
              className="home__name"
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "linear" }}
            >
              I'm Mouneesh
            </motion.span>
          </h1>

          {/* Animated Role Text */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentRoleIndex}
              className="home__role"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              style={{ color: "blue" }} // Role color set to blue
            >
              {roles[currentRoleIndex]}
            </motion.h2>
          </AnimatePresence>

          {/* Bio Section */}
          <motion.p
            className="home__bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            I'm a Full Stack Developer based in India with a passion for crafting
            innovative solutions.
          </motion.p>

          {/* Contact Me Button */}
          <motion.div
            className="home__contact-me"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <motion.button
              onClick={handleNavigateToContactMePage}
              className="home__button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Hire Me"
            >
              Contact me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          className="home__image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={url} alt="Profile" className="home__image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
