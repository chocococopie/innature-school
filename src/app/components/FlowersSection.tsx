import React from 'react';
import TextBlock from './TextBlock';
import Image from 'next/image';

const FlowersSection: React.FC = () => {
  return (
    <div className="flowers-section">
      {/* <div className="flower yellow">🌼</div>
      <div className="flower red">🌹</div>
      <div className="flower purple">🌸</div> */}
            <Image
              src="/flowers.png"
              alt="Flowers"
              width={120}
              height={120}
              priority
            />
      <TextBlock 
        className="danger-block"
        title="Gefahren von Wildbienen"
        text="[Placeholder text for dangers from wild bees. Lorem ipsum dolor sit amet, consectetur adipiscing elit.]"
      />
    </div>
  );
};

export default FlowersSection;
