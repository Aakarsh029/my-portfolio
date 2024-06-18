import React from "react";
import "./css/Experience.css";
import fei from "./images/FrontEndInternship.png";
import freight from "./images/freight.jpg";
import ri from "./images/AakarshResearchCertificate.jpg";
import la from "./images/LA.jpg";

export default function Experience() {
  return (
    <div className="Experience" id="Experience">
      <div className="Project__heading">Experience</div>
      <hr />
      <div className="Experience__Certificates">
        <a
          href="https://drive.google.com/file/d/1WJY7SOXXWfNt5jLJYfGjMA1et4Agdv9m/view?usp=sharing"
          target="_blank"
        >
          <img src={fei} alt="" />
        </a>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1JXP9O-kDQarMnf-J1WiXexhDy2lwgaf_/view?usp=share_link"
        >
          <img id="experience__certificate__2" src={ri} alt="" />
        </a>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1HGIwtUlvIbitRO1iqxAcdHo7H0upr7h5/view?usp=sharing"
        >
          <img src={freight} alt="" />
        </a>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1qQQMu6cBBXUGuJDv1m2q7E4hKYxGigT_/view?usp=drive_link"
        >
          <img id="experience__certificate__2" src={la} alt="" />
        </a>
      </div>
    </div>
  );
}
