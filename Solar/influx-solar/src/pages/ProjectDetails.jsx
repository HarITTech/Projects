import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaSolarPanel, FaMapMarkerAlt, FaBolt, FaClock, FaCalendarAlt, FaUser } from 'react-icons/fa';
import pro1 from '../assets/images/project1.jpg';
import pro2 from '../assets/images/project2.jpg';
import pro3 from '../assets/images/project3.jpg';
import pro4 from '../assets/images/project4.jpg';
import pro5 from '../assets/images/project5.jpg';
import pro6 from '../assets/images/project6.jpg';
import pro7 from '../assets/images/project7.jpg';
import pro8 from '../assets/images/project8.jpg';

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const { t } = useTranslation();

  // Array of projects (same as in Projects.jsx)
  const allProjects = [
    {
      id: 1,
      image: pro1,
      title: t('projects.project1'),
      category: 'Residential',
      description: 'A state-of-the-art solar installation for a modern family home, reducing energy costs by 80%.',
      date: '2023-05-15',
      time: '14:30',
      location: 'San Francisco, CA',
      capacity: '5 kW',
      energySavings: '80%',
      client: 'Smith Family',
    },
    {
      id: 2,
      image: pro2,
      title: t('projects.project2'),
      category: 'Commercial',
      description: 'Solar panels installed for a corporate office, powering daily operations sustainably.',
      date: '2023-07-22',
      time: '09:00',
      location: 'New York, NY',
      capacity: '20 kW',
      energySavings: '65%',
      client: 'TechCorp Inc.',
    },
    {
      id: 3,
      image: pro3,
      title: 'Green Villa Solar System',
      category: 'Residential',
      description: 'A 5kW solar system for a luxury villa, providing clean energy for all household needs.',
      date: '2023-09-10',
      time: '11:00',
      location: 'Miami, FL',
      capacity: '5 kW',
      energySavings: '75%',
      client: 'Johnson Family',
    },
    {
      id: 4,
      image: pro4,
      title: 'Eco Factory Power Plant',
      category: 'Commercial',
      description: 'A large-scale solar plant for a factory, cutting down on operational costs significantly.',
      date: '2023-11-05',
      time: '08:30',
      location: 'Chicago, IL',
      capacity: '50 kW',
      energySavings: '90%',
      client: 'Eco Industries',
    },
    {
      id: 5,
      image: pro5,
      title: 'Sunny Heights Apartments',
      category: 'Residential',
      description: 'Solar solutions for a multi-family apartment complex, promoting green living.',
      date: '2024-01-20',
      time: '13:00',
      location: 'Los Angeles, CA',
      capacity: '15 kW',
      energySavings: '70%',
      client: 'Sunny Heights HOA',
    },
    {
      id: 6,
      image: pro6,
      title: 'Tech Park Solar Grid',
      category: 'Commercial',
      description: 'A solar grid for a tech park, ensuring uninterrupted power for multiple businesses.',
      date: '2024-03-12',
      time: '10:00',
      location: 'Austin, TX',
      capacity: '30 kW',
      energySavings: '85%',
      client: 'Tech Park Management',
    },
    {
      id: 7,
      image: pro7,
      title: 'Mountain Retreat Solar',
      category: 'Residential',
      description: 'Off-grid solar system for a remote mountain retreat, fully self-sustaining.',
      date: '2024-05-18',
      time: '15:00',
      location: 'Denver, CO',
      capacity: '3 kW',
      energySavings: '100%',
      client: 'Brown Family',
    },
    {
      id: 8,
      image: pro8,
      title: 'Retail Store Solar Fit',
      category: 'Commercial',
      description: 'Solar installation for a retail store, reducing electricity bills by 70%.',
      date: '2024-07-25',
      time: '12:00',
      location: 'Seattle, WA',
      capacity: '10 kW',
      energySavings: '70%',
      client: 'Green Retail Co.',
    },
  ];

  // Find the project by ID
  const project = allProjects.find((p) => p.id === parseInt(id));

  // If project not found, display a message
  if (!project) {
    return (
      <div className="py-12 sm:py-16 md:py-20 bg-lightGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primaryBlue mb-6">
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 bg-primaryBlue text-white py-3 px-6 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-secondaryGreen transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-lightGray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-primaryBlue hover:text-secondaryGreen transition-all duration-300"
          >
            <FaArrowLeft className="text-lg sm:text-xl" />
            <span className="text-sm sm:text-base md:text-lg font-semibold">Back to Projects</span>
          </Link>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden shadow-xl mb-6 sm:mb-8 md:mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 sm:p-6">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Left Column: Description and Main Details */}
            <div>
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <FaSolarPanel className="text-3xl sm:text-4xl text-secondaryGreen animate-pulse" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primaryBlue">
                  {project.category} Project
                </h2>
              </div>
              <p className="text-darkGray text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8">
                {project.description}
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-secondaryGreen text-lg sm:text-xl" />
                  <p className="text-darkGray text-sm sm:text-base md:text-lg">
                    <span className="font-semibold">Date:</span> {project.date}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaClock className="text-secondaryGreen text-lg sm:text-xl" />
                  <p className="text-darkGray text-sm sm:text-base md:text-lg">
                    <span className="font-semibold">Time:</span> {project.time}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-secondaryGreen text-lg sm:text-xl" />
                  <p className="text-darkGray text-sm sm:text-base md:text-lg">
                    <span className="font-semibold">Location:</span> {project.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Additional Details */}
            <div className="bg-lightGray rounded-xl p-4 sm:p-6 shadow-inner">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primaryBlue mb-4 sm:mb-6">
                Project Specifications
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3">
                  <FaBolt className="text-secondaryGreen text-lg sm:text-xl" />
                  <p className="text-darkGray text-sm sm:text-base md:text-lg">
                    <span className="font-semibold">Capacity:</span> {project.capacity}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaBolt className="text-secondaryGreen text-lg sm:text-xl" />
                  <p className="text-darkGray text-sm sm:text-base md:text-lg">
                    <span className="font-semibold">Energy Savings:</span> {project.energySavings}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaUser className="text-secondaryGreen text-lg sm:text-xl" />
                  <p className="text-darkGray text-sm sm:text-base md:text-lg">
                    <span className="font-semibold">Client:</span> {project.client}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Projects Button */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 bg-primaryBlue text-white py-3 px-6 sm:py-4 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-secondaryGreen transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;