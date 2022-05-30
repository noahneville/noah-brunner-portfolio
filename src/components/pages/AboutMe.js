import React from "react";
import avi from "../../assets/img/avi.png";

export default function AboutMe() {
  return (
    <div className="container-fluid page-container">
      <div className="row">
        <h2>About Me</h2>
        <br />
        <br />
        <br />
        <br />
        <div className="col-4">
          <img src={avi} className="rounded img-fluid float-start" alt="avatar of Noah" />
        </div>
        <div className="col-8">
          <p className='about=me-text'>
            I'm a 29 year old looking for my first job in the tech sector after transitioning from previous careers in film, writing and marketing. 
            I've always been passionate about technology and computers, and decided to retrain to pursue those passions as a new career. After learning the fundamentals
            of full stack web development through a Georgia Tech Bootcamp, I'm hoping to leverage my past experience in journalism and marketing to help build a more accessible, 
            easier to understand web.
          </p>
          <br />
          <p className='about=me-text'>
            As an individual, I'm passionate about building a more socially and economically just world that values community and people. I love animals, enjoy spending time in nature
            and care about finding ways to build a more sustainable society to preserve our world for future generations. 
          </p>
          <br />
          <p className='about=me-text'>My hobbies include movies, reading science-fiction and the NBA.</p>
        </div>
      </div>
    </div>
  );
}
