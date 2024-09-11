// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@nextui-org/react';
import { HomeIcon, GlobeAltIcon, PlusCircleIcon, CubeIcon, CurrencyDollarIcon, ShoppingCartIcon, PlayIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const links = [
  { name: 'Home', to: '/', icon: HomeIcon },
  { name: 'Explore', to: '/explore', icon: GlobeAltIcon },
  { name: 'Create', to: '/create', icon: PlusCircleIcon },
  { name: 'MetaBunge', to: '/metabunge', icon: CubeIcon },
  { name: 'NFT & Crypto', to: '/nft-crypto', icon: CurrencyDollarIcon },
  { name: 'Marketplace', to: '/marketplace', icon: ShoppingCartIcon },
  { name: 'Play & Earn', to: '/play-game', icon: PlayIcon },
  { name: 'About', to: '/about', icon: InformationCircleIcon },
];

export function Sidebar() {
  return (
    <div className='w-20 flex flex-col items-center py-4 space-y-6 shadow-lg rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500'> 
     <nav className="bg-gradient-to-r from-green-700 via-green-600 to-green-500
      hover:bg-gradient-to-r hover:from-green-800 hover:via-green-700 hover:to-green-600
      transition-all duration-300 ease-in-out">
      {links.map((link) => (
        <Tooltip
          key={link.name}
          content={link.name}
          placement="right"
          color="success"
          className="group"
        >
          <Link
            to={link.to}
            className="relative group flex items-center p-2 rounded-lg transition-all duration-300 ease-in-out
              hover:bg-green-800 w-full"
          >
            <link.icon className="w-6 h-6 text-white group-hover:text-green-200" />
          </Link>
        </Tooltip>
      ))}
    </nav></div>
  
  );
}
