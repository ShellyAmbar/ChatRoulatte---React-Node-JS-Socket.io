import React ,{useState }from 'react'
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components"
import MenuToggle from './MenuToggle';
import {motion} from "framer-motion"
import transitions from '@material-ui/core/styles/transitions';
import NavigationMenu from './NavigationMenu';

 const   HamburgerMenuContainer = styled.div`
      display:flex;
    
      `
       
    
const  HamburgerMenuIcon= styled.div`
color: ${({reverseColor}) => reverseColor ? "#000":"#fff"};
cursor: pointer;
z-index: 99;
transition: all 250ms ease-in-out;
`
const    MenuContainer= styled(motion.div)`
min-width: 30%;
width: 100%;
height: 100%;
max-width: 44%;
background-color: rgba(134, 44, 44, 0.274);
box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
z-index: 90;
position: fixed;
transform: translateX(103%);
top: 0;
right: 0;
user-select: none;
padding: 1em 2.5em;

`


const menuVariants = {
      open:{
            transform: "translateX(3%)"
      },
      closed:{
            transform: "translateX(103%)"
      }

}

const menuTransition = {
      type: "spring",
      duration:3,
      stiffness: 33,
      delay: 0.2
}
 
export  function HamburgerMenu(props){

      const [IsOpen, setIsOpen] = useState(false)
      const toggleMenu = ()=>{
           setIsOpen(!IsOpen) 
      }

      return(
            <HamburgerMenuContainer>
                  <MenuToggle toggle={toggleMenu} isOpen={IsOpen} />
                  <MenuContainer initial={false} animate={IsOpen ? "open" : "closed"} variants={menuVariants} transition={menuTransition}>
                        <NavigationMenu  isOpen={IsOpen}/>
                  </MenuContainer>
            </HamburgerMenuContainer>
      )
}
