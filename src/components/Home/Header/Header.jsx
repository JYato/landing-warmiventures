import React from 'react'
import { bloggingBoySVG } from '../../../assets'

export const Header = () => {
  return (
    <header className='flex flex-col lg:flex-row  justify-center items-center gap-14 lg:gap-20 mt-3 lg:mt-10'>
        <div className='flex flex-col w-9/12 lg:w-3/12 gap-3'>
            <h1 className='font-poppins font-semibold text-5xl md:text-7xl xl:text-8xl text-primary'>DemoDay</h1>
            <h2 className='font-poppins font-semibold text-3xl md:text-5xl 2xl:text-6xl text-accent'>Warmi Ventures</h2>
            <p className='font-rubik text-black text-lg md:text-2xl 2xl:text-3xl font-light mt-4'>Participa en nuestro primer DemoDay del año 2023 en la que startups lideradas por mujeres presentarán sus proyectos</p>
            <p className='font-rubik text-black text-xl md:text-2xl 2xl:text-2xl font-semibold mt-3 -mb-3'>Fecha: jueves 26 de enero</p>
            <p className='font-rubik text-black text-xl md:text-2xl 2xl:text-2xl font-semibold'>Hora: 18 horas PER/MEX/COL</p>
            {/* <button className='bg-accent btn text-white font-bold w-3/5'>Únete a Warmi</button> */}
        </div>
        <img 
            src={bloggingBoySVG}
            alt="blogging"
            className='w-9/12 lg:w-5/12'
        />

    </header>
  )
}
