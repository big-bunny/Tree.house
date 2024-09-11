import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NextUIProvider, Button } from '@nextui-org/react';

type SectionName = 'Mission' | 'Features' | 'Team' | 'Contact' | 'Impact';

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionName>('Mission');

  // Framer Motion fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Sections content
  const sections: SectionName[] = ['Mission', 'Features', 'Team', 'Contact', 'Impact'];

  const sectionContent = {
    Mission: "Treehouse is revolutionizing the way creators and viewers interact with online video content. We're building a decentralized platform that empowers creators, protects free speech, and rewards both content producers and engaged viewers through blockchain technology.",
    Features: [
      "Decentralized content storage ensuring censorship resistance",
      "Fair monetization through cryptocurrency rewards",
      "Community governance allowing users to shape the platform's future",
      "Enhanced privacy and data ownership for all users",
      "Innovative recommendation system free from corporate influence"
    ],
    Team: "Treehouse was founded by a diverse group of technologists, creators, and blockchain enthusiasts. Our team brings together expertise from various fields including distributed systems, content creation, and user experience design. We're always looking for passionate individuals to join our mission.",
    Contact: "Have questions or suggestions? We'd love to hear from you! Reach out to us at contact@treehouse.io",
    Impact: "At Treehouse, we believe in the transformative power of decentralization and blockchain technology. By leveraging the metaverse and cryptocurrencies, we're paving the way for a new era of digital interaction. Our platform ensures content resilience to censorship and fair monetization, empowering users and creators to thrive in a decentralized ecosystem."
  };

  // Content rendering logic
  const renderSectionContent = (section: SectionName) => {
    if (section === 'Features') {
      return (
        <ul className="list-disc text-blue-200 space-y-2 ml-6">
          {sectionContent[section].map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-blue-200 leading-relaxed">{sectionContent[section]}</p>;
  };

  return (
    <NextUIProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex flex-col justify-center items-center text-white">
        <main className="w-full max-w-4xl px-6 py-12 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          {/* Title with animation */}
          <motion.h1
            className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            About <span className="text-indigo-400">Treehouse</span>
          </motion.h1>

          {/* Navigation Buttons */}
          <motion.div
            className="flex justify-center gap-4 mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {sections.map((section) => (
              <Button
                key={section}
                size="lg"
                className={`
                  ${activeSection === section ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-700 hover:bg-pink-600'}
                  transition-colors duration-300 ease-in-out
                  px-6 py-3 rounded-full font-semibold text-white
                `}
                onPress={() => setActiveSection(section)}
              >
                {section}
              </Button>
            ))}
          </motion.div>

          {/* Section Content */}
          <motion.section
            className="bg-opacity-70 bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 p-8 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-300">{activeSection}</h2>
            {renderSectionContent(activeSection)}
          </motion.section>
        </main>
      </div>
    </NextUIProvider>
  );
};

export default About;
