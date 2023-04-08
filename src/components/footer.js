import React from 'react';

import {AiFillCopyrightCircle} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/fa";
import {AiFillGithub} from "react-icons/fa";

export default function footer(){
    return(
        <div className='footer-container'>
            <div className='footer-icons'>
            <a href=""><AiFillLinkedin/></a>
            <a href=""><AiFillGithub/></a>
        </div>
        <div className='footer-address'>
            <p>
                31 Brightside Road
                Manchester
                M8 5XJ
            </p>
        </div>
    </div>
    )
}
