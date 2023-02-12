import React from 'react'
import "./css/About.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function About() {
    return (
        <div className='About' id='About'>
            <div className="About__heading">About</div>
            <hr />
            Hi! I am Aakarsh, a Pre-Final Year Student of Computer Science and Engineering. 
            My Technical Interests include Algorithmic Problem Solving, Web Development, 
            Artificial Intelligence and Machine Learning . Check out my 
            <a href="https://drive.google.com/drive/folders/1Xls_P0kwVZOhvmMLgOuwYEr7qENL0BNH?usp=sharing"><span> resume!</span></a> 
            <div className="about__section">
                <img src={require('./images/1.jpg')} alt="" />
                <div className="about__content">
                    <div className="about__content__heading">Software Engineer & Web Developer</div>
                    <div className="about__content__section"><i>Currently I am pursuing my Bachelors of Technology in 
                        Computer Science and Engineering from National Institute of Technology, Hamirpur</ i></div>
                    <div className="about__content__details">
                        <div className="about__content__details__column">
                            <KeyboardArrowRightIcon /> <div className="about__content__details__column__detail"><span>Mobile:</span>+919817217321</div>
                        </div>
                        <div className="about__content__details__column">
                            <KeyboardArrowRightIcon /> <div className="about__content__details__column__detail"><span>Degree:</span>B.Tech</div>
                        </div>
                        <div className="about__content__details__column">
                            <KeyboardArrowRightIcon /> <div className="about__content__details__column__detail"><span>Email:</span><div className="email">aakarshbansal2002@gmail.com</div></div>
                        </div>
                        <div className="about__content__details__column">
                            <KeyboardArrowRightIcon /> <div className="about__content__details__column__detail"><span>City:</span>Hamirpur, Himachal</div>
                        </div>
                    </div>
                    <div className="about__content__section">I developed interests in Computers and Programming 
                    after High School and subsequently started to explore the field of technology. After starting 
                    my Bachelors degree, I came to know about Development and found it quite interesting. Since 
                    then, I have been developing small projects, websites and applications. Currently I am 
                    exploring the field of ML and AI.</div>
                </div>
            </div>
        </div>
    )
}

export default About