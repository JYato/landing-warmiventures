import React from 'react'
import { logo, facebookLogo, instagramLogo, linkedinLogo } from '../../../assets'

export const TopBar = () => {
  return (
    // <navbar className='w-full h-32 bg-white flex flex-row justify-evenly items-center'>
    //   <img 
    //     src={logo} alt="Logo de Warmi Ventures"
    //     className='w-60 h-20 p-3'
    //   />
    //   <ul className='flex gap-6 mx-3'>
    //     <li className='font-poppins text-lg'> <a href="https://www.linkedin.com/company/warmi-ventures/" target="_blank" className='flex flex-row gap-2 items-center'> <img src={linkedinLogo} alt="linkedin" className='w-8 cursor-pointer'/> Linkedin</a> </li>
    //     <li className='font-poppins text-lg'> <a href="https://www.facebook.com/warmiventures" target="_blank" className='flex flex-row gap-2 items-center'> <img src={linkedinLogo} alt="linkedin" className='w-8 cursor-pointer'/>  Facebook</a> </li>
    //     <li className='font-poppins text-lg'> <a href="https://www.instagram.com/warmiventures/" target="_blank" className='flex flex-row gap-2 items-center'> <img src={instagramLogo} alt="instagram" className='w-8 cursor-pointer'/> Instagram</a> </li>
        
    //   </ul>
    // </navbar>
    <div className="drawer h-52 md:-32 ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      
      <div className="drawer-content flex flex-col h-32 ">
        <div className="w-full navbar bg-white justify-evenly items-center">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <img 
            src={logo} alt="Logo de Warmi Ventures"
            className='w-60 h-20 p-3'
          />
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-6">
              <li className='font-poppins text-lg'> <a href="https://www.linkedin.com/company/warmi-ventures/" target="_blank" className='flex flex-row gap-2 items-center'> <img src={linkedinLogo} alt="linkedin" className='w-8 cursor-pointer'/> Linkedin</a> </li>
              <li className='font-poppins text-lg'> <a href="https://www.facebook.com/warmiventures" target="_blank" className='flex flex-row gap-2 items-center'> <img src={facebookLogo} alt="linkedin" className='w-8 cursor-pointer'/>  Facebook</a> </li>
              <li className='font-poppins text-lg'> <a href="https://www.instagram.com/warmiventures/" target="_blank" className='flex flex-row gap-2 items-center'> <img src={instagramLogo} alt="instagram" className='w-8 cursor-pointer'/> Instagram</a> </li>
            </ul>
          </div>
        </div>
      </div> 

      
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100">
              <li className='font-poppins text-lg'> <a href="https://www.linkedin.com/company/warmi-ventures/" target="_blank" className='flex flex-row gap-2 items-center'> <img src={linkedinLogo} alt="linkedin" className='w-8 cursor-pointer'/> Linkedin</a> </li>
              <li className='font-poppins text-lg'> <a href="https://www.facebook.com/warmiventures" target="_blank" className='flex flex-row gap-2 items-center'> <img src={facebookLogo} alt="linkedin" className='w-8 cursor-pointer'/>  Facebook</a> </li>
              <li className='font-poppins text-lg'> <a href="https://www.instagram.com/warmiventures/" target="_blank" className='flex flex-row gap-2 items-center'> <img src={instagramLogo} alt="instagram" className='w-8 cursor-pointer'/> Instagram</a> </li>          
        </ul>
        
      </div>
    </div>
  )
}