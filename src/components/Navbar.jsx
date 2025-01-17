import React from 'react'
import "./css/Navbar.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import AppsIcon from '@mui/icons-material/Apps';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
function Navbar() {


    const ham = () => {
        const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".Navbar");
        
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
      
    }
    const close = () => {
        const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".Navbar");
        
            menuBtn.classList.remove("active");
            navigation.classList.remove("active");
      
    }

    return (
        <>
            <div class="menu-btn" onClick={() => ham()}></div>
            <div className='Navbar'>
                <div className="header">
                    <div className="image__header"><div className="image"><img src={require('./images/1.jpg')} /></div></div>
                    <div className="header__name">Aakarsh Bansal</div>
                    <div className="social__media__links">
                        <a href="https://github.com/Aakarsh029"><div className="social__media__icons">
                            <IconButton>
                                <GitHubIcon />
                            </IconButton>
                        </div></a>
                        <a href="aakarshbansal2002@gmail.com"><div className="social__media__icons">
                            <IconButton>
                                <EmailIcon />
                            </IconButton>
                        </div></a>
                        <a href="https://www.linkedin.com/in/aakarsh-bansal/"><div className="social__media__icons">
                            <IconButton>
                                <LinkedInIcon />
                            </IconButton>
                        </div></a>
                        <a href="https://twitter.com/AAKARSHBANSAL3"><div className="social__media__icons">
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                        </div></a>
                        <a href="https://www.instagram.com/theaakarshofficial/"><div className="social__media__icons">
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                        </div></a>
                    </div>
                </div>
                <div className="Navbar__icons">
                    <a href="#Home" onClick={() => close()}><div className="Navbar__names">
                        <HomeIcon /> <span>Home</span>
                    </div></a>
                    <a href="#About" onClick={() => close()}><div className="Navbar__names">
                        <PersonIcon /> <span>About</span>
                    </div></a>
                    <a href="#Skills" onClick={() => close()}><div className="Navbar__names">
                        <BookIcon /> <span>Skills</span>
                    </div></a>
                    <a href="#Projects" onClick={() => close()}><div className="Navbar__names">
                        <ContentPasteGoIcon /> <span>Projects</span>
                    </div></a>
                    <a href="#Experience" onClick={() => close()}><div className="Navbar__names">
                        <StarIcon /> <span>Experience</span>
                    </div></a>
                    <a href="#MiniProjects" onClick={() => close()}><div className="Navbar__names">
                        <AppsIcon /> <span>Mini Projects</span>
                    </div></a>
                    <div className="copyright">@copyright <span>Aakarsh</span></div>
                </div>
            </div>
        </>
    )
}

export default Navbar