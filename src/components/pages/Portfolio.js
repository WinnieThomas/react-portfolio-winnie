import React from 'react';

import IMG1 from  '../../assets/WOW-logo.png';
import IMG2 from '../../assets/Weather1.png';
import IMG3 from '../../assets/booksearch2.png';
import IMG4 from '../../assets/note.png';
import IMG5 from '../../assets/PWA1.png';

import { FaGithub } from 'react-icons/fa'
import { GrDeploy } from 'react-icons/gr'


const data = [
  {
    id:1,
    image:IMG1,
    title:'Whats On Where',
    desc:'An app which shows the events based on the user input',
    github:'https://github.com/MindOfDevelopment/Whats-On-Where',
    link:'https://mindofdevelopment.github.io/Whats-On-Where/',
  },
  {
    id:2,
    image:IMG2,
    title:'Weather API',
    desc:'An app which shows the weather for the next 5days.',
    github:'https://github.com/WinnieThomas/WeatherAPI',
    link:'https://winniethomas.github.io/WeatherAPI/',
  },
  {
    id:3,
    image:IMG3,
    title:'Book Search Engine',
    desc:'An app where the user can search books and also save them for future',
    github:'https://github.com/WinnieThomas/Book-search-engine',
    link:'https://boiling-oasis-89765.herokuapp.com/',
  },
  {
    id:4,
    image:IMG4,
    title:'Workday Scheduler',
    desc:'An app which allows user to enter the schedule allowing the users to better manage their time ',
    github:'https://github.com/WinnieThomas/Workday-Scheduler',
    link:'https://winniethomas.github.io/Workday-Scheduler/',
  },
  {
    id:5,
    image:IMG5,
    title:'PWA Text Editor',
    desc:'First Progressive Web application development',
    github:'https://github.com/WinnieThomas/PWA-TextEditor',
    link:'https://pure-lake-47302.herokuapp.com/',
  }

]

export default function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="portfolio-container">
       {
        data.map(({id,image,title,desc,github,link})=>{
          return(
         <div key={id} className='card-container'>
           <div className='portfolioimg-container'>
            <img src={image} alt={title} />
           </div>
           <h3>{title}</h3>
           <p>{desc}</p>
           <div className="portfolioitem-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer" ><FaGithub />Github</a>
                  <a href={link} className='btn btn-primary' target='_blank' rel="noopener noreferrer"><GrDeploy />Deployed Link</a>
                </div>
         </div>
          )
        })
       } 
      </div>
    </div>
  );
}
