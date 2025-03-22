import React, { useState } from "react";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "RESUME", to: "/resume" },
  { label: "PROJECTS", to: "/projects" },
  { label: "CONTACT", to: "/contact" },
];

const Navbar = ({ darkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">
          Mouneesh
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="navbar__toggle"
          onClick={handleToggleMenu}
          aria-label="Toggle Navigation"
        >
          {menuOpen ? <HiX size={30} /> : <FaBars size={30} />}
        </button>

        {/* Navigation Menu */}
        <ul className={`navbar__menu ${menuOpen ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__menu__item">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "navbar__menu__item__links active-link"
                    : "navbar__menu__item__links"
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* Dark/Light Mode Toggle Icon */}
          <li className="navbar__menu__item">
            <button
              onClick={toggleTheme}
              className="navbar__menu__item__links theme-toggle"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FaSun size={24} color="white" /> : <FaMoon size={24} color="white" />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
