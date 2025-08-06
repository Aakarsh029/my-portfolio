import React, { useState, useEffect } from 'react'
import "./css/Freelancing.css";
import freelancingProjects from './GetFreelancingProjects.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LinkIcon from '@mui/icons-material/Link';
import WorkIcon from '@mui/icons-material/Work';

function Freelancing() {
  const [items, setItems] = useState(freelancingProjects);

  const filterItem = (cateItem) => {
    const updatedItems = freelancingProjects.filter((curele) => {
      return curele.category === cateItem;
    });
    setItems(updatedItems);
  }

  const filter = document.querySelectorAll(".freelance-filter");
  var sliderNav = function (manual) {
    filter.forEach((filter) => {
      filter.classList.remove("active");
    })
    filter[manual].classList.add("active");
  }
  filter.forEach((filter, i) => {
    filter.addEventListener("click", () => {
      sliderNav(i);
    })
  })

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="Freelancing" id='Freelancing'>
      <div className="Freelancing__heading">Freelance Work</div>
      <hr />
      <div className="Freelancing__content">
        Here are some of the freelancing projects I've completed for clients.
        Each project represents a unique challenge and solution tailored to specific business needs:
      </div>
      {/* <div className="Freelancing__tabs">
        <ul id="Freelancing__tab__filters">
          <li className="freelance-filter active" onClick={() => setItems(freelancingProjects)}>All</li>
          <li className='freelance-filter' onClick={() => filterItem('web')} >Web</li>
          <li className='freelance-filter' onClick={() => filterItem('mobile')}>Mobile</li>
          <li className='freelance-filter' onClick={() => filterItem('design')}>Design</li>
        </ul>
      </div> */}
      <div className="Freelancing__container">
        {
          items.map((element, index) => {
            const { name, image, description, link, client, duration, status } = element;
            return (
              <div key={index} className="Freelancing__holder" data-aos="zoom-in">
                <div className="Freelancing__details">
                  <div className="Freelancing__image">
                    <img src={image} alt={name} />
                  </div>
                  <div className="Freelancing__info">
                    <div className="Freelancing__info__heading">{name}</div>
                    <div className="Freelancing__client">
                      {/* <WorkIcon fontSize="small" /> Client: {client} */}
                    </div>
                    <div className={`Freelancing__status ${status.toLowerCase()}`}>
                      Status: {status}
                    </div>
                    <div className="Freelancing__info__content">
                      {description}
                    </div>
                  </div>
                </div>
                <div className="Freelancing__Absolute__holder"></div>
                <div className="Freelancing__Absolute__link__holder">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <LinkIcon />
                  </a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Freelancing
