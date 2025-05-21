import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Terms of Service | Influx Solar</title>
        <meta
          name="description"
          content="Terms governing your use of Influx Solar's website and services."
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
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-solar-lightblue"
          >
            Effective Date: {new Date().toLocaleDateString()}
          </motion.p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-solar-darkblue">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By accessing or using the Influx Solar website ("Service"), you agree to be bound by these Terms of Service. If you disagree, please do not use our Service.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-solar-darkblue">
              2. Service Description
            </h2>
            <p className="text-gray-700">
              Influx Solar provides solar energy solutions including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Residential and commercial solar installations</li>
              <li>Solar system design and consultation</li>
              <li>Energy efficiency assessments</li>
              <li>Maintenance and monitoring services</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-solar-darkblue">
              3. User Responsibilities
            </h2>
            <p className="text-gray-700">
              You agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Provide accurate information for quotes and consultations</li>
              <li>Not use our Service for unlawful purposes</li>
              <li>Comply with all applicable local regulations</li>
              <li>Maintain the confidentiality of your account credentials</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-solar-darkblue">
              4. Intellectual Property
            </h2>
            <p className="text-gray-700">
              All content on this website (logos, text, graphics) is owned by Influx Solar and protected by copyright laws. Unauthorized use is prohibited.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-solar-darkblue">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              Influx Solar shall not be liable for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>System performance due to factors beyond our control</li>
              <li>Third-party services or products we recommend</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-solar-darkblue">
              6. Installation Terms
            </h2>
            <p className="text-gray-700">
              Specific terms apply to solar installations:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Requires separate signed contract</li>
              <li>Subject to site feasibility and permitting</li>
              <li>Warranties outlined in final agreement</li>
              <li>Performance estimates are not guarantees</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-solar-darkblue">
              7. Termination
            </h2>
            <p className="text-gray-700">
              We may terminate or suspend access to our Service immediately, without prior notice, for any breach of these Terms.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-solar-darkblue">
              8. Governing Law
            </h2>
            <p className="text-gray-700">
              These Terms shall be governed by the laws of [Your State/Country] without regard to its conflict of law provisions.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-solar-darkblue">
              9. Changes to Terms
            </h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. Continued use after changes constitutes acceptance.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-solar-darkblue">
              10. Contact Information
            </h2>
            <p className="text-gray-700">
              For questions about these Terms, contact us at:
            </p>
            <div className="mt-2 text-solar-blue">
             <p className="text-solar-blue mt-2">
              <strong>Email:</strong> influxsolarwardhaseloo@gmail.com<br />
              <strong>Phone:</strong> +91 8007685547<br />
              <strong>Address:</strong> Head Office: Near Bus Stop, Seloo, Th. Seloo, Dist. Wardha – 442104
            </p>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;