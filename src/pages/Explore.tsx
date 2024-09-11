import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';

const categories = [
  'Videos', 'Music', 'Games', 'Metaverse', 'Live', 
  'Podcasts', 'Bunge', 'NFTs', 'Treehouse'
];

const ExploreContent = ({ category }: { category: string }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', padding: '1rem' }}>
      {Array.from({ length: 12 }).map((_, index) => (
        <Card 
          key={index} 
          isPressable 
          isHoverable
          style={{ 
            background: '#1E3A8A', 
            borderRadius: '12px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={{ padding: '1rem', color: 'white' }}>
            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', background: 'linear-gradient(45deg, #2563EB, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {category} Item {index + 1}
            </h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Description for {category} item {index + 1}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

const Explore: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <NextUIProvider>
      <div style={{ minHeight: '100vh', background: '#1E3A8A', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <h1 style={{ 
            fontSize: '3rem', 
            textAlign: 'center', 
            marginBottom: '2rem',
            background: 'linear-gradient(45deg, #2563EB, #EC4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent' 
          }}>
            Explore Our Content
          </h1>
          
          {/* Category Navigation */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: '1rem', 
            marginBottom: '2rem' 
          }}>
            {categories.map((category) => (
              <Button 
                key={category} 
                size="lg"
                style={{
                  backgroundColor: activeCategory === category ? '#2563EB' : '#1E40AF',
                  transition: 'background-color 0.3s ease',
                  width: 'auto',
                  padding: '0.75rem 1.5rem',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#EC4899')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = activeCategory === category ? '#2563EB' : '#1E40AF')}
                onPress={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Content Area */}
          <ExploreContent category={activeCategory} />
        </div>
      </div>
    </NextUIProvider>
  );
};

export default Explore;
