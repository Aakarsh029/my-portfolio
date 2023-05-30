import React, { useState , useEffect } from 'react'
import "./css/Project.css";
import projects from './GetProjects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LinkIcon from '@mui/icons-material/Link';
function Project() {
  const [items, setItems] = useState(projects);
  const filterItem = (cateItem) => {
    const updatedItems = projects.filter((curele) => {
      return curele.category === cateItem;
    });
    setItems(updatedItems);
  }

  const filter = document.querySelectorAll(".filter");
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
  },[])


 
  return (
    <div className="Project" id='Projects'>
      <div className="Project__heading">Project</div>
      <hr />
      <div className="Project__content">I have
        started Web Development quite recently
        and have developed many
        projects apart from this portfolio website.
        So, Here are some of my projects:</div>
      <div className="Project__tabs">
        <ul id="Project__tab__filters">
          <li className="filter active" onClick={() => setItems(projects)}>All</li>
          <li className='filter' onClick={() => filterItem('web')} >Web</li>
          <li className='filter' onClick={() => filterItem('ml')}>ML</li>
        </ul>
      </div>
      <div className="Project__container">

        {
          items.map((element) => {
            const { name, image, description,link } = element;
            return (
              <div className="Project__holder " data-aos="zoom-in">
                <div className="Project__details">
                  <div className="Project__image">
                    <img src={image} alt="" />
                  </div>
                  <div className="Project__info">
                    <div className="Project__info__heading">{name}</div>
                    <div className="Project__info__content">
                      {description} 
                    </div>
                  </div>
                </div>
                <div className="Project__Absolute__holder"></div>
                <div className="Project__Absolute__link__holder"><a href={link}><LinkIcon /></a></div>
              </div>

            )
          })
        }
      </div>
      
    </div>
  )
}

export default Project