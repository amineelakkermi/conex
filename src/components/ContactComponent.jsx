import React from 'react'
import styles from '../style'
import { img104, img124, img129, img133, img17, img71 } from '../assets'

const ContactComponent = () => {
  return (
    <section className={`flex flex-row  w-full h-screen relative`}>
      {/* Partie gauche */}
      <div className="flex bg-[#263c83] md:w-[45%] flex-col gap-5 justify-center px-10">
  
      <h1 className={`${styles.title} text-white`}>Get in touch</h1>
      <p className='text-white'>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt facilis sequi debitis reiciendis ad repudiandae similique enim ut veniam.
      </p>
     
      <a href="tel:+96613893100" className='text-white text-[16px] duration-300 hover:text-orange font-medium'>
        Phone Number : +966 13 89 3100
      </a>
      <a href="mailto:info@sa-conex.com" className='text-white text-[16px] duration-300 hover:text-orange font-medium'>
      Email : info@sa-conex.com
      </a>
      </div>
      
      {/* Partie droite avec image en background */}
      <div className='md:flex hidden md:w-[55%] relative'>
        <div className='absolute inset-0 w-full h-full'>
          <img src={img104} alt="Image" className='w-full h-full object-cover' />
        </div>
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#8e95a9] to-[#252D48] opacity-60"
        ></div>
      </div>
    </section>
  )
}

export default ContactComponent;
