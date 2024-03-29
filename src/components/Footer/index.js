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