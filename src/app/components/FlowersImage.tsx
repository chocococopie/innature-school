'use client';
import Image from 'next/image';
import React from 'react';

const BumblebeeImage: React.FC = () => {
  return (
    <div className="bumblebee-image">
      <Image
        src="/flowers.png"
        alt="Flowers"
        width={120}
        height={120}
        priority
      />
    </div>
  );
};

export default BumblebeeImage;