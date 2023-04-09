import React from 'react';

//import {AiFillCopyrightCircle} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

export default function footer(){
    return(
        <div className='footer-container'>
            <div className='footer-icons'>
            <a href="https://www.linkedin.com/in/winnie-thomas-968760226/"><FaLinkedin/></a>
            <a href="https://github.com/WinnieThomas"><FaGithub/></a>
        </div>
        <div className='footer-address'>
               <h3>Contact Address</h3>
                <p>31 Brightside Road</p>
                <p>Manchester</p>
                <p>M8 5XJ</p>
        
        </div>
    </div>
    )
}
