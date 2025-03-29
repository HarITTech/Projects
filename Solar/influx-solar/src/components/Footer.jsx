import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaYoutube,
  FaCode,
  FaHeart,
} from "react-icons/fa";
import { MdOutlineSolarPower } from "react-icons/md";
import HarIT from '../assets/images/HarIT.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-primaryBlue to-secondaryGreen text-white pt-16 pb-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <MdOutlineSolarPower className="text-3xl text-accentYellow" />
              <span className="text-2xl font-bold">Influx Solar</span>
            </div>
            <p className="text-white/90 leading-relaxed">
              Leading solar energy solutions provider committed to sustainable
              power generation and energy independence.
            </p>
            <div className="flex space-x-5">
              <a
                href="#"
                className="text-xl hover:text-accentYellow transition-colors duration-300 hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-xl hover:text-accentYellow transition-colors duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-xl hover:text-accentYellow transition-colors duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-xl hover:text-accentYellow transition-colors duration-300 hover:scale-110"
              >
                <FaYoutube />
              </a>
              <a
                href="https://wa.me/9890888138"
                className="text-xl hover:text-accentYellow transition-colors duration-300 hover:scale-110"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/20 flex items-center space-x-2">
              <FaMapMarkerAlt className="text-accentYellow" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-2 hover:text-accentYellow transition-colors duration-300 group"
                >
                  <span className="w-2 h-2 bg-accentYellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{t("navbar.home")}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="flex items-center space-x-2 hover:text-accentYellow transition-colors duration-300 group"
                >
                  <span className="w-2 h-2 bg-accentYellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{t("navbar.services")}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="flex items-center space-x-2 hover:text-accentYellow transition-colors duration-300 group"
                >
                  <span className="w-2 h-2 bg-accentYellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{t("navbar.projects")}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center space-x-2 hover:text-accentYellow transition-colors duration-300 group"
                >
                  <span className="w-2 h-2 bg-accentYellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{t("navbar.about")}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center space-x-2 hover:text-accentYellow transition-colors duration-300 group"
                >
                  <span className="w-2 h-2 bg-accentYellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{t("navbar.contact")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/20 flex items-center space-x-2">
              <FaPhone className="text-accentYellow" />
              <span>Contact Us</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-lg mt-1 text-accentYellow" />
                <address className="not-italic text-white/90">
                  {t("contact.address")}
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-accentYellow" />
                <div>
                  <p className="font-medium">Er. Shankar Dandekar</p>
                  <a
                    href="tel:9890888138"
                    className="hover:text-accentYellow transition-colors"
                  >
                    9890888138
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-accentYellow" />
                <div>
                  <p className="font-medium">Er. Kishor Dhore</p>
                  <a
                    href="tel:8007685547"
                    className="hover:text-accentYellow transition-colors"
                  >
                    8007685547
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-accentYellow" />
                <a
                  href="mailto:info@influxsolar.com"
                  className="hover:text-accentYellow transition-colors"
                >
                  info@influxsolar.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/20 flex items-center space-x-2">
              <FaClock className="text-accentYellow" />
              <span>Business Hours</span>
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-white/80">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80">Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80">Sunday</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>

            <div className="mt-8 bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-accentYellow">Newsletter</h4>
              <p className="text-sm mb-3 text-white/90">
                Subscribe for updates and offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-sm bg-white/20 border border-white/30 rounded-l focus:outline-none focus:ring-1 focus:ring-accentYellow w-full"
                />
                <button className="bg-accentYellow text-primaryBlue px-4 py-2 rounded-r font-medium hover:bg-yellow-400 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Influx Solar. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy-policy"
                className="text-sm hover:text-accentYellow transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm hover:text-accentYellow transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-sm hover:text-accentYellow transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-white/60">
            <p>Registered with MNRE | ISO 9001:2015 Certified</p>
          </div>
        </div>

        {/* Developer Credit - Added this new section */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-white/70 text-sm flex items-center">
              <span>Built with</span>
              <FaHeart className="mx-1 text-accentYellow animate-pulse" />
              <span>by</span>
            </p>
            <a
              href="https://harit.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 group"
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <img
                  src={HarIT}
                  alt={ "HarIT Logo"}
                  className="object-fill h-6"
                />
              </div>
              <span className="text-white font-medium group-hover:text-accentYellow transition-colors">
                HarIT Tech Solution
              </span>
            </a>
            <p className="text-white/50 text-xs">
              Digital transformation experts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
