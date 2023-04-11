import React from 'react';
import CV from '../../assets/winniethomas.pdf';

export default function Resume() {
  return (
    <div>
      <h3 className="resume-container">
                  <strong>Resume:
                <a target="_blank" rel="noopener noreferrer" className="tab4" href={CV}> Click Here</a></strong>
                </h3>
                <h4>Proficiencies</h4>
      <div className='skill'>
        <div className='skill-list'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>React.js</li>
          <li>Handlebars</li>
        </div>
      </div>
    </div>
  );
}
