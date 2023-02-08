import React from 'react'
import "./css/Navbar.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Avatar, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="header">
                <div className="image__header"><div className="image"><img src={require('./images/1.jpg')}/></div></div>
                <div className="header__name">Aakarsh Bansal</div>
                <div className="social__media__links">
                    <div className="social__media__icons">
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>
                    </div>
                    <div className="social__media__icons">
                        <IconButton>
                            <EmailIcon />
                        </IconButton>
                    </div>
                    <div className="social__media__icons">
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                    </div>
                    <div className="social__media__icons">
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                    </div>
                    <div className="social__media__icons">
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className="Navbar__icons">
                <div className="Navbar__names">
                    <HomeIcon /> <span>Home</span>
                </div>
                <div className="Navbar__names">
                    <PersonIcon /> <span>About</span> 
                </div>
                <div className="Navbar__names">
                    <BookIcon /> <span>Skills</span>
                </div>
                <div className="Navbar__names">
                    <ContentPasteGoIcon /> <span>Projets</span>
                </div>
                <div className="Navbar__names">
                    <MailOutlineIcon /> <span>Contact</span>
                </div>
                <div className="copyright">@copyright <span>Aakarsh</span></div>
            </div>
        </div>
    )
}

export default Navbar