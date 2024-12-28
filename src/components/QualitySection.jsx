import React from 'react'
import styles, { layout } from '../style'
import { img104 } from '../assets'
import { useTranslation } from 'react-i18next';


const QualitySection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about" className={`${layout.section} ${styles.padding} bg-gray-100 gap-16`}>
      <div className={`${layout.sectionImg} md:max-w-[550px] w-[90%] flex justify-center items-center h-[550px]`}>
        <img src={img104} alt="About" 
        className='rounded-[35px] w-[100%] md:h-[500px] h-[450px]' />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className="relative line inline-block text-[16px] text-orange">
        {t('about.subtitle')}
        </h2>
        <h1 className={`${styles.title} font-bold text-blue my-5`}>
        {t('about.title')}
        </h1>
        <p className={`${styles.paragraph}`}>
        {t('about.text')}
        </p>
      </div>
    </section>
  )
}

export default QualitySection
