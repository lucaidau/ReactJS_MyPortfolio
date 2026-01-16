import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-20">
      <div className="md:w-1/2 space-x-6">
        <h2 className="text-primary-accent font-mono text-lg">
          Hello, my name's
        </h2>
        <h1 className="text-6xl font-bold text-primary-txt">Đỗ Hỷ Toàn</h1>
        <h3 className="text-4xl font-semibold text-secondary-txt mt-2">
          Front-end Developer
        </h3>
        <p className="mt-3 text-blur-txt max-w-md leading-relaxed">
          I build clean, responsive interfaces with React and JavaScript, and
          improve my skills by building real projects.
        </p>

        <div className="flex gap-4 pt-4">
          <Link
            to="/projects"
            className="px-8 py-3 bg-primary-accent text-primary-txt rounded-lg hover:bg-soft-accent transition-all"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            className="px-8 py-3 border border-primary-accent text-primary-accent rounded-lg hover:bg-primary-accent/10 transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="w-full flex md:w-1/2 justify-center items-center mt-12 md:mt-0 ">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-primary-accent/10 border-2 border-primary-accent rounded-2xl flex items-center justify-center">
          <span>HT</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
