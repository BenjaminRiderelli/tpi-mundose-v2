import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute  } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
    
<SidebarContainer isOpen={isOpen} onClick={toggle}>

    <Icon onClick={toggle}>
      <CloseIcon />
    </Icon >
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarLink to="inicio" onClick={toggle}>
            About
        </SidebarLink>
        <SidebarLink to="actividades" onClick={toggle}>
            Actividades
        </SidebarLink>
        <SidebarLink to="fotos" onClick={toggle}>
            Fotos
        </SidebarLink>
        <SidebarLink to="planes" onClick={toggle}>
            Planes
        </SidebarLink>
      </SidebarMenu> 
      <SideBtnWrap>
        <SidebarRoute to="/signin" onClick={toggle}>
            Escribenos!
        </SidebarRoute>
      </SideBtnWrap>           
    </SidebarWrapper>
</SidebarContainer>



    );
};

export default Sidebar