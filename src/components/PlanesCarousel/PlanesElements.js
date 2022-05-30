import styled from 'styled-components'

export const PlanesSection = styled.section`
top:0;
height:880px;
display:flex;
justify-content:center;
align-items:center;
background: linear-gradient(90deg, #F2F4F1 59%, #DCE1DA 60%);

`

export const PlanesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position:relative;
`

export const SliderWrapper = styled.div`


`



export const SliderImg = styled.img`
    max-width: 100%;
    max-height: 100%;

`

export const OrangeContainer = styled.div`
background-color: #e0752f;
position:absolute;
display:flex;
flex-direction:column;
justify-content: center;
align-items:left;
height: 50%;
width: 45%;
right: 20px;
bottom: 35px;
padding:2rem 2rem; 


`

export const OrangeContainerH2 = styled.h2`


color: #fff;
text-align:left;
font-size: 39px;

@media screen and (max-width:780px){
    font-size: 20px;
}

@media screen and (max-width:480px){
    font-size: 15px;
}


`

export const OrangeContainerH3 = styled.h3`
margin-bottom: 10px;
color: #fff;
text-align:left;
@media screen and (max-width:780px){
    font-size: 15px;
}
@media screen and (max-width:480px){
    font-size: 10px;
}


`

export const OrangeContainerP = styled.p`

@media screen and (max-width:780px){
    font-size: 10px;
}
@media screen and (max-width:480px){
    font-size: 7px;
}



`