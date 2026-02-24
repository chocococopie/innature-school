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
        className="danger-block centered"
        title="Gefahren von Wildbienen"
        text="Another Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        torn
      />
    </div>
  );
};

export default FlowersSection;
