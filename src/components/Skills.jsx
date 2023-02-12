import React, { Component } from 'react';
import "./css/Skills.css";
import getskills from './GetSkills';
class Skills extends Component {
  state = {
    skills: getskills()
  }
  render() {
    return (
      <div className='Skills' id='Skills'>
        <div className="Skills__heading">Skills</div>
        <hr />
        <div className="Skills__holder">
          {this.state.skills.map(skills => (
            <div className="Skills__container">
              <div className="Skills__particulate">
                <div className="Skills__flexx">
                  <div className="Skills__language">{skills.language}</div>
                  <div className="Skills__Level">{skills.level}</div>
                </div>
                <div className="progress-bar-wrap"> 
                  <div className='progress-bar' role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width : skills.bar }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;