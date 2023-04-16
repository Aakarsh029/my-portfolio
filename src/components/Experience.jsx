import React from 'react';
import "./css/Experience.css";
import fei from"./images/FrontEndInternship.png";
export default function Experience() {
  return (
    <div className='Experience' id='Experience'>
        <div className="Project__heading">Experience</div>
        <hr />
        <div className="Experience__Certificates">
            <a href={fei} target='_blank'><img src={fei} alt="" /></a>
        </div>
    </div>
  )
}
