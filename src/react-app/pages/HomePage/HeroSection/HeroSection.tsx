import React from 'react';

export interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <>
      <h1 className='text-3xl font-bold text-foreground mb-4 text-center'>
        {title}
      </h1>
      <p className='text-muted-foreground text-center mb-6 text-balance'>
        {description}
      </p>
    </>
  );
};

export default HeroSection;
