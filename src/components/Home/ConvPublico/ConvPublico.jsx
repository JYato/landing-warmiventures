import React from 'react'
import { charlas } from '../../../assets'

export const ConvPublico = () => {
  return (
    <section id='convpublico' className='flex flex-col lg:flex-row justify-center items-center mt-32  w-9/12 lg:w-10/12 mx-auto'>
        <div className='flex flex-col lg:w-5/12 gap-8'>
            <h1 className='font-poppins font-semibold text-5xl lg:text-4xl text-primary'>¿Quieres formar parte del público?</h1>
            <p className='font-rubik text-black text-2xl font-light'>Para ser parte del evento desde la parte del espectador, haz click en el siguiente botón.</p>
            <button className='bg-accent btn text-white font-bold w-2/5 text-base md:text-lg  self-center md:self-start'><a href="https://forms.gle/eTHyBSaRbM9GPauV7" target="_blank">REGISTRO</a> </button>
        </div>
        <img src={charlas} alt="público" className='w-full lg:w-5/12 -scale-x-100 max-h-96'/>
        
    </section>
  )
}
