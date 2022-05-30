import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Container = styled.div`
position:relative;
display:flex;
align-items:center;
justify-content:space-around;
height:880px;
background: linear-gradient(90deg, #F2F4F1 59%, #DCE1DA 60%);

@media screen and (max-width:780px){
    justify-content:center;
}
`;

export const Wrapper = styled.div`
position:relative;



`


export const ImgWrap = styled.div`



@media screen and (max-width:950px){
display:none;
}

`;

export const Img = styled.img`

height:100%
width:100%

`;

export const FormContainer = styled.div`
min-width:600px;
min-height:400px;
background-color:transparent;
margin-bottom:37px;

@media screen and (max-width:780px){
    min-width:350px;
    min-height:600px;

}

`
export const FormWrapper = styled.div`

margin-top:0px;
display: grid;
background:transparent;


`

export const Form = styled.form`
background:transparent;
max-width: 600px;
max-height:400px;
width: 100%;
display: grid;
padding: 10px 5px;
border-radius: 4px;

@media screen and (max-width:780px){
    min-width:350px;
    min-height:600px;

}

@media screen and (max-width:400px){
    padding: 32px 32px;
}
`



export const FormH1 = styled.h1`
margin-bottom:34px;
margin-left:30px;

color: #000;
font-size: 39px;
font-weight: 400;
text-align:left;
`

export const OrangeTitle = styled.span`
color:#E0752F;
`

export const FormLabel = styled.label`
margin-bottom:3px;
font-size:15px;
font-weight:400;
color: #000;
`

export const FormInput = styled.input`
padding: 5px 5px;
margin-bottom: 15px;
border:none;
border-radius: 4px;
background:transparent;
border-bottom: solid 2px #DCE1DA;
`

export const FormButton = styled.button`
background:#E0752F;
margin-top:20px;
margin-bottom:10px;
padding:16px 0;
border: none;
border-radius: 4px;
color: #000;
font-size:10px;
cursor:pointer;
`

export const FormTextArea = styled.textarea`

border:none;
border-radius: 4px;
background:transparent;

`