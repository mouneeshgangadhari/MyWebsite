import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import "./styles.scss";  // SCSS file is imported

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const contactDetails = [
    { label: "GitHub", icon: <FaGithub size={24} />, link: "https://github.com/mouneeshgangadhari" },
    { label: "LeetCode", icon: <SiLeetcode size={24} />, link: "https://leetcode.com/u/Mouneesh116/" },
    { label: "LinkedIn", icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/mouneesh-gangadhari-72786925b/" },
    { label: "Twitter", icon: <FaTwitter size={24} />, link: "https://x.com/mouneesh_0000" }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_l65tvtn",
          "template_jfg1itl",
          form.current,
          "YyB2DbVZwVfakNmew"
        )
        .then(
          (result) => {
            console.log(result);
            if (result.text === "OK") {
              setLoading(false);
              toast.success("Email Sent Successfully");
            }
          },
          (error) => {
            setLoading(false);
            toast.error(`Failed to send email with error code ${error.status}`);
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section id="contact" className="contact p-8">
      <div className="contact__content">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <ToastContainer />

        <div className="contact__content__info">
          <div className="900 p-8 rounded-xl shadow-md">
            <h3 className="text-4xl font-semibold mb-6">Contact Me</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input name="user_name" type="text" placeholder="Full Name *" required />
              <input name="user_email" type="email" placeholder="Email *" required />
              <textarea name="message" rows={4} placeholder="Message *" required />
              <button type="submit" disabled={loading}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    Sending{" "}
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                ) : (
                  "Send Message 🚀"
                )}
              </button>
            </form>
          </div>
        </div>

        <footer>
          <div className="flex justify-center gap-6 mb-4">
            {contactDetails.map(({ label, icon, link }) => (
              <a key={label} href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} <strong>Mouneesh Gangadhari</strong>. All Rights Reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
