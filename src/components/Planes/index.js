import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import { PlanesContainer, 
    PlanesH1, 
    PlanesWrapper, 
    PlanesCard, 
    PlanesIcon, 
    PlanesH2, 
    PlanesP 
         } from './PlanesElements'

const Planes = () => {
  return (
    <PlanesContainer id= 'planes'>       
        <PlanesH1>Volverás por más</PlanesH1>
        <PlanesWrapper>
            <PlanesCard>
                <PlanesIcon src={Icon1} />
                <PlanesH2> Vino </PlanesH2>
                <PlanesP> Los mejores vinos del planeta están aquí</PlanesP>
            </PlanesCard>
            <PlanesCard>
                <PlanesIcon src={Icon2} />
                <PlanesH2> Naturaleza </PlanesH2>
                <PlanesP> Respira el aire puro de la cordillera y relajate </PlanesP>
            </PlanesCard>
            <PlanesCard>
                <PlanesIcon src={Icon3} />
                <PlanesH2> Calidez </PlanesH2>
                <PlanesP> Mendoza y su gente es conocida por su hospitalidad</PlanesP>
            </PlanesCard>
        </PlanesWrapper>
    </PlanesContainer>
  )
}

export default Planes