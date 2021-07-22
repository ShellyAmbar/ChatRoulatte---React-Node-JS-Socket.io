import { motion } from "framer-motion";
import React, {useContext} from "react";
import styled from 'styled-components'
import { SocketContext } from "../../SocketContext";

const MenuContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

const TopContainer = styled.div`
margin-top:50px;
display: flex;
width: 100%;
flex-direction: row;
justify-content: center;
align-items:center;
text-decoration: none;
  font-size: 40px;
  color: #ffffff;
  transition: all 200ms ease-in-out;
`
const NavList = styled.ul`
padding: 0 0.8em;
width: 100%;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;

`

const NavLink = styled(motion.li)`
font-weight: 600;

margin-top:80px;
display: flex;
align-items: center;
cursor: pointer;
display: flex;
flex-direction:row;
justify-content: center;



a{
  text-decoration: none;
  font-size: 30px;
  transition: all 200ms ease-in-out;
  color: #ffff;
}
&:hover{
  a{
    color: #9c0d3d;
  }
}

`
const variants = {
  show:{
    transform: "translateX(0%)",
    opacity:1
  },
  hide:{
    transform: "translateX(80%)",
    opacity:0
  }
}

function NavigationMenu({isOpen}) {
  const {name} = useContext(SocketContext)
  return <MenuContainer>
    <TopContainer>Hello {name}</TopContainer>
    <NavList>
      <NavLink initial={false} animate={isOpen ? "show": "hide"} variants={{show: {...variants.show, transition:{delay: 0.7}, duration: 0.2}, hide: {...variants.hide, transition:{delay: 0.7}, duration: 0.05}}}>
        <a   href="/PrivateCall">Private Call</a>
      </NavLink>
      <NavLink initial={false} animate={isOpen ? "show": "hide"} variants={{show: {...variants.show, transition:{delay: 1}, duration: 0.2}, hide: {...variants.hide, transition:{delay: 0.6}, duration: 0.05}}}>
        <a  href="/ChatRoulate">ChatRoulate</a>
      </NavLink>
      <NavLink initial={false} animate={isOpen ? "show": "hide"} variants={{show: {...variants.show, transition:{delay: 1.3}, duration: 0.2}, hide: {...variants.hide, transition:{delay: 0.5}, duration: 0.05}}}>
        <a  href="/Settings">Settings</a>
      </NavLink>
    </NavList>
  </MenuContainer>;
}

export default NavigationMenu;
