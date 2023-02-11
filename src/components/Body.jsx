import React, { useEffect } from 'react';
import "./css/Body.css";
import Particle from './Particle';
import About from './About';
import Skills from './Skills';
import Typewriter from "typewriter-effect";
import Project from './Project';
function Body() {
  return (
    <div className='Body'>
      <div className='pjs'>
        <Particle />
        <div className="body__header__text">
          <div className="typedJs">Hello! I am Aakarsh <br />
            <div className="home__intro">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "A Software Engineer",
                      "A Web Developer",
                      "A Machine Learning Enthusiast"
                    ],
                  }} />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Project />
    </div>
  )
}

export default Body