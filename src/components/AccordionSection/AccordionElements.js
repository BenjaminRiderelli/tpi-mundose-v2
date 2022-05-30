import styled from 'styled-components'

export const AccordionDiv = styled.section`
display:flex;
position:relative;
justify-content:flex-end;
background: #F2F4F1;

@media screen and (max-width:780px){
    align-content:center;
    justify-content:center;
    height:880px;
    background: linear-gradient(90deg, #F2F4F1 59%, #DCE1DA 60%);
}

`
export const ImgWrapper = styled.div`
display:flex;

max-width:880px;
max-height:880px;
margin-right:0;

@media screen and (max-width:780px){
    max-width:440px;
    max-height:440px;
}

`

export const Img = styled.img`
width:100%;
height:100%;
margin-right:0;
`