import React from 'react';
import styles from '../style';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // Importation de Link
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { textVariant } from '../constants/motion';
import { projectsData } from '../constants/data';
import { RiArrowDownCircleFill, RiArrowDropRightFill, RiArrowRightCircleFill, RiArrowRightUpFill, RiArrowRightUpLine, RiArrowUpFill, RiArrowUpWideFill } from 'react-icons/ri'
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <section className={`${styles.padding} w-full bg-gray-100 flex flex-col`}>
      <motion.h1
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        className={`${styles.title} text-center text-black`}>
        {t('projects.title')}
      </motion.h1>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          className="my-16 cursor-pointer"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            972: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.25,
              spaceBetween: 30,
            },
          }}>
          {projectsData.map((item, index) => (
            <SwiperSlide key={item.id} className="flex items-center flex-col gap-3">
              <div 
                className="flex items-center gap-3">
                <Link onClick={scrollTop} to={`/projects/${item.id}`} className="w-full"> {/* Lien vers la page de détail */}
                  <div className='project-container w-full h-[100%] relative'>
                    <img
                      src={item.img}
                      alt="Project"
                      className="w-[100%] h h-[300px] z-10"
                    />
                     <div className='project-circle flex justify-center items-center w-[45px] h-[45px] bg-white rounded-full absolute top-5 right-5 hidden'>
                     <RiArrowRightUpLine className='w-[30px] h-[30px]' />
                     </div>
                     <span className={`${styles.paragraph} text-white text-center mt-2 absolute bottom-5 left-5 opacity-0 title-project z-[999] font-bold text-[22px]`}>
                     {currentLanguage === "ar" ? item.titleAr : item.titleEn}
                     </span>
                     <div className='gradient-project hidden absolute inset-0 w-full h-[100%]'></div>
                     </div>
                
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
