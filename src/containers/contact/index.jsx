import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaGithub, FaLinkedin,FaTwitter  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import "./styles.scss";

const contactDetails = [
  { label: "Email", value: "gangadharimouneesh@example.com", link: "mailto:gangadharimouneesh@example.com?subject=Contact%20Form%20Submission&body=Hello%20Mouneesh,%0D%0A%0D%0AThis%20is%20a%20message%20from%20the%20contact%20form.%0D%0A%0D%0AThank%20you!" },
  { label: "Phone", value: "+91 8523051130", link: "https://wa.me/918523051130" },
  { label: "GitHub", icon: <FaGithub size={30} />, link: "https://github.com/mouneeshgangadhari" },
  { label: "LeetCode", icon: <SiLeetcode size={30} />, link: "https://leetcode.com/u/Mouneesh116/" },
  { label: "LinkedIn", icon: <FaLinkedin size={30} />, link: "https://www.linkedin.com/in/mouneesh-gangadhari-72786925b/" },
  { label: "Twitter", icon: <FaTwitter size={30} />, link: "https://x.com/mouneesh_0000" }
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent headerText="My Contact" icon={<BsInfoCircleFill size={40} />} />
      <div className="contact__content">
        <div className="contact__content__info">
          {contactDetails.map(({ label, value, link, icon }) => (
            <p key={label} className="contact__content__info__details">
              <strong>{label}:</strong>{" "}
              <a href={link} target="_blank" rel="noopener noreferrer" className={`contact__content__${label.toLowerCase()}-link`}>
                {icon || value}
              </a>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
