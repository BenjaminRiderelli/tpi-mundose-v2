import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InicioSection from '../components/InicioSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Planes from '../components/Planes'
import Footer from '../components/Footer'


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
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <Planes />
    <InfoSection {...homeObjThree}/>
    <Footer />
   </>
  )
}

export default Home