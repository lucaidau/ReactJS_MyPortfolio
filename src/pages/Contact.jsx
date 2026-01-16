import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaFacebook } from "react-icons/fa";

const socialLink = [
  { name: "Email", url: "", icon: <FaEnvelope></FaEnvelope> },
  { name: "GitHub", url: "", icon: <FaGithub></FaGithub> },
  { name: "Linkedin", url: "", icon: <FaLinkedin></FaLinkedin> },
  { name: "Facebook", url: "", icon: <FaFacebook></FaFacebook> },
];

const Contact = () => {
  return (
    <section className="">
      <div className="">
        <h1 className="">Get In Touch</h1>
        <p className="">
          I am currently open to internship opportunities and collaboration.
          Feel free to reach out if you want to work together.
        </p>

        <div className="">
          {socialLink.map((link, index) => (
            <a key={index} href={link.url} className="">
              <span className="">{link.icon}</span>
              <span className="">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
