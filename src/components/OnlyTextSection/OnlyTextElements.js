import styled from 'styled-components'

export const SectionContainer = styled.section`
diplay:flex;
justify-content:center;
padding: 50px 0px;
box-sizing:border-box;
height:880px;
position: relative;
margin-bottom: 0px;
background-color: #F2F4F1;
`

export const SectionDiv = styled.div`
display:flex;
flex-direction: column;
border-left:32px solid #E0752F; 
padding-left: 50px;
margin-top:50px;
margin-bottom:50px;



`
export const SectionHeader = styled.div`
display:flex;
justify-content:center;
margin-right:27%;
margin-top:200px;

`

export const SectionContent = styled.div`
display:flex;
margin-top: 20px;
margin-bottom: 80px; 
align-items: center;
justify-content: center;

`
export const SectionH3 = styled.h3`
font-size: 39px;
font-weight: 700;

@media screen and (max-width: 780px){
    font-size:29px;
}

`

export const SectionP = styled.p`

margin-top: 50px;
margin-right:20%;
width: 768px;
height: 197px;
text-align: left;
letter-spacing: 0.22px;
color: #343434;
opacity: 1;

@media screen and (max-width: 780px){
    font-size:10px;
}


`
export const SectionSpan = styled.span`

color:#E0752F
`