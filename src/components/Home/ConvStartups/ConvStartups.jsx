import React from 'react'
import { talleres } from '../../../assets'

export const ConvStartups = () => {
  return (
    <section id='convstartups' className='flex flex-col-reverse lg:flex-row justify-center items-center mt-32  w-9/12 lg:w-10/12 mx-auto'>
        <img src={talleres} alt="startups" className='w-full lg:w-5/12 max-h-96'/>

        <div className='flex flex-col lg:w-5/12 gap-6'>
            <h1 className='font-poppins font-semibold text-5xl lg:text-4xl text-primary '>Convocatoria de Startups</h1>
            <p className='font-rubik text-black text-2xl font-light'>Buscamos startups que participen del DemoDay frente a jurados expertos</p>

            <ul className='flex flex-col gap-2 mb-4 ml-5'>
                <li className='font-rubik text-black text-2xl font-light list-disc'>Mínimo de 6 meses de lanzamiento</li>                
                <li className='font-rubik text-black text-2xl font-light list-disc'>Con usuarios o ventas</li>
            </ul>
            <button className='bg-accent btn text-white font-bold w-2/5 text-base md:text-lg self-center md:self-start'><a href="https://forms.gle/ZLcap9eLxYrq6KVp8
" target="_blank">POSTULA</a></button>
        </div>
    </section>
  )
}
