import React from 'react';
import myImage from'../assets/Winnie.jpg';

export default function header(){
   return(
    <div className="header">
        <div className="header-container">
            <img className='image-container' src={myImage} alt="myimage"/>
            <div className="title">
                <h1>Winnie Thomas</h1>
                <a href = "winnieantony1988@gmail.com">Send Email</a>
                <h3>Contact no:00447496200841</h3>
                </div>

        </div>
    </div>
   )
}