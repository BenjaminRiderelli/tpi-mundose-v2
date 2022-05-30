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



@media screen and (max-width:780px){
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
background-color:red;

@media screen and (max-width:780px){
    min-width:350px;
    min-height:600px;

}

`

export const Form = styled.form`


`