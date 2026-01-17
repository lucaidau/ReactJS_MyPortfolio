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
    <section className="min-h-[80vh] flex items-center justify-center px-8">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-border ">
          Get In Touch
        </h1>
        <p className="text-secondary-txt text-lg md:text-xl leading-relaxed max-w-md mx-auto">
          I am currently open to internship opportunities and collaboration.
          Feel free to reach out if you want to work together.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-4">
          {socialLink.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="flex items-center gap-2 px-6 py-3 bg-navbar-bg/20 rounded-full border border-light-divider hover:border-primary-border hover:text-primary-accent transition-all duration-500 group"
            >
              <span className="text-lg group-hover:scale-120 transition-transform ">
                {link.icon}
              </span>
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
