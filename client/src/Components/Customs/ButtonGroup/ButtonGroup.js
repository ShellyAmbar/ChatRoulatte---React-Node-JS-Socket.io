import { Button } from '@material-ui/core';
import React from 'react';
import "./ButtomGroup.css";

function ButtonGroup({options, callback}) {
    const onValuePicked =(value)=>{
     
       console.log(value);
        callback(value)
    }
       
   
    return (
      
    <div class="btn-group">
        
    {
        options.map((value, index)=>
            <div className='group-button' key={index} onClick={()=>onValuePicked(value)}>{value}</div>
        )
    }
 
 
</div>  
       
    )
}

export default ButtonGroup
