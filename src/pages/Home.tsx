import React from 'react';
import { NextUIProvider, Button, Input, Card } from '@nextui-org/react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const fadeInStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const scaleHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  return (
    <NextUIProvider>
      <motion.div
        style={{ minHeight: '100vh', background: '#1E3A8A', padding: '4rem 1rem' }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Hero Section */}
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            variants={fadeIn}
          >
            <motion.h1
              style={{
                fontSize: '3rem',
                background: 'linear-gradient(45deg, #2563EB, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Welcome to the Treehouse Experience
            </motion.h1>
            <motion.p
              style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem' }}
            >
              Discover an unparalleled collection of experiences curated for the discerning connoisseur.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button size="lg" color="primary">
                Explore Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            style={{ maxWidth: '600px', margin: '0 auto 4rem', position: 'relative' }}
            variants={fadeIn}
          >
            <Input
              isClearable
              fullWidth
              color="primary"
              size="lg"
              placeholder="Search for exclusive content"
              style={{ paddingLeft: '2.5rem' }} // Add left padding to make room for the icon
            />
            <div style={{ position: 'absolute', top: '50%', left: '0.75rem', transform: 'translateY(-50%)' }}>
              <SearchIcon />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            style={{ marginBottom: '4rem' }}
            variants={fadeInStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              style={{ fontSize: '2rem', color: 'white', textAlign: 'center', marginBottom: '2rem' }}
              variants={fadeIn}
            >
              Exclusive Categories
            </motion.h2>
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}
              variants={fadeIn}
            >
              {['Luxury', 'Gourmet', 'Entertainment', 'Wellness', 'Adventure', 'Art', 'Tech', 'Travel'].map((category) => (
                <motion.div
                  key={category}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card isPressable isHoverable>
                    <div style={{ padding: '1rem' }}>
                      <p style={{ fontSize: '1.25rem', textAlign: 'center' }}>{category}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Featured Content */}
          <motion.div
            style={{ marginBottom: '4rem' }}
            variants={fadeInStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              style={{ fontSize: '2rem', color: 'white', textAlign: 'center', marginBottom: '2rem' }}
              variants={fadeIn}
            >
              Featured Experiences
            </motion.h2>
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}
              variants={fadeIn}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card isPressable isHoverable>
                    <div style={{ position: 'relative' }}>
                      <img
                        src={`https://picsum.photos/seed/${i}/600/400`}
                        alt={`Experience ${i + 1}`}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                      />
                      <div style={{ padding: '1rem' }}>
                        <h4 style={{ fontSize: '1.25rem' }}>Experience Title {i + 1}</h4>
                        <p>Brief description of the experience.</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                          <span style={{ fontSize: '0.875rem', color: '#666' }}>Details</span>
                          <span style={{ fontSize: '0.875rem', color: '#666' }}>Price</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Live Events */}
          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              style={{ fontSize: '2rem', color: 'white', textAlign: 'center', marginBottom: '2rem' }}
              variants={fadeIn}
            >
              Live Events
            </motion.h2>
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}
              variants={fadeIn}
            >
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card isPressable isHoverable>
                    <div style={{ position: 'relative' }}>
                      <img
                        src={`https://picsum.photos/seed/${i + 10}/600/400`}
                        alt={`Live Event ${i + 1}`}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                      />
                      <Button
                        size="sm"
                        color="danger"
                        style={{ position: 'absolute', top: '0.5rem', left: '0.5rem' }}
                      >
                        LIVE
                      </Button>
                      <div style={{ padding: '1rem' }}>
                        <h4 style={{ fontSize: '1.25rem' }}>Live Event Title {i + 1}</h4>
                        <p>Brief description of the live event.</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                          <span style={{ fontSize: '0.875rem', color: '#666' }}>Viewers</span>
                          <span style={{ fontSize: '0.875rem', color: '#666' }}>Started</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </NextUIProvider>
  );
};

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default Home;
