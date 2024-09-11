// src/pages/Home.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Card, NextUIProvider } from '@nextui-org/react';

interface Game {
  id: number;
  name: string;
  description: string;
  reward: string;
}

const gamesData: Game[] = [
  { id: 1, name: 'Crypto Crusher', description: 'Match 3 crypto symbols to earn tokens!', reward: '0.01 ETH' },
  { id: 2, name: 'Ng`anya-chain', description: 'Race against time to solve blockchain puzzles!', reward: '5 TREE' },
  { id: 3, name: 'NFT Collector', description: 'Collect rare NFTs and build your virtual gallery!', reward: '1 NFT' },
  { id: 4, name: 'DeFi Defender', description: 'Protect your assets from crypto villains!', reward: '0.1 BNB' },
  { id: 5, name: 'Metaverse Miner', description: 'Mine virtual resources in the metaverse!', reward: '50 SAND' },
  { id: 6, name: 'Token Trader', description: 'Test your trading skills in a simulated market!', reward: '100 USDT' },
];

const Home: React.FC = () => {
  const [games] = useState<Game[]>(gamesData);

  const playGame = (gameId: number) => {
    console.log(`Starting game ${gameId}`);
    // Implement navigation or game start logic here
  };

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
            <motion.h1
              style={{
                fontSize: '3rem',
                background: 'linear-gradient(45deg, #2563EB, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Play & Earn Crypto
            </motion.h1>
            <motion.p
              style={{ fontSize: '1.25rem', color: 'white', marginTop: '1rem' }}
            >
              Explore our range of exciting games and earn rewards in various cryptocurrencies!
            </motion.p>
          </motion.div>

          {/* Games List */}
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}
            variants={fadeIn}
          >
            {games.map((game) => (
              <motion.div
                key={game.id}
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
                    padding: '1rem'
                  }}
                >
                  <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '3rem' }}>🎮</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', color: 'white' }}>{game.name}</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{game.description}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                      <span style={{ fontSize: '1.25rem', color: 'white' }}>Reward: {game.reward}</span>
                      <Button
                        size="lg"
                        color="primary"
                        onClick={() => playGame(game.id)}
                        style={{ marginLeft: 'auto' }}
                      >
                        Play Now
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

export default Home;
