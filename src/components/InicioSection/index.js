import React from 'react'
import {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import {InicioContainer, InicioBg, VideoBg, InicioContent, InicioH1, InicioP, InicioBtnWrapper, ArrowForward,ArrowRight} from './InicioElements'

const InicioSection = () => {

  const[hover,setHover] = useState(false)

   const onHover = () => {
     setHover (!hover)
   }



  return (
    <InicioContainer>
        <InicioBg>
            <VideoBg autoPlay muted src= {Video} type='video/mp4' /> 
        </InicioBg>
        <InicioContent>
          <InicioH1>
            Mendoza, un destino único
          </InicioH1>
           <InicioP>  
           Escribenos para recibir nuestro newsletter y conocer todas las oportunidades que esconde esta maravillosa ciudad.  
           </InicioP>
           <InicioBtnWrapper>
             <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
             primary = "true"
             dark = "true"
             >
               Adelante! {hover ? <ArrowForward /> : <ArrowRight />}
             </Button>
           </InicioBtnWrapper>
        </InicioContent>
    </InicioContainer>
  )
}

export default InicioSection