import React from 'react';
import "./BubbleFloating.css";
import data from './data'
function BubbleFloating(props) {
    return (
        <div className='bubble-container'>
            <ul>
            {
               data.map((value, index)=>
                  
                  
                       <li  key={index}>
                   
                       <img src={value.img} alt=''/> 
                       </li>
               )
           }

            </ul>
           
        
        </div>
    )
}

export default BubbleFloating
