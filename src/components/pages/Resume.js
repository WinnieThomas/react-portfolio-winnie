import React from 'react';

export default function Resume() {
  return (
    <div>
      <h3 className="mb-2 pb-2">
                  <strong>Resume:
                <a target="_blank" rel="noopener noreferrer" className="tab4" href={process.env.PUBLIC_URL + "/assets/winnie.pdf"}>  My resume</a></strong>
                </h3>
      <div className='skill'>
        <h3>Proficiencies</h3>
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
