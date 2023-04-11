import React from 'react';
import myImage from'../../assets/Winnie.jpg';

export default function About() {
  return (
    <div className= 'abt-card'>
      <div className='abtcard-header'>About</div>
      <img className='image-container' src={myImage} alt="myimage"/>
      <p className='abtcard-body'>
      Full stack developer leveraging background in finance and engineering to provide unique perspective on how end users interact with website and software solutions. I have earned a certificate in Full stack web development from the university of Birmingham coding Boot Camp. 
      I have a bachelor’s degree in computer science engineering from the university of Kerala, India.A person who is continuously develop skills and knowledge both professionally and personally. A detailed oriented problem solver who thrives when collaborating and contributing
     skills to the success of a team or organisation. Willingness to take challenge and work diligently to achieve goals.
      </p>
    </div>
  );
}
