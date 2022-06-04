import React from 'react'
import {useState} from 'react'
import { 
  Container,
  ImgWrap, 
  Img, 
  FormContainer, 
  Form, 
  Wrapper,
  FormH1,
  FormLabel,
  FormInput,
  FormButton, 
  FormWrapper, 
  OrangeTitle, 
  FormTextArea 
} from './FormSectionElements'
import Img1 from '../../images/mendoza-6.jpg'


const FormSection = () => {
    const [inputs, setInputs] = useState({});
    const [textArea, setTextarea] = useState("");
    console.log(inputs)
   // console.log(textArea)
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    // const handleTextArea = (event) => {
     
    //   const name = event.target.name
    //   const value = event.target.value
    //   setTextarea (value);
    // }
  

    const saveFormData = async () => {
      const response = await fetch('https://api-mendoza.herokuapp.com/api/usuario', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
        //, textArea
      });
      if (response.status !== 200) {
        throw new Error(`Request failed: ${response.status}`); 
      }
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await saveFormData ()
        alert("Gracias!, pronto nos contactaremos contigo");
        setInputs("")
        setTextarea("")}
  
        catch (event) {
          alert(`Request failed: ${event.message}`);
        }
     }







  return (
    <Container id='form'>
        <Wrapper>
                 <FormH1>
                    Contactanos ! <br />
                    <OrangeTitle>
                        Te estamos esperando
                    </OrangeTitle>
                </FormH1>
            
            <FormContainer>

                <Form name="form completo" onSubmit={handleSubmit} >

                   <FormWrapper>

                   <FormLabel htmlFor='for'>Nombre</FormLabel>
                   <FormInput 
                                     class="input-text" 
                                     type="text" required
                                     placeholder=""
                                     name="nombre"
                                     value={inputs.nombre || ""}
                                     onChange={handleChange}
                   
                   ></FormInput>
                                      <FormLabel htmlFor='for'>Teléfono</FormLabel>
                   <FormInput 
                                     class="input-text" 
                                     type="number" 
                                     placeholder=""
                                     name="telefono"
                                     value={inputs.telefono || ""}
                                     onChange={handleChange}
                   
                   ></FormInput>

                   <FormLabel htmlFor='for'>Email</FormLabel>
                   <FormInput    
                                    class="input-text"  
                                    type="email" required
                                    placeholder=""
                                    name="email"
                                    value={inputs.email || ""}
                                    onChange={handleChange}
                    ></FormInput>

                   <FormLabel htmlFor='for'>Tu comentario</FormLabel>
                   <FormTextArea
                                     class="input-text"
                                     name="mensaje" 
                                     id="" 
                                     cols="30" 
                                     rows="2"
                                     value={inputs.mensaje || ""}
                                     onChange={handleChange}
                   
                   
                   
                   ></FormTextArea>
                   <FormButton type='submit'>Enviar</FormButton>

                   </FormWrapper>


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