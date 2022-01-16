import React from 'react'
import {motion} from "framer-motion"
import styled from 'styled-components'

const Button = styled.div`
z-index: 99;
cursor: pointer;
margin: 20px;

`

const Path =(props)=>(
    <motion.path strokeWidth="3" fill="transparent" strokeLinecap="round" color="#fff" {...props}/>
)

const transition = {duration: 0.3}

export default function MenuToggle({toggle, isOpen}) {
    return (
       <Button  onClick={toggle}>
           <svg width="23" height="23" viewBox="0 0 23 23">
               <Path animate={isOpen ? "open": "closed" }   initial= {false} variants={{
                   closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 100%)"} ,
                open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 18%)"},
                }} transition={transition}/>

              

                <Path animate={isOpen ? "open": "closed" }  initial= {false} variants={{
                                closed: { opacity: 1,   d: "M 2 10 L 20 10", stroke: "hsl(0, 0%, 100%)"} ,
                                open: { opacity: 0}}} transition={transition}/>

                <Path animate={isOpen ? "open": "closed" }  initial= {false} variants={{
                   closed: { d: "M 2 17 L 20 17", stroke: "hsl(0, 0%, 100%)"} ,
                open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 18%)"}, 
                }} transition={transition}/>
           </svg>

       </Button>
    )
}
