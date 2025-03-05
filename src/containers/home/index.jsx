import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      {/* Typing Effect Animation */}
      <motion.div
        className="home__text-wrapper"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="home__title">
          <span>Hello, I'm </span>
          <motion.span
            className="home__name"
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "linear" }}
          >
            Mouneesh
          </motion.span>
        </h1>
      </motion.div>

      {/* Animated Hire Me Button */}
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
          Hire Me
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;
