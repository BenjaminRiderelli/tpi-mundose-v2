import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InicioSection from '../components/InicioSection'
import Footer from '../components/Footer'
import OnlyTextSection from '../components/OnlyTextSection'
import PlanesCarousel from '../components/PlanesCarousel'
import AccordionSection from '../components/AccordionSection'
import "bootstrap/dist/css/bootstrap.min.css"
import FormSection from '../components/FormSection/FormSection'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }


  return (
   <>
   <Sidebar isOpen={isOpen} toggle={toggle} />
   <Navbar toggle ={toggle} />
   <InicioSection />
    <OnlyTextSection />
    <PlanesCarousel />
    <AccordionSection />
    <FormSection />
    <Footer />
   </>
  )
}

export default Home