import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Privacy Policy | Influx Solar</title>
        <meta
          name="description"
          content="Learn how Influx Solar collects, uses, and protects your personal information."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-solar-blue to-solar-darkblue py-8 px-6 sm:px-8 text-white">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-solar-lightblue"
          >
            Last Updated: {new Date().toLocaleDateString()}
          </motion.p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-solar-darkblue mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-700">
              Influx Solar ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our
              services. Please read this policy carefully.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-solar-darkblue mb-3">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 mb-2">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Personal Data:</strong> Name, email, phone number,
                address when you request a quote or contact us.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, pages
                visited, and other analytics data.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to improve your
                experience on our site.
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-solar-darkblue mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>To provide and maintain our services</li>
              <li>To respond to inquiries and offer customer support</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl font-semibold text-solar-darkblue mb-3">
              4. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-700">
              We do not sell your personal data. We may share information with:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
              <li>Service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners in connection with solar installations</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-xl font-semibold text-solar-darkblue mb-3">
              5. Data Security
            </h2>
            <p className="text-gray-700">
              We implement industry-standard security measures to protect your
              data. However, no method of transmission over the Internet is 100%
              secure.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-xl font-semibold text-solar-darkblue mb-3">
              6. Your Rights
            </h2>
            <p className="text-gray-700 mb-2">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Access, update, or delete your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <h2 className="text-xl font-semibold text-solar-darkblue mb-3">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. We will notify you
              of changes by posting the new policy on this page.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <h2 className="text-xl font-semibold text-solar-darkblue mb-3">
              8. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <p className="text-solar-blue mt-2">
              <strong>Email:</strong> influxsolarwardhaseloo@gmail.com<br />
              <strong>Phone:</strong> +91 8007685547<br />
              <strong>Address:</strong> Head Office: Near Bus Stop, Seloo, Th. Seloo, Dist. Wardha – 442104
            </p>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;