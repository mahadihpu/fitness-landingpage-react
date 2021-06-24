import React from "react";
import aboutImg from "../../images/about.png";
const About = () => {
  return (
    <>
      <div id="about">
        <div className="about-image">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about-text">
          <h2>Learn More about us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            molestias voluptatibus iste voluptatum nemo dolorum!
          </p>
          <a href="" className="pr-btn">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
