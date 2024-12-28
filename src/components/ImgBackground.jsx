import React, { useState, useEffect } from 'react';
import { img133, img19, img71 } from '../assets';

const ImgBackground = () => {
  const images = [img71, img19, img133]; // Liste des 3 images
  const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuelle
  const [nextIndex, setNextIndex] = useState(1); // Index de la prochaine image
  const [fade, setFade] = useState(true); // État pour gérer la transition
  const [objectFit, setObjectFit] = useState('object-cover'); // Style de l'image

  // Détecte la taille de l'écran
  const updateObjectFit = () => {
    if (window.innerWidth >= 1024) {
      setObjectFit('object-cover'); 
    } else {
      setObjectFit('object-fill'); 
    }
  };

  useEffect(() => {
    // Initialisation du style
    updateObjectFit();

    // Ajout d'un gestionnaire d'événements pour surveiller les changements de taille
    window.addEventListener('resize', updateObjectFit);

    // Nettoyage à la fin
    return () => window.removeEventListener('resize', updateObjectFit);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Commence la transition
      setTimeout(() => {
        setCurrentIndex(nextIndex); // Affiche l'image suivante
        setNextIndex((nextIndex + 1) % images.length); // Prépare l'index suivant
        setFade(true); // Remet l'opacité après la transition
      }, 1000); // Durée de la transition
    }, 4000);

    return () => clearInterval(interval); // Nettoyage pour éviter les fuites mémoire
  }, [nextIndex, images.length]);

  return (
    <div className="absolute left-0 top-0 -z-10 w-full h-screen overflow-hidden">
      {/* Image actuelle */}
      <img
        src={images[currentIndex]}
        alt={`Background ${currentIndex}`}
        className={`absolute top-0 left-0 w-full h-full ${objectFit} transition-opacity duration-1000 opacity-100`}
        style={{ zIndex: fade ? 1 : 0 }}
      />
      {/* Image suivante */}
      <img
        src={images[nextIndex]}
        alt={`Background ${nextIndex}`}
        className={`absolute top-0 left-0 w-full h-full ${objectFit} transition-opacity duration-1000 ${
          fade ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ zIndex: fade ? 0 : 1 }}
      />
    </div>
  );
};

export default ImgBackground;
