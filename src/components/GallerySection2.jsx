import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { Link } from 'react-router-dom';
import { textVariant } from '../constants/motion';
import { useTranslation } from 'react-i18next';


const GallerySection2 = ({img , titleAr, titleEn , textAr, textEn}) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  
  return (
  <section className={`${styles.padding} relative imgContainer2 w-full h-screen flex flex-col justify-center items-center`}>
  <div className='overlay2 absolute left-0 top-0 w-full h-screen'>
  <img src={img} className='w-[100%] h-[100%] object-cover opacity-60'/>
  </div>
  <div
  className="colorBg2 absolute w-full h-screen left-0 top-0 opacity-60"
  style={{ background: "linear-gradient(#8e95a9, #252D48)" }}
  ></div>

  <div className='w-full h-screen justify-center items-center flex flex-col gap-5 z-10'>
  <motion.h1
  variants={textVariant(0.3)}
  initial="hidden"
  whileInView="show"
  className={`galleryTitle2 text-shadow-custom transparent-text md:text-[60px] text-[45px] md:max-w-[600px] w-full  xs:leading-[58.8px] leading-[68.8px] font-[600] text-white text-center`}>
  {currentLanguage === "ar" ? titleAr : titleEn}
   </motion.h1>
   <motion.p
  variants={textVariant(0.4)}
  initial="hidden"
  whileInView="show"
   className={`${styles.paragraph} text-center max-w-[500px] text-white mt-5`}>
  {currentLanguage === "ar" ? textAr : textEn}
  </motion.p>

  </div>
  </section> 
   
 
  );
}

export default GallerySection2;
