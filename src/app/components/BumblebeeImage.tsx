'use client';
import Image from 'next/image';
import React from 'react';

const BumblebeeImage: React.FC = () => {
  return (
    <div className="bumblebee-image">
      <Image
        src="/lavender.png"
        alt="Bumblebee"
        width={500}
        height={700}
        priority
      />
    </div>
  );
};

export default BumblebeeImage;


