import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSolarPanel, FaArrowRight } from 'react-icons/fa';
import pro1 from '../assets/images/project1.jpg';
import pro2 from '../assets/images/project2.jpg';
import pro3 from '../assets/images/project2.jpg';
import pro4 from '../assets/images/project1.jpg';
import pro5 from '../assets/images/project2.jpg';
import pro6 from '../assets/images/project1.jpg';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { t } = useTranslation();
  const [visibleProjects, setVisibleProjects] = useState(6); // Initially show 6 projects
  const [selectedCategory, setSelectedCategory] = useState('All'); // Category filter state

  // Array of projects with categories and details
  const allProjects = [
    {
      id: 1,
      image: pro1,
      title: t('projects.project1'),
      category: 'Residential',
      description: 'A state-of-the-art solar installation for a modern family home, reducing energy costs by 80%.',
    },
    {
      id: 2,
      image: pro2,
      title: t('projects.project2'),
      category: 'Commercial',
      description: 'Solar panels installed for a corporate office, powering daily operations sustainably.',
    },
    {
      id: 3,
      image: pro3,
      title: 'Green Villa Solar System',
      category: 'Residential',
      description: 'A 5kW solar system for a luxury villa, providing clean energy for all household needs.',
    },
    {
      id: 4,
      image: pro4,
      title: 'Eco Factory Power Plant',
      category: 'Commercial',
      description: 'A large-scale solar plant for a factory, cutting down on operational costs significantly.',
    },
    {
      id: 5,
      image: pro5,
      title: 'Sunny Heights Apartments',
      category: 'Residential',
      description: 'Solar solutions for a multi-family apartment complex, promoting green living.',
    },
    {
      id: 6,
      image: pro6,
      title: 'Tech Park Solar Grid',
      category: 'Commercial',
      description: 'A solar grid for a tech park, ensuring uninterrupted power for multiple businesses.',
    },
    // Add more projects as needed
    {
      id: 7,
      image: pro1,
      title: 'Mountain Retreat Solar',
      category: 'Residential',
      description: 'Off-grid solar system for a remote mountain retreat, fully self-sustaining.',
    },
    {
      id: 8,
      image: pro2,
      title: 'Retail Store Solar Fit',
      category: 'Commercial',
      description: 'Solar installation for a retail store, reducing electricity bills by 70%.',
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  // Categories for filtering
  const categories = ['All', 'Residential', 'Commercial'];

  // Handle "Load More" button
  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 3); // Load 3 more projects
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-lightGray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primaryBlue text-center mb-8 sm:mb-12 md:mb-16 flex items-center justify-center space-x-3">
          <FaSolarPanel className="text-secondaryGreen text-4xl sm:text-5xl md:text-6xl animate-pulse" />
          <span>{t('projects.title')}</span>
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-4 sm:py-3 sm:px-6 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-md ${
                selectedCategory === category
                  ? 'bg-secondaryGreen text-white'
                  : 'bg-white text-primaryBlue hover:bg-secondaryGreen hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="relative group rounded-2xl overflow-hidden shadow-xl bg-white transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base md:text-lg opacity-90 mb-4">
                    {project.description}
                  </p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center space-x-2 bg-accentYellow text-darkGray py-2 px-4 rounded-full text-sm sm:text-base font-semibold hover:bg-secondaryGreen hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <span>View Details</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
              {/* Project Info (Visible on Desktop) */}
              <div className="p-4 sm:p-6">
                <h3 className="text-primaryBlue text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-darkGray text-sm sm:text-base md:text-lg">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center space-x-2 bg-primaryBlue text-white py-3 px-6 sm:py-4 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-secondaryGreen transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Load More</span>
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;