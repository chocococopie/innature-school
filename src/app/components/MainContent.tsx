import React from 'react';
import TextBlock from './TextBlock';
import BumblebeeImage from './BumblebeeImage';
import FlowersSection from './FlowersSection';

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <TextBlock
        className="top-block centered"
        title="Warum Bienen wichtig sind"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        torn
      />
      <BumblebeeImage />
      <FlowersSection />
    </main>
  );
};

export default MainContent;
