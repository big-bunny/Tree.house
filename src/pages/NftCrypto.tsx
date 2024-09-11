import React from 'react';
import { motion } from 'framer-motion';
import { Card, NextUIProvider } from '@nextui-org/react';

interface Asset {
  id: number;
  name: string;
  balance: string;
  currency: string;
}

const NftCrypto: React.FC = () => {
  const assets: Asset[] = [
    { id: 1, name: 'Shuka', balance: '0.5', currency: 'ETH' },
    { id: 2, name: 'Kanga', balance: '1.2', currency: 'BNB' },
    { id: 3, name: 'Mourski', balance: '10', currency: 'TREE' }, // Example of Treehouse Coin
    { id: 4, name: 'Matatu Culture', balance: '2.5', currency: 'SOL' },
  ];

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
              NFT & Crypto Marketplace
            </motion.h2>
          </motion.div>

          {/* Marketplace Balances */}
          <motion.div
            style={{ marginBottom: '4rem' }}
            variants={fadeIn}
          >
            <motion.h3
              style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem' }}
            >
              Marketplace Balances
            </motion.h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {assets.map((asset) => (
                <motion.div
                  key={asset.id}
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
                    <div style={{ padding: '1rem', color: 'white' }}>
                      <h4 style={{ fontSize: '1.25rem' }}>{asset.name}</h4>
                      <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Balance: {asset.balance} {asset.currency}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Crypto Market Updates */}
          <motion.div
            variants={fadeIn}
          >
            <motion.h3
              style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem' }}
            >
              Crypto Market Updates
            </motion.h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <motion.div
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
                  <div style={{ padding: '1rem', color: 'white' }}>
                    <h4 style={{ fontSize: '1.25rem' }}>Treehouse Coin</h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Balance: 5.0 TREE
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </NextUIProvider>
  );
};

export default NftCrypto;
