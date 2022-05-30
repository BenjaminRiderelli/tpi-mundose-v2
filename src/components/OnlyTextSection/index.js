import React from 'react'
import { SectionContainer, SectionContent, SectionH3, SectionSpan, SectionP, SectionDiv, SectionHeader } from './OnlyTextElements';

const OnlyTextSection = () => {
  return (

      <SectionContainer id='inicio'>
        <SectionDiv>

            <SectionHeader>
            <SectionH3>Mendoza es aventura <br /> <SectionSpan> Conoce las distintas actividades</SectionSpan></SectionH3>
            </SectionHeader>
            <SectionContent>
            <SectionP>
                  Explorar, descubrir e inventar son actividades que requieren de una buena dosis de incentivo personal: las tres se inclinan gozosamente hacia el turism aventura; sobre todo en aquellos que encaran la naturaleza como un laboratorio en plena evolución y quieren cambiar el asfalto por algo realmente distinto.

                  Los escenarios naturales parecen haber sido especialmente diseñados para la práctica del turismo aventura en Mendoza.

                  Para encarar cualquier vertiente del turismo aventura es necesario una cuota de arrojo, otra de autosuperación y, fundamentalmente, saber qué medio es el que más se ajusta a las expectativas individuales: debemos decidir si queremos hacerlo por tierra, por agua y por aire. En las tres opciones, Mendoza es un excelente escenario.
            </SectionP>
            </SectionContent>
        </SectionDiv>
          
      </SectionContainer>
      

  );
}

export default OnlyTextSection;