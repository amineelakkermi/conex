import React, { useState, useEffect } from 'react';
import { GallerySection2, Hero, Hero1, Projects, QualitySection, ServicesSection } from '../components';
import { img124, img129, img17 } from '../assets';

const Home = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    // Fonction pour gérer le redimensionnement de la fenêtre
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    // Écouteur d'événement pour le redimensionnement
    window.addEventListener('resize', handleResize);

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMediumScreen ? <Hero /> : <Hero1 />} {/* Changement dynamique */}
      <QualitySection />
      <GallerySection2 
        img={img129}  
        titleAr="رؤيتنا" 
        titleEn="Our Vision"
        textAr="أن نكون الشريك المفضل لحلول الأرضيات الصناعية عبر الإبتكار و الجودة و تلبية احتياجات عملائنا المتنوعة" 
        textEn="To become the first and preferred partner in providing industrial flooring solutions through innovation, quality and commitment to meet the diverse needs of our customers"
      />
      <ServicesSection />
      <GallerySection2 
        img={img124}  
        titleEn="Our Mission" 
        titleAr="مهامنا" 
        textEn="Providing specialized industrial flooring solutions that embody innovation & reliability and contribute to raising the efficiency of industrial and community projects, with a commitment to supporting sustainable development and building strong partnerships with our customers to achieve achievements beyond expectations"
        textAr="تقديم حلول أرضيات صناعية متخصصة تجسد الابتكار و الموثوقية , و تسهم في رفع كفاءة المشاريع الصناعية و المجتمعية , مع الالتزام بدعم التنمية المستدامة و بناء شراكات قوية مع عملائنا لتحقيق إنجازات تفوق التوقعات"      
      />
      <Projects />
      <GallerySection2 
        img={img17}  
        titleEn="Our VALUES" 
        titleAr="قيمنا"
        textEn="We are committed to clients, ensuring transparency, openness to new ideas, and fostering satisfaction and loyalty. We aim to exceed expectations and maintain a positive, ethical environment."
        textAr="نحن ملتزمون بالعملاء، مع ضمان الشفافية، والانفتاح على الأفكار الجديدة، وتعزيز الرضا والولاء. نحن نهدف إلى تجاوز التوقعات والحفاظ على بيئة إيجابية وأخلاقية."
        />
    </div>
  );
};

export default Home;
