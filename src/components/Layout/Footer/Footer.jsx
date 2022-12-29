import React from 'react'
import { logoFooter, instagramLogo, facebookLogo, linkedinLogo } from '../../../assets'

export const Footer = () => {
  return (
    <footer className='w-full h-52 md:h-44 flex flex-col-reverse md:flex-row justify-center items-center bg-[#01fabe] gap-6 md:gap-24'>

      <div className='flex flex-col font-poppins text-center text-2xl text-[#4a3288]'>

        <p className=''><span className='font-bold text-[#4a3288]'>Warmi</span>Ventures</p>

        <div className='flex flex-row gap-6 items-center justify-center mt-1'>
          <a href="https://www.linkedin.com/company/warmi-ventures/" target="_blank"><img className='w-8 cursor-pointer' src={linkedinLogo} alt="Linkedin" /></a>
          <a href="https://www.facebook.com/warmiventures" target="_blank"><img className='w-8 cursor-pointer' src={facebookLogo} alt="Facebook" /></a>
          <a href="https://www.instagram.com/warmiventures/" target="_blank"><img className='w-8 cursor-pointer' src={instagramLogo} alt="Instagram" /></a>

        </div>
      </div>

      <ul className='flex flex-col lg:flex-row gap-1 md:gap-6 text-base font-poppins text-center text-[#4a3288]'>
          <li><a href="#convstartups">Convocatoria de Startups</a></li>
          <li><a href="#convpublico">Registro del público</a></li>
        </ul>
    </footer>
  )
}
