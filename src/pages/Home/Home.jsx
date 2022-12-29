import React from 'react'
import { Header, ConvPublico, ConvStartups ,Services, Team, Community, Contact } from '../../components/Home'

export const Home = () => {
  return (
    <div>
        <Header/>
        <ConvStartups/>
        <ConvPublico/>        
        {/* <Services/> */}
        {/* <Team/> */}
        <Community/>
        {/* <Contact/> */}
    </div>
  )
}
