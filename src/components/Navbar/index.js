import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
     <NavbarContainer>
     <NavLogo to='/'>25 Watts</NavLogo>  
     <MobileIcon onClick={toggle}>
        <FaBars />
     </MobileIcon> 
     <NavMenu>
         <NavItem>
             <NavLinks to="inicio">Inicio</NavLinks>
         </NavItem>
         <NavItem>
             <NavLinks to="actividades">Actividades</NavLinks>
         </NavItem>
         <NavItem>
             <NavLinks to="fotos">Fotos</NavLinks>
         </NavItem>
         <NavItem>
             <NavLinks to="planes">Planes</NavLinks>
         </NavItem>
     </NavMenu> 
        
     <NavBtn>
         <NavBtnLink to='/signin'>Escribenos
        </NavBtnLink> 
    </NavBtn>
 
     </NavbarContainer>         
    </Nav>     
 </>
  )
}

export default Navbar