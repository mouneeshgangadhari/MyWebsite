import React, { useState } from "react";
import { FaBars, FaReact, FaCog } from "react-icons/fa";
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
  { label: "THEME", to: "/settings", icon: <FaCog /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">
          <FaReact size={30} style={{ marginRight: "10px" }} /> {/* Adds spacing */}
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
                  isActive ? "navbar__menu__item__links active-link" : "navbar__menu__item__links"
                }
                onClick={() => setMenuOpen(false)} // Close menu when a link is clicked
              >
                {item.icon ? <>{item.icon} {item.label}</> : item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
