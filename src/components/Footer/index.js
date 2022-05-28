import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { 
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube } from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterWrap,
    FooterLinksContainer, 
    FooterLinksWrapper,
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink } from './FooterElements';


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
  
    return (
  

        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>     
                            Mendoza Crece
                            </FooterLinkTitle>
                                <FooterLink to="/signin"> Iniciativa ambiental</FooterLink>
                                <FooterLink to="/signin">  </FooterLink>
                                <FooterLink to="/signin"> rchitecto beatae </FooterLink>
                                <FooterLink to="/signin">rchitecto beatae </FooterLink>
                                <FooterLink to="/signin">rchitecto beatae </FooterLink>
                                <FooterLink to="/signin">rchitecto beatae</FooterLink>
  
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>     
                            Quienes Somos
                            </FooterLinkTitle>
                                <FooterLink to="/signin"> Leonel Saavedra</FooterLink>
                                <FooterLink to="/signin"> Benjamin Riderelli </FooterLink>
                                <FooterLink to="/signin"> Y muchos más </FooterLink>
                                <FooterLink to="/signin">rchitecto beatae </FooterLink>
                                <FooterLink to="/signin">rchitecto beatae </FooterLink>
                                <FooterLink to="/signin">rchitecto beatae</FooterLink>
  
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>     
                            Redes Sociales
                            </FooterLinkTitle>
                                <FooterLink to="/signin"> Twitter</FooterLink>
                                <FooterLink to="/signin"> Facebook </FooterLink>
                                <FooterLink to="/signin"> Instagram </FooterLink>
                                <FooterLink to="/signin">TikTok </FooterLink>
                                <FooterLink to="/signin">rchitecto beatae </FooterLink>
                                <FooterLink to="/signin">rchitecto beatae</FooterLink>
  
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>     
                            Patrocinadores
                            </FooterLinkTitle>
                                <FooterLink to="/signin"> Finca La encantada</FooterLink>
                                <FooterLink to="/signin"> Pulmary Guest House</FooterLink>
                                <FooterLink to="/signin"> El Viejo Manzano</FooterLink>
                                <FooterLink to="/signin">Finca Los Arrieros </FooterLink>
                                <FooterLink to="/signin">Posada Estilo campo</FooterLink>
                                <FooterLink to="/signin">Park Hyatt Mendoza</FooterLink>
  
                        </FooterLinkItems>
                    </FooterLinksWrapper>           
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            25 Watts
                        </SocialLogo>
                        <WebsiteRights>
                            25 Watts  Ⓡ {new Date().getFullYear()} Todos los derechos reservados
                        </WebsiteRights>
                        <SocialIcons>
                               <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                               <FaFacebook />
                               </SocialIconLink>

                               <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                               <FaTwitter />
                               </SocialIconLink>

                               <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                               <FaInstagram />
                               </SocialIconLink>

                               <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                               <FaYoutube />
                               </SocialIconLink>

                               <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Linkedin">
                               <FaLinkedin />
                               </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia> 
            </FooterWrap>
        </FooterContainer>
  )
}

export default Footer;