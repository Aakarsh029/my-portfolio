import React from 'react';
import "./css/Certificates.css";
import cert1 from "./Club/certi_page-0001.jpg";
import cert2 from "./Club/certi_page-0002.jpg";
import cert3 from "./Club/certi_page-0003.jpg";
import cert4 from "./Club/certi_page-0004.jpg";
import cert5 from "./Club/certi_page-0005.jpg";
import cert6 from "./Club/certi_page-0006.jpg";
import e1 from "./Club/Aakarsh first year Ecell.png";
import iste from "./Club/iste.png"
import app1 from "./Club/App Team Final Yr Certificate.png"
import c1 from "./courses/CertificateOfCompletion_Level Up Advanced SQL_page-0001.jpg";
import c2 from "./courses/CertificateOfCompletion_SQL Server Fundamentals Master Basic Query Techniques_page-0001.jpg"
export default function Certificates() {
  return (
    <div className='Certificates' id='Certificates'>
        <div className="Project__heading">Entrepreneurship Cell Certificate</div>
        <hr />
        <div className="Certificates__Certificates">
            <a href="https://drive.google.com/file/d/1IC3F88acYCYtraui0qG8tMfsKzfgq-YK/view?usp=sharing" target='_blank'><img src={e1} alt="" /></a>
            <a href="https://drive.google.com/file/d/1-OXd0vcoVDNFhjFtPNBEHFPy5fc_zEyK/view?usp=sharing" target='_blank'><img src={cert5} alt="" /></a>
            <a href="https://drive.google.com/file/d/12PEADrnm-CMci1pLXrTLyHBBT4RWnEJm/view?usp=sharing" target='_blank'><img src={cert6} alt="" /></a>
        </div>


        <div className="Project__heading">APP TEAM Certificate</div>
        <hr />
        <div className="Certificates__Certificates">
            <a href="https://drive.google.com/file/d/1oR_OXUG9YMhKiJC3eoCD1x9lpMKFs6nJ/view?usp=sharing" target='_blank'><img src={app1} alt="" /></a>
            <a href="https://drive.google.com/file/d/1_jmJOZmn0J_mC-brh5ZeObBxm0ftI2tq/view?usp=sharing" target='_blank'><img src={cert3} alt="" /></a>
        </div>


        <div className="Project__heading">Certificates</div>
        <hr />
        <div className="Certificates__Certificates">
            <a href="https://drive.google.com/file/d/1TVSWGh3PDxMIvCAuVAkgzTW7n-S4JZQD/view?usp=sharing" target='_blank'><img src={cert1} alt="" /></a>
            <a href="https://drive.google.com/file/d/1KjizGLqOMXg9UOsqEjAB0ZhNhblgPPKd/view?usp=sharing" target='_blank'><img src={cert2} alt="" /></a>
            <a href="https://drive.google.com/file/d/1sl_emfKwCjbWN1jSKBfvECzBjASjAuIO/view?usp=sharing" target='_blank'><img src={cert4} alt="" /></a>
            <a href="https://drive.google.com/file/d/1R-GjUgRT78XpEux8lRtm_TPSPlOEf5kG/view?usp=sharing" target='_blank'><img src={iste} alt="" /></a>
        </div>


        <div className="Project__heading">Completed Courses Cetificates</div>
        <hr />
        <div className="Certificates__Certificates">
            <a href="https://drive.google.com/file/d/18jkCheb-e0awOu5-4WEU_dSAVD8Yc6Pj/view?usp=sharing" target='_blank'><img src={c1} alt="" /></a>
            <a href="https://drive.google.com/file/d/1GPzaxqWohhldYo3WdH8fc72KUO9B6Fcc/view?usp=sharing" target='_blank'><img src={c2} alt="" /></a>
            </div>
    </div>
  )
}
