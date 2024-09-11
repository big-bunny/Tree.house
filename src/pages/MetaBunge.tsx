
import React from 'react';
import { motion } from 'framer-motion';

const MetaBunge: React.FC = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      style={{ minHeight: '100vh', background: '#1E3A8A', padding: '4rem 1rem' }}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h1
          style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '4rem',
            background: 'linear-gradient(45deg, #2563EB, #EC4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          variants={fadeIn}
        >
          MetaBunge: Virtual Assembly
        </motion.h1>

        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}
          variants={fadeIn}
        >
          <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn}
          >
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>
                Holo-Chamber Debate
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem' }}>
                Immerse yourself in live parliamentary discussions in our virtual reality chamber.
              </p>
              <button
                style={{
                  backgroundColor: '#2563EB',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1D4ED8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
              >
                Enter VR Session
              </button>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn}
          >
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>
                Quantum Whisper Pod
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem' }}>
                Tune into our encrypted audio streams for real-time policy discussions.
              </p>
              <button
                style={{
                  backgroundColor: '#2563EB',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1D4ED8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
              >
                Stream Now
              </button>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn}
          >
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>
                Nexus Forum
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem' }}>
                Engage in threaded discussions on pressing issues and proposed legislation.
              </p>
              <button
                style={{
                  backgroundColor: '#2563EB',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1D4ED8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
              >
                Join Discourse
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MetaBunge;
