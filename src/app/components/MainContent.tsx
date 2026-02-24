import React from 'react';
import TextBlock from './TextBlock';
import BumblebeeImage from './BumblebeeImage';
import FlowersSection from './FlowersSection';

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <TextBlock
        className="top-block"
        title="Warum Bienen wichtig sind"
        text="Warum sind Bienen wichtig?"
      />
      <BumblebeeImage />
      <FlowersSection />
    </main>
  );
};

export default MainContent;
