import React from 'react';

export interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <>
      <h1 className='text-3xl font-bold text-gray-900 mb-4 text-center'>
        {title}
      </h1>
      <p className='text-gray-600 text-center mb-6 text-balance'>
        {description}
      </p>
    </>
  );
};

export default HeroSection;
