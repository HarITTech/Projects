import React from "react";
import solar from '../assets/images/solarfou.jpg';
import { useInView } from "../components/useInView";

import {
  Sun,
  Shield,
  Award,
  Users,
  Zap,
  Leaf,
  DollarSign,
  CheckCircle,
  BarChart,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Director profiles
const directors = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    bio: "With over 20 years in renewable energy, Sarah leads our company with passion and expertise, driving innovation in solar technology.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Chief Technical Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    bio: "Michael oversees all technical operations and product development, bringing 15 years of engineering experience in solar systems.",
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Chief Operations Officer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    bio: "David manages our day-to-day operations with efficiency and strategic insight, ensuring smooth delivery of all solar projects.",
  },
  {
    id: 4,
    name: "Emily Patel",
    role: "Chief Financial Officer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    bio: "Emily brings her financial expertise to our company, optimizing our resources to provide affordable solar solutions.",
  },
];

// Features for Why Choose Us section
const features = [
  {
    icon: <Shield className="h-10 w-10 text-solar-blue" />,
    title: "25-Year Warranty",
    description:
      "All our solar panels come with a comprehensive 25-year warranty, giving you peace of mind for decades.",
  },
  {
    icon: <Award className="h-10 w-10 text-solar-blue" />,
    title: "Award-Winning Service",
    description:
      "Recognized for excellence in customer service and installation quality across the industry.",
  },
  {
    icon: <Zap className="h-10 w-10 text-solar-blue" />,
    title: "Energy Efficiency",
    description:
      "Our premium solar panels offer higher efficiency ratings, generating more electricity in less space.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-solar-blue" />,
    title: "Financing Options",
    description:
      "Flexible payment plans and assistance with tax incentives and rebates to make solar affordable.",
  },
  {
    icon: <Users className="h-10 w-10 text-solar-blue" />,
    title: "Expert Team",
    description:
      "Highly trained and certified installation teams with years of experience in solar technology.",
  },
  {
    icon: <Leaf className="h-10 w-10 text-solar-blue" />,
    title: "Eco-Friendly",
    description:
      "Commitment to sustainable practices in our operations and product lifecycle management.",
  },
];

// Founder profile
const founder = {
  id: 1,
  name: "Er. Kishor Dhore",
  role: "Founder & CEO",
  image: "https://storage.googleapis.com/a1aa/image/8bs4PKQUX0aLaNbPsu8adm9Yv3a3NKhPXUpHJzI1iLY.jpg",
  bio: "With over 15 years in renewable energy, Shankar founded our company with a vision to make solar energy accessible to all. His technical expertise and leadership drive our innovation in solar technology.",
  achievements: [
    "Solar industry veteran since 2008",
    "MNRE certified solar expert",
    "500+ successful installations",
    "Renewable energy advocate"
  ]
};

// Statistics for the About section
const stats = [
  { id: 1, value: "10+", label: "Years in Business" },
  { id: 2, value: "5,000+", label: "Installations" },
  { id: 3, value: "30MW+", label: "Power Generated" },
  { id: 4, value: "50,000+", label: "Tons of CO₂ Offset" },
];

// Custom hook for animations
const useAnimatedSection = (triggerOnce = true) => {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold: 0.1,
  });

  return [ref, inView];
};

const About = () => {
  // Animation triggers
  const [heroRef, heroInView] = useAnimatedSection();
  const [aboutRef, aboutInView] = useAnimatedSection();
  const [whyChooseRef, whyChooseInView] = useAnimatedSection();
  const [directorsRef, directorsInView] = useAnimatedSection();
  const [founderRef, founderInView] = useAnimatedSection();
  const [sustainabilityRef, sustainabilityInView] = useAnimatedSection();
  const [ctaRef, ctaInView] = useAnimatedSection();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative bg-gradient-to-r from-solar-darkblue to-solar-blue text-white py-24 md:py-32 overflow-hidden"
      >
        {/* Background Solar Panel Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>

        {/* Solar circuit lines animation */}
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              d="M0,50 Q25,20 50,50 T100,50"
              stroke="#FFC124"
              strokeWidth="0.2"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
              d="M0,60 Q30,30 60,60 T100,60"
              stroke="#FF7E24"
              strokeWidth="0.2"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 3.5, ease: "easeInOut", delay: 1 }}
              d="M0,40 Q20,70 40,40 T100,40"
              stroke="#4CAF50"
              strokeWidth="0.2"
              fill="none"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powering a{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={
                  heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.8, duration: 0.6 }}
                className="bg-gradient-to-r from-solar-yellow to-solar-orange bg-clip-text text-transparent"
              >
                Sustainable
              </motion.span>{" "}
              Future
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
              At SolarBright, we're committed to revolutionizing how the world
              generates and uses energy through innovative solar solutions.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                heroInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 1, duration: 0.6 }}
            >
              <button className="bg-solar-yellow hover:bg-solar-orange text-solar-darkblue font-semibold px-6 py-3 rounded-lg transition duration-300">
                Learn How We Can Help You
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* About Us Section */}
      <section id="about-us" className="py-16 md:py-24">
        <div ref={aboutRef} className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-solar-darkblue mb-4">
              About Us
            </h2>
            <div className="h-1 w-20 bg-solar-yellow mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={
                aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-solar-blue mb-6">
                Our Story
              </h3>
              <p className="text-gray-700 mb-4">
                Founded in 2010, SolarBright began with a simple mission: to
                make clean, renewable energy accessible to everyone. What
                started as a small team of passionate engineers has grown into a
                leading solar energy provider serving residential and commercial
                clients nationwide.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey has been fueled by innovation, quality
                craftsmanship, and a deep commitment to sustainability. We've
                helped thousands of homeowners and businesses reduce their
                carbon footprint while saving on energy costs.
              </p>
              <p className="text-gray-700 mb-6">
                Today, SolarBright continues to push the boundaries of solar
                technology, developing custom energy solutions that meet the
                unique needs of our diverse clientele. Our team of experts is
                dedicated to providing exceptional service from initial
                consultation through installation and beyond.
              </p>

              <motion.div
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="space-y-3"
              >
                <motion.div
                  variants={cardVariants}
                  className="flex items-center space-x-4"
                >
                  <CheckCircle className="h-6 w-6 text-solar-green" />
                  <span className="text-gray-800 font-medium">
                    Certified Solar Professionals
                  </span>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  className="flex items-center space-x-4"
                >
                  <CheckCircle className="h-6 w-6 text-solar-green" />
                  <span className="text-gray-800 font-medium">
                    NABCEP Certified Company
                  </span>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  className="flex items-center space-x-4"
                >
                  <CheckCircle className="h-6 w-6 text-solar-green" />
                  <span className="text-gray-800 font-medium">
                    Top-Rated Solar Provider
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={
                aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Solar installation team"
                  className="rounded-lg shadow-xl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={aboutInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-tr from-solar-blue/30 to-transparent rounded-lg"
                />
              </div>

              {/* Stats overlay */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={
                  aboutInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                }
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm rounded-b-lg p-6 shadow-lg border border-white/20"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        aboutInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 10 }
                      }
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                      className="text-center"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-solar-blue">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section
        id="why-choose-us"
        ref={whyChooseRef}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        {/* Background Solar Connection Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559302995-f1d7e0338df4?ixlib=rb-1.2.1&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-solar-lightblue/80 to-white/90"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-solar-darkblue mb-4">
              Why Choose Us?
            </h2>
            <div className="h-1 w-20 bg-solar-yellow mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We deliver exceptional solar solutions backed by expertise,
              quality, and unmatched customer service.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={whyChooseInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 backdrop-blur-sm"
              >
                <div className="mb-4 relative">
                  {feature.icon}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="absolute -inset-1 rounded-full bg-solar-blue/10"
                  />
                </div>
                <h3 className="text-xl font-semibold text-solar-darkblue mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Our Directors Section */}
      {/* Our Founder Section */}
      <section
        id="our-founder"
        ref={founderRef}
        className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={founderInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-solar-darkblue mb-4">
              Our Founder
            </h2>
            <div className="h-1 w-20 bg-solar-yellow mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The visionary behind our mission for a solar-powered future.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate={founderInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 relative">
                <img
                  src={solar}
                  alt={founder.name}
                  className="w-full h-full object-cover min-h-64 md:min-h-full"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-t from-solar-darkblue/60 to-transparent"
                />
              </div>

              <div className="md:w-2/3 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-solar-darkblue mb-2">
                  {founder.name}
                </h3>
                <p className="text-solar-blue font-medium mb-4">
                  {founder.role}
                </p>
                <p className="text-gray-600 mb-6">{founder.bio}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {founder.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-solar-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="border-t border-gray-100 pt-4"
                >
                  <button className="inline-flex items-center text-solar-blue hover:text-solar-orange font-medium">
                    Read full bio <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Sustainability Commitment Section */}
      <section
        ref={sustainabilityRef}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        {/* Solar panel connection background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-solar-darkblue to-solar-blue opacity-95"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

          {/* Animated circuit lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                sustainabilityInView
                  ? { pathLength: 1, opacity: 0.2 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: 2.5, ease: "easeInOut" }}
              d="M0,100 L40,100 C60,100 60,50 80,50 L100,50"
              stroke="#FFC124"
              strokeWidth="0.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                sustainabilityInView
                  ? { pathLength: 1, opacity: 0.2 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
              d="M0,50 L20,50 C40,50 40,20 60,20 L100,20"
              stroke="#FFC124"
              strokeWidth="0.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                sustainabilityInView
                  ? { pathLength: 1, opacity: 0.2 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: 2.2, ease: "easeInOut", delay: 0.6 }}
              d="M0,20 L30,20 C50,20 50,80 70,80 L100,80"
              stroke="#FFC124"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                sustainabilityInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Commitment to Sustainability
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Beyond providing solar solutions, we're dedicated to
                environmental stewardship in everything we do. Our sustainable
                business practices include:
              </p>

              <motion.ul
                initial="hidden"
                animate={sustainabilityInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="space-y-4"
              >
                <motion.li
                  variants={cardVariants}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-solar-yellow flex-shrink-0 mt-1" />
                  <span className="opacity-90">
                    Carbon-neutral operations across all our facilities
                  </span>
                </motion.li>
                <motion.li
                  variants={cardVariants}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-solar-yellow flex-shrink-0 mt-1" />
                  <span className="opacity-90">
                    Responsible sourcing of materials and components
                  </span>
                </motion.li>
                <motion.li
                  variants={cardVariants}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-solar-yellow flex-shrink-0 mt-1" />
                  <span className="opacity-90">
                    Recycling program for end-of-life solar panels
                  </span>
                </motion.li>
                <motion.li
                  variants={cardVariants}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-solar-yellow flex-shrink-0 mt-1" />
                  <span className="opacity-90">
                    Community education initiatives on renewable energy
                  </span>
                </motion.li>
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  sustainabilityInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <button className="mt-8 bg-white text-solar-darkblue hover:bg-solar-yellow hover:text-white px-6 py-3 rounded-lg transition duration-300">
                  Learn About Our Green Initiatives
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                sustainabilityInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Sustainable energy"
                  className="rounded-lg shadow-xl relative z-10"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  sustainabilityInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-solar-yellow rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <BarChart className="h-10 w-10 text-solar-darkblue" />
                  <div>
                    <div className="text-2xl font-bold text-solar-darkblue">
                      150,000+
                    </div>
                    <div className="text-sm text-solar-darkblue font-medium">
                      Tons of CO₂ Emissions Prevented
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section ref={ctaRef} className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-solar-darkblue mb-6">
              Ready to Switch to Solar?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join thousands of satisfied customers who are saving money and
              reducing their carbon footprint with our solar solutions.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button className="bg-solar-blue hover:bg-solar-darkblue text-white px-6 py-3 rounded-lg transition duration-300">
                Get a Free Consultation
              </button>

              {/* View Our Projects Button */}
              <button className="border border-solar-blue text-solar-blue hover:bg-solar-blue hover:text-white px-6 py-3 rounded-lg transition duration-300">
                View Our Projects
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
