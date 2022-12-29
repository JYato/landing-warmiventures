import React from 'react'
import { charlas, incubacion, talleres, voluntariado } from '../../../assets'

export const Services = () => {
  return (
    <section id='servicios' className='flex flex-col justify-center items-center mt-24'>
      <p className='font-poppins font-semibold text-4xl text-primary mb-5'>Servicios</p>

      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col gap-8 md:w-4/12'>
          <p className='font-poppins font-semibold text-2xl text-primary'>Incubación</p>
          <p className='font-rubik font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi doloremque, error incidunt ducimus.  </p>
        </div>
        <img 
          src={incubacion}
          alt="incubación"
          className='md:w-5/12'
        />
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
        <img 
          src={voluntariado}
          alt="voluntariado"
          className='md:w-5/12 -scale-x-100'
        />
        <div className='flex flex-col gap-8 md:w-3/12'>
          <p className='font-poppins font-semibold text-2xl text-primary'>Voluntariado</p>
          <p className='font-rubik font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi doloremque, error incidunt ducimus.  </p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col gap-8 md:w-3/12'>
          <p className='font-poppins font-semibold text-2xl text-primary'>Charlas</p>
          <p className='font-rubik font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi doloremque, error incidunt ducimus.  </p>
        </div>
        <img 
          src={charlas}
          alt="charlas"
          className='md:w-5/12'
        />
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center'>
        <img 
          src={talleres}
          alt="talleres"
          className='md:w-5/12 -scale-x-100'
        />
        <div className='flex flex-col gap-8 md:w-3/12'>
          <p className='font-poppins font-semibold text-2xl text-primary'>Talleres</p>
          <p className='font-rubik font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi doloremque, error incidunt ducimus.  </p>
        </div>
      </div>

    </section>
  )
}
