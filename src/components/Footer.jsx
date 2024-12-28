import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../style'
import { conex } from '../assets'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <footer className={`w-full footer bg-gray-200 relative flex md:flex-row flex-col  md:justify-between justify-center md:items-start items-center ${styles.padding}`}>
      <div className='flex md:items-start items-center flex-col gap-2 md:mt-0 mt-10 z-10'>
        <Link onClick={scrollTop} to='/home'><img src={conex} alt="logo" className="w-[100%] md:h-[60px] h-[40px]  object-cover" /></Link>
        <p className='text-black max-w-[390px] md:text-start text-center'>
          {t('footer.description')}
        </p>
      </div>

      <div className='flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center md:gap-[80px] gap-[50px] md:mt-0 mt-10 z-10 '>
        <ul className='flex flex-col gap-3 md:text-start text-center'>
          <li>
          <h3 className='text-black text-[20px] font-semibold'>
          {t('footer.quickLinks')}
          </h3>
          </li>
          <li>
          <Link onClick={scrollTop} className='text-[16px] duration-300 hover:text-orange font-medium text-black' to="/home">
          {t('footer.home')}
          </Link>
          </li>
          <li><Link onClick={scrollTop} className='text-[16px] duration-300 hover:text-orange font-medium text-black' to="/services">
          {t('footer.services')}
          </Link></li>
          <li>
          <Link onClick={scrollTop} className='text-[16px] duration-300 hover:text-orange font-medium text-black' to="/contact">
          {t('footer.contact')}
          </Link>
          </li>
        </ul>

        <ul className='flex flex-col justify-center items-center gap-3 md:text-start text-center'>
          <li>
            <h3 className='text-black text-[20px] font-semibold'>
          {t('footer.socialMedia')}
            </h3>
          </li>
          <li className='flex items-center gap-4 mt-5'>
            <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
              <a href='' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                <FaFacebook className="text-black" size={25} />
              </a>
            </div>
            <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
              <a href='' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                <FaInstagram className="text-black" size={25} />
              </a>
            </div>
            <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
              <a href='' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                <FaLinkedin className="text-black" size={25} />
              </a>
            </div>
          </li>
        </ul>

         
        <ul className='flex flex-col gap-3 md:text-start text-center'>
        <li>
        <h3 className='text-black text-[20px] font-semibold'>
        {t('footer.contact')}
      
        </h3>
        </li>
        <li>
        <a href="mailto:info@sa-conex.com" className='text-black text-[16px] duration-300 hover:text-orange font-medium'>
        {t('footer.email')}
        {' '}
        :
        {' '}
         info@sa-conex.com
         </a>
        </li>
        <li>
        <a href="tel:+96613893100" className='text-black text-[16px] duration-300 hover:text-orange font-medium'>
        {t('footer.phoneNumber')}
        {'  '}
        : 
        {' '}
        <span dir='ltr'>
         +966 13 89 3100
        </span>
        </a>
        </li>
        </ul>


      </div>
    </footer>
  )
}

export default Footer
