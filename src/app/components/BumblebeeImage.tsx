'use client';
import Image from 'next/image';
import React from 'react';

const BumblebeeImage: React.FC = () => {
  return (
    <div className="bumblebee-image">
      <Image
        src="/lavender.png"
        alt="Bumblebee"
        width={120}
        height={120}
        priority
      />
    </div>
  );
};

export default BumblebeeImage;