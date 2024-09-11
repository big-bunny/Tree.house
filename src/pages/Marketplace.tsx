// src/pages/Marketplace.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, NextUIProvider } from '@nextui-org/react';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  cryptocurrency: string;
}

const products: Product[] = [
  { id: 1, name: 'Shuka', description: 'Traditional shuka fabric', imageUrl: 'https://via.placeholder.com/600x400', price: '0.1 ETH', cryptocurrency: 'ETH' },
  { id: 2, name: 'Kanga', description: 'Colorful kanga cloth', imageUrl: 'https://via.placeholder.com/600x400', price: '0.05 BTC', cryptocurrency: 'BTC' },
  { id: 3, name: 'Mourski', description: 'Kenyan mourski cloth', imageUrl: 'https://via.placeholder.com/600x400', price: '20 DOGE', cryptocurrency: 'DOGE' },
  { id: 4, name: 'Matatu Culture Poster', description: 'Artistic matatu culture poster', imageUrl: 'https://via.placeholder.com/600x400', price: '50 USDT', cryptocurrency: 'USDT' },
  { id: 5, name: 'Kenyan Music Album', description: 'Album of traditional Kenyan music', imageUrl: 'https://via.placeholder.com/600x400', price: '1 ETH', cryptocurrency: 'ETH' },
  { id: 6, name: 'Beaded Jewelry', description: 'Handmade beaded jewelry', imageUrl: 'https://via.placeholder.com/600x400', price: '0.2 BTC', cryptocurrency: 'BTC' },
];

const Marketplace: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
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
          {/* Header */}
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            variants={fadeIn}
          >
            <motion.h2
              style={{
                fontSize: '2.5rem',
                background: 'linear-gradient(45deg, #2563EB, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Marketplace
            </motion.h2>
          </motion.div>

          {/* Products */}
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}
            variants={fadeIn}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={scaleHover.whileHover}
                whileTap={scaleHover.whileTap}
              >
                <Card
                  isPressable
                  isHoverable
                  style={{
                    background: '#1E3A8A',
                    borderRadius: '12px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' }}
                    />
                    <div style={{ padding: '1rem' }}>
                      <h3 style={{ fontSize: '1.5rem', color: 'white' }}>{product.name}</h3>
                      <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{product.description}</p>
                      <p style={{ fontSize: '1.25rem', color: 'white' }}>{product.price} ({product.cryptocurrency})</p>
                      <Button
                        size="lg" // Adjust size if needed
                        color="primary"
                        style={{ marginTop: '1rem', width: '100%' }}
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </NextUIProvider>
  );
};

export default Marketplace;
