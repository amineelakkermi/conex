import React from 'react'
import { useParams } from 'react-router-dom';
import { projectsData } from '../constants/data';
import { useTranslation } from 'react-i18next';


const ProjectDetailSection = () => {
const { id } = useParams();
  const project = projectsData.find((item) => item.id === parseInt(id));
  
  if (!project) {
    return <div className="text-center mt-10">Project not found</div>;
  }
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
     <section className="px-6 md:px-16 py-16 bg-gray-100">
     <div className="max-w-[1200px] mx-auto">
       {/* Project Title */}
       <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">
       {currentLanguage === "ar" ? project.titleAr : project.titleEn}
       </h2>
       {/* Project Subtitle */}
       {project.subtitleEn && (
         <h3 className="text-lg md:text-xl text-gray-600 mb-4 italic">
          {currentLanguage === "ar" ? project.subtitleAr : project.subtitleEn}
         </h3>
       )}
       {/* Contract Value */}
       {project.valueEn && (
         <p className="text-lg text-black font-semibold mb-6">
          {currentLanguage === "ar" ? project.valueAr : project.valueEn}
         </p>
       )}
       {/* Project Description */}
       <p className="text-black text-lg leading-7 mb-8">
       {currentLanguage === "ar" ? project.descriptionAr : project.descriptionEn}
       </p>
     </div>
   </section>
  )
}

export default ProjectDetailSection