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
    github:'',
    link:'',
  },
  {
    id:2,
    image:IMG2,
    title:'Weather API',
    desc:'An app which shows the weather for the next 5days.',
    github:'',
    link:'',
  },
  {
    id:3,
    image:IMG3,
    title:'Book Search Engine',
    desc:'An app where the user can search books and also save them for future',
    github:'',
    link:'',
  },
  {
    id:4,
    image:IMG4,
    title:'Note Taker',
    desc:'An app which allows user to enter the notes allowing the users to better organize their thoughts ',
    github:'',
    link:'',
  },
  {
    id:5,
    image:IMG5,
    title:'PWA Text Editor',
    desc:'First Progressive Web application development',
    github:'',
    link:'',
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
           <div className='image-container'>
            <img src={image} alt={title} />
           </div>
           <h3>title</h3>
           <h4>desc</h4>
           <div className="portfolio__item-cta">
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
