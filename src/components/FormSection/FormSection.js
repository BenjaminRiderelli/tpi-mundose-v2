import React from 'react'
import { Container,ImgWrap, Img, FormContainer, Form, Wrapper } from './FormSectionElements'
import Img1 from '../../images/mendoza-5.png'


const FormSection = () => {
  return (
    <Container>
        <Wrapper>
            
            <FormContainer>
                <Form>

                </Form>
            </FormContainer>

        </Wrapper>
        <Wrapper>

            <ImgWrap>
                    <Img src={Img1}/>
            </ImgWrap>

        </Wrapper>

   </Container>
  )
}

export default FormSection