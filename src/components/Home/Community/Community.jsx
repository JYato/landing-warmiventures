import React from 'react'
import { comunidadPrueba } from '../../../assets'

export const Community = () => {
  return (
    <section id='community' className='flex flex-col justify-center items-center my-24 w-9/12 lg:w-10/12 mx-auto'>
      <p className='font-poppins font-semibold text-5xl lg:text-4xl text-primary'>Comunidad</p>
      <p className='font-rubik text-xl md:text-2xl text-center'>Sé parte de esta grandiosa comunidad de emprendedores</p>
      <img
        src={comunidadPrueba}
        alt="Comunidad"
        className='mt-10 w-full md:w-10/12 lg:w-7/12'
      />
      <button className='bg-accent btn text-white font-bold w-full md:w-6/12 lg:w-2/12 mt-4 '> <a href="https://chat.whatsapp.com/DkKN7GQiL1uJ83aSS9SNqP " target="_blank">Contáctanos a nuestro Whatsapp</a> </button>

    </section>
  )
}
