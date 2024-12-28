import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { textVariant } from '../constants/motion';
import { useTranslation } from 'react-i18next';

const ProjectDetailImg = ({ img, titleEn, titleAr }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <section className="relative w-full h-screen flex flex-col">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Project Background"
          className="w-full h-full  object-cover opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(#8e95a9, #252D48)", opacity: 0.6 }}
        ></div>
      </div>

      {/* Title and Subtitle */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-[45px] md:text-[60px] font-semibold md:max-w-[700px] max-w-[90%] leading-tight text-shadow-custom"
        >
        {currentLanguage === "ar" ? titleAr : titleEn}
        </motion.h1>
       
      </div>
    </section>
  );
};

export default ProjectDetailImg;
