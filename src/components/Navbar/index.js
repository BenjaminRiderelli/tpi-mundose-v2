import React, {useEffect, useState} from 'react'
import { IconContext } from 'react-icons/lib'
import {FaBars} from 'react-icons/fa'
//import {iconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {
     Nav,
     NavbarContainer,
     NavLogo,
     MobileIcon,
     NavItem,
     NavLinks,
     NavMenu,
     NavBtn,
     NavBtnLink} 
     from './NavbarElements'
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

        const changeNav = () =>{
            if( window.scrollY > 80){
                setScrollNav(true)
            } else{
                setScrollNav(false)
            }
        }

        useEffect (() => {
            window.addEventListener('scroll', changeNav)
        }, [])

        const toggleHome = () => {
            scroll.scrollToTop()
        }

  return (
    <>
    <IconContext.Provider value = {{color: '#000'}}>
    
    
   
    <Nav scrollNav={scrollNav}>
     <NavbarContainer>
     <NavLogo to='/' onClick={toggleHome}>25 Watts</NavLogo>  
     <MobileIcon onClick={toggle}>
        <FaBars />
     </MobileIcon> 
     <NavMenu>
         <NavItem>
             <NavLinks to="inicio" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Inicio</NavLinks>
         </NavItem>
         <NavItem>
             <NavLinks to="actividades" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Actividades</NavLinks>
         </NavItem>
         <NavItem>
             <NavLinks to="fotos" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Fotos</NavLinks>
         </NavItem>
         <NavItem>
             <NavLinks to="planes" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Planes</NavLinks>
         </NavItem>


     </NavMenu> 
        
     <NavBtn>
         <NavBtnLink to='form'>Escribenos
        </NavBtnLink> 
    </NavBtn>
 
     </NavbarContainer>         
    </Nav>  
    </IconContext.Provider>   
 </>
  )
}

export default Navbar