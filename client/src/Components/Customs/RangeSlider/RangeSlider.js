import React, { useState } from 'react';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import "./RangeSlider.css";

function RangeSlider({onRangeSelected, minValueProp, maxValueProp, units, unitProp }) {
    const [minValue, setMinValue] = useState(minValueProp);
    const [maxValue, setMaxValue] = useState(maxValueProp);
    const [unit, setunit] = useState(unitProp);
    

  const  onInputMinChanged = (event)=>{
        setMinValue(event.target.value);
        let min =event.target.value;
        onRangeSelected(unit, min, maxValue);
    }
    const  onInputMaxChanged = (event)=>{
        setMaxValue(event.target.value);
        let max = event.target.value;
        onRangeSelected(unit, minValue, max)
    }
    const onUnitPicked=(value)=>{
      setunit(value)
     
    }
    return (
        <div>
         <ButtonGroup options={units} callback={onUnitPicked}/>
        <div className="slidecontainer">
         <div className='output-view'>{`${minValue} ${unit}`}</div>   
        <input type="range" min="0" max="50" value={minValue} className="slider" id="myRange" onChange={onInputMinChanged}/>
        <input type="range" min="50" max="100" value={maxValue} className="slider" id="myRange" onChange={onInputMaxChanged}/>
        <div className='output-view'>{`${maxValue}  ${unit}`}</div>
      </div>
      </div>
    )
}

export default RangeSlider
