import React from "react";
import Icon1 from '../../images/mendoza-1.jpg'
import Icon2 from '../../images/mendoza-2.jpg'
import Icon3 from '../../images/mendoza-3.jpg'
import Slider from 'react-styled-carousel';
import {
    PlanesSection, PlanesWrapper, SliderImg, OrangeContainer,OrangeContainerH2,OrangeContainerH3, OrangeContainerP, SliderWrapper
} from './PlanesElements'
import './style.css'


const PlanesCarousel = () =>{

    const responsive = [
        { breakPoint: 480, cardsToShow: 1 },
      ];


    return (

        <PlanesSection>
            <PlanesWrapper>
                <SliderWrapper>
                    <Slider responsive={responsive} showArrows={true} autoSlide={false} className="SliderComponent">                   
                        <SliderImg src={Icon1}/>
                        <SliderImg src={Icon2}/>
                        <SliderImg src={Icon3}/>
                    </Slider>
                </SliderWrapper>

                <OrangeContainer>
                    <OrangeContainerH2 >Nemo Enim </OrangeContainerH2>
                    <OrangeContainerH3 className="test">Sed ut perspiciatis</OrangeContainerH3>
                    
                    <OrangeContainerP>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</OrangeContainerP>
                </OrangeContainer>
            </PlanesWrapper>
        </PlanesSection>
    );
}





export default PlanesCarousel;