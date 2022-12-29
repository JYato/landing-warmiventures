import React, { useState } from 'react'
import { formImage } from '../../../assets'

export const Contact = () => {

  const [dataUser, setDataUser] = useState({
    nameLastName: "",
    email: "",
    phone: "",
    desc: ""
  });

  const [alert, setAlert] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    const nameLastNameFormat = /^[a-zA-Z ]{2,30}$/;
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneFormat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

    const nameLastName = dataUser.nameLastName.trim();
    const email = dataUser.email.trim();
    const phone = dataUser.phone.trim();
    const desc = dataUser.desc.trim();

    if(nameLastName == "" || email == "" || phone == "" || desc == ""){
      setAlert([{msg: "Todos los campos son obligatorios.", type: "Error"}]);
      return;
    }

    if( !nameLastName.match(nameLastNameFormat) ){
      setAlert([
        ...alert,
        {msg: "Ingrese un nombre y apellido válido.", type: "Error"}
      ]);
    }

    if( !email.match.match(emailFormat)){
      setAlert([
        ...alert,
        {msg: "Ingrese un email válido.", type: "Error"}
      ]);
    }

    if( !phone.match.match(phoneFormat)){
      setAlert([
        ...alert,
        {msg: "Ingrese un número de teléfono válido.", type: "Error"}
      ]);
    }
    
    setTimeout(() => {
      setAlert([]);
    }, 3000);

  }

  const handleNameLastName = (e) => setDataUser( prevState => ({...prevState, nameLastName: e.target.value}))
  const handleEmail = (e) => setDataUser( prevState => ({...prevState, email: e.target.value}))
  const handlePhone = (e) => setDataUser( prevState => ({...prevState, phone: e.target.value}))
  const handleDesc = (e) => setDataUser( prevState => ({...prevState, desc: e.target.value}))

  return (
    <section id='contact' className='flex flex-col md:flex-row justify-center items-center mt-24 bg-primary py-20 md:gap-20'>      
        <div className='flex flex-col w-4/12 gap-4'>
          <p className='font-poppins text-5xl font-semibold text-white mb-4'>Aclara tus dudas</p>
          <input type="text" placeholder='Nombre y Apellido' className='font-rubik input input-bordered w-full' onChange={e => handleNameLastName(e)}/>
          <input type="text" placeholder='Correo electrónico' className=' font-rubik input input-bordered w-full' onChange={e => handleEmail(e)}/>
          <input type="text" placeholder='Teléfono' className='font-rubik input input-bordered w-full' onChange={e => handlePhone(e)}/>
          <textarea className="font-rubik textarea textarea-bordered w-full" placeholder="¿En qué podemos ayudarte?" onChange={e => handleDesc(e)}></textarea>
          <button className='bg-secondary btn text-white font-semibold text-sm w-1/2 self-end'>Enviar Consulta</button>

        </div>
        <img src={formImage} alt="Contacto" className='w-4/12' />

    </section>
  )
}
