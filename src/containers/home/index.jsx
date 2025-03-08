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

  
    </section>
  );
};

export default Home;
