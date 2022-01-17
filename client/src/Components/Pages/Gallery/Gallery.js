import React from 'react'
import "./Gallery.css";
import data from './data'

function Gallery() {
    return (
        <div className='gallery-container'>
            
             <div className='grid-container'>
           
           {
               data.map((value, index)=>
                  
                  
                       <div className='grid-item' key={index}>
                   
                       <img src={value.img} alt=''/> 
                       </div>
               )
           }
       
       </div>
  </div>
      
    )
}

export default Gallery
