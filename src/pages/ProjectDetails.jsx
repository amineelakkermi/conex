import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../constants/data';
import { ProjectDetailImg, ProjectDetailSection } from '../components';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((item) => item.id === parseInt(id));
  
  if (!project) {
    return <div className="text-center mt-10">Project not found</div>;
  }

  return (
    <div className="w-full flex flex-col">
      {/* Background Section with Title */}
      <ProjectDetailImg img={project.img} titleAr={project.titleAr} titleEn={project.titleEn} />

      {/* Details Section */}
     <ProjectDetailSection />
    </div>
  );
};

export default ProjectDetails;
