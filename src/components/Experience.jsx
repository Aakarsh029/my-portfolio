import React from 'react';
import "./css/Experience.css";
import fei from"./images/FrontEndInternship.png";
import ri from "./images/AakarshResearchCertificate.jpg";
export default function Experience() {
  return (
    <div className='Experience' id='Experience'>
        <div className="Project__heading">Experience</div>
        <hr />
        <div className="Experience__Certificates">
            <a href={fei} target='_blank'><img src={fei} alt="" /></a>
            <a target='_blank' href="https://drive.google.com/file/d/1JXP9O-kDQarMnf-J1WiXexhDy2lwgaf_/view?usp=share_link">
              <img id='experience__certificate__2' src={ri} alt="" />
            </a>
        </div>
    </div>
  )
}
