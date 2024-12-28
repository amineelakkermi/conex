import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { textVariant } from '../constants/motion';
import { servicesData } from '../constants/data';
import { useTranslation } from 'react-i18next';

const SvgIcon = ({ svg }) => {
    return <div dangerouslySetInnerHTML={{ __html: svg }} />;
  };

const ServicesSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  return (
    <section id='serives-section' className={`${styles.padding} w-full bg-gray-100 flex flex-col justify-center items-center z-10`}>
       <motion.h1
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        className={`${styles.title} text-center text-black`}>
        {t('services.title')}
        </motion.h1>
       <div className={`w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-16 my-16`}>
        {
            servicesData.map((item , index) => (
            <div
            
            className='flex items-center flex-col gap-3 transition hover:bg-slate-300 px-4 py-8 rounded-[35px]'>
            <item.Icon size={65} className="text-blue" />
            <span className={`${styles.paragraph} text-center`}>
            {currentLanguage === "ar" ? item.titleAr : item.titleEn}
            </span>
            </div>
            ))
        }
       </div>
       <button
  className={`flex gap-2 justify-center items-center bg-orange w-[200px] h-[70px] my-10 hover:shadow-[0_4px_20px_#fc5c54] transition-all duration-700`}
>
  <Link onClick={scrollToTop} to="/services" className="text-white font-semibold">
    {t('AllServices.text')}
  </Link>
  {currentLanguage === "ar" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-left-short text-white"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-right-short text-white"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
      />
    </svg>
  )}
</button>


    </section>
  )
}

export default ServicesSection