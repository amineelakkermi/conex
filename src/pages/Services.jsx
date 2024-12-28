import React from 'react';
import { GallerySection2} from '../components';
import { img159 } from '../assets';
import { servicesData, servicesData2 } from '../constants/data';
import { motion } from 'framer-motion';
import styles from '../style';
import { textVariant } from '../constants/motion';
import { useTranslation } from 'react-i18next';

const SvgIcon = ({ svg }) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};

const Services = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
  
 
    return (
    <div className="w-full flex flex-col">
      {/* Background Section with Title */}
      <GallerySection2 img={img159} titleEn="Discover All Services" titleAr="اكتشف كل الخدمات"/>

      {/* Details Section */}
      <section className="px-6 md:px-16 py-16 bg-gray-100">
      <div className={`w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-16 my-16`}>
        {
            servicesData.map((item , index) => (
            <div
            
            className='flex items-center flex-col gap-3 transition hover:bg-slate-300 px-4 py-8 rounded-[35px]'>
            <item.Icon size={65} className='text-blue' />
            <span className={`${styles.paragraph} text-center`}>
            {currentLanguage === "ar" ? item.titleAr : item.titleEn}
            </span>
            </div>
            ))
        }
        </div>
      </section>

      <section className="px-6 md:px-16 py-16 bg-gray-100 flex flex-col justify-center items-center">
      <motion.h1
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
       className={`${styles.title} text-center text-black max-w-[850px]`}>
        {t('services2.title')}
       </motion.h1>
      <div className={`w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-16 my-16`}>
        {
            servicesData2.map((item , index) => (
            <div
            
            className='flex items-center flex-col gap-3 transition hover:bg-slate-300 px-4 py-8 rounded-[35px]'>
            <item.Icon size={65} className='text-blue' />
            <span className={`${styles.paragraph} text-center`}>
            {currentLanguage === "ar" ? item.titleAr : item.titleEn}
            </span>
            </div>
            ))
        }
      </div>
      </section>
    </div>
  );
};

export default Services;
