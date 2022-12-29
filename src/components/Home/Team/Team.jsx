import React from 'react'
import { jaime, katya } from '../../../assets'

export const Team = () => {
  return (
    <section id='team' className='flex flex-col justify-center items-center mt-24'>
      <p className='font-poppins font-semibold text-4xl text-primary mb-5'>Nuestro Equipo</p>
      <p className='font-rubik'>Conoce a quienes hacen que Warmi sea posible</p>

      <div className='flex flex-row flex-wrap mt-5 gap-16'>

        <div className='flex flex-col w-52 bg-accent bg-opacity-20 rounded overflow-hidden shadow-lg'>
          <img 
            src={jaime}
            alt="Jaime Fernández"
            className='w-full'
          />
          <p className='font-poppins font-semibold text-lg  text-center pt-4 bg-white'>Jaime Fernández</p>
          <p className='font-rubik font-light text-sm text-gray-600 text-center pb-4 bg-white'>CEO and COO</p>
        </div>

        <div className='flex flex-col w-52 bg-accent bg-opacity-20 rounded overflow-hidden shadow-lg'>
          <img 
            src={katya}
            alt="Katya"
            className='w-full'
          />
          <p className='font-poppins font-semibold text-lg  text-center pt-4 bg-white'>Katya</p>
          <p className='font-rubik font-light text-sm text-gray-600 text-center pb-4 bg-white'>CEO and COO</p>
        </div>

      </div>
    </section>
  )
}
