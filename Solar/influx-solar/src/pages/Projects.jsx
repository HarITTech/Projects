import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaSolarPanel } from 'react-icons/fa';
import pro1 from '../assets/images/project1.jpg';
import pro2 from '../assets/images/project2.jpg';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12 bg-lightGray">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primaryBlue text-center mb-8 flex items-center justify-center space-x-2">
          <FaSolarPanel className="text-secondaryGreen" />
          <span>{t('projects.title')}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group rounded-lg overflow-hidden shadow-lg">
            <img
              src={pro1}
              alt="Project 1"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold">
                {t('projects.project1')}
              </h3>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-lg">
            <img
              src={pro2}
              alt="Project 2"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold">
                {t('projects.project2')}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;