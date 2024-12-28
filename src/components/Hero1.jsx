import React from 'react';
import { Link } from 'react-router-dom'; // Import de Link depuis react-router-dom
import styles, { layout } from '../style';
import { img71 } from '../assets';
import { RiArrowLeftFill, RiArrowRightFill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

const Hero1 = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const { t, i18n } = useTranslation();
  /* bg-[#1a2547] */
  const currentLanguage = i18n.language;

  return (
    <section id="home" className={`${layout.section} ${styles.padding} bg-[#1a2547] gap-16`}>
      <div className={`flex-1 flex justify-center items-center flex-col gap-5 mt-24`}>
        <h1 className={`text-[45px] text-center mx-5  text-white font-semibold mt-5`}>
          {t('hero1.title')}
        </h1>
        <p className={`${styles.paragraph} text-center max-w-[90%]`}>
        {t('hero1.text')}
        
        </p>
        <div className="w-full flex justify-center md:justify-start items-center gap-5 my-5">
          <button className="button discover px-[1.8rem] py-[0.8rem]">
            <a href="#about">
            {t('hero1.buttonDiscover')}
            </a>
          </button>
          <button className="button contact  px-[1.8rem] py-[0.8rem]">
            <Link onClick={scrollTop} to="/contact" className="flex items-center gap-2">
            {t('hero1.buttonContact')}
            { currentLanguage === "ar" ? 
            <RiArrowLeftFill className="icon" />
            :
            <RiArrowRightFill className="icon" />
            }
            </Link>
          </button>
        </div>
      </div>
      <div className={`${layout.sectionImg} mt-8 md:max-w-[550px] w-[90%] flex justify-center items-center h-[550px]`}>
        <div className="w-[450px] h-[300px] mr-5">
          <img
            src={img71}
            alt="About"
            className="w-[100%] h-[100%] rounded-[25px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero1;
